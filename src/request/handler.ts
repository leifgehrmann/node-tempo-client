import * as request from 'request-promise';
import * as url from 'url';

interface IHandlerOptions {
  port?: string;
  request?: request.RequestPromiseAPI;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
  strictSSL?: boolean;
}

interface IUriOptions {
  pathname: string;
  query?: Partial<{ [key: string]: string }>;
  intermediatePath?: string;
}

export default class Handler {
  public readonly protocol: string;
  public readonly port?: string;
  public readonly host: string;
  public readonly apiVersion: string;
  public readonly bearerToken?: string;
  public readonly intermediatePath?: string;
  public readonly strictSSL: boolean;
  public readonly request: request.RequestPromiseAPI;
  public readonly baseOptions: request.RequestPromiseOptions;

  public constructor(options: IHandlerOptions) {
    this.protocol = options.protocol || 'https';
    this.intermediatePath = options.intermediatePath;
    this.strictSSL =
      options.hasOwnProperty('strictSSL') &&
      typeof options.strictSSL === 'boolean'
        ? options.strictSSL
        : true;
    this.port = options.port;
    this.host = options.host;
    this.apiVersion = options.apiVersion;
    this.bearerToken = options.bearerToken;
    this.request = options.request || request; // To mock requests
    this.baseOptions = {};

    if (this.bearerToken) {
      this.baseOptions.auth = {
        bearer: this.bearerToken,
        pass: '',
        sendImmediately: true,
        user: ''
      };
    }

    if (options.timeout) {
      this.baseOptions.timeout = options.timeout;
    }
  }

  public async doRequest(requestOptions: request.OptionsWithUri) {
    const options = {
      ...this.baseOptions,
      ...requestOptions
    };

    const response = await this.request(options);

    if (response) {
      if (Array.isArray(response.errors)) {
        if (response.errors.length > 0) {
          const messages = response.errors.map(
            (error: { message: string }) => error.message
          );
          throw new Error(messages.join(', '));
        } else {
          throw new Error('Unknown error');
        }
      }
    }

    return response;
  }

  public makeRequestHeader(
    uri: string,
    options: request.RequestPromiseOptions = {}
  ): request.OptionsWithUri {
    return {
      json: true,
      method: options.method || 'GET',
      rejectUnauthorized: this.strictSSL,
      uri,
      ...options
    };
  }

  public makeUri({ pathname, query, intermediatePath }: IUriOptions) {
    const intermediateToUse = this.intermediatePath || intermediatePath;
    const tempPath = intermediateToUse || `/core/${this.apiVersion}`;
    const uri = url.format({
      hostname: this.host,
      pathname: `${tempPath}${pathname}`,
      port: this.port,
      protocol: this.protocol,
      query
    });

    return decodeURIComponent(uri);
  }
}

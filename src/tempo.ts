import * as request from 'request-promise';
import * as url from 'url';
import * as queryOptions from './queryOptions';

interface ITempoApiOptions {
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

interface IRequestHeaderOptions {
  method?: string;
}

interface IUriOptions {
  pathname: string;
  query?: Partial<{ [key: string]: string }>;
  intermediatePath?: string;
}

export default class TempoApi {
  public readonly protocol: string;
  public readonly port?: string;
  public readonly host: string;
  public readonly apiVersion: string;
  public readonly bearerToken?: string;
  public readonly intermediatePath?: string;
  public readonly strictSSL: boolean;
  public readonly request: request.RequestPromiseAPI;
  public readonly baseOptions: {
    timeout?: number;
    auth?: any;
  };

  constructor(options: ITempoApiOptions) {
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

  public async getWorklogsForUser(
    accountId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.doRequest(
      this.makeRequestHeader(
        this.makeUri({
          pathname: `/worklogs/user/${accountId}`,
          query: options
        })
      )
    );
  }

  private async doRequest(requestOptions: any) {
    const options = {
      ...this.baseOptions,
      ...requestOptions
    };

    const response = await this.request(options);

    if (response) {
      if (
        Array.isArray(response.errorMessages) &&
        response.errorMessages.length > 0
      ) {
        throw new Error(response.errorMessages.join(', '));
      }
    }

    return response;
  }

  private makeRequestHeader(uri: string, options: IRequestHeaderOptions = {}) {
    return {
      json: true,
      method: options.method || 'GET',
      rejectUnauthorized: this.strictSSL,
      uri,
      ...options
    };
  }

  private makeUri({ pathname, query, intermediatePath }: IUriOptions) {
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

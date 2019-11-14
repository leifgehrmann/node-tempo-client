import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as url from 'url';

interface IHandlerOptions {
  port?: string;
  request?: AxiosInstance;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
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
  public readonly request: AxiosInstance;
  public readonly baseOptions: AxiosRequestConfig;

  public constructor(options: IHandlerOptions) {
    this.protocol = options.protocol || 'https';
    this.intermediatePath = options.intermediatePath;
    this.port = options.port;
    this.host = options.host;
    this.apiVersion = options.apiVersion;
    this.bearerToken = options.bearerToken;
    this.request = options.request || axios; // To mock requests
    this.baseOptions = {};

    if (this.bearerToken) {
      this.baseOptions.headers = {
        Authorization: `Bearer ${this.bearerToken}`
      };
    }

    if (options.timeout) {
      this.baseOptions.timeout = options.timeout;
    }
  }

  public async doRequest(requestOptions: AxiosRequestConfig) {
    const options = {
      ...this.baseOptions,
      ...requestOptions
    };

    const response = await this.request(options);

    if (response && response.data) {
      if (Array.isArray(response.data.errors)) {
        if (response.data.errors.length > 0) {
          const messages = response.data.errors.map(
            (error: { message: string }) => error.message
          );
          throw new Error(messages.join(', '));
        } else {
          throw new Error('Unknown error');
        }
      }
      return response.data;
    }
    return undefined;
  }

  public makeRequestHeader(
    uri: string,
    options: AxiosRequestConfig = {}
  ): AxiosRequestConfig {
    return {
      method: options.method || 'GET',
      url: uri,
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

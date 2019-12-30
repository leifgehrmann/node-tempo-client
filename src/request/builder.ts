import { stringify as queryStringify } from 'querystring';
import { IRequestBaseConfig, IRequestConfig, Method } from './iRequestConfig';

interface IRequestBuilderConfig {
  port?: string;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
}

interface IUrlOptions {
  pathname: string;
  query?: { [key: string]: string };
  intermediatePath?: string;
}

export default class Builder {
  public readonly protocol: string;
  public readonly port?: string;
  public readonly host: string;
  public readonly apiVersion: string;
  public readonly intermediatePath?: string;
  public readonly baseOptions: IRequestBaseConfig;

  public constructor(options: IRequestBuilderConfig) {
    this.protocol = options.protocol || 'https';
    this.intermediatePath = options.intermediatePath;
    this.port = options.port;
    this.host = options.host;
    this.apiVersion = options.apiVersion;
    this.baseOptions = {};

    if (options.bearerToken) {
      this.baseOptions.headers = {
        Authorization: `Bearer ${options.bearerToken}`
      };
    }

    if (options.timeout) {
      this.baseOptions.timeout = options.timeout;
    }
  }

  public buildRequestConfig(
    url: string,
    { method, body }: { method?: Method; body?: any } = {}
  ): IRequestConfig {
    return {
      body,
      method: method || 'GET',
      url,
      ...this.baseOptions
    };
  }

  public buildUrl({ pathname, query, intermediatePath }: IUrlOptions) {
    const intermediateToUse = this.intermediatePath || intermediatePath;
    const tempPath = intermediateToUse || `/core/${this.apiVersion}`;
    const url = new URL('https://example.com');
    url.host = this.host;
    url.pathname = `${tempPath}${pathname}`;
    if (this.port !== undefined) {
      url.port = this.port;
    }
    url.protocol = this.protocol;
    url.search = queryStringify(query);

    return decodeURIComponent(url.href);
  }
}

import { stringify as queryStringify } from 'querystring';
import { RequestBaseConfig, RequestConfig, Method } from './requestConfig';

interface RequestBuilderConfig {
  port?: string;
  timeout?: number;
  protocol?: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
}

interface UrlOptions {
  pathname: string;
  query?: { [key: string]: (number|string|string[]) };
  intermediatePath?: string;
}

export default class Builder {
  public readonly protocol: string;

  public readonly port?: string;

  public readonly host: string;

  public readonly apiVersion: string;

  public readonly intermediatePath?: string;

  public readonly baseOptions: RequestBaseConfig;

  public constructor(options: RequestBuilderConfig) {
    this.protocol = options.protocol || 'https';
    this.intermediatePath = options.intermediatePath;
    this.port = options.port;
    this.host = options.host;
    this.apiVersion = options.apiVersion;
    this.baseOptions = {};

    if (options.bearerToken) {
      this.baseOptions.headers = {
        Authorization: `Bearer ${options.bearerToken}`,
      };
    }

    if (options.timeout) {
      this.baseOptions.timeout = options.timeout;
    }
  }

  public buildRequestConfig(
    url: string,
    { method, body }: { method?: Method; body?: object } = {},
  ): RequestConfig {
    return {
      body,
      method: method || 'GET',
      url,
      ...this.baseOptions,
    };
  }

  public buildUrl({ pathname, query, intermediatePath }: UrlOptions): string {
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

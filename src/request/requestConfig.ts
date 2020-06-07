export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

export type Body = {[key: string]: unknown};

type Response = {[key: string]: unknown};

export interface RequestBaseConfig {
  adapter?: (config: RequestConfig) => Promise<Response>;
  timeout?: number;
  headers?: {
    Authorization: string;
  };
}

export interface RequestConfig extends RequestBaseConfig {
  url: string;
  method: Method;
  body?: Body;
}

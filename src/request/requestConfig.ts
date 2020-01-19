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

export interface RequestBaseConfig {
  adapter?: (config: RequestConfig) => Promise<object>;
  timeout?: number;
  headers?: {
    Authorization: string;
  };
}

export interface RequestConfig extends RequestBaseConfig {
  url: string;
  method: Method;
  body?: object;
}

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
  adapter?: (config: any) => Promise<any>;
  timeout?: number;
  headers?: any;
}

export interface RequestConfig extends RequestBaseConfig {
  url: string;
  method: Method;
  body?: any;
}

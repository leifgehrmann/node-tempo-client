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

export interface IRequestBaseConfig {
  adapter?: (config: any) => Promise<any>;
  timeout?: number;
  headers?: any;
}

export interface IRequestConfig extends IRequestBaseConfig {
  url: string;
  method: Method;
  body?: any;
}

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

// Generally expected to be an object, see requestTypes.ts
export type Body = unknown;

// Generally expected to be an object, see responseTypes.ts
type Response = unknown;

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

import { IRequestConfig } from './iRequestConfig';

// The HTTP Client must behave the following way:
// * Throw an exception if the response code is not between 200 and 300
// * Return an JavaScript object (i.e. not a response string)
export type IHttpClient = (arg1: IRequestConfig) => Promise<any>;

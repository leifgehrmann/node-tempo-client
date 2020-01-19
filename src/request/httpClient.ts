import { RequestConfig } from './requestConfig';

// The HTTP Client must behave the following way:
// * Throw an exception if the response code is not between 200 and 300
// * Otherwise, return a JavaScript object of the server's JSON response
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpClient = (arg1: RequestConfig) => Promise<any>;

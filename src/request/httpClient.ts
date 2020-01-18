import { RequestConfig } from './requestConfig';

// The HTTP Client must behave the following way:
// * Throw an exception if the response code is not between 200 and 300
// * Return a JavaScript object of the server's JSON response
export type HttpClient = (arg1: RequestConfig) => Promise<any>;

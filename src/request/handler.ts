import axiosHttpClient from './axiosHttpClient';
import { HttpClient } from './httpClient';
import { RequestConfig } from './requestConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Response = any;

export default class Handler {
  public readonly httpClient: HttpClient;

  public constructor(options: { httpClient?: HttpClient } = {}) {
    this.httpClient = options.httpClient || axiosHttpClient; // To mock requests
  }

  public async doRequest(requestConfig: RequestConfig): Promise<Response> {
    return this.httpClient(requestConfig);
  }
}

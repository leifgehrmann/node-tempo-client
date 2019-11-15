import axiosHttpClient from './axiosHttpClient';
import { IHttpClient } from './iHttpClient';
import { IRequestConfig } from './iRequestConfig';

export default class Handler {
  public readonly httpClient: IHttpClient;

  public constructor(options: { httpClient?: IHttpClient } = {}) {
    this.httpClient = options.httpClient || axiosHttpClient; // To mock requests
  }

  public async doRequest(requestConfig: IRequestConfig) {
    const response = await this.httpClient(requestConfig);

    if (response) {
      if (Array.isArray(response.errors)) {
        if (response.errors.length > 0) {
          const messages = response.errors.map(
            (error: { message: string }) => error.message
          );
          throw new Error(messages.join(', '));
        } else {
          throw new Error('Unknown error');
        }
      }
    }
    return response;
  }
}

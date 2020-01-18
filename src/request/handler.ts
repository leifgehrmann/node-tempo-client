import axiosHttpClient from './axiosHttpClient';
import { HttpClient } from './httpClient';
import { RequestConfig } from './requestConfig';

export default class Handler {
  public readonly httpClient: HttpClient;

  public constructor(options: { httpClient?: HttpClient } = {}) {
    this.httpClient = options.httpClient || axiosHttpClient; // To mock requests
  }

  public async doRequest(requestConfig: RequestConfig) {
    const response = await this.httpClient(requestConfig);

    if (response) {
      if (Array.isArray(response.errors)) {
        if (response.errors.length > 0) {
          const messages = response.errors.map(
            (error: { message: string }) => error.message,
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

import RequestBuilder from '../request/builder';
import RequestHandler from '../request/handler';
import { Body, Method } from '../request/requestConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Response = any;

export default abstract class Collection {
  protected requestBuilder: RequestBuilder;

  protected requestHandler: RequestHandler;

  constructor({
    requestBuilder,
    requestHandler,
  }: {
    requestBuilder: RequestBuilder;
    requestHandler: RequestHandler;
  }) {
    this.requestBuilder = requestBuilder;
    this.requestHandler = requestHandler;
  }

  protected async createAndSendRequest(
    pathname: string,
    {
      query,
      method,
      body,
    }: {
      query?: { [key: string]: number | string | string[] };
      method?: Method;
      body?: Body;
    } = {},
  ): Promise<Response> {
    return this.requestHandler.doRequest(
      this.requestBuilder.buildRequestConfig(
        this.requestBuilder.buildUrl({
          pathname,
          query,
        }),
        {
          body,
          method: method || 'GET',
        },
      ),
    );
  }
}

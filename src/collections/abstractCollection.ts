import RequestBuilder from '../request/builder';
import RequestHandler from '../request/handler';
import { Method } from '../request/requestConfig';

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
      query?: { [key: string]: string };
      method?: Method;
      body?: any;
    } = {},
  ): Promise<any> {
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

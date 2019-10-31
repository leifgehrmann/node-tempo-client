import * as request from 'request-promise';
import * as queryOptions from './queryOptions';
import RequestHandler from './request/handler';

interface ITempoApiOptions {
  requestHandler?: RequestHandler;
  port?: string;
  request?: request.RequestPromiseAPI;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
  strictSSL?: boolean;
}

export default class TempoApi {
  private readonly requestHandler: RequestHandler;

  constructor(options: ITempoApiOptions) {
    this.requestHandler = options.requestHandler || new RequestHandler(options);
  }

  public async getWorklogsForUser(
    accountId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/user/${accountId}`,
          query: options
        })
      )
    );
  }
}

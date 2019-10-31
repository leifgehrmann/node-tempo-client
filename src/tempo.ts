import * as request from 'request-promise';
import Worklogs from './collections/worklogs';
import RequestHandler from './request/handler';

export interface ITempoApiOptions {
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
  public readonly worklogs: Worklogs;
  private readonly requestHandler: RequestHandler;

  constructor(options: ITempoApiOptions) {
    this.requestHandler = options.requestHandler || new RequestHandler(options);
    this.worklogs = new Worklogs(this.requestHandler);
  }
}

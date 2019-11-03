import RequestHandler from '../request/handler';

export default abstract class Collection {
  protected requestHandler: RequestHandler;

  constructor(requestHandler: RequestHandler) {
    this.requestHandler = requestHandler;
  }
}

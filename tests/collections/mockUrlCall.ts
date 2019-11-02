import RequestHandler from '../../src/request/handler';
import { getMockRequestHandlerOptions } from './mockHelpers';

export default class MockUrlCall {
  private collectionType: new (requestHandler: RequestHandler) => any;

  constructor(collectionType: new (requestHandler: RequestHandler) => any) {
    this.collectionType = collectionType;
  }

  async call(tempoApiMethodName: string, functionArguments: any) {
    let dummyRequest = async (requestOptions: any) => requestOptions;
    const requestHandler = new RequestHandler(
      getMockRequestHandlerOptions({
        request: dummyRequest
      })
    );

    const collection = new this.collectionType(requestHandler);

    // @ts-ignore
    const resultObject = await collection[tempoApiMethodName].apply(
      collection,
      functionArguments
    );

    // hack exposing the qs object as the query string in the URL so this is
    // uniformly testable
    if (resultObject.qs) {
      const queryString = Object.keys(resultObject.qs)
        .map(x => `${x}=${resultObject.qs[x]}`)
        .join('&');
      return `${resultObject.uri}?${queryString}`;
    }

    return resultObject;
  }
}

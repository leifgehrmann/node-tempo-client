import RequestHandler from '../../src/request/handler';
import { getMockRequestHandlerOptions } from './mockHelpers';

export default class MockUrlCall {
  private collectionType: new (requestHandler: RequestHandler) => any;

  constructor(collectionType: new (requestHandler: RequestHandler) => any) {
    this.collectionType = collectionType;
  }

  async call(tempoApiMethodName: string, functionArguments: any) {
    let externalRequestOptions: any = null;
    let dummyRequest = async (requestOptions: any) => {
      externalRequestOptions = requestOptions;
      return { data: requestOptions };
    };
    const requestHandler = new RequestHandler(
      getMockRequestHandlerOptions({
        request: dummyRequest
      })
    );

    const collection = new this.collectionType(requestHandler);

    // For GET/POST/PUT requests, this will return the "dummyRequest" request
    // options, which is overridden at the top of this file.
    // @ts-ignore
    let resultObject = await collection[tempoApiMethodName].apply(
      collection,
      functionArguments
    );

    // For DELETE requests, the Tempo API does not return any response from the
    // server. Therefore, we don't use the return value of the collection
    // method, but instead the "externalRequestOptions" value instead.
    if (
      resultObject === undefined &&
      externalRequestOptions !== null &&
      externalRequestOptions.method === 'DELETE'
    ) {
      resultObject = externalRequestOptions;
    }

    // Hack exposing the qs object as the query string in the URL so this is
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

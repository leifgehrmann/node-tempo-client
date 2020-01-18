import RequestBuilder from '../../src/request/builder';
import RequestHandler from '../../src/request/handler';
import getMockRequestBuilderOptions from './mockHelpers';

type CollectionTypeConstructor = new ({
  requestBuilder,
  requestHandler,
}: {
  requestBuilder: RequestBuilder;
  requestHandler: RequestHandler;
}) => any;

export default class MockUrlCall {
  private readonly CollectionType: CollectionTypeConstructor;

  constructor(CollectionType: CollectionTypeConstructor) {
    this.CollectionType = CollectionType;
  }

  async call(tempoApiMethodName: string, functionArguments: any) {
    let externalRequestOptions: any = null;
    const dummyRequest = async (requestOptions: any) => {
      externalRequestOptions = requestOptions;
      return requestOptions;
    };
    const requestBuilder = new RequestBuilder(getMockRequestBuilderOptions());
    const requestHandler = new RequestHandler({ httpClient: dummyRequest });

    const collection = new this.CollectionType({
      requestBuilder,
      requestHandler,
    });

    // For GET/POST/PUT requests, this will return the "dummyRequest" request
    // options, which is overridden at the top of this file.
    let resultObject = await collection[tempoApiMethodName](
      ...functionArguments,
    );

    // For DELETE requests, the Tempo API does not return any response from the
    // server. Therefore, we don't use the return value of the collection
    // method, but instead the "externalRequestOptions" value instead.
    if (
      resultObject === undefined
      && externalRequestOptions !== null
      && externalRequestOptions.method === 'DELETE'
    ) {
      resultObject = externalRequestOptions;
    }

    return resultObject;
  }
}

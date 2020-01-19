import RequestHandler from '../../src/request/handler';
import { RequestConfig } from '../../src/request/requestConfig';

describe('requestHandler', () => {
  describe('Constructor Tests', () => {
    it('Constructor sets default httpClient', () => {
      const handler = new RequestHandler();
      expect(handler.httpClient).toBeTruthy();
    });

    it('Constructor sets httpClient from parameters', async () => {
      const fakeHttpResponse = 'my fake HTTP Response';
      const fakeHttpClient = async (): Promise<string> => fakeHttpResponse;

      const handler = new RequestHandler({ httpClient: fakeHttpClient });

      expect(handler.httpClient).toBeTruthy();
      const result = await handler.httpClient({
        url: 'https://example.com',
        method: 'GET',
      });
      expect(result).toEqual(fakeHttpResponse);
    });
  });

  describe('doRequest', () => {
    it('Passes requestConfig into httpClient', async () => {
      const fakeHttpClient = async (
        requestConfig: RequestConfig,
      ): Promise<RequestConfig> => requestConfig;

      const handler = new RequestHandler({ httpClient: fakeHttpClient });

      const requestConfig: RequestConfig = {
        url: 'https://example.com',
        method: 'POST',
        body: {
          hello: 'world',
        },
        timeout: 1234,
        headers: {
          Authorization: 'Bearer myBearerToken',
        },
      };
      const result = await handler.doRequest(requestConfig);

      expect(result).toEqual(requestConfig);
    });

    it('Returns falsey response if falsey', async () => {
      const fakeHttpClient = async (): Promise<undefined> => undefined;
      const handler = new RequestHandler({ httpClient: fakeHttpClient });

      const mockResponse = await handler.doRequest({
        url: 'https://example.com',
        method: 'GET',
      });
      expect(mockResponse).toEqual(undefined);
    });

    it('Throws error if response throws error', async () => {
      expect.assertions(1);
      const fakeHttpClient = async (): Promise<never> => {
        throw new Error('Request failed with status code 404');
      };
      const handler = new RequestHandler({ httpClient: fakeHttpClient });

      try {
        await handler.doRequest({ url: 'https://example.com', method: 'GET' });
      } catch (e) {
        expect(e.message).toMatch('Request failed with status code 404');
      }
    });
  });
});

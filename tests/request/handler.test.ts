import requestHandler from '../../src/request/handler';
import { IRequestConfig } from '../../src/request/iRequestConfig';

describe('requestHandler', () => {
  describe('Constructor Tests', () => {
    it('Constructor sets default httpClient', () => {
      const handler = new requestHandler();
      expect(handler.httpClient).toBeTruthy();
    });

    it('Constructor sets httpClient from parameters', async () => {
      const fakeHttpResponse = 'my fake HTTP Response';
      const fakeHttpClient = async () => fakeHttpResponse;

      const handler = new requestHandler({ httpClient: fakeHttpClient });

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
      const fakeHttpClient = async (requestConfig: IRequestConfig) => requestConfig;

      const handler = new requestHandler({ httpClient: fakeHttpClient });

      const requestConfig: IRequestConfig = {
        url: 'https://example.com',
        method: 'POST',
        body: {
          hello: 'world',
        },
        timeout: 1234,
        headers: {
          Authoization: 'Bearer myBearerToken',
        },
      };
      const result = await handler.doRequest(requestConfig);

      expect(result).toEqual(requestConfig);
    });

    it('Returns falsey response if falsey', async () => {
      const fakeHttpClient = async () => undefined;
      const handler = new requestHandler({ httpClient: fakeHttpClient });

      const mockResponse = await handler.doRequest({
        url: 'https://example.com',
        method: 'GET',
      });
      expect(mockResponse).toEqual(undefined);
    });

    it('Throws error if response throws error', async () => {
      expect.assertions(1);
      const fakeHttpClient = async () => {
        throw new Error('Request error');
      };
      const handler = new requestHandler({ httpClient: fakeHttpClient });

      try {
        await handler.doRequest({ url: 'https://example.com', method: 'GET' });
      } catch (e) {
        expect(e.message).toMatch('Request error');
      }
    });

    it('Throws unknown error if error messages length is 0', async () => {
      expect.assertions(1);
      const fakeHttpClient = async () => ({ errors: [] });
      const handler = new requestHandler({ httpClient: fakeHttpClient });

      try {
        await handler.doRequest({ url: 'https://example.com', method: 'GET' });
      } catch (e) {
        expect(e.message).toMatch('Unknown error');
      }
    });

    it('Throws error if error messages length is at least 1', async () => {
      expect.assertions(1);
      const fakeHttpClient = async () => ({
        errors: [{ message: 'Something went wrong!' }],
      });
      const handler = new requestHandler({ httpClient: fakeHttpClient });

      try {
        await handler.doRequest({ url: 'https://example.com', method: 'GET' });
      } catch (e) {
        expect(e.message).toMatch('Something went wrong!');
      }
    });
  });
});

import requestHandler from '../../src/request/handler';

function getOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.hasOwnProperty('bearerToken')
      ? actualOptions.bearerToken
      : 'someToken',
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port || '8080',
    protocol: actualOptions.protocol,
    request: actualOptions.request,
    strictSSL: actualOptions.hasOwnProperty('strictSSL')
      ? actualOptions.strictSSL
      : undefined,
    timeout: actualOptions.timeout || null
  };
}

describe('TempoAi', () => {
  describe('Constructor Tests', () => {
    it('Constructor functions properly', () => {
      const handler = new requestHandler(
        getOptions({
          timeout: 3000
        })
      );

      expect(handler.host).toEqual('tempo.somehost.com');
      expect(handler.port).toEqual('8080');
      expect(handler.baseOptions.auth!.user).toEqual('');
      expect(handler.baseOptions.auth!.pass).toEqual('');
      expect(handler.baseOptions.auth!.bearer).toEqual('someToken');
      expect(handler.baseOptions.auth!.sendImmediately).toEqual(true);
      expect(handler.baseOptions.timeout).toEqual(3000);
      expect(handler.apiVersion).toEqual('3');

      // Defaults are set to expected values
      expect(handler.protocol).toEqual('https');
      expect(handler.strictSSL).toEqual(true);

      // strictSSL can be turned off
      const handlerWithNoStrictSSL = new requestHandler(
        getOptions({ strictSSL: false })
      );
      expect(handlerWithNoStrictSSL.strictSSL).toEqual(false);

      // Not having a bearerToken means no base auth headers are set
      const handlerWithNoBearerToken = new requestHandler(
        getOptions({ bearerToken: undefined })
      );
      expect(handlerWithNoBearerToken.baseOptions).toEqual({});
      expect(handlerWithNoBearerToken.baseOptions.auth).toEqual(undefined);
    });
  });

  describe('doRequest', () => {
    it('Merges some constructor options with requestHeader options', async () => {
      const handler = new requestHandler(
        getOptions({
          timeout: 4000,
          bearerToken: 'myFakeToken',
          request: async (requestOptions: any) => {
            return requestOptions;
          }
        })
      );

      const mockResponse = await handler.doRequest({
        uri: 'https://example.com'
      });
      expect(mockResponse.uri).toEqual('https://example.com');
      expect(mockResponse.auth!.user).toEqual('');
      expect(mockResponse.auth!.pass).toEqual('');
      expect(mockResponse.auth!.bearer).toEqual('myFakeToken');
      expect(mockResponse.timeout).toEqual(4000);
    });

    it('Returns falsey response if falsey', async () => {
      const handler = new requestHandler(
        getOptions({
          request: async () => undefined
        })
      );

      const mockResponse = await handler.doRequest({
        uri: 'https://example.com'
      });
      expect(mockResponse).toEqual(undefined);
    });

    it('Throws error if response throws error', async () => {
      expect.assertions(1);
      const handler = new requestHandler(
        getOptions({
          request: async () => {
            throw new Error('Request error')
          }
        })
      );

      try {
        await handler.doRequest({ uri: 'https://example.com' });
      } catch (e) {
        expect(e.message).toMatch('Request error');
      }
    });

    it('Throws unknown error if error messages length is 0', async () => {
      expect.assertions(1);
      const handler = new requestHandler(
        getOptions({
          request: async () => {
            return {
              errors: []
            };
          }
        })
      );

      try {
        await handler.doRequest({ uri: 'https://example.com' });
      } catch (e) {
        expect(e.message).toMatch('Unknown error');
      }
    });

    it('Throws error if error messages length is at least 1', async () => {
      expect.assertions(1);
      const handler = new requestHandler(
        getOptions({
          request: async () => {
            return {
              errors: [{ message: 'Something went wrong!' }]
            };
          }
        })
      );

      try {
        await handler.doRequest({ uri: 'https://example.com' });
      } catch (e) {
        expect(e.message).toMatch('Something went wrong!');
      }
    });
  });

  describe('makeRequestHeader', () => {
    it('Sets correct default values', () => {
      const handler = new requestHandler(getOptions());

      const requestHeader = handler.makeRequestHeader('https://example.com');
      expect(requestHeader.json).toEqual(true);
      expect(requestHeader.method).toEqual('GET');
      expect(requestHeader.rejectUnauthorized).toEqual(true);
      expect(requestHeader.uri).toEqual('https://example.com');
    });

    it('Sets rejectUnauthorized correctly based on constructor options', () => {
      const handler = new requestHandler(getOptions({ strictSSL: false }));
      const requestHeader = handler.makeRequestHeader('https://example.com');
      expect(requestHeader.rejectUnauthorized).toEqual(false);
    });

    it('Sets method based on options', () => {
      const handler = new requestHandler(getOptions());
      const requestHeader = handler.makeRequestHeader('https://example.com', {
        method: 'DELETE'
      });
      expect(requestHeader.method).toEqual('DELETE');
    });

    it('Sets other request options', () => {
      const handler = new requestHandler(getOptions());
      const requestHeader = handler.makeRequestHeader('https://example.com', {
        encoding: 'customEncodingValue'
      });
      expect(requestHeader.encoding).toEqual('customEncodingValue');
    });
  });

  describe('makeUri', () => {
    it('Sets correct default values', () => {
      const handler = new requestHandler(getOptions());
      const uri = handler.makeUri({
        pathname: '/collection/selector',
        query: { queryKey: 'queryValue' }
      });
      expect(uri).toEqual(
        'https://tempo.somehost.com:8080/core/3/collection/selector?queryKey=queryValue'
      );
    });

    it('Sets intermediate path', () => {
      const handler = new requestHandler(getOptions());
      const uri = handler.makeUri({
        pathname: '/a/b',
        intermediatePath: '/myCustomPath'
      });
      expect(uri).toEqual('https://tempo.somehost.com:8080/myCustomPath/a/b');
    });

    it('URI encodes parameters', () => {
      const handler = new requestHandler(getOptions());
      const uri = handler.makeUri({
        pathname: '/a/b',
        query: { x: 'hello world' } // We do not want spaces to be encoded as %20
      });
      expect(uri).toEqual(
        'https://tempo.somehost.com:8080/core/3/a/b?x=hello world'
      );
    });
  });
});

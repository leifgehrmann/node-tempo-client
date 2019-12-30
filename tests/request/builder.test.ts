import RequestBuilder from '../../src/request/builder';

function getOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.hasOwnProperty('bearerToken')
      ? actualOptions.bearerToken
      : 'someToken',
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port,
    protocol: actualOptions.protocol,
    request: actualOptions.request,
    timeout: actualOptions.timeout || null
  };
}

describe('RequestBuilder', () => {
  describe('Constructor Tests', () => {
    it('Constructor functions properly', () => {
      const builder = new RequestBuilder(
        getOptions({
          timeout: 3000
        })
      );

      expect(builder.host).toEqual('tempo.somehost.com');
      expect(builder.baseOptions.headers).toEqual({
        Authorization: `Bearer someToken`
      });
      expect(builder.baseOptions.timeout).toEqual(3000);
      expect(builder.apiVersion).toEqual('3');

      // Defaults are set to expected values
      expect(builder.protocol).toEqual('https');

      // Not having a port means port will be left undefined
      expect(builder.port).toEqual(undefined);

      // Not having a bearerToken means no base auth headers are set
      const handlerWithNoBearerToken = new RequestBuilder(
        getOptions({ bearerToken: undefined, timeout: undefined })
      );
      expect(handlerWithNoBearerToken.baseOptions).toEqual({});
      expect(handlerWithNoBearerToken.baseOptions.headers).toEqual(undefined);
      expect(handlerWithNoBearerToken.baseOptions.timeout).toEqual(undefined);
    });

    it('Port and protocol can be modified', () => {
      const builder = new RequestBuilder(
        getOptions({
          protocol: 'http',
          port: '80'
        })
      );

      expect(builder.protocol).toEqual('http');
      expect(builder.port).toEqual('80');
    });

    it('Port is nullable', () => {
      const builder = new RequestBuilder(
        getOptions({
          port: null
        })
      );

      expect(builder.port).toEqual(null);
    });
  });

  describe('buildRequestConfig', () => {
    it('Sets correct default values', () => {
      const handler = new RequestBuilder(getOptions());

      const requestHeader = handler.buildRequestConfig('https://example.com');
      expect(requestHeader.method).toEqual('GET');
      expect(requestHeader.url).toEqual('https://example.com');
    });

    it('Sets method based on options', () => {
      const builder = new RequestBuilder(getOptions());
      const requestHeader = builder.buildRequestConfig('https://example.com', {
        method: 'DELETE'
      });
      expect(requestHeader.method).toEqual('DELETE');
    });
  });

  describe('buildUrl', () => {
    it('Sets correct default values', () => {
      const builder = new RequestBuilder(getOptions());
      const uri = builder.buildUrl({
        pathname: '/collection/selector',
        query: { queryKey: 'queryValue' }
      });
      expect(uri).toEqual(
        'https://tempo.somehost.com/core/3/collection/selector?queryKey=queryValue'
      );
    });

    it('Sets port correctly', () => {
      const builder = new RequestBuilder(getOptions({ port: '8080' }));
      const uri = builder.buildUrl({
        pathname: '/a/b'
      });
      expect(uri).toEqual('https://tempo.somehost.com:8080/core/3/a/b');
    });

    it('Sets port correctly if null', () => {
      const builder = new RequestBuilder(getOptions({ port: null }));
      const uri = builder.buildUrl({
        pathname: '/a/b'
      });
      expect(uri).toEqual('https://tempo.somehost.com/core/3/a/b');
    });

    it('Sets intermediate path', () => {
      const builder = new RequestBuilder(getOptions());
      const uri = builder.buildUrl({
        pathname: '/a/b',
        intermediatePath: '/myCustomPath'
      });
      expect(uri).toEqual('https://tempo.somehost.com/myCustomPath/a/b');
    });

    it('URI encodes parameters', () => {
      const builder = new RequestBuilder(getOptions());
      const uri = builder.buildUrl({
        pathname: '/a/b',
        query: { x: 'hello world' } // We do not want spaces to be encoded as %20
      });
      expect(uri).toEqual(
        'https://tempo.somehost.com/core/3/a/b?x=hello world'
      );
    });
  });
});

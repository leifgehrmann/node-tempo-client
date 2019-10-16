import TempoApi from '../src/tempo';

function getOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.bearer || 'sometoken',
    ca: actualOptions.ca || null,
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port || '8080',
    protocol: actualOptions.protocol || 'http',
    request: actualOptions.request,
    strictSSL: actualOptions.hasOwnProperty('strictSSL')
      ? actualOptions.strictSSL
      : true,
    timeout: actualOptions.timeout || null
  };
}

describe('TempoAi', () => {
  describe('Constructor Tests', () => {
    it('Constructor functions properly', () => {
      const tempo = new TempoApi(
        getOptions({
          timeout: 3000
        })
      );

      expect(tempo.protocol).toEqual('http');
      expect(tempo.host).toEqual('tempo.somehost.com');
      expect(tempo.port).toEqual('8080');
      expect(tempo.baseOptions.auth.user).toEqual('');
      expect(tempo.baseOptions.auth.pass).toEqual('');
      expect(tempo.baseOptions.auth.bearer).toEqual('sometoken');
      expect(tempo.baseOptions.timeout).toEqual(3000);
      expect(tempo.apiVersion).toEqual('3');
    });
  });

  describe('Request Functions Tests', () => {
    async function dummyURLCall(
      tempoApiMethodName: string,
      functionArguments: any,
      dummyRequestMethod?: any,
      returnedValue = 'uri'
    ) {
      let dummyRequest = dummyRequestMethod;
      if (!dummyRequest) {
        dummyRequest = async (requestOptions: any) => requestOptions;
      }

      const tempo = new TempoApi(
        getOptions({
          request: dummyRequest
        })
      );

      // @ts-ignore
      const resultObject = await tempo[tempoApiMethodName].apply(
        tempo,
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

      return resultObject[returnedValue];
    }

    it('getWorklogsForUser hits proper url', async () => {
      const result = await dummyURLCall('getWorklogsForUser', [
        'someAccountId'
      ]);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/user/someAccountId'
      );
    });
  });

  describe('Requests Error Tests', () => {
    it('Mocked error messages throws errors', async () => {
      expect.assertions(1);
      const mockRequest = async (requestOptions: any) => {
        return {
          requestOptions,
          errorMessages: ['Something is clearly wrong!']
        };
      };

      const tempo = new TempoApi(
        getOptions({
          request: mockRequest
        })
      );

      try {
        await tempo.getWorklogsForUser('someAccountId');
      } catch (e) {
        expect(e.message).toMatch('Something is clearly wrong!');
      }
    });
  });
});

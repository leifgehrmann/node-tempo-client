import TempoApi from '../src/tempo';

function getMockOptions(options?: any) {
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

describe('TempoApi', () => {
  describe('Collections can be accessed', () => {
    it('Expect mocked data to be returned', async () => {
      const dummtApiResponse = { someSample: '...data to expect!' };

      const dummyRequest = async () => dummtApiResponse;
      const tempo = new TempoApi(
        getMockOptions({
          request: dummyRequest
        })
      );

      let result = await tempo.worklogs.get();
      expect(result).toBe(dummtApiResponse);
      result = await tempo.workAttributes.get();
      expect(result).toBe(dummtApiResponse);
    });
  });
});

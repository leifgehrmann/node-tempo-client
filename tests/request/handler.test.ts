import requestHandler from '../../src/request/handler';

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
      const tempo = new requestHandler(
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
});

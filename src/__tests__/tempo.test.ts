import TempoApi from '../tempo';





function getOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3.0',
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

describe('Jira API Tests', () => {
  describe('Constructor Tests', () => {
    it('Constructor functions properly', () => {
      const jira = new TempoApi(getOptions());

      expect(jira.protocol).toEqual('http');
      expect(jira.host).toEqual('tempo.somehost.com');
      expect(jira.port).toEqual('8080');
      expect(jira.baseOptions.auth.user).toEqual('');
      expect(jira.baseOptions.auth.pass).toEqual('');
      expect(jira.baseOptions.auth.bearer).toEqual('sometoken');
      expect(jira.apiVersion).toEqual('3.0');
    });
  });
});

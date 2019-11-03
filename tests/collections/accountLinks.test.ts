import AccountLinks from '../../src/collections/accountLinks';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(AccountLinks);

describe('AccountLinks', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-links'
      );
      expect(result.method).toEqual('POST');
    });

    it('getAccountLink hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountLink', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-links/someId'
      );
    });

    it('deleteAccountLink hits proper url', async () => {
      const result = await mockUrlCall.call('deleteAccountLink', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-links/someId'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getForProject hits proper url', async () => {
      const result = await mockUrlCall.call('getForProject', ['someProjectKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-links/project/someProjectKey'
      );
    });
  });
});

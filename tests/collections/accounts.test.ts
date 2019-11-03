import Accounts from '../../src/collections/accounts';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Accounts);

describe('Accounts', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts'
      );
      expect(result.method).toEqual('POST');
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts'
      );
    });

    it('getAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getAccount', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey'
      );
    });

    it('putAccount hits proper url', async () => {
      const result = await mockUrlCall.call('putAccount', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey'
      );
      expect(result.method).toEqual('PUT');
    });

    it('deleteAccount hits proper url', async () => {
      const result = await mockUrlCall.call('deleteAccount', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getAccountLinksForAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountLinksForAccount', [
        'someKey'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey/links'
      );
    });
  });
});

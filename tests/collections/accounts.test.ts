import Accounts from '../../src/collections/accounts';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Accounts);

describe('Accounts', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('get with a status hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          status: 'OPEN',
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts?status=OPEN',
      );
    });

    it('get with a list of ids hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          id: [1, 2, 3],
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts?id=1&id=2&id=3',
      );
    });

    it('getAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getAccount', ['someKey']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey',
      );
    });

    it('putAccount hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putAccount', ['someKey', body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteAccount hits proper url', async () => {
      const result = await mockUrlCall.call('deleteAccount', ['someKey']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getAccountLinksForAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountLinksForAccount', [
        'someKey',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/accounts/someKey/links',
      );
    });
  });
});

import AccountCategories from '../../src/collections/accountCategories';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(AccountCategories);

describe('AccountCategories', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          id: 123,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories?id=123',
      );
    });

    it('getAccountCategory hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountCategory', ['someKey']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey',
      );
    });

    it('putAccountCategory hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putAccountCategory', [
        'someKey',
        body,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteAccountCategory hits proper url', async () => {
      const result = await mockUrlCall.call('deleteAccountCategory', [
        'someKey',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey',
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

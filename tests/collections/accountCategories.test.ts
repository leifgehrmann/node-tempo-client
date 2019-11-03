import AccountCategories from '../../src/collections/accountCategories';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(AccountCategories);

describe('AccountCategories', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories'
      );
      expect(result.method).toEqual('POST');
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories'
      );
    });

    it('getAccountCategory hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountCategory', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey'
      );
    });

    it('putAccountCategory hits proper url', async () => {
      const result = await mockUrlCall.call('putAccountCategory', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey'
      );
      expect(result.method).toEqual('PUT');
    });

    it('deleteAccountCategory hits proper url', async () => {
      const result = await mockUrlCall.call('deleteAccountCategory', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-categories/someKey'
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

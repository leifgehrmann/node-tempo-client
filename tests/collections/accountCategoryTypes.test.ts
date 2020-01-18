import AccountCategoryTypes from '../../src/collections/accountCategoryTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(AccountCategoryTypes);

describe('AccountCategoryTypes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/account-category-types',
      );
    });
  });
});

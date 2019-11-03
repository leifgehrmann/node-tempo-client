import Customers from '../../src/collections/customers';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Customers);

describe('Customers', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers'
      );
      expect(result.method).toEqual('POST');
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers'
      );
    });

    it('getCustomer hits proper url', async () => {
      const result = await mockUrlCall.call('getCustomer', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers/someKey'
      );
    });

    it('putCustomer hits proper url', async () => {
      const result = await mockUrlCall.call('putCustomer', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers/someKey'
      );
      expect(result.method).toEqual('PUT');
    });

    it('deleteCustomer hits proper url', async () => {
      const result = await mockUrlCall.call('deleteCustomer', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers/someKey'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getAccountsForCustomer hits proper url', async () => {
      const result = await mockUrlCall.call('getAccountsForCustomer', [
        'someKey'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/customers/someKey/accounts'
      );
    });
  });
});

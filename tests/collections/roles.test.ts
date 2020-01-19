import Roles from '../../src/collections/roles';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Roles);

describe('Roles', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/roles');
    });

    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/roles');
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getRole hits proper url', async () => {
      const result = await mockUrlCall.call('getRole', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/roles/someId',
      );
    });

    it('putRole hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putRole', ['someId', body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/roles/someId',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteRole hits proper url', async () => {
      const result = await mockUrlCall.call('deleteRole', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/roles/someId',
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

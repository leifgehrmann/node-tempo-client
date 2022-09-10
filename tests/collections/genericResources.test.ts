import GenericResources from '../../src/collections/genericResources';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(GenericResources);

describe('GenericResources', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {
        name: 'Frontend dev',
      };
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/generic-resources',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getGenericResource hits proper url', async () => {
      const result = await mockUrlCall.call('getGenericResource', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/generic-resources/someId',
      );
    });

    it('putGenericResource hits proper url', async () => {
      const body = {
        name: 'Frontend dev',
      };
      const result = await mockUrlCall.call('putGenericResource', ['someId', body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/generic-resources/someId',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteGenericResource hits proper url', async () => {
      const result = await mockUrlCall.call('deleteGenericResource', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/generic-resources/someId',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('postSearch hits proper url', async () => {
      const body = {
        offset: 0,
        limit: 50,
        ids: [3, 4, 5, 6],
        programId: 'dev',
      };
      const result = await mockUrlCall.call('postSearch', [body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/generic-resources/search',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });
  });
});

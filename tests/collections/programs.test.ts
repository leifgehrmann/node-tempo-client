import Programs from '../../src/collections/programs';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Programs);

describe('Programs', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs'
      );
    });

    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs'
      );
      expect(result.data).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getProgram hits proper url', async () => {
      const result = await mockUrlCall.call('getProgram', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs/someId'
      );
    });

    it('putProgram hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putProgram', ['someId', body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs/someId'
      );
      expect(result.data).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteProgram hits proper url', async () => {
      const result = await mockUrlCall.call('deleteProgram', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs/someId'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getTeamsForProgram hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamsForProgram', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/programs/someId/teams'
      );
    });
  });
});

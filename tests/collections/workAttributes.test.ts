import WorkAttributes from '../../src/collections/workAttributes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(WorkAttributes);

describe('TempoAi', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes'
      );
    });

    it('getWorkAttribute hits proper url', async () => {
      const result = await mockUrlCall.call('getWorkAttribute', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes/someKey'
      );
    });
  });
});

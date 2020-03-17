import WorkloadSchemes from '../../src/collections/workloadSchemes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(WorkloadSchemes);

describe('WorkloadSchemes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes',
      );
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('getWorkloadScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456',
      );
    });
  });
});

import WorkloadSchemes from '../../src/collections/workloadSchemes';
import { WorkloadScheme } from '../../src/requestTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(WorkloadSchemes);

const workloadScheme: WorkloadScheme = {
  name: 'Default workload Scheme',
  description: 'Employees are part of this scheme by default',
  days: [
    {
      day: 'MONDAY',
      requiredSeconds: 14400,
    },
    {
      day: 'TUESDAY',
      requiredSeconds: 14400,
    },
    {
      day: 'WEDNESDAY',
      requiredSeconds: 14400,
    },
    {
      day: 'THURSDAY',
      requiredSeconds: 14400,
    },
    {
      day: 'FRIDAY',
      requiredSeconds: 14400,
    },
    {
      day: 'SATURDAY',
      requiredSeconds: 0,
    },
    {
      day: 'SUNDAY',
      requiredSeconds: 0,
    },
  ],
};

describe('WorkloadSchemes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes',
      );
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', [workloadScheme]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes',
      );
      expect(result.body).toEqual(workloadScheme);
      expect(result.method).toEqual('POST');
    });

    it('getWorkloadScheme hits proper url', async () => {
      const result = await mockUrlCall.call('getWorkloadScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456',
      );
    });

    it('putWorkloadScheme hits proper url', async () => {
      const result = await mockUrlCall.call('putWorkloadScheme', [
        456,
        workloadScheme,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456',
      );
      expect(result.body).toEqual(workloadScheme);
      expect(result.method).toEqual('PUT');
    });

    it('deleteWorkloadScheme hits proper url', async () => {
      const result = await mockUrlCall.call('deleteWorkloadScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('putWorkloadSchemeDefault hits proper url', async () => {
      const result = await mockUrlCall.call('putWorkloadSchemeDefault', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456/default',
      );
      expect(result.method).toEqual('PUT');
    });

    it('getWorkloadSchemeMembers hits proper url', async () => {
      const result = await mockUrlCall.call('getWorkloadSchemeMembers', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456/members',
      );
    });

    it('postWorkloadSchemeMembers hits proper url', async () => {
      const result = await mockUrlCall.call('postWorkloadSchemeMembers', [
        456,
        ['someAccountId', 'someOtherAccountId'],
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/456/members',
      );
      expect(result.body).toEqual({ accountIds: ['someAccountId', 'someOtherAccountId'] });
      expect(result.method).toEqual('POST');
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/workload-schemes/users/someAccountId',
      );
    });
  });
});

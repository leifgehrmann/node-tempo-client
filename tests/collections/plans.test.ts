import Plans from '../../src/collections/plans';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Plans);

describe('Plans', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          assigneeType: 'abc',
          planItemType: 'efg',
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans?assigneeType=abc&planItemType=efg&from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/plans');
      expect(result.method).toEqual('POST');
    });

    it('getPlan hits proper url', async () => {
      const result = await mockUrlCall.call('getPlan', [
        'someId',
        {
          from: '2019-01-01',
          to: '2019-01-31',
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId?from=2019-01-01&to=2019-01-31',
      );
    });

    it('putPlan hits proper url', async () => {
      const result = await mockUrlCall.call('putPlan', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId',
      );
      expect(result.method).toEqual('PUT');
    });

    it('deletePlan hits proper url', async () => {
      const result = await mockUrlCall.call('deletePlan', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/user/someAccountId?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01',
      );
    });
  });
});

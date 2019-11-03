import Plans from '../../src/collections/plans';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Plans);

describe('Plans', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual('http://tempo.somehost.com:8080/core/3/plans');
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual('http://tempo.somehost.com:8080/core/3/plans');
      expect(result.method).toEqual('POST');
    });

    it('getPlan hits proper url', async () => {
      const result = await mockUrlCall.call('getPlan', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId'
      );
    });

    it('putPlan hits proper url', async () => {
      const result = await mockUrlCall.call('putPlan', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId'
      );
      expect(result.method).toEqual('PUT');
    });

    it('deletePlan hits proper url', async () => {
      const result = await mockUrlCall.call('deletePlan', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/someId'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', ['someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/plans/user/someAccountId'
      );
    });
  });
});

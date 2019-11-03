import UserSchedule from '../../src/collections/userSchedule';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(UserSchedule);

describe('UserSchedule', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/user-schedule?from=2019-01-01&to=2019-01-31'
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/user-schedule/someAccountId?from=2019-01-01&to=2019-01-31'
      );
    });
  });
});

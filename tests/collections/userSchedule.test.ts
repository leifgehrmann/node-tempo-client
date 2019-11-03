import UserSchedule from '../../src/collections/userSchedule';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(UserSchedule);

describe('UserSchedule', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/user-schedule'
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', ['someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/user-schedule/someAccountId'
      );
    });
  });
});

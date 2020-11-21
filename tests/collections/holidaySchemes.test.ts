import HolidaySchemes from '../../src/collections/holidaySchemes';
import { Holiday, HolidayScheme } from '../../src/requestTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(HolidaySchemes);

const holidayScheme: HolidayScheme = {
  name: 'Default Holiday Scheme',
  description: 'Employees are part of this scheme by default',
};

const holiday: Holiday = {
  type: 'FIXED',
  name: 'Christmas Eve',
  description: 'The day before Christmas',
  durationSeconds: 14400,
  date: '2021-12-24',
};

describe('HolidaySchemes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes',
      );
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', [holidayScheme]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes',
      );
      expect(result.body).toEqual(holidayScheme);
      expect(result.method).toEqual('POST');
    });

    it('getHolidayScheme hits proper url', async () => {
      const result = await mockUrlCall.call('getHolidayScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456',
      );
    });

    it('putHolidayScheme hits proper url', async () => {
      const result = await mockUrlCall.call('putHolidayScheme', [
        456,
        holidayScheme,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456',
      );
      expect(result.body).toEqual(holidayScheme);
      expect(result.method).toEqual('PUT');
    });

    it('deleteHolidayScheme hits proper url', async () => {
      const result = await mockUrlCall.call('deleteHolidayScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('putHolidaySchemeDefault hits proper url', async () => {
      const result = await mockUrlCall.call('putHolidaySchemeDefault', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/default',
      );
      expect(result.method).toEqual('PUT');
    });

    it('getHolidaySchemeHolidays hits proper url', async () => {
      const result = await mockUrlCall.call('getHolidaySchemeHolidays', [
        456,
        {
          year: 2020,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/holidays?year=2020',
      );
    });

    it('postHolidaySchemeHoliday hits proper url', async () => {
      const result = await mockUrlCall.call('postHolidaySchemeHoliday', [
        456,
        holiday,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/holidays',
      );
      expect(result.body).toEqual(holiday);
      expect(result.method).toEqual('POST');
    });

    it('getHolidaySchemeHoliday hits proper url', async () => {
      const result = await mockUrlCall.call('getHolidaySchemeHoliday', [
        456,
        789,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/holidays/789',
      );
    });

    it('putHolidaySchemeHoliday hits proper url', async () => {
      const result = await mockUrlCall.call('putHolidaySchemeHoliday', [
        456,
        789,
        holiday,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/holidays/789',
      );
      expect(result.body).toEqual(holiday);
      expect(result.method).toEqual('PUT');
    });

    it('deleteHolidaySchemeHoliday hits proper url', async () => {
      const result = await mockUrlCall.call('deleteHolidaySchemeHoliday', [
        456,
        789,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/holidays/789',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getHolidaySchemeMembers hits proper url', async () => {
      const result = await mockUrlCall.call('getHolidaySchemeMembers', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/members',
      );
    });

    it('postHolidaySchemeMembers hits proper url', async () => {
      const result = await mockUrlCall.call('postHolidaySchemeMembers', [
        456,
        ['someAccountId', 'someOtherAccountId'],
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456/members',
      );
      expect(result.body).toEqual({ accountIds: ['someAccountId', 'someOtherAccountId'] });
      expect(result.method).toEqual('POST');
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/users/someAccountId',
      );
    });
  });
});

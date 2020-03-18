import HolidaySchemes from '../../src/collections/holidaySchemes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(HolidaySchemes);

describe('HolidaySchemes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes',
      );
    });

    it('getHolidayScheme hits proper url', async () => {
      const result = await mockUrlCall.call('getHolidayScheme', [
        456,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/holiday-schemes/456',
      );
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
  });
});

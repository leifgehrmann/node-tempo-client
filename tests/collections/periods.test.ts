import Periods from '../../src/collections/periods';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Periods);

describe('Periods', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/periods?from=2019-01-01&to=2019-01-31'
      );
    });
  });
});

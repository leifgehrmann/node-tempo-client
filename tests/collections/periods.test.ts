import Periods from '../../src/collections/periods';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Periods);

describe('Periods', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/periods'
      );
    });
  });
});

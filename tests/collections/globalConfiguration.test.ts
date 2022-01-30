import GlobalConfiguration from '../../src/collections/globalConfiguration';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(GlobalConfiguration);

describe('GlobalConfiguration', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/globalconfiguration',
      );
    });
  });
});

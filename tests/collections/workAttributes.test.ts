import WorkAttributes from '../../src/collections/workAttributes';
import { WorkAttribute } from '../../src/requestTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(WorkAttributes);

const workAttribute: WorkAttribute = {
  key: '_COLOR_',
  name: 'Color',
  type: 'STATIC_LIST',
  required: false,
  values: [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
  ],
};

describe('WorkAttributes', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes',
      );
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', [workAttribute]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes',
      );
      expect(result.body).toEqual(workAttribute);
      expect(result.method).toEqual('POST');
    });

    it('getWorkAttribute hits proper url', async () => {
      const result = await mockUrlCall.call('getWorkAttribute', ['someKey']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes/someKey',
      );
    });

    it('putWorkAttribute hits proper url', async () => {
      const result = await mockUrlCall.call('putWorkAttribute', ['someKey', workAttribute]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes/someKey',
      );
      expect(result.body).toEqual(workAttribute);
      expect(result.method).toEqual('PUT');
    });

    it('deleteWorkAttribute hits proper url', async () => {
      const result = await mockUrlCall.call('deleteWorkAttribute', ['someKey']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/work-attributes/someKey',
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

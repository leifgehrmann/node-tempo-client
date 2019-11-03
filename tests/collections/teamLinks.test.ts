import TeamLinks from '../../src/collections/teamLinks';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(TeamLinks);

describe('TeamLinks', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-links'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getTeamLink hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamLink', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-links/someId'
      );
    });

    it('deleteTeamLink hits proper url', async () => {
      const result = await mockUrlCall.call('deleteTeamLink', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-links/someId'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getForProject hits proper url', async () => {
      const result = await mockUrlCall.call('getForProject', [
        'someProjectKey'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-links/project/someProjectKey'
      );
    });
  });
});

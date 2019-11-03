import TeamMemberships from '../../src/collections/teamMemberships';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(TeamMemberships);

describe('TeamMemberships', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getTeamMembership hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamMembership', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
    });

    it('putTeamMembership hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putTeamMembership', [
        'someId',
        body
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteTeamMembership hits proper url', async () => {
      const result = await mockUrlCall.call('deleteTeamMembership', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

import TeamMemberships from '../../src/collections/teamMemberships';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(TeamMemberships);

describe('TeamMemberships', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships'
      );
    });

    it('getTeamMembership hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamMembership', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
    });

    it('putTeamMembership hits proper url', async () => {
      const result = await mockUrlCall.call('putTeamMembership', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
    });

    it('deleteTeamMembership hits proper url', async () => {
      const result = await mockUrlCall.call('deleteTeamMembership', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/team-memberships/someId'
      );
    });
  });
});

import Teams from '../../src/collections/teams';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Teams);

describe('Teams', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams'
      );
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams'
      );
    });

    it('getTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId'
      );
    });

    it('putTeam hits proper url', async () => {
      const result = await mockUrlCall.call('putTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId'
      );
    });

    it('deleteTeam hits proper url', async () => {
      const result = await mockUrlCall.call('deleteTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId'
      );
    });

    it('getTeamLinksForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamLinksForTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/links'
      );
    });

    it('getMembersForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMembersForTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members'
      );
    });

    it('getMemberForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMemberForTeam', ['someId', 'someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members/someAccountId'
      );
    });

    it('getMemberMembershipsForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMemberMembershipsForTeam', ['someId', 'someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members/someAccountId/memberships'
      );
    });

    it('getPermissionsForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getPermissionsForTeam', ['someId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/permissions'
      );
    });

    it('getPermissionForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getPermissionForTeam', ['someId', 'someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/permissions/someKey'
      );
    });
  });
});

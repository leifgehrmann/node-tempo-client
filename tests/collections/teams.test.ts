import Teams from '../../src/collections/teams';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Teams);

describe('Teams', () => {
  describe('Request Functions Tests', () => {
    it('post hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('post', [body]);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/teams');
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/teams');
    });

    it('getTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getTeam', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId',
      );
    });

    it('putTeam hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('putTeam', ['someId', body]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId',
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('PUT');
    });

    it('deleteTeam hits proper url', async () => {
      const result = await mockUrlCall.call('deleteTeam', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getTeamLinksForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getTeamLinksForTeam', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/links',
      );
    });

    it('getMembersForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMembersForTeam', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members',
      );
    });

    it('getMemberForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMemberForTeam', [
        'someId',
        'someAccountId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members/someAccountId',
      );
    });

    it('getMemberMembershipsForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getMemberMembershipsForTeam', [
        'someId',
        'someAccountId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/members/someAccountId/memberships',
      );
    });

    it('getPermissionsForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getPermissionsForTeam', [
        'someId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/permissions',
      );
    });

    it('getPermissionForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getPermissionForTeam', [
        'someId',
        'someKey',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/permissions/someKey',
      );
    });

    it('getGenericResources hits proper url', async () => {
      const result = await mockUrlCall.call('getGenericResources', [
        'someId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/generic-resources',
      );
    });

    it('postGenericResources hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('postGenericResources', ['someId', body]);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/teams/someId/generic-resources');
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getGenericResource hits proper url', async () => {
      const result = await mockUrlCall.call('getGenericResource', [
        'someId',
        'resourceId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/generic-resources/resourceId',
      );
    });

    it('deleteGenericResource hits proper url', async () => {
      const result = await mockUrlCall.call('deleteGenericResource', ['someId', 'resourceId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/teams/someId/generic-resources/resourceId',
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

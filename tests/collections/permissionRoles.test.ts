import PermissionRoles from '../../src/collections/permissionRoles';
import { PermissionRole } from '../../src/requestTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(PermissionRoles);

const permissionRole: PermissionRole = {
  name: 'The Role',
  permissionKeys: [
    'permissions.worklog.view',
  ],
  permittedAccountIds: [
    'jira-account-id',
  ],
  accessType: 'TEAM',
  accessEntityIds: [
    1,
  ],
};

describe('PermissionRoles', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', [
        {
          teamId: 123,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/permission-roles?teamId=123',
      );
    });

    it('post hits proper url', async () => {
      const result = await mockUrlCall.call('post', [permissionRole]);
      expect(result.url).toEqual('http://tempo.somehost.com:8080/core/3/permission-roles');
      expect(result.body).toEqual(permissionRole);
      expect(result.method).toEqual('POST');
    });

    it('getGlobal hits proper url', async () => {
      const result = await mockUrlCall.call('getGlobal', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/permission-roles/global',
      );
    });

    it('getPermissionRole hits proper url', async () => {
      const result = await mockUrlCall.call('getPermissionRole', [
        'someId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/permission-roles/someId',
      );
    });

    it('putPermissionRole hits proper url', async () => {
      const result = await mockUrlCall.call('putPermissionRole', ['someId', permissionRole]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/permission-roles/someId',
      );
      expect(result.body).toEqual(permissionRole);
      expect(result.method).toEqual('PUT');
    });

    it('deletePermissionRole hits proper url', async () => {
      const result = await mockUrlCall.call('deletePermissionRole', ['someId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/permission-roles/someId',
      );
      expect(result.method).toEqual('DELETE');
    });
  });
});

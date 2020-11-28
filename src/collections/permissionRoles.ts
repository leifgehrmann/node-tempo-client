import * as queryOptions from '../queryOptionTypes';
import { PermissionRole } from '../requestTypes';
import {
  PermissionRoleResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class PermissionRoles extends Collection {
  /**
   * Retrieve permission roles
   */
  public async get(
    options?: Partial<queryOptions.TeamId>,
  ): Promise<ResultSetResponse<PermissionRoleResponse>> {
    return this.createAndSendRequest('/permission-roles', {
      query: options,
    });
  }

  /**
   * Create a new editable permission role
   */
  public async post(permissionRole: PermissionRole): Promise<PermissionRoleResponse> {
    return this.createAndSendRequest('/permission-roles', {
      body: permissionRole,
      method: 'POST',
    });
  }

  /**
   * Retrieve global permission roles
   */
  public async getGlobal(): Promise<ResultSetResponse<PermissionRoleResponse>> {
    return this.createAndSendRequest('/permission-roles/global');
  }

  /**
   * Retrieve a permission role
   */
  public async getPermissionRole(
    id: string,
  ): Promise<PermissionRoleResponse> {
    return this.createAndSendRequest(`/permission-roles/${id}`);
  }

  /**
   * Update a permission role. Only members of editable roles can be updated.
   */
  public async putPermissionRole(
    id: string,
    permissionRole: PermissionRole,
  ): Promise<PermissionRoleResponse> {
    return this.createAndSendRequest(`/permission-roles/${id}`, {
      body: permissionRole,
      method: 'PUT',
    });
  }

  /**
   * Delete an editable permission role
   */
  public async deletePermissionRole(id: string): Promise<void> {
    await this.createAndSendRequest(`/permission-roles/${id}`, {
      method: 'DELETE',
    });
  }
}

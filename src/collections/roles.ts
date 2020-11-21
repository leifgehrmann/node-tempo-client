import { Role } from '../requestTypes';
import { ResultSetResponse, RoleWithDefaultResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Roles extends Collection {
  /**
   * Retrieve all roles
   */
  public async get(): Promise<ResultSetResponse<RoleWithDefaultResponse>> {
    return this.createAndSendRequest('/roles');
  }

  /**
   * Creates a new role
   */
  public async post(role: Role): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest('/roles', {
      body: role,
      method: 'POST',
    });
  }

  /**
   * Retrieve the default role
   */
  public async getDefault(): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest('/roles/default');
  }

  /**
   * Retrieve an existing role for the given id
   */
  public async getRole(id: string): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest(`/roles/${id}`);
  }

  /**
   * Update an existing role for the given id
   */
  public async putRole(
    id: string,
    role: Role,
  ): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest(`/roles/${id}`, {
      body: role,
      method: 'PUT',
    });
  }

  /**
   * Delete an existing role
   */
  public async deleteRole(id: string): Promise<void> {
    await this.createAndSendRequest(`/roles/${id}`, {
      method: 'DELETE',
    });
  }
}

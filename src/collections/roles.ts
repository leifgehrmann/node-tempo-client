import { Role } from '../requestTypes';
import { ResultSetResponse, RoleWithDefaultResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Roles extends Collection {
  public async get(): Promise<ResultSetResponse<RoleWithDefaultResponse>> {
    return this.createAndSendRequest('/roles');
  }

  public async post(role: Role): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest('/roles', {
      body: role,
      method: 'POST',
    });
  }

  public async getRole(id: string): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest(`/roles/${id}`);
  }

  public async putRole(
    id: string,
    role: Role,
  ): Promise<RoleWithDefaultResponse> {
    return this.createAndSendRequest(`/roles/${id}`, {
      body: role,
      method: 'PUT',
    });
  }

  public async deleteRole(id: string): Promise<void> {
    await this.createAndSendRequest(`/roles/${id}`, {
      method: 'DELETE',
    });
  }
}

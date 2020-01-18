import { IRole } from '../requestTypes';
import { IResultSetResponse, IRoleWithDefaultResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Roles extends Collection {
  public async get(): Promise<IResultSetResponse<IRoleWithDefaultResponse>> {
    return await this.createAndSendRequest('/roles');
  }

  public async post(role: IRole): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest('/roles', {
      body: role,
      method: 'POST',
    });
  }

  public async getRole(id: string): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest(`/roles/${id}`);
  }

  public async putRole(
    id: string,
    role: IRole,
  ): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest(`/roles/${id}`, {
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

import { WorkloadScheme } from '../requestTypes';
import {
  WorkloadSchemeResponse,
  ResultSetResponse,
  UserResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class WorkloadSchemes extends Collection {
  /**
   * Retrieve all workload schemes
   */
  public async get(): Promise<ResultSetResponse<WorkloadSchemeResponse>> {
    return this.createAndSendRequest('/workload-schemes');
  }

  /**
   * Create a workload scheme
   */
  public async post(workloadScheme: WorkloadScheme): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest('/workload-schemes', {
      body: workloadScheme,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing workload scheme for the given id
   */
  public async getWorkloadScheme(id: string): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest(`/workload-schemes/${id}`);
  }

  /**
   * Update a workload scheme for the given id
   */
  public async putWorkloadScheme(
    id: string,
    workloadScheme: WorkloadScheme,
  ): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest(`/workload-schemes/${id}`, {
      body: workloadScheme,
      method: 'PUT',
    });
  }

  /**
   * Delete a workload scheme for the given id
   */
  public async deleteWorkloadScheme(id: string): Promise<void> {
    return this.createAndSendRequest(`/workload-schemes/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Set the default workload scheme
   */
  public async putWorkloadSchemeDefault(id: string): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest(`/workload-schemes/${id}/default`, {
      method: 'PUT',
    });
  }

  /**
   * Get members in a workload scheme
   */
  public async getWorkloadSchemeMembers(id: string): Promise<ResultSetResponse<UserResponse>> {
    return this.createAndSendRequest(`/workload-schemes/${id}/members`);
  }

  /**
   * Set user workload scheme membership
   */
  public async postWorkloadSchemeMembers(id: string, accountIds: string[]): Promise<void> {
    return this.createAndSendRequest(`/workload-schemes/${id}/members`, {
      body: { accountIds },
      method: 'POST',
    });
  }

  /**
   * Get user scheme
   */
  public async getForUser(accountId: string): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest(`/workload-schemes/users/${accountId}`);
  }
}

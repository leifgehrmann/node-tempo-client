import { WorkAttribute } from '../requestTypes';
import { ResultSetResponse, WorkAttributeResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class WorkAttributes extends Collection {
  /**
   * Retrieve all work attributes
   */
  public async get(): Promise<ResultSetResponse<WorkAttributeResponse>> {
    return this.createAndSendRequest('/work-attributes');
  }

  /**
   * Create a work attribute
   */
  public async post(
    workAttribute: WorkAttribute,
  ): Promise<WorkAttributeResponse> {
    return this.createAndSendRequest('/work-attributes', {
      body: workAttribute,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing work attribute for the given key
   */
  public async getWorkAttribute(key: string): Promise<WorkAttributeResponse> {
    return this.createAndSendRequest(`/work-attributes/${key}`);
  }

  /**
   * Update an existing work attribute for the given key
   */
  public async putWorkAttribute(
    key: string,
    workAttribute: WorkAttribute,
  ): Promise<WorkAttributeResponse> {
    return this.createAndSendRequest(`/work-attributes/${key}`, {
      body: workAttribute,
      method: 'PUT',
    });
  }

  /**
   * Delete an existing work attribute for the given key
   */
  public async deleteWorkAttribute(key: string): Promise<void> {
    return this.createAndSendRequest(`/work-attributes/${key}`, {
      method: 'DELETE',
    });
  }
}

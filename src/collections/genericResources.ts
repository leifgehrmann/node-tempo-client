import * as queryOptions from '../queryOptionTypes';
import { GenericResource } from '../requestTypes';
import { GenericResourceResponse, ResultSetResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class GenericResources extends Collection {
  /**
   * Creates a generic resource
   */
  public async post(genericResource: GenericResource): Promise<GenericResourceResponse> {
    return this.createAndSendRequest('/generic-resources', {
      body: genericResource,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing generic resource for the given id
   */
  public async getGenericResource(id: string): Promise<GenericResourceResponse> {
    return this.createAndSendRequest(`/generic-resources/${id}`);
  }

  /**
   * Update an existing generic resource for the given id
   */
  public async putGenericResource(
    id: string,
    genericResource: GenericResource,
  ): Promise<GenericResourceResponse> {
    return this.createAndSendRequest(`/generic-resources/${id}`, {
      body: genericResource,
      method: 'PUT',
    });
  }

  /**
   * Deletes an existing generic resource for the given id
   */
  public async deleteGenericResource(id: string): Promise<void> {
    await this.createAndSendRequest(`/generic-resources/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Search generic resources
   */
  public async postSearch(
    options?: Partial<
    queryOptions.Ids &
    queryOptions.QueryString &
    queryOptions.Pagination
    >,
  ): Promise<ResultSetResponse<GenericResourceResponse>> {
    return this.createAndSendRequest('/generic-resources/search', {
      body: options,
      method: 'POST',
    });
  }
}

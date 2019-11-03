import * as queryOptions from '../queryOptionTypes';
import { IResultSetResponse, IRoleWithDefaultResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Roles extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IRoleWithDefaultResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async post(
    options?: queryOptions.IDateRange
  ): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getRole(
    options?: queryOptions.IDateRange
  ): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putRole(
    options?: queryOptions.IDateRange
  ): Promise<IRoleWithDefaultResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteRole(options?: queryOptions.IDateRange): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

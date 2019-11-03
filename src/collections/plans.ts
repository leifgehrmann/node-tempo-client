import * as queryOptions from '../queryOptionTypes';
import {
  IPaginatedResultSetResponse,
  IPlanResponse,
  IResultSetResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Plans extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IPaginatedResultSetResponse<IPlanResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async post(options?: queryOptions.IDateRange): Promise<IPlanResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getPlan(
    options?: queryOptions.IDateRange
  ): Promise<IPlanResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putPlan(
    options?: queryOptions.IDateRange
  ): Promise<IPlanResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deletePlan(options?: queryOptions.IDateRange): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getForUser(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IPlanResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import * as queryOptions from '../queryOptionTypes';
import { IPlan } from '../requestTypes';
import {
  IPaginatedResultSetResponse,
  IPlanResponse,
  IResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Plans extends Collection {
  public async get(
    options?: Partial<
    queryOptions.IAssigneeType &
    queryOptions.IPlanItemType &
    queryOptions.IDateRange &
    queryOptions.IUpdatedFrom &
    queryOptions.IPagination
    >,
  ): Promise<IPaginatedResultSetResponse<IPlanResponse>> {
    return this.createAndSendRequest('/plans', {
      query: options,
    });
  }

  public async post(plan: IPlan): Promise<IPlanResponse> {
    return this.createAndSendRequest('/plans', {
      body: plan,
      method: 'POST',
    });
  }

  public async getPlan(
    id: string,
    options?: queryOptions.IDateRange,
  ): Promise<IPlanResponse> {
    return this.createAndSendRequest(`/plans/${id}`, {
      query: options,
    });
  }

  public async putPlan(id: string, plan: IPlan): Promise<IPlanResponse> {
    return this.createAndSendRequest(`/plans/${id}`, {
      body: plan,
      method: 'PUT',
    });
  }

  public async deletePlan(id: string): Promise<void> {
    await this.createAndSendRequest(`/plans/${id}`, {
      method: 'DELETE',
    });
  }

  public async getForUser(
    accountId: string,
    options?: Partial<queryOptions.IDateRange & queryOptions.IUpdatedFrom>,
  ): Promise<IResultSetResponse<IPlanResponse>> {
    return this.createAndSendRequest(`/plans/user/${accountId}`, {
      query: options,
    });
  }
}

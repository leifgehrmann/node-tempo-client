import * as queryOptions from '../queryOptionTypes';
import { Plan } from '../requestTypes';
import {
  PaginatedResultSetResponse,
  PlanResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Plans extends Collection {
  public async get(
    options?: Partial<
    queryOptions.AssigneeType &
    queryOptions.PlanItemType &
    queryOptions.DateRange &
    queryOptions.UpdatedFromDateOrDateTime &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<PlanResponse>> {
    return this.createAndSendRequest('/plans', {
      query: options,
    });
  }

  public async post(plan: Plan): Promise<PlanResponse> {
    return this.createAndSendRequest('/plans', {
      body: plan,
      method: 'POST',
    });
  }

  public async getPlan(
    id: string,
    options?: queryOptions.DateRange,
  ): Promise<PlanResponse> {
    return this.createAndSendRequest(`/plans/${id}`, {
      query: options,
    });
  }

  /**
   * Retrieve plans with time broken down by days
   */
  public async getPlanForDaily(
    daily: string,
    options?: Partial<
    { assigneeType: string; } &
    { planItemType: string; } &
    queryOptions.DateRange &
    queryOptions.UpdatedFromDateOrDateTime &
    queryOptions.Pagination
    >,
  ): Promise<ResultSetResponse<PlanResponse>> {
    return this.createAndSendRequest(`/plans/${daily}`, {
      query: options,
    });
  }

  public async putPlan(id: string, plan: Plan): Promise<PlanResponse> {
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
    options?: Partial<queryOptions.DateRange & queryOptions.UpdatedFromDateOrDateTime>,
  ): Promise<ResultSetResponse<PlanResponse>> {
    return this.createAndSendRequest(`/plans/user/${accountId}`, {
      query: options,
    });
  }
}

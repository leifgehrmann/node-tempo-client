import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import { IResultSetResponse, IDayScheduleResponse } from '../types';

export default class UserSchedule extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IDayScheduleResponse>> {
    return await this.createAndSendRequest(`/user-schedule`, {
      query: options
    });
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IDayScheduleResponse>> {
    return await this.createAndSendRequest(`/user-schedule/${accountId}`, {
      query: options
    });
  }
}

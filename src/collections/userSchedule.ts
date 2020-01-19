import * as queryOptions from '../queryOptionTypes';
import { DayScheduleResponse, ResultSetResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class UserSchedule extends Collection {
  public async get(
    options?: queryOptions.DateRange,
  ): Promise<ResultSetResponse<DayScheduleResponse>> {
    return this.createAndSendRequest('/user-schedule', {
      query: options,
    });
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.DateRange,
  ): Promise<ResultSetResponse<DayScheduleResponse>> {
    return this.createAndSendRequest(`/user-schedule/${accountId}`, {
      query: options,
    });
  }
}

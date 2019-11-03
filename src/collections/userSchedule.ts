import * as queryOptions from '../queryOptions';
import Collection from './collection';

interface IDayScheduleResponseObject {
  date: string;
  requiredSeconds: number;
  type: string;
  holiday?: {
    name: string;
    description?: string;
    durationSeconds: number;
  }
}

interface IDaySchedulesResponseObject {
  self: string;
  metadata: {
    count: string;
  }
  results: IDayScheduleResponseObject[]
}

export default class UserSchedule extends Collection {
  public async get(options?: queryOptions.IDateRange): Promise<IDaySchedulesResponseObject> {
    return await this.createAndSendRequest(`/user-schedule`, {
      query: options
    });
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.IDateRange
  ): Promise<IDaySchedulesResponseObject> {
    return await this.createAndSendRequest(`/user-schedule/${accountId}`, {
      query: options
    });
  }
}

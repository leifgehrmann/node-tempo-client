import * as queryOptions from '../queryOptionTypes';
import { IPeriodsResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Periods extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IPeriodsResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import * as queryOptions from '../queryOptionTypes';
import { PeriodsResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class Periods extends Collection {
  public async get(
    options?: queryOptions.DateRange,
  ): Promise<PeriodsResponse> {
    return this.createAndSendRequest('/periods', {
      query: options,
    });
  }
}

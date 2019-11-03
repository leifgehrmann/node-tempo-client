import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import { IPeriodsResponse } from '../types';

export default class Periods extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IPeriodsResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

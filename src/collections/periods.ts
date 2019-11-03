import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Periods extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

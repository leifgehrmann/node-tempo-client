import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';

export default class AccountCategoryTypes extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import { IResultSetResponse, IAccountCategoryTypeResponse } from '../types';

export default class AccountCategoryTypes extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountCategoryTypeResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

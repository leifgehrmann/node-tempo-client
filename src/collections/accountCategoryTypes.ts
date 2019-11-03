import * as queryOptions from '../queryOptionTypes';
import {
  IAccountCategoryTypeResponse,
  IResultSetResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategoryTypes extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountCategoryTypeResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import {
  IAccountCategoryTypeResponse,
  IResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategoryTypes extends Collection {
  public async get(): Promise<
  IResultSetResponse<IAccountCategoryTypeResponse>
  > {
    return await this.createAndSendRequest('/account-category-types');
  }
}

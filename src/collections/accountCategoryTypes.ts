import {
  AccountCategoryTypeResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategoryTypes extends Collection {
  public async get(): Promise<
  ResultSetResponse<AccountCategoryTypeResponse>
  > {
    return this.createAndSendRequest('/account-category-types');
  }
}

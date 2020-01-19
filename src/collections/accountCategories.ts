import * as queryOptions from '../queryOptionTypes';
import { AccountCategory } from '../requestTypes';
import { AccountCategoryResponse, ResultSetResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategories extends Collection {
  public async post(
    accountCategory: AccountCategory,
  ): Promise<AccountCategoryResponse> {
    return this.createAndSendRequest('/account-categories', {
      body: accountCategory,
      method: 'POST',
    });
  }

  public async get(
    options?: queryOptions.Id,
  ): Promise<ResultSetResponse<AccountCategoryResponse>> {
    return this.createAndSendRequest('/account-categories', {
      query: options,
    });
  }

  public async getAccountCategory(
    key: string,
  ): Promise<AccountCategoryResponse> {
    return this.createAndSendRequest(`/account-categories/${key}`);
  }

  public async putAccountCategory(
    key: string,
    accountCategory: AccountCategory,
  ): Promise<AccountCategoryResponse> {
    return this.createAndSendRequest(`/account-categories/${key}`, {
      body: accountCategory,
      method: 'PUT',
    });
  }

  public async deleteAccountCategory(key: string): Promise<void> {
    await this.createAndSendRequest(`/account-categories/${key}`, {
      method: 'DELETE',
    });
  }
}

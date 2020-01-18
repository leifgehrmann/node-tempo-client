import * as queryOptions from '../queryOptionTypes';
import { IAccountCategory } from '../requestTypes';
import { IAccountCategoryResponse, IResultSetResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategories extends Collection {
  public async post(
    accountCategory: IAccountCategory,
  ): Promise<IAccountCategoryResponse> {
    return this.createAndSendRequest('/account-categories', {
      body: accountCategory,
      method: 'POST',
    });
  }

  public async get(
    options?: queryOptions.IId,
  ): Promise<IResultSetResponse<IAccountCategoryResponse>> {
    return this.createAndSendRequest('/account-categories', {
      query: options,
    });
  }

  public async getAccountCategory(
    key: string,
  ): Promise<IAccountCategoryResponse> {
    return this.createAndSendRequest(`/account-categories/${key}`);
  }

  public async putAccountCategory(
    key: string,
    accountCategory: IAccountCategory,
  ): Promise<IAccountCategoryResponse> {
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

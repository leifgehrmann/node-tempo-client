import * as queryOptions from '../queryOptionTypes';
import { IAccountCategoryResponse, IResultSetResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountCategories extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<IAccountCategoryResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountCategoryResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccountCategory(
    options?: queryOptions.IDateRange
  ): Promise<IAccountCategoryResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putAccountCategory(
    options?: queryOptions.IDateRange
  ): Promise<IAccountCategoryResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteAccountCategory(
    options?: queryOptions.IDateRange
  ): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

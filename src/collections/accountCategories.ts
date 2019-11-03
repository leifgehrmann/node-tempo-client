import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class AccountCategories extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`,{
          query: options
        })
  }

  public async post(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
          query: options
        })
  }

  public async getAccountCategory(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
          query: options
        })
  }

  public async putAccountCategory(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
          query: options
        })
  }

  public async deleteAccountCategory(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`, {
          query: options
        })
  }
}

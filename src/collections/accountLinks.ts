import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class AccountLinks extends Collection {
  public async post(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccountLink(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteAccountLink(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getForProject(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

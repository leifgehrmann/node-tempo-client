import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Plans extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async post(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getPlan(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putPlan(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deletePlan(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getForUser(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

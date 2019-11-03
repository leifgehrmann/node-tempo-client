import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Programs extends Collection {
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

  public async getProgram(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putProgram(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteProgram(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamsForProgram(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

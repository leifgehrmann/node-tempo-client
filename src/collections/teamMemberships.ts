import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class TeamMemberships extends Collection {
  public async post(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamMembership(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putTeamMembership(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteTeamMembership(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

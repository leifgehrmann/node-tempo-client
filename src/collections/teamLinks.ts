import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class TeamLinks extends Collection {
  public async post(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`,{
          query: options
        })
  }

  public async getTeamLink(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`,{
          query: options
        })
  }

  public async deleteTeamLink(options?: queryOptions.IDateRange) {
    await this.createAndSendRequest(`/periods`,{
          query: options
        })
  }

  public async getForProject(options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(`/periods`,{
          query: options
        })
  }
}

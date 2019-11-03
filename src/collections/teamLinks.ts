import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class TeamLinks extends Collection {
  public async post(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getTeamLink(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async deleteTeamLink(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getTeamLinkForProject(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }
}

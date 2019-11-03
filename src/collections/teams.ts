import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Teams extends Collection {
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

  public async get(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async putTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async deleteTeam(options?: queryOptions.IDateRange) {
    await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getTeamLinksForTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getMembersForTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getMemberForTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getMemberMembershipsForTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getPermissionsForTeam(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getPermissionForTeam(options?: queryOptions.IDateRange) {
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

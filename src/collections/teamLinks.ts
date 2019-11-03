import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import {
  ITeamLinkResponse,
  IResultSetResponse,
  ITeamLinkByScopeResponse
} from '../types';

export default class TeamLinks extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<ITeamLinkResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamLink(
    options?: queryOptions.IDateRange
  ): Promise<ITeamLinkResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteTeamLink(
    options?: queryOptions.IDateRange
  ): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getForProject(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamLinkByScopeResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

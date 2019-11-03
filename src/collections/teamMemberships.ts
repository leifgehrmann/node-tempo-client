import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import { ITeamMemberMembershipFullResponse } from '../types';

export default class TeamMemberships extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamMembership(
    options?: queryOptions.IDateRange
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putTeamMembership(
    options?: queryOptions.IDateRange
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteTeamMembership(
    options?: queryOptions.IDateRange
  ): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

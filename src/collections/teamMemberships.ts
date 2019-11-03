import * as queryOptions from '../queryOptionTypes';
import { ITeamMemberMembershipFullResponse } from '../responseTypes';
import Collection from './abstractCollection';

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

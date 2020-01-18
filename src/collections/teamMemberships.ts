import { ITeamMembership, ITeamMembershipNew } from '../requestTypes';
import { ITeamMemberMembershipFullResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class TeamMemberships extends Collection {
  public async post(
    teamMembership: ITeamMembershipNew,
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest('/team-memberships', {
      body: teamMembership,
      method: 'POST',
    });
  }

  public async getTeamMembership(
    id: string,
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest(`/team-memberships/${id}`);
  }

  public async putTeamMembership(
    id: string,
    teamMembership: ITeamMembership,
  ): Promise<ITeamMemberMembershipFullResponse> {
    return await this.createAndSendRequest(`/team-memberships/${id}`, {
      body: teamMembership,
      method: 'PUT',
    });
  }

  public async deleteTeamMembership(id: string): Promise<void> {
    await this.createAndSendRequest(`/team-memberships/${id}`, {
      method: 'DELETE',
    });
  }
}

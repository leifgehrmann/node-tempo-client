import { TeamMembership, TeamMembershipNew } from '../requestTypes';
import { ResultSetResponse, TeamMemberMembershipFullResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class TeamMemberships extends Collection {
  /**
   * Creates a new membership.
   */
  public async post(
    teamMembership: TeamMembershipNew,
  ): Promise<TeamMemberMembershipFullResponse> {
    return this.createAndSendRequest('/team-memberships', {
      body: teamMembership,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing membership for the given id.
   */
  public async getTeamMembership(
    id: string,
  ): Promise<TeamMemberMembershipFullResponse> {
    return this.createAndSendRequest(`/team-memberships/${id}`);
  }

  /**
   * Update an existing membership for the given id.
   */
  public async putTeamMembership(
    id: string,
    teamMembership: TeamMembership,
  ): Promise<TeamMemberMembershipFullResponse> {
    return this.createAndSendRequest(`/team-memberships/${id}`, {
      body: teamMembership,
      method: 'PUT',
    });
  }

  /**
   * Delete an existing membership.
   */
  public async deleteTeamMembership(id: string): Promise<void> {
    await this.createAndSendRequest(`/team-memberships/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Retrieves all the memberships of the team.
   */
  public async getTeamMembershipsForTeam(
    id: string,
  ): Promise<ResultSetResponse<TeamMemberMembershipFullResponse>> {
    return this.createAndSendRequest(`/team-memberships/team/${id}`);
  }
}

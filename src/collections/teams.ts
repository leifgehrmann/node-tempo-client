import { Team } from '../requestTypes';
import {
  ResultSetResponse,
  TeamLinkRefResponse,
  TeamMemberActiveMembershipResponse,
  TeamMemberMembershipResponse,
  TeamPermissionResponse,
  TeamResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Teams extends Collection {
  public async post(team: Team): Promise<TeamResponse> {
    return this.createAndSendRequest('/teams', {
      body: team,
      method: 'POST',
    });
  }

  public async get(): Promise<ResultSetResponse<TeamResponse>> {
    return this.createAndSendRequest('/teams');
  }

  public async getTeam(id: string): Promise<TeamResponse> {
    return this.createAndSendRequest(`/teams/${id}`);
  }

  public async putTeam(id: string, team: Team): Promise<TeamResponse> {
    return this.createAndSendRequest(`/teams/${id}`, {
      body: team,
      method: 'PUT',
    });
  }

  public async deleteTeam(id: string): Promise<void> {
    await this.createAndSendRequest(`/teams/${id}`, {
      method: 'DELETE',
    });
  }

  public async getTeamLinksForTeam(
    id: string,
  ): Promise<ResultSetResponse<TeamLinkRefResponse>> {
    return this.createAndSendRequest(`/teams/${id}/links`);
  }

  public async getMembersForTeam(
    id: string,
  ): Promise<ResultSetResponse<TeamMemberActiveMembershipResponse>> {
    return this.createAndSendRequest(`/teams/${id}/members`);
  }

  public async getMemberForTeam(
    id: string,
    accountId: string,
  ): Promise<TeamMemberActiveMembershipResponse> {
    return this.createAndSendRequest(`/teams/${id}/members/${accountId}`);
  }

  public async getMemberMembershipsForTeam(
    id: string,
    accountId: string,
  ): Promise<ResultSetResponse<TeamMemberMembershipResponse>> {
    return this.createAndSendRequest(
      `/teams/${id}/members/${accountId}/memberships`,
    );
  }

  public async getPermissionsForTeam(
    id: string,
  ): Promise<ResultSetResponse<TeamPermissionResponse>> {
    return this.createAndSendRequest(`/teams/${id}/permissions`);
  }

  public async getPermissionForTeam(
    id: string,
    key: string,
  ): Promise<TeamPermissionResponse> {
    return this.createAndSendRequest(`/teams/${id}/permissions/${key}`);
  }
}

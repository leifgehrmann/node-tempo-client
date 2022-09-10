import { Team } from '../requestTypes';
import {
  ResultSetResponse,
  TeamGenericResourceMembersResponse,
  TeamGenericResourceMemberResponse,
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

  /**
   * Retrieve all the generic resource members for this team
   */
  public async getGenericResources(id: string): Promise<TeamGenericResourceMembersResponse> {
    return this.createAndSendRequest(`/teams/${id}/generic-resources`);
  }

  /**
   * Add a generic resource to the given team
   */
  public async postGenericResources(
    id: string,
    genericResource: { genericResourceId: number },
  ): Promise<TeamGenericResourceMemberResponse> {
    return this.createAndSendRequest(`/teams/${id}/generic-resources`, {
      body: genericResource,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing generic resource team member for the given teamId and resourceId
   */
  public async getGenericResource(
    id: string,
    resourceId: string,
  ): Promise<TeamGenericResourceMemberResponse> {
    return this.createAndSendRequest(`/teams/${id}/generic-resources/${resourceId}`);
  }

  /**
   * Remove an existing generic resource team member with given resourceId from team with the
   * given teamId
   */
  public async deleteGenericResource(
    id: string,
    resourceId: string,
  ): Promise<TeamGenericResourceMemberResponse> {
    return this.createAndSendRequest(`/teams/${id}/generic-resources/${resourceId}`, {
      method: 'DELETE',
    });
  }
}

import * as queryOptions from '../queryOptionTypes';
import { ITeam } from '../requestTypes';
import {
  IResultSetResponse,
  ITeamLinkRefResponse,
  ITeamMemberActiveMembershipResponse,
  ITeamMemberMembershipResponse,
  ITeamPermissionResponse,
  ITeamResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Teams extends Collection {
  public async post(team: ITeam): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/teams`, {
      body: team,
      method: 'POST'
    });
  }

  public async get(): Promise<IResultSetResponse<ITeamResponse>> {
    return await this.createAndSendRequest(`/teams`);
  }

  public async getTeam(id: string): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/teams/${id}`);
  }

  public async putTeam(id: string, team: ITeam): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/teams/${id}`, {
      body: team,
      method: 'PUT'
    });
  }

  public async deleteTeam(id: string): Promise<void> {
    await this.createAndSendRequest(`/teams/${id}`, {
      method: 'DELETE'
    });
  }

  public async getTeamLinksForTeam(id: string): Promise<IResultSetResponse<ITeamLinkRefResponse>> {
    return await this.createAndSendRequest(`/teams/${id}/links`);
  }

  public async getMembersForTeam(id: string): Promise<IResultSetResponse<ITeamMemberActiveMembershipResponse>> {
    return await this.createAndSendRequest(`/teams/${id}/members`);
  }

  public async getMemberForTeam(id: string, accountId: string): Promise<ITeamMemberActiveMembershipResponse> {
    return await this.createAndSendRequest(`/teams/${id}/members/${accountId}`);
  }

  public async getMemberMembershipsForTeam(id: string, accountId: string): Promise<IResultSetResponse<ITeamMemberMembershipResponse>> {
    return await this.createAndSendRequest(`/teams/${id}/members/${accountId}/memberships`);
  }

  public async getPermissionsForTeam(id: string): Promise<IResultSetResponse<ITeamPermissionResponse>> {
    return await this.createAndSendRequest(`/teams/${id}/permissions`);
  }

  public async getPermissionForTeam(id: string, key: string): Promise<ITeamPermissionResponse> {
    return await this.createAndSendRequest(`/teams/${id}/permissions/${key}`);
  }
}

import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import {
  ITeamResponse,
  IResultSetResponse,
  ITeamLinkRefResponse,
  ITeamMemberActiveMembershipResponse,
  ITeamMemberMembershipResponse,
  ITeamPermissionResponse
} from '../types';

export default class Teams extends Collection {
  public async post(options?: queryOptions.IDateRange): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeam(
    options?: queryOptions.IDateRange
  ): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putTeam(
    options?: queryOptions.IDateRange
  ): Promise<ITeamResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteTeam(options?: queryOptions.IDateRange): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamLinksForTeam(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamLinkRefResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getMembersForTeam(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamMemberActiveMembershipResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getMemberForTeam(
    options?: queryOptions.IDateRange
  ): Promise<ITeamMemberActiveMembershipResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getMemberMembershipsForTeam(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamMemberMembershipResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getPermissionsForTeam(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamPermissionResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getPermissionForTeam(
    options?: queryOptions.IDateRange
  ): Promise<ITeamPermissionResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import { ITeamLink } from '../requestTypes';
import {
  IResultSetResponse,
  ITeamLinkByScopeResponse,
  ITeamLinkResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class TeamLinks extends Collection {
  public async post(teamLink: ITeamLink): Promise<ITeamLinkResponse> {
    return await this.createAndSendRequest(`/team-links`, {
      body: teamLink,
      method: 'POST'
    });
  }

  public async getTeamLink(id: string): Promise<ITeamLinkResponse> {
    return await this.createAndSendRequest(`/team-links/${id}`);
  }

  public async deleteTeamLink(id: string): Promise<void> {
    await this.createAndSendRequest(`/team-links/${id}`, {
      method: 'DELETE'
    });
  }

  public async getForProject(
    projectKey: string
  ): Promise<IResultSetResponse<ITeamLinkByScopeResponse>> {
    return await this.createAndSendRequest(`/team-links/project/${projectKey}`);
  }
}

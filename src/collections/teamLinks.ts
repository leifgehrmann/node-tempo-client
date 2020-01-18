import { TeamLink } from '../requestTypes';
import {
  ResultSetResponse,
  TeamLinkByScopeResponse,
  TeamLinkResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class TeamLinks extends Collection {
  public async post(teamLink: TeamLink): Promise<TeamLinkResponse> {
    return this.createAndSendRequest('/team-links', {
      body: teamLink,
      method: 'POST',
    });
  }

  public async getTeamLink(id: string): Promise<TeamLinkResponse> {
    return this.createAndSendRequest(`/team-links/${id}`);
  }

  public async deleteTeamLink(id: string): Promise<void> {
    await this.createAndSendRequest(`/team-links/${id}`, {
      method: 'DELETE',
    });
  }

  public async getForProject(
    projectKey: string,
  ): Promise<ResultSetResponse<TeamLinkByScopeResponse>> {
    return this.createAndSendRequest(`/team-links/project/${projectKey}`);
  }
}

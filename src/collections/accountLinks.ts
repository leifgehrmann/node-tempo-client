import { IAccountLink } from '../requestTypes';
import {
  IAccountLinkByScopeResponse,
  IAccountLinkResponse,
  IResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountLinks extends Collection {
  public async post(accountLink: IAccountLink): Promise<IAccountLinkResponse> {
    return await this.createAndSendRequest('/account-links', {
      body: accountLink,
      method: 'POST',
    });
  }

  public async getAccountLink(id: string): Promise<IAccountLinkResponse> {
    return await this.createAndSendRequest(`/account-links/${id}`);
  }

  public async deleteAccountLink(id: string): Promise<void> {
    await this.createAndSendRequest(`/account-links/${id}`, {
      method: 'DELETE',
    });
  }

  public async getForProject(
    projectKey: string,
  ): Promise<IResultSetResponse<IAccountLinkByScopeResponse>> {
    return await this.createAndSendRequest(
      `/account-links/project/${projectKey}`,
    );
  }
}

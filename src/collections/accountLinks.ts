import { AccountLink } from '../requestTypes';
import {
  AccountLinkByScopeResponse,
  AccountLinkResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class AccountLinks extends Collection {
  public async post(accountLink: AccountLink): Promise<AccountLinkResponse> {
    return this.createAndSendRequest('/account-links', {
      body: accountLink,
      method: 'POST',
    });
  }

  public async getAccountLink(id: string): Promise<AccountLinkResponse> {
    return this.createAndSendRequest(`/account-links/${id}`);
  }

  public async deleteAccountLink(id: string): Promise<void> {
    await this.createAndSendRequest(`/account-links/${id}`, {
      method: 'DELETE',
    });
  }

  public async getForProject(
    projectKey: string,
  ): Promise<ResultSetResponse<AccountLinkByScopeResponse>> {
    return this.createAndSendRequest(
      `/account-links/project/${projectKey}`,
    );
  }
}

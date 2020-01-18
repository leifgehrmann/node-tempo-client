import * as queryOptions from '../queryOptionTypes';
import { Account } from '../requestTypes';
import {
  AccountLinkResponse,
  AccountResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Accounts extends Collection {
  public async post(account: Account): Promise<AccountResponse> {
    return this.createAndSendRequest('/accounts', {
      body: account,
      method: 'POST',
    });
  }

  public async get(
    options?: queryOptions.Status,
  ): Promise<ResultSetResponse<AccountResponse>> {
    return this.createAndSendRequest('/accounts', {
      query: options,
    });
  }

  public async getAccount(key: string): Promise<AccountResponse> {
    return this.createAndSendRequest(`/accounts/${key}`);
  }

  public async putAccount(
    key: string,
    account: Account,
  ): Promise<AccountResponse> {
    return this.createAndSendRequest(`/accounts/${key}`, {
      body: account,
      method: 'PUT',
    });
  }

  public async deleteAccount(key: string): Promise<void> {
    await this.createAndSendRequest(`/accounts/${key}`, {
      method: 'DELETE',
    });
  }

  public async getAccountLinksForAccount(
    key: string,
  ): Promise<ResultSetResponse<AccountLinkResponse>> {
    return this.createAndSendRequest(`/accounts/${key}/links`);
  }
}

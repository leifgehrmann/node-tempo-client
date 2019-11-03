import * as queryOptions from '../queryOptionTypes';
import { IAccount } from '../requestTypes';
import {
  IAccountLinkResponse,
  IAccountResponse,
  IResultSetResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Accounts extends Collection {
  public async post(account: IAccount): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/accounts`, {
      body: account,
      method: 'POST'
    });
  }

  public async get(
    options?: queryOptions.IStatus
  ): Promise<IResultSetResponse<IAccountResponse>> {
    return await this.createAndSendRequest(`/accounts`, {
      query: options
    });
  }

  public async getAccount(key: string): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/accounts/${key}`);
  }

  public async putAccount(key: string, account: IAccount): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/accounts/${key}`, {
      body: account,
      method: 'PUT'
    });
  }

  public async deleteAccount(key: string): Promise<void> {
    await this.createAndSendRequest(`/accounts/${key}`, {
      method: 'DELETE'
    });
  }

  public async getAccountLinksForAccount(
    key: string
  ): Promise<IResultSetResponse<IAccountLinkResponse>> {
    return await this.createAndSendRequest(`/accounts/${key}/links`);
  }
}

import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import {
  IAccountResponse,
  IResultSetResponse,
  IAccountLinkResponse
} from '../types';

export default class Accounts extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccount(
    options?: queryOptions.IDateRange
  ): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putAccount(
    options?: queryOptions.IDateRange
  ): Promise<IAccountResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteAccount(options?: queryOptions.IDateRange): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccountLinksForAccount(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountLinkResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import {
  IAccountLinkResponse,
  IResultSetResponse,
  IAccountLinkByScopeResponse
} from '../types';

export default class AccountLinks extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<IAccountLinkResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccountLink(
    options?: queryOptions.IDateRange
  ): Promise<IAccountLinkResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteAccountLink(
    options?: queryOptions.IDateRange
  ): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getForProject(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountLinkByScopeResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

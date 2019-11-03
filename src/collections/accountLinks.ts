import * as queryOptions from '../queryOptionTypes';
import {
  IAccountLinkByScopeResponse,
  IAccountLinkResponse,
  IResultSetResponse
} from '../responseTypes';
import Collection from './abstractCollection';

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

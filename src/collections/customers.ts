import * as queryOptions from '../queryOptionTypes';
import {
  IAccountResponse,
  ICustomerResponse,
  IResultSetResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Customers extends Collection {
  public async post(
    options?: queryOptions.IDateRange
  ): Promise<ICustomerResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ICustomerResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getCustomer(
    options?: queryOptions.IDateRange
  ): Promise<ICustomerResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putCustomer(
    options?: queryOptions.IDateRange
  ): Promise<ICustomerResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteCustomer(
    options?: queryOptions.IDateRange
  ): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getAccountsForCustomer(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IAccountResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

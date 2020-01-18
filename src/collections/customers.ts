import * as queryOptions from '../queryOptionTypes';
import { ICustomer } from '../requestTypes';
import {
  IAccountResponse,
  ICustomerResponse,
  IResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Customers extends Collection {
  public async post(customer: ICustomer): Promise<ICustomerResponse> {
    return await this.createAndSendRequest('/customers', {
      body: customer,
      method: 'POST',
    });
  }

  public async get(
    options?: queryOptions.IId,
  ): Promise<IResultSetResponse<ICustomerResponse>> {
    return await this.createAndSendRequest('/customers', {
      query: options,
    });
  }

  public async getCustomer(key: string): Promise<ICustomerResponse> {
    return await this.createAndSendRequest(`/customers/${key}`);
  }

  public async putCustomer(
    key: string,
    customer: ICustomer,
  ): Promise<ICustomerResponse> {
    return await this.createAndSendRequest(`/customers/${key}`, {
      body: customer,
      method: 'PUT',
    });
  }

  public async deleteCustomer(key: string): Promise<void> {
    await this.createAndSendRequest(`/customers/${key}`, {
      method: 'DELETE',
    });
  }

  public async getAccountsForCustomer(
    key: string,
  ): Promise<IResultSetResponse<IAccountResponse>> {
    return await this.createAndSendRequest(`/customers/${key}/accounts`);
  }
}

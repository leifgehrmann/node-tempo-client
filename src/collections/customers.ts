import * as queryOptions from '../queryOptionTypes';
import { Customer } from '../requestTypes';
import {
  AccountResponse,
  CustomerResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Customers extends Collection {
  public async post(customer: Customer): Promise<CustomerResponse> {
    return this.createAndSendRequest('/customers', {
      body: customer,
      method: 'POST',
    });
  }

  public async get(
    options?: queryOptions.Id,
  ): Promise<ResultSetResponse<CustomerResponse>> {
    return this.createAndSendRequest('/customers', {
      query: options,
    });
  }

  public async getCustomer(key: string): Promise<CustomerResponse> {
    return this.createAndSendRequest(`/customers/${key}`);
  }

  public async putCustomer(
    key: string,
    customer: Customer,
  ): Promise<CustomerResponse> {
    return this.createAndSendRequest(`/customers/${key}`, {
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
  ): Promise<ResultSetResponse<AccountResponse>> {
    return this.createAndSendRequest(`/customers/${key}/accounts`);
  }
}

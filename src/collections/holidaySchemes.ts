import * as queryOptions from '../queryOptionTypes';
import { Holiday, HolidayScheme } from '../requestTypes';
import {
  HolidaySchemeResponse,
  HolidayResponse,
  ResultSetResponse,
  UserResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class HolidaySchemes extends Collection {
  /**
   * Retrieve all holiday schemes
   */
  public async get(): Promise<ResultSetResponse<HolidaySchemeResponse>> {
    return this.createAndSendRequest('/holiday-schemes');
  }

  /**
   * Create a Holiday scheme
   */
  public async post(holidayScheme: HolidayScheme): Promise<HolidaySchemeResponse> {
    return this.createAndSendRequest('/holiday-schemes', {
      body: holidayScheme,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing holiday scheme
   */
  public async getHolidayScheme(id: string): Promise<HolidaySchemeResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}`);
  }

  /**
   * Update a holiday scheme
   */
  public async putHolidayScheme(
    id: string,
    holidayScheme: HolidayScheme,
  ): Promise<HolidaySchemeResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}`, {
      body: holidayScheme,
      method: 'PUT',
    });
  }

  /**
   * Delete a holiday scheme
   */
  public async deleteHolidayScheme(id: string): Promise<void> {
    return this.createAndSendRequest(`/holiday-schemes/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Set the default holiday scheme
   */
  public async putHolidaySchemeDefault(id: string): Promise<HolidaySchemeResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/default`, {
      method: 'PUT',
    });
  }

  /**
   * Retrieve holidays for an existing holiday scheme
   */
  public async getHolidaySchemeHolidays(
    id: string,
    options: queryOptions.Year,
  ): Promise<HolidayResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays`, {
      query: options,
    });
  }

  /**
   * Create a Holiday
   */
  public async postHolidaySchemeHoliday(id: string, holiday: Holiday): Promise<HolidayResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays`, {
      body: holiday,
      method: 'POST',
    });
  }

  /**
   * Retrieve an existing holiday
   */
  public async getHolidaySchemeHoliday(
    id: string,
    holidayId: string,
  ): Promise<HolidayResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays/${holidayId}`);
  }

  /**
   * Update a holiday
   */
  public async putHolidaySchemeHoliday(
    id: string,
    holidayId: string,
    holiday: Holiday,
  ): Promise<HolidayResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays/${holidayId}`, {
      body: holiday,
      method: 'PUT',
    });
  }

  /**
   * Delete a holiday
   */
  public async deleteHolidaySchemeHoliday(id: string, holidayId: string): Promise<void> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays/${holidayId}`, {
      method: 'DELETE',
    });
  }

  /**
   * Get members in a holiday scheme
   *
   * Note: Tempo.io documentation seems to be broken.
   */
  public async getHolidaySchemeMembers(id: string): Promise<ResultSetResponse<UserResponse>> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/members`);
  }

  /**
   * Assign a holiday scheme to members
   */
  public async postHolidaySchemeMembers(id: string, accountIds: string[]): Promise<void> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/members`, {
      body: { accountIds },
      method: 'POST',
    });
  }

  /**
   * Get user scheme
   */
  public async getForUser(
    accountId: string,
  ): Promise<ResultSetResponse<HolidaySchemeResponse>> {
    return this.createAndSendRequest(`/holiday-schemes/users/${accountId}`);
  }
}

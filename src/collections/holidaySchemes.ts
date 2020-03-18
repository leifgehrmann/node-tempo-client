import * as queryOptions from '../queryOptionTypes';
import {
  HolidaySchemeResponse,
  HolidayResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class HolidaySchemes extends Collection {
  public async get(): Promise<ResultSetResponse<HolidaySchemeResponse>> {
    return this.createAndSendRequest('/holiday-schemes');
  }

  public async getHolidayScheme(id: string): Promise<HolidaySchemeResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}`);
  }

  public async getHolidaySchemeHolidays(
    id: string,
    options: queryOptions.Year,
  ): Promise<HolidayResponse> {
    return this.createAndSendRequest(`/holiday-schemes/${id}/holidays`, {
      query: options,
    });
  }
}

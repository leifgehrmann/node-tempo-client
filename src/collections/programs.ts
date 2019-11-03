import * as queryOptions from '../queryOptionTypes';
import {
  IProgramResponse,
  IResultSetResponse,
  ITeamRefResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Programs extends Collection {
  public async get(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<IProgramResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async post(
    options?: queryOptions.IDateRange
  ): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getProgram(
    options?: queryOptions.IDateRange
  ): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async putProgram(
    options?: queryOptions.IDateRange
  ): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async deleteProgram(options?: queryOptions.IDateRange): Promise<void> {
    await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }

  public async getTeamsForProgram(
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITeamRefResponse>> {
    return await this.createAndSendRequest(`/periods`, {
      query: options
    });
  }
}

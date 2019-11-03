import * as queryOptions from '../queryOptions';
import Collection from './abstractCollection';
import {
  IResultSetResponse,
  IProgramResponse,
  ITeamRefResponse
} from '../types';

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

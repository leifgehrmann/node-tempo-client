import { IProgram } from '../requestTypes';
import {
  IProgramResponse,
  IResultSetResponse,
  ITeamRefResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Programs extends Collection {
  public async get(): Promise<IResultSetResponse<IProgramResponse>> {
    return await this.createAndSendRequest(`/programs`);
  }

  public async post(program: IProgram): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/programs`, {
      body: program,
      method: 'POST'
    });
  }

  public async getProgram(id: string): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/programs/${id}`);
  }

  public async putProgram(
    id: string,
    program: IProgram
  ): Promise<IProgramResponse> {
    return await this.createAndSendRequest(`/programs/${id}`, {
      body: program,
      method: 'PUT'
    });
  }

  public async deleteProgram(id: string): Promise<void> {
    await this.createAndSendRequest(`/programs/${id}`, {
      method: 'DELETE'
    });
  }

  public async getTeamsForProgram(
    id: string
  ): Promise<IResultSetResponse<ITeamRefResponse>> {
    return await this.createAndSendRequest(`/programs/${id}/teams`);
  }
}

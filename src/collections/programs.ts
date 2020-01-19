import { Program } from '../requestTypes';
import {
  ProgramResponse,
  ResultSetResponse,
  TeamRefResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Programs extends Collection {
  public async get(): Promise<ResultSetResponse<ProgramResponse>> {
    return this.createAndSendRequest('/programs');
  }

  public async post(program: Program): Promise<ProgramResponse> {
    return this.createAndSendRequest('/programs', {
      body: program,
      method: 'POST',
    });
  }

  public async getProgram(id: string): Promise<ProgramResponse> {
    return this.createAndSendRequest(`/programs/${id}`);
  }

  public async putProgram(
    id: string,
    program: Program,
  ): Promise<ProgramResponse> {
    return this.createAndSendRequest(`/programs/${id}`, {
      body: program,
      method: 'PUT',
    });
  }

  public async deleteProgram(id: string): Promise<void> {
    await this.createAndSendRequest(`/programs/${id}`, {
      method: 'DELETE',
    });
  }

  public async getTeamsForProgram(
    id: string,
  ): Promise<ResultSetResponse<TeamRefResponse>> {
    return this.createAndSendRequest(`/programs/${id}/teams`);
  }
}

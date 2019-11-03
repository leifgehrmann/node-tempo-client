import { IResultSetResponse, IWorkAttributeResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class WorkAttributes extends Collection {
  public async get(): Promise<IResultSetResponse<IWorkAttributeResponse>> {
    return await this.createAndSendRequest(`/work-attributes`);
  }

  public async getWorkAttribute(key: string): Promise<IWorkAttributeResponse> {
    return await this.createAndSendRequest(`/work-attributes/${key}`);
  }
}

import { ResultSetResponse, WorkAttributeResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class WorkAttributes extends Collection {
  public async get(): Promise<ResultSetResponse<WorkAttributeResponse>> {
    return this.createAndSendRequest('/work-attributes');
  }

  public async getWorkAttribute(key: string): Promise<WorkAttributeResponse> {
    return this.createAndSendRequest(`/work-attributes/${key}`);
  }
}

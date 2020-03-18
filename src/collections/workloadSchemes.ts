import {
  WorkloadSchemeResponse,
  ResultSetResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class WorkloadSchemes extends Collection {
  public async get(): Promise<ResultSetResponse<WorkloadSchemeResponse>> {
    return this.createAndSendRequest('/workload-schemes');
  }

  public async getWorkloadScheme(id: string): Promise<WorkloadSchemeResponse> {
    return this.createAndSendRequest(`/workload-schemes/${id}`);
  }
}

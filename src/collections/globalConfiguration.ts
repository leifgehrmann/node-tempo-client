import { GlobalConfigurationResponse } from '../responseTypes';
import Collection from './abstractCollection';

export default class GlobalConfiguration extends Collection {
  public async get(): Promise<GlobalConfigurationResponse> {
    return this.createAndSendRequest('/globalconfiguration');
  }
}

import Collection from './collection';

interface IWorkAttributeResponseObject {
  self: string;
  key: string;
  name: string;
  type: string;
  required: boolean;
  values: any;
}

interface IWorkAttributesResponseObject {
  self: string;
  metadata: {
    count: number;
  };
  results: IWorkAttributeResponseObject[];
}

export default class WorkAttributes extends Collection {
  public async get(): Promise<IWorkAttributesResponseObject> {
    return await this.createAndSendRequest(`/work-attributes`);
  }

  public async getWorkAttribute(
    key: string
  ): Promise<IWorkAttributeResponseObject> {
    return await this.createAndSendRequest(`/work-attributes/${key}`);
  }
}

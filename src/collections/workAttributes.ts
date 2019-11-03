import Collection from './collection';

export default class WorkAttributes extends Collection {
  public async get() {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/work-attributes`
        })
      )
    );
  }

  public async getWorkAttribute(key: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/work-attributes/${key}`
        })
      )
    );
  }
}

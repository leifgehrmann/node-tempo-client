import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Roles extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async post(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getRole(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async putRole(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async deleteRole(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }
}
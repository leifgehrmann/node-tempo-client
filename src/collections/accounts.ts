import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class Accounts extends Collection {
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

  public async getAccount(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async putAccount(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async deleteAccount(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getAccountLinksForAccount(options?: queryOptions.IDateRange) {
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

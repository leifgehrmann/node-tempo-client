import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class AccountLinks extends Collection {
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

  public async getAccountLink(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async deleteAccountLink(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/periods`,
          query: options
        })
      )
    );
  }

  public async getAccountLinkForProject(options?: queryOptions.IDateRange) {
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

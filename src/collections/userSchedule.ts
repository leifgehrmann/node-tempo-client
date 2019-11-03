import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class UserSchedule extends Collection {
  public async get(options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/user-schedule`
        })
      )
    );
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.IDateRange
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/user-schedule/${accountId}`,
          query: options
        })
      )
    );
  }
}

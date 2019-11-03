import * as queryOptions from '../queryOptions';
import Collection from './collection';

export default class TimesheetApprovals extends Collection {
  public async getWaiting(options?: queryOptions.IDateRange) {
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

  public async getReviewersForUser(
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

  public async postApproveTimesheetForUser(
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

  public async postRejectTimesheetForUser(
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

  public async postReopenTimesheetForUser(
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

  public async postSubmitTimesheetForUser(
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

  public async getForTeam(
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

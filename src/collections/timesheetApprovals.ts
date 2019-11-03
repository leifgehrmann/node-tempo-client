import * as queryOptions from '../queryOptions';
import Collection from './collection';

interface ITimesheetApproval {
  comment: string;
}

interface ITimesheetApprovalRequest {
  comment: string;
  reviewerAccountId: string;
}

export default class TimesheetApprovals extends Collection {
  public async getWaiting() {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/waiting`
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
          pathname: `/timesheet-approvals/user/${accountId}`,
          query: options
        })
      )
    );
  }

  public async getReviewersForUser(accountId: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/user/${accountId}/reviewers`
        })
      )
    );
  }

  public async postApproveTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/user/${accountId}/approve`,
          query: options
        }),
        {
          method: 'POST',
          body: timesheetApproval
        }
      )
    );
  }

  public async postRejectTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/user/${accountId}/reject`,
          query: options
        }),
        {
          method: 'POST',
          body: timesheetApproval
        }
      )
    );
  }

  public async postReopenTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/user/${accountId}/reopen`,
          query: options
        }),
        {
          method: 'POST',
          body: timesheetApproval
        }
      )
    );
  }

  public async postSubmitTimesheetForUser(
    accountId: string,
    timesheedApprovalRequest: ITimesheetApprovalRequest,
    options?: queryOptions.IDateRange
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/user/${accountId}/submit`,
          query: options
        }),
        {
          method: 'POST',
          body: timesheedApprovalRequest
        }
      )
    );
  }

  public async getForTeam(teamId: string, options?: queryOptions.IDateRange) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/timesheet-approvals/team/${teamId}`,
          query: options
        })
      )
    );
  }
}

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
    return await this.createAndSendRequest(`/timesheet-approvals/waiting`);
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.IDateRange
  ) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}`,
      {
        query: options
      }
    );
  }

  public async getReviewersForUser(accountId: string) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reviewers`
    );
  }

  public async postApproveTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/approve`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options
      }
    );
  }

  public async postRejectTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reject`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options
      }
    );
  }

  public async postReopenTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reopen`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options
      }
    );
  }

  public async postSubmitTimesheetForUser(
    accountId: string,
    timesheedApprovalRequest: ITimesheetApprovalRequest,
    options?: queryOptions.IDateRange
  ) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/submit`,
      {
        body: timesheedApprovalRequest,
        method: 'POST',
        query: options
      }
    );
  }

  public async getForTeam(teamId: string, options?: queryOptions.IDateRange) {
    return await this.createAndSendRequest(
      `/timesheet-approvals/team/${teamId}`,
      {
        query: options
      }
    );
  }
}

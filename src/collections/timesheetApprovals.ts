import * as queryOptions from '../queryOptionTypes';
import {
  IResultSetResponse,
  ITimesheetApproval,
  ITimesheetApprovalRequest,
  ITimesheetApprovalResponse,
  IUserResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class TimesheetApprovals extends Collection {
  public async getWaiting(): Promise<
    IResultSetResponse<ITimesheetApprovalResponse>
  > {
    return await this.createAndSendRequest(`/timesheet-approvals/waiting`);
  }

  public async getForUser(
    accountId: string,
    options?: queryOptions.IDateRange
  ): Promise<ITimesheetApprovalResponse> {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}`,
      {
        query: options
      }
    );
  }

  public async getReviewersForUser(
    accountId: string
  ): Promise<IResultSetResponse<IUserResponse>> {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reviewers`
    );
  }

  public async postApproveTimesheetForUser(
    accountId: string,
    timesheetApproval: ITimesheetApproval,
    options?: queryOptions.IDateRange
  ): Promise<ITimesheetApprovalResponse> {
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
  ): Promise<ITimesheetApprovalResponse> {
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
  ): Promise<ITimesheetApprovalResponse> {
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
  ): Promise<ITimesheetApprovalResponse> {
    return await this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/submit`,
      {
        body: timesheedApprovalRequest,
        method: 'POST',
        query: options
      }
    );
  }

  public async getForTeam(
    teamId: string,
    options?: queryOptions.IDateRange
  ): Promise<IResultSetResponse<ITimesheetApprovalResponse>> {
    return await this.createAndSendRequest(
      `/timesheet-approvals/team/${teamId}`,
      {
        query: options
      }
    );
  }
}

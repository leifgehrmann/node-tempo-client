import * as queryOptions from '../queryOptionTypes';
import { TimesheetApproval, TimesheetApprovalRequest } from '../requestTypes';
import {
  ResultSetResponse,
  TimesheetApprovalResponse,
  UserResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class TimesheetApprovals extends Collection {
  public async getWaiting(): Promise<
  ResultSetResponse<TimesheetApprovalResponse>
  > {
    return this.createAndSendRequest('/timesheet-approvals/waiting');
  }

  public async getForUser(
    accountId: string,
    options: queryOptions.DateRange,
  ): Promise<TimesheetApprovalResponse> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}`,
      {
        query: options,
      },
    );
  }

  public async getReviewersForUser(
    accountId: string,
  ): Promise<ResultSetResponse<UserResponse>> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reviewers`,
    );
  }

  public async postApproveTimesheetForUser(
    accountId: string,
    timesheetApproval: TimesheetApproval,
    options: queryOptions.DateRange,
  ): Promise<TimesheetApprovalResponse> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/approve`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options,
      },
    );
  }

  public async postRejectTimesheetForUser(
    accountId: string,
    timesheetApproval: TimesheetApproval,
    options: queryOptions.DateRange,
  ): Promise<TimesheetApprovalResponse> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reject`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options,
      },
    );
  }

  public async postReopenTimesheetForUser(
    accountId: string,
    timesheetApproval: TimesheetApproval,
    options: queryOptions.DateRange,
  ): Promise<TimesheetApprovalResponse> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/reopen`,
      {
        body: timesheetApproval,
        method: 'POST',
        query: options,
      },
    );
  }

  public async postSubmitTimesheetForUser(
    accountId: string,
    timesheetApprovalRequest: TimesheetApprovalRequest,
    options: queryOptions.DateRange,
  ): Promise<TimesheetApprovalResponse> {
    return this.createAndSendRequest(
      `/timesheet-approvals/user/${accountId}/submit`,
      {
        body: timesheetApprovalRequest,
        method: 'POST',
        query: options,
      },
    );
  }

  public async getForTeam(
    teamId: string,
    options: queryOptions.DateRange,
  ): Promise<ResultSetResponse<TimesheetApprovalResponse>> {
    return this.createAndSendRequest(
      `/timesheet-approvals/team/${teamId}`,
      {
        query: options,
      },
    );
  }
}

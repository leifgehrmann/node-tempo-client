export interface ITeam {
  name: string;
  summary?: string;
  leadAccountId?: string;
  programId?: number;
}

export interface ITimesheetApproval {
  comment: string;
}

export interface ITimesheetApprovalRequest {
  comment: string;
  reviewerAccountId: string;
}

export interface IWorklogAttribute {
  key: string;
  value: string;
}

export interface IWorklog {
  issueKey: string;
  timeSpentSeconds: number;
  billableSeconds: number;
  startDate: string;
  startTime: string;
  description?: string;
  authorAccountId: string;
  remainingEstimateSeconds: number;
  attributes: IWorklogAttribute[];
}

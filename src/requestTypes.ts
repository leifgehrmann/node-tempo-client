export interface IAccount {
  key: string;
  name: string;
  status: string;
  leadAccountId: string;
  contactAccountId?: string;
  externalContactName?: string;
  categoryKey?: string;
  customerKey?: string;
  monthlyBudget?: number;
  global?: boolean;
}

export interface IAccountLink {
  accountKey: string;
  scopeType: string;
  scopeId: number;
}

export interface ICustomer {
  key: string;
  name: string;
}

export interface IPlan {
  startDate: string;
  endDate: string;
  description?: string;
  plannedPerDaySeconds: number;
  includeNonWorkingDays?: boolean;
  rule?: string;
  recurrenceEndDate?: string;
  accountId: string;
  issueKey?: string;
  projectKey?: string;
}

export interface IProgram {
  name: string;
  managerAccountId?: string;
  teamIds?: number[];
}

export interface IRole {
  name: string;
}

export interface ITeamLink {
  teamId: number;
  scopeType: string;
  scopeId: string;
}

export interface ITeamMembership {
  roleId?: number;
  commitmentPercent?: number;
  from: string;
  to: string;
}

export interface ITeamMembershipNew extends ITeamMembership {
  teamId: number;
  accountId: string;
}

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

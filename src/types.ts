export interface ISelfResponse {
  self: string;
}

export interface IResultSetResponse<T> {
  self: string;
  metadata: {
    count: number;
  };
  results: T[];
}

export interface IPaginatedResultSetResponse<T> {
  self: string;
  metadata: {
    count: number;
    offset: number;
    limit: number;
    next: string;
    previous?: string;
  };
  results: T[];
}

export interface IAccountResponse {
  self: string;
  key: string;
  id: number;
  name: string;
  status: string;
  global: boolean;
  monthlyBudget: number;
  lead: IUserResponse;
  contact: IContactResponse;
  category: IAccountCategoryResponse;
  customer: ICustomerResponse;
  links: ISelfResponse;
}

export interface IAccountLinkResponse {
  self: string;
  id: number;
  scope: {
    self: string;
    id: number;
    type: string;
  };
  account: ISelfResponse;
}

export interface IAccountLinkByScopeResponse {
  self: string;
  id: number;
  scope: ISelfResponse;
  account: IAccountResponse;
}

export interface IAccountCategoryResponse {
  self: string;
  key: string;
  id: number;
  name: string;
  type: IAccountCategoryTypeResponse;
}

export interface IAccountCategoryTypeResponse {
  name: string;
}

export interface ICustomerResponse {
  self: string;
  key: string;
  id: number;
  name: string;
}

export interface IPlanResponse {
  self: string;
  id: number;
  startDate: string;
  endDate: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  assignee: {
    self: string;
    type: string;
  };
  planItem: {
    self: string;
    type: string;
  };
  recurrence: {
    rule: string;
    recurrenceEndDate: string;
  };
  dates: {
    metadata: {
      count: number;
      all: string;
    };
    values: IPlanPeriodResponse[];
  };
}

export interface IPeriodResponse {
  from: string;
  to: string;
}

export interface IPeriodsResponse {
  periods: IPeriodResponse[];
}

export interface IPlanPeriodResponse extends IPeriodResponse {
  timePlannedSeconds: number;
}

export interface ITimesheetApproval {
  comment: string;
}

export interface ITimesheetApprovalRequest {
  comment: string;
  reviewerAccountId: string;
}

export interface IUserResponse {
  self: string;
  accountId: string;
  displayName: string;
}

export interface IContactResponse extends IUserResponse {
  type: string;
}

export interface ITimesheetApprovalResponse {
  self: string;
  period: IPeriodResponse;
  requiredSeconds: number;
  timeSpentSeconds: number;
  status: {
    key: string;
    comment: string;
    actor: IUserResponse;
    requiredSecondsAtSubmit: number;
    timeSpentSecondsAtSubmit: number;
    updatedAt: string;
  };
  user: IUserResponse;
  actions: {
    submit: ISelfResponse;
    approve: ISelfResponse;
    reject: ISelfResponse;
    reopen: ISelfResponse;
  };
  worklogs: ISelfResponse;
}

export interface IDayScheduleResponse {
  date: string;
  requiredSeconds: number;
  type: string;
  holiday?: {
    name: string;
    description?: string;
    durationSeconds: number;
  };
}

export interface IWorkAttributeResponse {
  self: string;
  key: string;
  name: string;
  type: string;
  required: boolean;
  values: any;
}

export interface IWorklogResponse {
  self: string;
  tempoWorklogId: number;
  jiraWorklogId: number;
  issue: {
    self: string;
    key: string;
  };
  timeSpentSeconds: number;
  billableSeconds: number;
  startDate: string;
  startTime: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  author: IUserResponse;
  attributes: {
    self: string;
    values: IWorklogAttributeObject[];
  };
}

export interface ITeam {
  name: string;
  summary?: string;
  leadAccountId?: string;
  programId?: number;
}

export interface ITeamResponse {
  self: string;
  id: number;
  name: string;
  summary?: string;
  lead?: IUserResponse;
  program: {
    self: string;
    id: number;
    name: string;
  };
  links: ISelfResponse;
  members: ISelfResponse;
  permissions: ISelfResponse;
}

export interface ITeamLinkResponse {
  self: string;
  id: number;
  scope: {
    self: string;
    id: number;
    type: string;
  };
  team: {
    self: string;
    id: number;
    name: string;
  };
}

export interface ITeamLinkRefResponse {
  self: string;
  id: number;
  scope: {
    self: string;
    id: number;
    type: string;
  };
  team: ISelfResponse;
}

export interface ITeamLinkByScopeResponse {
  self: string;
  id: number;
  scope: {
    self: string;
  };
  team: ITeamResponse;
}

export interface ITeamMemberActiveMembershipResponse {
  self: string;
  team: ISelfResponse;
  member: IUserResponse;
  memberships: {
    self: ISelfResponse;
    active: {
      self: string;
      id: number;
      commitmentPercent: number;
      from: string;
      to: string;
      role: IRoleResponse;
    };
  };
}

export interface ITeamMemberMembershipResponse {
  self: string;
  id: number;
  commitmentPercent: number;
  from?: string;
  to?: string;
  role: IRoleResponse;
  team: ISelfResponse;
  member: ISelfResponse;
}

export interface ITeamMemberMembershipFullResponse {
  self: string;
  id: number;
  commitmentPercent: number;
  from?: string;
  to?: string;
  role: IRoleResponse;
  team: {
    self: string;
    id: number;
    name: string;
  };
  member: IUserResponse;
}

export interface ITeamPermissionResponse {
  self: string;
  key: string;
  users: {
    self: string;
    values: IUserResponse[];
  };
}

export interface IRoleResponse {
  self: string;
  id: number;
  name: string;
}

export interface IRoleWithDefaultResponse extends IRoleResponse {
  default: boolean;
}

export interface ITeamRefResponse {
  self: string;
  id: number;
  name: string;
}

export interface IProgramResponse {
  self: string;
  id: number;
  name: string;
  manager: IUserResponse;
  teams: {
    self: string;
    values: ITeamRefResponse[];
  };
};

export interface IWorklogAttributeObject {
  key: string;
  value: string;
}

export interface IWorklogObject {
  issueKey: string;
  timeSpentSeconds: number;
  billableSeconds: number;
  startDate: string;
  startTime: string;
  description?: string;
  authorAccountId: string;
  remainingEstimateSeconds: number;
  attributes: IWorklogAttributeObject[];
}

export interface IQueryOptionIssue {
  issue: string[];
}
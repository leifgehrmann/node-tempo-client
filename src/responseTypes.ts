import { WorkAttribute, WorklogAttributeValue } from './requestTypes';

export interface SelfResponse {
  self: string;
}

export interface ResultSetResponse<T> {
  self: string;
  metadata: {
    count: number;
  };
  results: T[];
}

export interface PaginatedResultSetResponse<T> {
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

export interface AccountResponse {
  self: string;
  key: string;
  id: number;
  name: string;
  status: string;
  global: boolean;
  monthlyBudget: number;
  lead: UserResponse;
  contact: ContactResponse;
  category: AccountCategoryResponse;
  customer: CustomerResponse;
  links: SelfResponse;
}

export interface AccountLinkResponse {
  self: string;
  id: number;
  scope: {
    self: string;
    id: number;
    type: string;
  };
  account: SelfResponse;
}

export interface AccountLinkByScopeResponse {
  self: string;
  id: number;
  scope: SelfResponse;
  account: AccountResponse;
}

export interface AccountCategoryResponse {
  self: string;
  key: string;
  id: number;
  name: string;
  type: AccountCategoryTypeResponse;
}

export interface AccountCategoryTypeResponse {
  name: string;
}

export interface CustomerResponse {
  self: string;
  key: string;
  id: number;
  name: string;
}

export interface PlanResponse {
  self: string;
  id: number;
  startDate: string;
  endDate: string;
  secondsPerDay: number;
  includeNonWorkingDays: boolean;
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
    values: PlanPeriodResponse[];
  };
}

export interface PeriodResponse {
  from: string;
  to: string;
}

export interface PeriodsResponse {
  periods: PeriodResponse[];
}

export interface PlanPeriodResponse extends PeriodResponse {
  timePlannedSeconds: number;
}

export interface UserResponse {
  self: string;
  accountId: string;
  displayName: string;
}

export interface ContactResponse extends UserResponse {
  type: string;
}

export interface TimesheetApprovalResponse {
  self: string;
  period: PeriodResponse;
  requiredSeconds: number;
  timeSpentSeconds: number;
  status: {
    key: string;
    comment: string;
    actor: UserResponse;
    requiredSecondsAtSubmit: number;
    timeSpentSecondsAtSubmit: number;
    updatedAt: string;
  };
  user: UserResponse;
  actions: {
    submit: SelfResponse;
    approve: SelfResponse;
    reject: SelfResponse;
    reopen: SelfResponse;
  };
  worklogs: SelfResponse;
}

export interface DayScheduleResponse {
  date: string;
  requiredSeconds: number;
  type: string;
  holiday?: {
    name: string;
    description?: string;
    durationSeconds: number;
  };
}

export interface WorkAttributeResponse extends WorkAttribute {
  self: string;
}

export interface WorklogResponse {
  self: string;
  tempoWorklogId: number;
  jiraWorklogId?: number;
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
  author: UserResponse;
  attributes: {
    self: string;
    values: WorklogAttributeValue[];
  };
}

export interface TeamResponse {
  self: string;
  id: number;
  name: string;
  summary?: string;
  lead?: UserResponse;
  program: {
    self: string;
    id: number;
    name: string;
  };
  links: SelfResponse;
  members: SelfResponse;
  permissions: SelfResponse;
}

export interface TeamLinkResponse {
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

export interface TeamLinkRefResponse {
  self: string;
  id: number;
  scope: {
    self: string;
    id: number;
    type: string;
  };
  team: SelfResponse;
}

export interface TeamLinkByScopeResponse {
  self: string;
  id: number;
  scope: {
    self: string;
  };
  team: TeamResponse;
}

export interface TeamMemberActiveMembershipResponse {
  self: string;
  team: SelfResponse;
  member: UserResponse;
  memberships: {
    self: SelfResponse;
    active: {
      self: string;
      id: number;
      commitmentPercent: number;
      from: string;
      to: string;
      role: RoleResponse;
    };
  };
}

export interface TeamMemberMembershipResponse {
  self: string;
  id: number;
  commitmentPercent: number;
  from?: string;
  to?: string;
  role: RoleResponse;
  team: SelfResponse;
  member: SelfResponse;
}

export interface TeamMemberMembershipFullResponse {
  self: string;
  id: number;
  commitmentPercent: number;
  from?: string;
  to?: string;
  role: RoleResponse;
  team: {
    self: string;
    id: number;
    name: string;
  };
  member: UserResponse;
}

export interface TeamPermissionResponse {
  self: string;
  key: string;
  users: {
    self: string;
    values: UserResponse[];
  };
}

export interface RoleResponse {
  self: string;
  id: number;
  name: string;
}

export interface RoleWithDefaultResponse extends RoleResponse {
  default: boolean;
}

export interface TeamRefResponse {
  self: string;
  id: number;
  name: string;
}

export interface ProgramResponse {
  self: string;
  id: number;
  name: string;
  manager: UserResponse;
  teams: {
    self: string;
    values: TeamRefResponse[];
  };
}

export interface HolidaySchemeResponse {
  self: string;
  id: number;
  name: string;
  description?: string;
  defaultScheme: boolean;
  memberCount: number;
}

export interface HolidayResponse {
  name: string;
  description?: string;
  durationSeconds: number;
  date: string;
}

export interface WorkloadSchemeResponse {
  self: string;
  id: number;
  name: string;
  description?: string;
  defaultScheme: boolean;
  memberCount: number;
  days: WorkloadSchemeDayResponse[];
}

export interface WorkloadSchemeDayResponse {
  day: string;
  requiredSeconds: number;
}

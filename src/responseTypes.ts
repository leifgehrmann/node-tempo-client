import {
  Holiday,
  HolidayScheme,
  WorkAttribute,
  WorklogAttributeValue,
} from './requestTypes';

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
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
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
    type: 'PROJECT';
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

export interface PermissionRoleResponse {
  self: string;
  id: number;
  name: string;
  permissions: {
    key: string;
  }[];
  permittedUsers: UserResponse[];
  accessType: 'TEAM' | 'GLOBAL'; /* Note: GLOBAL permission roles don't have entities. */
  accessEntities: {
    self: string;
    id: number;
  }[];
  editable: boolean;
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
    type: 'USER' | 'TEAM';
  };
  planItem: {
    self: string;
    type: 'ISSUE' | 'PROJECT';
  };
  recurrence: {
    // Tempo.io Documentation claims 'BIWEEKLY' does not have an underscore, unlike the request
    // type for Plan in requestTypes.ts. If this is incorrect, report a bug.
    rule: 'NEVER' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY';
    recurrenceEndDate: string;
  };
  dates: {
    metadata: {
      count: number;
      all: string;
    };
    values: PlanPeriodResponse[];
  };
  // Is included only if there is an approval linked to the plan.
  planApproval?: {
    status: 'REQUESTED' | 'REJECTED' | 'APPROVED';
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
    key: 'OPEN' | 'IN_REVIEW' | 'APPROVED';
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
  type: 'WORKING_DAY' | 'NON_WORKING_DAY' | 'HOLIDAY' | 'HOLIDAY_AND_NON_WORKING_DAY';
  holiday?: {
    name: string;
    description?: string;
    durationSeconds: number;
  };
}

export interface WorkAttributeResponse extends WorkAttribute {
  // Tempo.io Documentation claims the `type` property will not be 'ACCOUNT'. This is probably a
  // mistake on their part, but if it is not, please report a bug.
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
    type: 'BOARD' | 'PROJECT';
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
    type: 'BOARD' | 'PROJECT';
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

export interface GlobalConfigurationResponse {
  allowLoggingOnClosedAccount: boolean;
  approvalPeriod: 'WEEK' | 'MONTH';
  approvalWeekStart: number; // 1 is monday, 7 is sunday.
  maxHoursPerDayPerUser: null | number;
  numberOfDaysAllowedIntoFuture: number;
  remainingEstimateOptional: boolean;
  weekStart: number; // 1 is monday, 7 is sunday.
  worklogDescriptionOptional: boolean;
}

export interface HolidayResponse extends Holiday {
  self: string;
  id: number;
  schemaId: number;
}

export interface HolidaySchemeResponse extends HolidayScheme {
  self: string;
  id: number;
  defaultScheme: boolean;
  memberCount: number;
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

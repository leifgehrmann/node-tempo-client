export interface Account {
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

export interface AccountCategory {
  key: string;
  name: string;
  typeName?: string;
}

export interface AccountLink {
  accountKey: string;
  scopeType: string;
  scopeId: number;
}

export interface Customer {
  key: string;
  name: string;
}

export interface Plan {
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

export interface Program {
  name: string;
  managerAccountId?: string;
  teamIds?: number[];
}

export interface Role {
  name: string;
}

export interface TeamLink {
  teamId: number;
  scopeType: string;
  scopeId: string;
}

export interface TeamMembership {
  roleId?: number;
  commitmentPercent?: number;
  from: string;
  to: string;
}

export interface TeamMembershipNew extends TeamMembership {
  teamId: number;
  accountId: string;
}

export interface Team {
  name: string;
  summary?: string;
  leadAccountId?: string;
  programId?: number;
}

export interface TimesheetApproval {
  comment: string;
}

export interface TimesheetApprovalRequest {
  comment: string;
  reviewerAccountId: string;
}

export interface WorkloadSchemeDay {
  day: string;
  requiredSeconds: number;
}

export interface WorkloadScheme {
  name: string;
  description?: string;
  days: WorkloadSchemeDay[]
}

export interface WorkAttribute {
  key: string;
  name: string;
  type: 'ACCOUNT' | 'CHECKBOX' | 'INPUT_FIELD' | 'INPUT_NUMERIC' | 'STATIC_LIST';
  required: boolean; // Tempo.io documentation claims this defaults to false, but is still required
  values?: string[]; // Only required for 'STATIC_LIST' attribute types
}

export interface WorklogAttributeValue {
  key: string;
  value: unknown; // Tempo.io documentation defines this as 'any', but not clearly defined
}

export interface Worklog {
  issueKey: string;
  timeSpentSeconds: number;
  billableSeconds?: number; // Tempo.io documentation is unclear whether this field is required
  startDate: string;
  startTime: string;
  description?: string;
  authorAccountId: string;
  remainingEstimateSeconds?: number;
  attributes?: WorklogAttributeValue[];
}

export interface WorklogAttributeValues {
  tempoWorklogId: number;
  attributeValues: WorklogAttributeValue[];
}

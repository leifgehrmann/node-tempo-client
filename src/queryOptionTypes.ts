export interface Pagination {
  offset: string;
  limit: string;
}

export interface UpdatedFrom {
  updatedFrom: string;
}

export interface DateRange {
  from: string;
  to: string;
}

export interface Issues {
  issue: string[];
}

export interface Status {
  status: string;
}

export interface Id {
  id: number;
}

export interface AssigneeType {
  assigneeType: string;
}

export interface PlanItemType {
  planItemType: string;
}

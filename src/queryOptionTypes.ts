export interface IStringMap {
  [s: string]: any;
}

export interface IPagination extends IStringMap {
  offset: string;
  limit: string;
}

export interface IUpdatedFrom extends IStringMap {
  updatedFrom: string;
}

export interface IDateRange extends IStringMap {
  from: string;
  to: string;
}

export interface IIssues {
  issue: string[];
}

export interface IId extends IStringMap {
  id: number;
}

export interface IAssigneeType extends IStringMap {
  assigneeType: string;
}

export interface IPlanItemType extends IStringMap {
  planItemType: string;
}

export interface StringMap {
  // Needs to be 'any' for it to be compatible with UrlOptions in builder.ts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Pagination extends StringMap {
  offset: string;
  limit: string;
}

export interface UpdatedFrom extends StringMap {
  updatedFrom: string;
}

export interface DateRange extends StringMap {
  from: string;
  to: string;
}

export interface Issues {
  issue: string[];
}

export interface Status extends StringMap {
  status: string;
}

export interface Id extends StringMap {
  id: number;
}

export interface AssigneeType extends StringMap {
  assigneeType: string;
}

export interface PlanItemType extends StringMap {
  planItemType: string;
}

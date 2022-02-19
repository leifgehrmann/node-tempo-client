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

export interface Projects {
  project: string[];
}

export interface Status extends StringMap {
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
}

export interface Id extends StringMap {
  id: number;
}

export interface Ids extends StringMap {
  ids: number[];
}

export interface AssigneeType extends StringMap {
  assigneeType: string;
}

export interface PlanItemType extends StringMap {
  planItemType: string;
}

export interface Year extends StringMap {
  year: number;
}

export interface TeamId extends StringMap {
  teamId: number;
}

// `Only` and `Either` allow us to create parameters that require
// one or the other type, but not both at the same time.
// Borrowed from https://stackoverflow.com/a/66605669
export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

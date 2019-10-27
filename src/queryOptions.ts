export interface IStringMap {
  [s: string]: string;
}

export interface IPaginationFrom extends IStringMap {
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

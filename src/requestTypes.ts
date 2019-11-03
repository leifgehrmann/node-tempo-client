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

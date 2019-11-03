import * as queryOptions from '../queryOptions';
import Collection from './collection';

export interface IQueryOptionIssue {
  issue: string[];
}

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

export interface IWorklogResponseObject {
  self: string;
  tempoWorklogId: number;
  jiraWorklogId: number;
  issueKey: {
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
  author: {
    self: string;
    accountId: string;
    displayName: string;
  };
  attributes: {
    self: string;
    values: IWorklogAttributeObject[];
  };
}

export interface IWorklogAttributeValuesResponseObject {
  self: string;
  metadata: {
    count: number;
  };
  results: IWorklogAttributeObject[];
}

export interface IWorklogsResponseObject {
  self: string;
  metadata: {
    count: number;
    offset: number;
    limit: number;
    next: string;
    previous?: string;
  };
  results: IWorklogResponseObject[];
}

export default class Worklogs extends Collection {
  public async get(
    options?: Partial<
      IQueryOptionIssue &
        queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs`, {
      query: options
    });
  }

  public async post(worklog: IWorklogObject): Promise<IWorklogResponseObject> {
    return await this.createAndSendRequest(`/worklogs`, {
      body: worklog,
      method: 'POST'
    });
  }

  public async getWorklog(worklogId: string): Promise<IWorklogResponseObject> {
    return await this.createAndSendRequest(`/worklogs/${worklogId}`);
  }

  public async putWorklog(
    worklogId: string,
    worklog: IWorklogObject
  ): Promise<IWorklogResponseObject> {
    return await this.createAndSendRequest(`/worklogs/${worklogId}`, {
      body: worklog,
      method: 'PUT'
    });
  }

  public async deleteWorklog(worklogId: string): Promise<void> {
    await this.createAndSendRequest(`/worklogs/${worklogId}`, {
      method: 'DELETE'
    });
  }

  public async getWorklogWorkAttributeValues(
    worklogId: string
  ): Promise<IWorklogAttributeValuesResponseObject> {
    return await this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values`
    );
  }

  public async getWorklogWorkAttributeValuesByKey(
    worklogId: string,
    key: string
  ): Promise<IWorklogAttributeObject> {
    return await this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values/${key}`
    );
  }

  public async getForJiraWorklog(
    jiraWorklogId: string
  ): Promise<IWorklogResponseObject> {
    return await this.createAndSendRequest(`/worklogs/jira/${jiraWorklogId}`);
  }

  public async getForJiraFilter(
    jiraFilterId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(
      `/worklogs/jira/filter/${jiraFilterId}`,
      {
        query: options
      }
    );
  }

  public async getForAccount(
    accountKey: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs/account/${accountKey}`, {
      query: options
    });
  }

  public async getForProject(
    projectKey: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs/project/${projectKey}`, {
      query: options
    });
  }

  public async getForTeam(
    teamId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs/team/${teamId}`, {
      query: options
    });
  }

  public async getForUser(
    accountId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs/user/${accountId}`, {
      query: options
    });
  }

  public async getForIssue(
    key: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IWorklogsResponseObject> {
    return await this.createAndSendRequest(`/worklogs/issue/${key}`, {
      query: options
    });
  }
}

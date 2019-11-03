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

export default class Worklogs extends Collection {
  public async get(
    options?: Partial<
      IQueryOptionIssue &
        queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs`,
          query: options
        })
      )
    );
  }

  public async post(worklog: IWorklogObject) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs`
        }),
        {
          body: worklog,
          method: 'POST'
        }
      )
    );
  }

  public async getWorklog(worklogId: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/${worklogId}`
        })
      )
    );
  }

  public async putWorklog(worklogId: string, worklog: IWorklogObject) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/${worklogId}`
        }),
        {
          body: worklog,
          method: 'PUT'
        }
      )
    );
  }

  public async deleteWorklog(worklogId: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/${worklogId}`
        }),
        { method: 'DELETE' }
      )
    );
  }

  public async getWorklogWorkAttributeValues(worklogId: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/${worklogId}/work-attribute-values`
        })
      )
    );
  }

  public async getWorklogWorkAttributeValuesByKey(
    worklogId: string,
    key: string
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/${worklogId}/work-attribute-values/${key}`
        })
      )
    );
  }

  public async getForJiraWorklog(jiraWorklogId: string) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/jira/${jiraWorklogId}`
        })
      )
    );
  }

  public async getForJiraFilter(
    jiraFilterId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/jira/filter/${jiraFilterId}`,
          query: options
        })
      )
    );
  }

  public async getForAccount(
    accountKey: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/account/${accountKey}`,
          query: options
        })
      )
    );
  }

  public async getForProject(
    projectKey: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/project/${projectKey}`,
          query: options
        })
      )
    );
  }

  public async getForTeam(
    teamId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/team/${teamId}`,
          query: options
        })
      )
    );
  }

  public async getForUser(
    accountId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/user/${accountId}`,
          query: options
        })
      )
    );
  }

  public async getForIssue(
    key: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ) {
    return await this.requestHandler.doRequest(
      this.requestHandler.makeRequestHeader(
        this.requestHandler.makeUri({
          pathname: `/worklogs/issue/${key}`,
          query: options
        })
      )
    );
  }
}

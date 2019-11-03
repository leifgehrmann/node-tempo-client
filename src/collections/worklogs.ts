import * as queryOptions from '../queryOptionTypes';
import { IWorklog, IWorklogAttribute } from '../requestTypes';
import {
  IPaginatedResultSetResponse,
  IResultSetResponse,
  IWorklogResponse
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Worklogs extends Collection {
  public async get(
    options?: Partial<
      queryOptions.IIssues &
        queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
    return await this.createAndSendRequest(`/worklogs`, {
      query: options
    });
  }

  public async post(worklog: IWorklog): Promise<IWorklogResponse> {
    return await this.createAndSendRequest(`/worklogs`, {
      body: worklog,
      method: 'POST'
    });
  }

  public async getWorklog(worklogId: string): Promise<IWorklogResponse> {
    return await this.createAndSendRequest(`/worklogs/${worklogId}`);
  }

  public async putWorklog(
    worklogId: string,
    worklog: IWorklog
  ): Promise<IWorklogResponse> {
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
  ): Promise<IResultSetResponse<IWorklogAttribute>> {
    return await this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values`
    );
  }

  public async getWorklogWorkAttributeValuesByKey(
    worklogId: string,
    key: string
  ): Promise<IWorklogAttribute> {
    return await this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values/${key}`
    );
  }

  public async getForJiraWorklog(
    jiraWorklogId: string
  ): Promise<IWorklogResponse> {
    return await this.createAndSendRequest(`/worklogs/jira/${jiraWorklogId}`);
  }

  public async getForJiraFilter(
    jiraFilterId: string,
    options?: Partial<
      queryOptions.IDateRange &
        queryOptions.IUpdatedFrom &
        queryOptions.IPagination
    >
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
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
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
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
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
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
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
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
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
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
  ): Promise<IPaginatedResultSetResponse<IWorklogResponse>> {
    return await this.createAndSendRequest(`/worklogs/issue/${key}`, {
      query: options
    });
  }
}

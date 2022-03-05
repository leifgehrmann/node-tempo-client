import * as queryOptions from '../queryOptionTypes';
import { Worklog, WorklogAttributeValue, WorklogAttributeValues } from '../requestTypes';
import {
  PaginatedResultSetResponse,
  ResultSetResponse,
  WorklogResponse,
} from '../responseTypes';
import Collection from './abstractCollection';

export default class Worklogs extends Collection {
  public async get(
    options?: Partial<
    queryOptions.Issues &
    queryOptions.Projects &
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest('/worklogs', {
      query: options,
    });
  }

  public async post(worklog: Worklog): Promise<WorklogResponse> {
    return this.createAndSendRequest('/worklogs', {
      body: worklog,
      method: 'POST',
    });
  }

  public async getWorklog(worklogId: string): Promise<WorklogResponse> {
    return this.createAndSendRequest(`/worklogs/${worklogId}`);
  }

  public async putWorklog(
    worklogId: string,
    worklog: Worklog,
  ): Promise<WorklogResponse> {
    return this.createAndSendRequest(`/worklogs/${worklogId}`, {
      body: worklog,
      method: 'PUT',
    });
  }

  public async deleteWorklog(worklogId: string): Promise<void> {
    await this.createAndSendRequest(`/worklogs/${worklogId}`, {
      method: 'DELETE',
    });
  }

  public async getWorklogWorkAttributeValues(
    worklogId: string,
  ): Promise<ResultSetResponse<WorklogAttributeValue>> {
    return this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values`,
    );
  }

  public async getWorklogWorkAttributeValuesByKey(
    worklogId: string,
    key: string,
  ): Promise<WorklogAttributeValue> {
    return this.createAndSendRequest(
      `/worklogs/${worklogId}/work-attribute-values/${key}`,
    );
  }

  public async getForJiraWorklog(
    jiraWorklogId: string,
  ): Promise<WorklogResponse> {
    return this.createAndSendRequest(`/worklogs/jira/${jiraWorklogId}`);
  }

  public async getForJiraFilter(
    jiraFilterId: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(
      `/worklogs/jira/filter/${jiraFilterId}`,
      {
        query: options,
      },
    );
  }

  public async getForAccount(
    accountKey: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(`/worklogs/account/${accountKey}`, {
      query: options,
    });
  }

  public async getForProject(
    projectKey: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(`/worklogs/project/${projectKey}`, {
      query: options,
    });
  }

  public async getForTeam(
    teamId: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(`/worklogs/team/${teamId}`, {
      query: options,
    });
  }

  public async getForUser(
    accountId: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(`/worklogs/user/${accountId}`, {
      query: options,
    });
  }

  public async getForIssue(
    key: string,
    options?: Partial<
    queryOptions.DateRange &
    queryOptions.UpdatedFromDate &
    queryOptions.Pagination
    >,
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest(`/worklogs/issue/${key}`, {
      query: options,
    });
  }

  /**
   * Bulk create work attribute values for worklogs
   */
  public async postWorkAttributeValues(
    worklogAttributeValuesList: WorklogAttributeValues[],
  ): Promise<PaginatedResultSetResponse<WorklogResponse>> {
    return this.createAndSendRequest('/worklogs/work-attribute-values', {
      body: worklogAttributeValuesList,
      method: 'POST',
    });
  }
}

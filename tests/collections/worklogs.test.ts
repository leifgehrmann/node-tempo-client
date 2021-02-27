import Worklogs from '../../src/collections/worklogs';
import { WorklogAttributeValues } from '../../src/requestTypes';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(Worklogs);

describe('Worklogs', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs',
      );
    });

    it('get hits proper url with array of issues to lookup', async () => {
      const result = await mockUrlCall.call('get', [
        {
          issue: ['someIssueA', 'someIssueB'],
          project: ['someProjectA', 'someProjectB'],
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs?issue=someIssueA&issue=someIssueB&project=someProjectA&project=someProjectB&from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('post hits proper url and method', async () => {
      const worklog = {
        timeSpentSeconds: 1234,
      };
      const result = await mockUrlCall.call('post', [worklog]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs',
      );
      expect(result.method).toEqual('POST');
      expect(result.body).toEqual(worklog);
    });

    it('getWorklog hits proper url', async () => {
      const result = await mockUrlCall.call('getWorklog', ['someWorklogId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId',
      );
    });

    it('putWorklog hits proper url and method', async () => {
      const worklog = {
        timeSpentSeconds: 5678,
      };
      const result = await mockUrlCall.call('putWorklog', [
        'someWorklogId',
        worklog,
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId',
      );
      expect(result.method).toEqual('PUT');
      expect(result.body).toEqual(worklog);
    });

    it('deleteWorklog hits proper url and method', async () => {
      const result = await mockUrlCall.call('deleteWorklog', ['someWorklogId']);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId',
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getWorklogWorkAttributeValues hits proper url', async () => {
      const result = await mockUrlCall.call('getWorklogWorkAttributeValues', [
        'someWorklogId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values',
      );
    });

    it('getWorklogWorkAttributeValuesByKey hits proper url', async () => {
      const result = await mockUrlCall.call(
        'getWorklogWorkAttributeValuesByKey',
        ['someWorklogId', 'someKey'],
      );
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values/someKey',
      );
    });

    it('getForJiraWorklog hits proper url', async () => {
      const result = await mockUrlCall.call('getForJiraWorklog', [
        'someJiraWorklogId',
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/jira/someJiraWorklogId',
      );
    });

    it('getForJiraFilter hits proper url', async () => {
      const result = await mockUrlCall.call('getForJiraFilter', [
        'someJiraFilterId',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/filter/someJiraFilterId?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('getForAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getForAccount', [
        'someAccountKey',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/account/someAccountKey?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('getForProject hits proper url', async () => {
      const result = await mockUrlCall.call('getForProject', [
        'someProjectKey',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/project/someProjectKey?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('getForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getForTeam', [
        'someTeamId',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/team/someTeamId?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/user/someAccountId?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('getForIssue hits proper url', async () => {
      const result = await mockUrlCall.call('getForIssue', [
        'someKey',
        {
          from: '2019-01-01',
          to: '2019-01-31',
          updatedFrom: '2019-01-01',
          offset: 5,
          limit: 5,
        },
      ]);
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/issue/someKey?from=2019-01-01&to=2019-01-31&updatedFrom=2019-01-01&offset=5&limit=5',
      );
    });

    it('postWorkAttributeValues hits proper url and method', async () => {
      const worklogAttributeValuesList: WorklogAttributeValues[] = [
        {
          tempoWorklogId: 10100,
          attributeValues: [
            {
              key: '_COLOR_',
              value: 'red',
            },
          ],
        },
        {
          tempoWorklogId: 10101,
          attributeValues: [
            {
              key: '_DELIVERED_',
              value: true,
            },
            {
              key: '_EXTERNALREF_',
              value: 'EXT-44556',
            },
          ],
        },
      ];
      const result = await mockUrlCall.call(
        'postWorkAttributeValues',
        [worklogAttributeValuesList],
      );
      expect(result.url).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/work-attribute-values',
      );
      expect(result.method).toEqual('POST');
      expect(result.body).toEqual(worklogAttributeValuesList);
    });
  });
});

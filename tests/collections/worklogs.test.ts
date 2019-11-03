import RequestHandler from '../../src/request/handler';
import Worklogs from '../../src/collections/worklogs';
import MockUrlCall from './mockUrlCall';
import { getMockRequestHandlerOptions } from './mockHelpers';

const mockUrlCall = new MockUrlCall(Worklogs);

describe('Worklogs', () => {
  describe('Request Functions Tests', () => {
    it('get hits proper url', async () => {
      const result = await mockUrlCall.call('get', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs'
      );
    });

    it('get hits proper url with array of issues to lookup', async () => {
      const result = await mockUrlCall.call('get', [
        {
          issue: ['someIssueA', 'someIssueB']
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs?issue=someIssueA&issue=someIssueB'
      );
    });

    it('post hits proper url and method', async () => {
      const worklog = {
        timeSpentSeconds: 1234
      };
      const result = await mockUrlCall.call('post', [worklog]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs'
      );
      expect(result.method).toEqual('POST');
      expect(result.body).toEqual(worklog);
    });

    it('getWorklog hits proper url', async () => {
      const result = await mockUrlCall.call('getWorklog', ['someWorklogId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId'
      );
    });

    it('putWorklog hits proper url and method', async () => {
      const worklog = {
        timeSpentSeconds: 5678
      };
      const result = await mockUrlCall.call('putWorklog', [
        'someWorklogId',
        worklog
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId'
      );
      expect(result.method).toEqual('PUT');
      expect(result.body).toEqual(worklog);
    });

    it('deleteWorklog hits proper url and method', async () => {
      const result = await mockUrlCall.call('deleteWorklog', ['someWorklogId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId'
      );
      expect(result.method).toEqual('DELETE');
    });

    it('getWorklogWorkAttributeValues hits proper url', async () => {
      const result = await mockUrlCall.call('getWorklogWorkAttributeValues', [
        'someWorklogId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values'
      );
    });

    it('getWorklogWorkAttributeValuesByKey hits proper url', async () => {
      const result = await mockUrlCall.call(
        'getWorklogWorkAttributeValuesByKey',
        ['someWorklogId', 'someKey']
      );
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values/someKey'
      );
    });

    it('getForJiraWorklog hits proper url', async () => {
      const result = await mockUrlCall.call('getForJiraWorklog', [
        'someJiraWorklogId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/jira/someJiraWorklogId'
      );
    });

    it('getForJiraFilter hits proper url', async () => {
      const result = await mockUrlCall.call('getForJiraFilter', [
        'someJiraFilterId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/jira/filter/someJiraFilterId'
      );
    });

    it('getForAccount hits proper url', async () => {
      const result = await mockUrlCall.call('getForAccount', [
        'someAccountKey'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/account/someAccountKey'
      );
    });

    it('getForProject hits proper url', async () => {
      const result = await mockUrlCall.call('getForProject', [
        'someProjectKey'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/project/someProjectKey'
      );
    });

    it('getForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getForTeam', ['someTeamId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/team/someTeamId'
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', ['someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/user/someAccountId'
      );
    });

    it('getForIssue hits proper url', async () => {
      const result = await mockUrlCall.call('getForIssue', ['someKey']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/issue/someKey'
      );
    });
  });

  describe('Requests Error Tests', () => {
    it('Mocked error messages throws errors', async () => {
      expect.assertions(1);
      const mockRequest = async (requestOptions: any) => {
        return {
          errors: [{ message: 'Something is clearly wrong!' }]
        };
      };

      const requestHandler = new RequestHandler(
        getMockRequestHandlerOptions({
          request: mockRequest
        })
      );

      const collection = new Worklogs(requestHandler);

      try {
        await collection.getForUser('someAccountId');
      } catch (e) {
        expect(e.message).toMatch('Something is clearly wrong!');
      }
    });
  });
});

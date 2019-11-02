import RequestHandler from '../../src/request/handler';
import Worklogs from '../../src/collections/worklogs';

function getOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.bearer || 'sometoken',
    ca: actualOptions.ca || null,
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port || '8080',
    protocol: actualOptions.protocol || 'http',
    request: actualOptions.request,
    strictSSL: actualOptions.hasOwnProperty('strictSSL')
      ? actualOptions.strictSSL
      : true,
    timeout: actualOptions.timeout || null
  };
}

describe('TempoAi', () => {
  describe('Request Functions Tests', () => {
    async function dummyURLCall(
      tempoApiMethodName: string,
      functionArguments: any,
      dummyRequestMethod?: any,
      returnedValue = 'uri'
    ) {
      let dummyRequest = dummyRequestMethod;
      if (!dummyRequest) {
        dummyRequest = async (requestOptions: any) => requestOptions;
      }

      const requestHandler = new RequestHandler(
        getOptions({
          request: dummyRequest
        })
      );

      const collection = new Worklogs(requestHandler);

      // @ts-ignore
      const resultObject = await collection[tempoApiMethodName].apply(
        collection,
        functionArguments
      );

      // hack exposing the qs object as the query string in the URL so this is
      // uniformly testable
      if (resultObject.qs) {
        const queryString = Object.keys(resultObject.qs)
          .map(x => `${x}=${resultObject.qs[x]}`)
          .join('&');
        return `${resultObject.uri}?${queryString}`;
      }

      return resultObject[returnedValue];
    }

    it('get hits proper url', async () => {
      const result = await dummyURLCall('get', []);
      expect(result).toEqual('http://tempo.somehost.com:8080/core/3/worklogs');
    });

    it('getWorklog hits proper url', async () => {
      const result = await dummyURLCall('getWorklog', ['someWorklogId']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId'
      );
    });

    it('getWorklogWorkAttributeValues hits proper url', async () => {
      const result = await dummyURLCall('getWorklogWorkAttributeValues', [
        'someWorklogId'
      ]);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values'
      );
    });

    it('getWorklogWorkAttributeValuesByKey hits proper url', async () => {
      const result = await dummyURLCall('getWorklogWorkAttributeValuesByKey', [
        'someWorklogId',
        'someKey'
      ]);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/someWorklogId/work-attribute-values/someKey'
      );
    });

    it('getForJiraWorklog hits proper url', async () => {
      const result = await dummyURLCall('getForJiraWorklog', [
        'someJiraWorklogId'
      ]);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/jira/someJiraWorklogId'
      );
    });

    it('getForJiraFilter hits proper url', async () => {
      const result = await dummyURLCall('getForJiraFilter', [
        'someJiraFilterId'
      ]);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/jira/filter/someJiraFilterId'
      );
    });

    it('getForAccount hits proper url', async () => {
      const result = await dummyURLCall('getForAccount', ['someAccountKey']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/account/someAccountKey'
      );
    });

    it('getForProject hits proper url', async () => {
      const result = await dummyURLCall('getForProject', ['someProjectKey']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/project/someProjectKey'
      );
    });

    it('getForTeam hits proper url', async () => {
      const result = await dummyURLCall('getForTeam', ['someTeamId']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/team/someTeamId'
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await dummyURLCall('getForUser', ['someAccountId']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/user/someAccountId'
      );
    });

    it('getForIssue hits proper url', async () => {
      const result = await dummyURLCall('getForIssue', ['someKey']);
      expect(result).toEqual(
        'http://tempo.somehost.com:8080/core/3/worklogs/issue/someKey'
      );
    });
  });

  describe('Requests Error Tests', () => {
    it('Mocked error messages throws errors', async () => {
      expect.assertions(1);
      const mockRequest = async (requestOptions: any) => {
        return {
          requestOptions,
          errorMessages: ['Something is clearly wrong!']
        };
      };

      const requestHandler = new RequestHandler(
        getOptions({
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

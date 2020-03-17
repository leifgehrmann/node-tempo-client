import Handler from '../src/request/handler';
import { RequestConfig } from '../src/request/requestConfig';
import TempoApi, { TempoApiOptions } from '../src/tempo';

function getMockOptions(options?: {requestHandler: Handler}): TempoApiOptions {
  return {
    apiVersion: '3',
    bearerToken: 'sometoken',
    host: 'tempo.somehost.com',
    port: '8080',
    protocol: 'http',
    requestHandler: options?.requestHandler,
  };
}

describe('TempoApi', () => {
  describe('Constructor', () => {
    const tempo = new TempoApi(getMockOptions());
    expect(tempo).toBeTruthy();
  });

  describe('Collections can be accessed', () => {
    it('Expect mocked data to be returned', async () => {
      const dummyApiResponse = { someSample: '...data to expect!' };

      const dummyRequestHandler: Handler = {
        httpClient: async (requestConfig: RequestConfig) => requestConfig,
        doRequest: async () => dummyApiResponse,
      };
      const tempo = new TempoApi(
        getMockOptions({
          requestHandler: dummyRequestHandler,
        }),
      );

      expect(await tempo.accountCategories.get()).toBe(dummyApiResponse);
      expect(await tempo.accountCategoryTypes.get()).toBe(dummyApiResponse);
      expect(await tempo.accountLinks.getAccountLink('123')).toBe(dummyApiResponse);
      expect(await tempo.accounts.get()).toBe(dummyApiResponse);
      expect(await tempo.customers.get()).toBe(dummyApiResponse);
      expect(await tempo.holidaySchemes.get()).toBe(dummyApiResponse);
      expect(await tempo.periods.get()).toBe(dummyApiResponse);
      expect(await tempo.plans.get()).toBe(dummyApiResponse);
      expect(await tempo.programs.get()).toBe(dummyApiResponse);
      expect(await tempo.roles.get()).toBe(dummyApiResponse);
      expect(await tempo.teamLinks.getForProject('ABC')).toBe(dummyApiResponse);
      expect(await tempo.teamMemberships.getTeamMembership('123')).toBe(dummyApiResponse);
      expect(await tempo.teams.get()).toBe(dummyApiResponse);
      expect(await tempo.timesheetApprovals.getWaiting()).toBe(dummyApiResponse);
      expect(await tempo.userSchedule.get()).toBe(dummyApiResponse);
      expect(await tempo.workAttributes.get()).toBe(dummyApiResponse);
      expect(await tempo.workloadSchemes.get()).toBe(dummyApiResponse);
      expect(await tempo.worklogs.get()).toBe(dummyApiResponse);
    });
  });
});

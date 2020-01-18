import TempoApi from '../src/tempo';

function getMockOptions(options?: any) {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.bearer || 'sometoken',
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port || '8080',
    protocol: actualOptions.protocol || 'http',
    requestHandler: actualOptions.requestHandler || undefined,
    timeout: actualOptions.timeout || null,
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

      const dummyRequestHandler = {
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
      expect(await tempo.worklogs.get()).toBe(dummyApiResponse);
    });
  });
});

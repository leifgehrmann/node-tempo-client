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
    timeout: actualOptions.timeout || null
  };
}

describe('TempoApi', () => {
  describe('Constructor', () => {
    const tempo = new TempoApi(getMockOptions());
  });

  describe('Collections can be accessed', () => {
    it('Expect mocked data to be returned', async () => {
      const dummyApiResponse = { someSample: '...data to expect!' };

      const dummyRequestHandler = {
        doRequest: async () => dummyApiResponse
      };
      const tempo = new TempoApi(
        getMockOptions({
          requestHandler: dummyRequestHandler
        })
      );

      let result: any;

      result = await tempo.accountCategories.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.accountCategoryTypes.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.accountLinks.getAccountLink('123');
      expect(result).toBe(dummyApiResponse);
      result = await tempo.accounts.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.customers.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.periods.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.plans.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.programs.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.roles.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.teamLinks.getForProject('ABC');
      expect(result).toBe(dummyApiResponse);
      result = await tempo.teamMemberships.getTeamMembership('123');
      expect(result).toBe(dummyApiResponse);
      result = await tempo.teams.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.timesheetApprovals.getWaiting();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.userSchedule.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.workAttributes.get();
      expect(result).toBe(dummyApiResponse);
      result = await tempo.worklogs.get();
      expect(result).toBe(dummyApiResponse);
    });
  });
});

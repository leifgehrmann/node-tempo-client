import TimesheetApprovls from '../../src/collections/timesheetApprovals';
import MockUrlCall from './mockUrlCall';

const mockUrlCall = new MockUrlCall(TimesheetApprovls);

describe('TimesheetApprovals', () => {
  describe('Request Functions Tests', () => {
    it('getWaiting hits proper url', async () => {
      const result = await mockUrlCall.call('getWaiting', []);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/waiting'
      );
    });

    it('getForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getForUser', [
        'someAccountId',
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId?from=2019-01-01&to=2019-01-31'
      );
    });

    it('getReviewersForUser hits proper url', async () => {
      const result = await mockUrlCall.call('getReviewersForUser', [
        'someAccountId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/reviewers'
      );
    });

    it('postApproveTimesheetForUser hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('postApproveTimesheetForUser', [
        'someAccountId',
        body,
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/approve?from=2019-01-01&to=2019-01-31'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('postRejectTimesheetForUser hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('postRejectTimesheetForUser', [
        'someAccountId',
        body,
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/reject?from=2019-01-01&to=2019-01-31'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('postReopenTimesheetForUser hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('postReopenTimesheetForUser', [
        'someAccountId',
        body,
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/reopen?from=2019-01-01&to=2019-01-31'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('postSubmitTimesheetForUser hits proper url', async () => {
      const body = {};
      const result = await mockUrlCall.call('postSubmitTimesheetForUser', [
        'someAccountId',
        body,
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/submit?from=2019-01-01&to=2019-01-31'
      );
      expect(result.body).toEqual(body);
      expect(result.method).toEqual('POST');
    });

    it('getForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getForTeam', [
        'someTeamId',
        {
          from: '2019-01-01',
          to: '2019-01-31'
        }
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/team/someTeamId?from=2019-01-01&to=2019-01-31'
      );
    });
  });
});

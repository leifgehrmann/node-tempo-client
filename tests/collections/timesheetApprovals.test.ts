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
      const result = await mockUrlCall.call('getForUser', ['someAccountId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId'
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
      const result = await mockUrlCall.call('postApproveTimesheetForUser', [
        'someAccountId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/approve'
      );
      expect(result.method).toEqual('POST');
    });

    it('postRejectTimesheetForUser hits proper url', async () => {
      const result = await mockUrlCall.call('postRejectTimesheetForUser', [
        'someAccountId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/reject'
      );
      expect(result.method).toEqual('POST');
    });

    it('postReopenTimesheetForUser hits proper url', async () => {
      const result = await mockUrlCall.call('postReopenTimesheetForUser', [
        'someAccountId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/reopen'
      );
      expect(result.method).toEqual('POST');
    });

    it('postSubmitTimesheetForUser hits proper url', async () => {
      const result = await mockUrlCall.call('postSubmitTimesheetForUser', [
        'someAccountId'
      ]);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/user/someAccountId/submit'
      );
      expect(result.method).toEqual('POST');
    });

    it('getForTeam hits proper url', async () => {
      const result = await mockUrlCall.call('getForTeam', ['someTeamId']);
      expect(result.uri).toEqual(
        'http://tempo.somehost.com:8080/core/3/timesheet-approvals/team/someTeamId'
      );
    });
  });
});

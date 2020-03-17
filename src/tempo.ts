import AccountCategories from './collections/accountCategories';
import AccountCategoryTypes from './collections/accountCategoryTypes';
import AccountLinks from './collections/accountLinks';
import Accounts from './collections/accounts';
import Customers from './collections/customers';
import HolidaySchemes from './collections/holidaySchemes';
import Periods from './collections/periods';
import Plans from './collections/plans';
import Programs from './collections/programs';
import Roles from './collections/roles';
import TeamLinks from './collections/teamLinks';
import TeamMemberships from './collections/teamMemberships';
import Teams from './collections/teams';
import TimesheetApprovals from './collections/timesheetApprovals';
import UserSchedule from './collections/userSchedule';
import WorkAttributes from './collections/workAttributes';
import WorkloadSchemes from './collections/workloadSchemes';
import Worklogs from './collections/worklogs';
import * as QueryOptionTypes from './queryOptionTypes';
import RequestBuilder from './request/builder';
import RequestHandler from './request/handler';
import * as RequestTypes from './requestTypes';
import * as ResponseTypes from './responseTypes';

export interface TempoApiOptions {
  requestHandler?: RequestHandler;
  port?: string;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
}

export { RequestTypes };
export { ResponseTypes };
export { QueryOptionTypes };

export default class TempoApi {
  public readonly accountCategories: AccountCategories;

  public readonly accountCategoryTypes: AccountCategoryTypes;

  public readonly accountLinks: AccountLinks;

  public readonly accounts: Accounts;

  public readonly customers: Customers;

  public readonly holidaySchemes: HolidaySchemes;

  public readonly periods: Periods;

  public readonly plans: Plans;

  public readonly programs: Programs;

  public readonly roles: Roles;

  public readonly teamMemberships: TeamMemberships;

  public readonly teamLinks: TeamLinks;

  public readonly teams: Teams;

  public readonly timesheetApprovals: TimesheetApprovals;

  public readonly userSchedule: UserSchedule;

  public readonly workAttributes: WorkAttributes;

  public readonly workloadSchemes: WorkloadSchemes;

  public readonly worklogs: Worklogs;

  constructor(options: TempoApiOptions) {
    const request = {
      requestBuilder: new RequestBuilder(options),
      requestHandler: options.requestHandler || new RequestHandler(),
    };

    this.accountCategories = new AccountCategories(request);
    this.accountCategoryTypes = new AccountCategoryTypes(request);
    this.accountLinks = new AccountLinks(request);
    this.accounts = new Accounts(request);
    this.customers = new Customers(request);
    this.holidaySchemes = new HolidaySchemes(request);
    this.periods = new Periods(request);
    this.plans = new Plans(request);
    this.programs = new Programs(request);
    this.roles = new Roles(request);
    this.teamMemberships = new TeamMemberships(request);
    this.teamLinks = new TeamLinks(request);
    this.teams = new Teams(request);
    this.timesheetApprovals = new TimesheetApprovals(request);
    this.userSchedule = new UserSchedule(request);
    this.workAttributes = new WorkAttributes(request);
    this.workloadSchemes = new WorkloadSchemes(request);
    this.worklogs = new Worklogs(request);
  }
}

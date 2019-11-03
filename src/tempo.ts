import * as request from 'request-promise';
import AccountCategories from './collections/accountCategories';
import AccountCategoryTypes from './collections/accountCategoryTypes';
import AccountLinks from './collections/accountLinks';
import Accounts from './collections/accounts';
import Customers from './collections/customers';
import Periods from './collections/periods';
import Plans from './collections/plans';
import Programs from './collections/programs';
import Roles from './collections/roles';
import TeamMemberships from './collections/teamMemberships';
import TeamLinks from './collections/teamLinks';
import Teams from './collections/teams';
import TimesheetApprovals from './collections/timesheetApprovals';
import UserSchedule from './collections/userSchedule';
import WorkAttributes from './collections/workAttributes';
import Worklogs from './collections/worklogs';
import RequestHandler from './request/handler';

export interface ITempoApiOptions {
  requestHandler?: RequestHandler;
  port?: string;
  request?: request.RequestPromiseAPI;
  timeout?: number;
  protocol: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
  strictSSL?: boolean;
}

export default class TempoApi {
  public readonly accountCategories: AccountCategories;
  public readonly accountCategoryTypes: AccountCategoryTypes;
  public readonly accountLinks: AccountLinks;
  public readonly accounts: Accounts;
  public readonly customers: Customers;
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
  public readonly worklogs: Worklogs;
  private readonly requestHandler: RequestHandler;

  constructor(options: ITempoApiOptions) {
    this.requestHandler = options.requestHandler || new RequestHandler(options);
    this.accountCategories = new AccountCategories(this.requestHandler);
    this.accountCategoryTypes = new AccountCategoryTypes(this.requestHandler);
    this.accountLinks = new AccountLinks(this.requestHandler);
    this.accounts = new Accounts(this.requestHandler);
    this.customers = new Customers(this.requestHandler);
    this.periods = new Periods(this.requestHandler);
    this.plans = new Plans(this.requestHandler);
    this.programs = new Programs(this.requestHandler);
    this.roles = new Roles(this.requestHandler);
    this.teamMemberships = new TeamMemberships(this.requestHandler);
    this.teamLinks = new TeamLinks(this.requestHandler);
    this.teams = new Teams(this.requestHandler);
    this.timesheetApprovals = new TimesheetApprovals(this.requestHandler);
    this.userSchedule = new UserSchedule(this.requestHandler)
    this.workAttributes = new WorkAttributes(this.requestHandler);
    this.worklogs = new Worklogs(this.requestHandler);
  }
}

# JavaScript Tempo API Client for node.js

[![npm](https://img.shields.io/npm/v/tempo-client.svg)](https://www.npmjs.com/tempo-client)
[![Install Size](https://packagephobia.now.sh/badge?p=tempo-client)](https://packagephobia.now.sh/result?p=tempo-client)
[![Build Status](https://github.com/leifgehrmann/node-tempo-client/workflows/Tests/badge.svg?branch=master)](https://github.com/leifgehrmann/node-tempo-client/actions)
[![dependency Status](https://david-dm.org/leifgehrmann/node-tempo-client/status.svg)](https://david-dm.org/leifgehrmann/node-tempo-client)
[![devDependency Status](https://david-dm.org/leifgehrmann/node-tempo-client/dev-status.svg)](https://david-dm.org/leifgehrmann/node-tempo-client?type=dev)
[![Code Coverage](https://codecov.io/gh/leifgehrmann/node-tempo-client/branch/master/graph/badge.svg)](https://codecov.io/gh/leifgehrmann/node-tempo-client)

An unofficial node.js wrapper for the [Tempo REST API](https://tempo-io.github.io/tempo-api-docs/)

The repo aims to be similar in usage to the [node-jira-client](https://github.com/jira-node/node-jira-client).

## Installation

Install using [NPM](https://npmjs.org):

```shell
$ npm install tempo-client
```

## Examples

```javascript
import TempoApi from 'tempo-client';

const tempo = new TempoApi({
  protocol: 'https',
  host: 'api.tempo.io',
  bearerToken: 'token',
  apiVersion: '3'
})
```

### Get worklogs for user

```javascript
// ES6
tempo.worklogs.getForUser(
  user.accountId,
  {
    from: '2019-10-07',
    to: '2019-10-11'
  }
)
  .then(worklogs => {
    console.log(worklogs.results);
  })
  .catch(err => {
    console.log(err);
  });

// ES7
async function getWorklogsForUser(user, from, to) {
  try {
    const worklogs = await tempo.worklogs.getForUser(user.accountId, { from, to });
    console.log(worklogs.results);
  } catch (err) {
    console.log(err);
  }
}
```

## Documentation

* [Node Tempo Client](https://tempo-client.leifgehrmann.com/)
* [Tempo REST API](https://tempo-io.github.io/tempo-api-docs/)

## Completeness

See the documentation for more information on what endpoints are implemented.

|Collections|Endpoints implemented|
|----|----|
|Accounts|0/6|
|Account - Category|0/5|
|Account - Category - Types|0/1|
|Account - Links|0/4|
|Customers|0/6|
|Plans|0/6|
|Programs|0/6|
|Roles|0/5|
|Teams|0/11|
|Team - Links|0/4|
|Team - Memberships|0/4|
|Periods|0/1|
|Timesheet Approvals|0/8|
|User Schedule|0/2|
|Work Attributes|0/2|
|Worklogs|10/14|

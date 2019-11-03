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

### Instantiating the client

```javascript
import TempoApi from 'tempo-client';

const tempo = new TempoApi({
  protocol: 'https',
  host: 'api.tempo.io',
  bearerToken: 'token',
  apiVersion: '3'
})
```

### Getting worklogs for a JIRA user

```javascript
const user = {
  accountId: '1111aaaa2222bbbb3333cccc'
};
const dateRange = {
  from: '2019-10-07',
  to: '2019-10-11'
};

// ES6
const worklogs = tempo.worklogs.getForUser(user.accountId, dateRange)
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

### Create, modify, delete an "Account"

```js
// Create a new account
let account = await tempo.accounts.post({
  key: 'CLOUDBAY_DEVELOPMENT',
  name: 'Cloudbay: Development',
  status: 'OPEN',
  leadAccountId: "123456:01234567-89ab-cdef-0123-456789abcdef",
})

// Modify the account
account.status = 'CLOSED'
account = await tempo.accounts.putAccount(account.key, account)
console.log(account.status)

// Re-fetch the account (again)
account = await tempo.accounts.getAccount(account.key)

// Delete the account
await tempo.accounts.deleteAccount(account.key)
```

## Documentation

### REST API

All endpoints listed in the Tempo REST API (https://tempo-io.github.io/tempo-api-docs/)
for the Version 3 REST API are implemented as of November 2019. The REST API documentation will answer most questions about the expected structure of data.

### The Tempo Client itself

Auto-generated documentation for the Tempo Client can be found at:
https://tempo-client.leifgehrmann.com/

For example, if one wants to modify the `accounts` collection, one can find the
API methods at
[Globals/ "collections/accounts" / Accounts](https://tempo-client.leifgehrmann.com/classes/_collections_accounts_.accounts.html).

It's strongly recommended to use TypeScript as code completion will help quite
a bit with navigating the client.

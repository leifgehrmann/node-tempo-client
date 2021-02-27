# JavaScript Tempo API Client for node.js

[![Documentation](https://img.shields.io/badge/Documentation--green.svg)](https://tempo-client.leifgehrmann.com/)
[![Tempo Rest API](https://img.shields.io/badge/Tempo%20Rest%20API--green.svg)](https://apidocs.tempo.io/)
[![Build Status](https://github.com/leifgehrmann/node-tempo-client/workflows/Tests/badge.svg?branch=master)](https://github.com/leifgehrmann/node-tempo-client/actions)
[![npm](https://img.shields.io/npm/v/tempo-client.svg)](https://www.npmjs.com/tempo-client)
[![Install Size](https://packagephobia.now.sh/badge?p=tempo-client)](https://packagephobia.now.sh/result?p=tempo-client)
[![Code Coverage](https://codecov.io/gh/leifgehrmann/node-tempo-client/branch/master/graph/badge.svg)](https://codecov.io/gh/leifgehrmann/node-tempo-client)

An unofficial node.js wrapper for the [Tempo REST API](https://apidocs.tempo.io/)

The repo aims to be similar in usage to the [node-jira-client](https://github.com/jira-node/node-jira-client).

## Installation

Install using [NPM](https://npmjs.org):

```shell
$ npm install tempo-client
```

## Examples

### Instantiating the client

```javascript
// ES5
const TempoApi = require('tempo-client').default;

// ES6
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
// Create a new account using `.post(...)`
let account = {
  key: 'CLOUDBAY_DEVELOPMENT',
  name: 'Cloudbay: Development',
  status: 'OPEN',
  leadAccountId: "123456:01234567-89ab-cdef-0123-456789abcdef"
};

let accountId = (await tempo.accounts.post(account)).id;
console.log(`Account "${account.key}" has an id of: ${accountId}`);

// Modify the account using `.putAccount(...)`
account.status = 'CLOSED'
const accountOnTempo = await tempo.accounts.putAccount(account.key, account);
console.log(`Account "${account.key}" is now: ${accountOnTempo.status}`);

// Delete the account using `.deleteAccount(...)`
await tempo.accounts.deleteAccount(account.key);

// `.getAccount(...)` will throw an error now that the account is deleted
try {
  await tempo.accounts.getAccount(account.key);
} catch (err) {
  console.log(`Account "${account.key}" no longer exists!`);
}
```

## Documentation

### REST API

All endpoints listed in the Tempo REST API (https://apidocs.tempo.io/)
for the Version 3 REST API are implemented as of November 2019. The REST API documentation will answer most questions about the expected structure of data.

### The Tempo Client itself

Auto-generated documentation for the Tempo Client can be found at:
https://tempo-client.leifgehrmann.com/

For example, if one wants to modify the `accounts` collection, one can find the
API methods at
[Globals/ "collections/accounts" / Accounts](https://tempo-client.leifgehrmann.com/classes/_collections_accounts_.accounts.html).

It's strongly recommended to use TypeScript as code completion will help quite
a bit with navigating the client.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

# JavaScript Tempo API Client for node.js

[![npm](https://img.shields.io/npm/v/tempo-client.svg)](https://www.npmjs.com/tempo-client)
[![Install Size](https://packagephobia.now.sh/badge?p=tempo-client)](https://packagephobia.now.sh/result?p=tempo-client)
[![dependency Status](https://david-dm.org/leifgehrmann/node-tempo-client/status.svg)](https://david-dm.org/leifgehrmann/node-tempo-client)
[![devDependency Status](https://david-dm.org/leifgehrmann/node-tempo-client/dev-status.svg)](https://david-dm.org/leifgehrmann/node-tempo-client?type=dev)
[![Build Status](https://travis-ci.org/leifgehrmann/node-tempo-client.svg?branch=master)](https://travis-ci.org/leifgehrmann/node-tempo-client)
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
tempo.getWorklogsForUser(
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
    const worklogs = await tempo.getWorklogsForUser(user.accountId, { from, to });
    console.log(worklogs.results);
  } catch (err) {
    console.log(err);
  }
}
```

## Documentation

* [Tempo Client](https://tempo-client.leifgehrmann.com/)
* [Tempo REST API](https://tempo-io.github.io/tempo-api-docs/)

## Completeness

So far only `getWorklogsForUser` has been implemented. More endpoints will be
added later.

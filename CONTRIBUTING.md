# How to contribute

First of all, thanks for reading! :heart: Your contributions will be greatly appreciated!

You can help by:

* Reporting any issues and requesting enhancements, or...
* Modifying code and submitting a pull request.

## Reporting issues and requesting enhancements

Issues and enhancements can be reported [here](https://github.com/leifgehrmann/node-tempo-client/issues/new).

## Modifying code

All code is written in TypeScript, so it is recommended to use an IDE like Visual Studio Code.
A development environment can be quickly setup by:

1. [Installing Node.js](https://nodejs.org/en/download/)
2. `git clone https://github.com/leifgehrmann/node-tempo-client.git`
3. `cd node-tempo-client`
4. `npm install`
4. `npm test`, to verify everything was setup right.

### Testing code changes

Changes can be checked by running:

```
$ npm test
```

When the tests are complete, a code coverage report will be printed out.
You can also find a HTML version of the report in `./coverage/lcov-report/index.html`.
Ideally we want to keep 100% code coverage, so it would be appreciated if tests are added for any code changes, but not strictly required.

#### Functional tests

None of the tests in this repository are functional tests, which means no network requests are sent to a server.
While some care has been made to ensure this client works, not all endpoints have been throughly checked.
It would be greatly appreciated if any issues are spotted and reported!

To perform functional tests with the Tempo REST API, it is recommended to create a test repository.
For a quick setup, run the following:

```bash
node-tempo-client $ npm run build # Make sure to run after making changes to node-tempo-client!
node-tempo-client $ mkdir ../node-tempo-client-test-drive
node-tempo-client $ cd ../node-tempo-client-test-drive
node-tempo-client-test-drive $ npm init -y
node-tempo-client-test-drive $ npm install ../node-tempo-client
node-tempo-client-test-drive $ cat >index.js <<'EOT'
const TempoApi = require('tempo-client').default;
  
const tempo = new TempoApi({
  protocol: 'https',
  host: 'api.tempo.io',
  bearerToken: 'ENTER YOUR TOKEN HERE',
  apiVersion: '3'
});

// Test the functions here
tempo.worklogs.get()
  .then((worklogsResponse) => {
    console.log(worklogsResponse.results);
  })
  .catch((error) => {
    console.log(`Error message: ${error.message}`);
    console.log(`Status code: ${error.statusCode}`);
  });
EOT
node-tempo-client-test-drive $ node index.js
```

### Formatting and linting code

All code in `./src` and `./tests` must follow the linting and formatting rules. This can be checked by running:

```
$ npm run lint
$ npm run format
```

### Submitting changes

Please send a GitHub [Pull Request to node-tempo-client](https://github.com/leifgehrmann/node-tempo-client/compare) with a clear list of what you've done.
Ideally each commit should atomic (one feature per commit).

Once the pull request has been reviewed, commits will be squashed and merged into master.

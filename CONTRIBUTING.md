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

## Creating a new release

The following section describes how to release a new version to npmjs.com.

**Note: Only project owners and collaborators are able to publish a new release.**

### Run NPM's version command

Once changes have been merged into master, we need to update `package.json` and `package-lock.json` with a new version
number. node-tempo-client uses [semver](https://semver.org) to determine the next version number.

NPM has a command line interface tool to upgrade the version easily depending on whether the changes since the last
release are a `major`, `minor`, or `patch` change. Below is an example of performing a `patch`
update:

```
$ npm version patch
```

This command will commit and push the version change. You may be prompted to enter git credentials to perform the push.

### Verify GitHub.com workflows are successful 

After successfully pushing the commit, make sure commit passes all GitHub Workflows:
https://github.com/leifgehrmann/node-tempo-client/actions?query=branch%3Amaster.

### Draft and publish a new release on GitHub.com

Go to: https://github.com/leifgehrmann/node-tempo-client/releases

Press "Draft a new release".

In "Tag version", enter the version number for this release, prefixed with `v`. For example, `v1.2.3`.

In "Describe this release", list all changes/pull requests since the last release. The changes should be grouped into
different sections depending on the change. A pull request could be composed of changes relevant to different sections,
so do not hesitate to mention a pull request more than once.

The following sections can be used:

* Breaking Changes
* Additions
* Bug Fixes
* Improvements
* Internal Improvements

Below is an example of release notes:

```markdown
### Additions

* My pull request: #123
  * A nested bullet point with more detail to explain the change.

### Improvements

* My other pull request: #111
```

Once finished, press "Publish release". Pressing this will trigger a GitHub Workflow to submit the release to
npmjs.com. This can be verified by checking: https://www.npmjs.com/package/tempo-client

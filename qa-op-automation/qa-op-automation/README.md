# EVGO-OP-EXT Test Automation

Test automation project using https://codecept.io framework.

# Installation
Run `yarn install` inside a terminal from root directory to install node modules.

If you are using `npm` then be sure to run `npm run postinstall` to install husky git hooks.

# Dependencies

If using Webdriver then Java SDK must be available on the machine.
Allure reports also require Java.

# .env

To run tests locally you must provide a `.env` file in the root directory with following variables

(change the values as needed)

```
BROWSER_TYPE=chromium
BROWSER_WINDOW_SIZE=1920x1080
CAPTURE_VIDEO=true
ENABLE_ALLURE_REPORTS=true
FULL_PAGE_SCREENSHOT=true
PREPARE_TEST_BASE_IMAGE=false
SHOW_BROWSER=false
SUBMIT_TO_TEST_RAILS=false

TEST_RAIL_USER_NAME=<your testrail email>
TEST_RAIL_USER_PASSWORD=<your testrail api key>

TEST_ENV=qa
AUTH_HOST_URL=https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0wjGK9rQiU0ATPDas3_BV_LUvtIJxb98
URL_PREFIX=operator.qa
GRAPHQL_URL=https://graphql.qa.evgo.com

MAIL_SLURP_API_KEY=<your mail slurp api key>
```

# IDE

This project has configuration files for [VS Code](https://code.visualstudio.com/) in `.vscode` folder.
Install the plugins specified in `.vscode/extensions.json`.

If you use another IDE, make sure to configure it to use `eslint` to format `.js` and `.ts` files.

# Running tests locally
To run all tests:

`yarn test`

To run specific tag tests:

`yarn test --grep <some tag>`  

or

`yarn test:tagged <tag1> <tag2>...`  

eg:

run all tests that contain `@C347925` tag  
`yarn test --grep @C347925`  

run all tests that contain all of the specified tags  
`yarn test:tagged @dummy @smoke @important`  

To run a particular test file:

`yarn test ./tests/login/login.test.ts`

__NOTE:__ make sure to configure required env variables, such as `URL_PREFIX` in `.env` file.

# Running tests in BitBucket pipelines
There are three git branches qa, stg, prod. 

To run tests in a particular branch:  
1. Go to [Pipelines](https://bitbucket.org/evgo/<project-name>/addon/pipelines/home#!/results/page/1)
2. Click `Run pipeline`
3. Select the branch run on eg `qa`
4. Select related pipeline matching the branch eg `custom: qa`
5. Click Run

Once the pipeline completes it will submit test results to TestRail and also generate an artifacts archive file which contain:
1. screenshots
2. videos
3. Allure report file

These files can be used to investigate failed tests.

# Allure report
Test results are generated in `./output` folder.  
To see results in Allure, run `yarn results` which will start a web server that can be accessed via `http://localhost:8088/index.html`

# Debugging
Using VS Code you can set breakpoints in test files and then launch codeceptjs in debug mode.

To specify which test to launch for debugging, configure `.vscode/launch.json` to specify relative path to the test file.

To launch debugger go to `Run -> Start Debugging`.

# Code styles

This project is configure to use [eslint](https://eslint.org/) to lint the code.
Git pre-commit hook is also configured to run the linter on staged files before accepting the commit.

# Dev container
VS Code provides simple way to create Docker [dev container](https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container).

To run this project in an isolated dev container:

1. Make sure you have `ssh-agent` running and has your bitbucket ssh key added.
   * [Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement) Follow the steps for user generated ssh  
   * [macOS/Linux](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/)  
2. Make sure you have [Docker](https://docker.com) running.
3. Open this repo in VS Code
4. Re-open in remote container
   1. `ctrl+shift+p`
   2. `Remote-Containers: Reopen in container`

# Test Data
__TBD__

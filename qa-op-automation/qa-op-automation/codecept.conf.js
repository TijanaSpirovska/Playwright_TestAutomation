require('ts-node/register')

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const currentDate = new Date()
  .toLocaleString(
    'en-ca', // YYYY-MM-DD, HH:mm:ss
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      year: 'numeric',
    },
  )
  .replace(/-/g, '.')
  .replace(/, /g, '-')

const d = new Date()
const today = `${d.getFullYear()}.${(d.getMonth() + 1)}.${d.getDate()}`

console.info('current date:', currentDate)

const BROWSER_TYPE = process.env.BROWSER_TYPE || 'chromium'
const BROWSER_WINDOW_SIZE = process.env.BROWSER_WINDOW_SIZE || '1920x1080'
const TEST_ENV = process.env.TEST_ENV || 'QA'
const URL_PREFIX = `operator.${TEST_ENV.toLowerCase()}`

const SCREENSHOT_SUBFOLDER = `${BROWSER_TYPE}/${BROWSER_WINDOW_SIZE}/${URL_PREFIX}`

console.info('BROWSER_TYPE', BROWSER_TYPE)
console.info('BROWSER_WINDOW_SIZE', BROWSER_WINDOW_SIZE)
console.info('SCREENSHOT_SUBFOLDER', SCREENSHOT_SUBFOLDER)
console.info('URL_PREFIX', URL_PREFIX)

// const RUN_NAME = `EVGO-OP-EXT Automation (${URL_PREFIX}, ${BROWSER_TYPE}, ${BROWSER_WINDOW_SIZE}): ${currentDate}`

exports.config = {
  helpers: {
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    DriivzGatewayRestHelper: { require: './custom-helpers/driivz/driivz-gateway.rest.helper.ts' },
    FileSystem: {},
    GraphQL: {
      defaultHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'apollographql-client-name': `evgo-op-ext-${process.env.TEST_ENV}` || 'evgo-op-ext-qa',
        'apollographql-client-version': 1,
      },
      endpoint: process.env.GRAPHQL_URL,
      timeout: process.env.GRAPHQL_TIMEOUT || 30000,
    },
    Playwright: {
      browser: BROWSER_TYPE,
      fullPageScreenshots: process.env.FULL_PAGE_SCREENSHOT === 'true',
      show: process.env.SHOW_BROWSER === 'true',
      url: `https://${URL_PREFIX}.evgo.com`,
      video: process.env.CAPTURE_VIDEO || 'true',
      waitForAction: 200,
      waitForNavigation: 'networkidle',
      waitForTimeout: 30000,
      windowSize: BROWSER_WINDOW_SIZE,
    },
    REST: {
      endpoint: '', // leave blank to allow different domains
      timeout: process.env.REST_TIMEOUT || 60000,
    },
  },
  hooks: [],
  include: {
    I: './custom.steps.ts',
    driversPage: './pages/drivers.page.ts',
    loginPage: './pages/login.page.ts',
    mainPage: './pages/main.page.ts',
    plansPage: './pages/plans.page.ts',
  },
  mocha: {},
  output: './output',
  plugins: {
    allure: {
      enabled: process.env.ENABLE_ALLURE_REPORTS === 'true',
    },
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
    },
    subtitles: {
      enabled: true,
    },
    testrail: {
      closeTestRun: process.env.CLOSE_RUN_TEST_RAIL === 'true',
      enabled: process.env.SUBMIT_TO_TEST_RAIL === 'true',
      host: 'https://evgo.testrail.io',
      password: process.env.TEST_RAIL_USER_PASSWORD,
      // milestoneId: process.env.TEST_RAIL_MILESTONE_ID,
      plan: {
        existingPlanId: 19393,
        name: `${TEST_ENV} Regression Test ${today}`,
        onlyCaseIds: true,
      },
      projectId: process.env.TEST_RAIL_PROJECT_ID || '39',
      require: 'codeceptjs-testrail',
      // runId: process.env.TEST_RAIL_RUN_ID,
      // runName: RUN_NAME,
      runName: `${process.env.TYPE} on ${TEST_ENV} ${today}`,
      // debugLog: 'true',
      suiteId: process.env.TEST_RAIL_SUITE_ID,
      user: process.env.TEST_RAIL_USER_NAME,
    },
    tryTo: {
      enabled: true,
    },
  },
  tests: './tests/**/*.test.ts',
}

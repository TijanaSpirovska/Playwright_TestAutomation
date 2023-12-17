const ALL_URLS = {
  PROD: {
    GRAPHQL_URL: 'https://graphql.prod.evgo.com/',
    TEST_URL: 'https://operator.evgo.com',
  },
  QA: {
    GRAPHQL_URL: 'https://graphql.qa.evgo.com/',
    TEST_URL: 'https://operator.qa.evgo.com',
  },
  STG: {
    GRAPHQL_URL: 'https://graphql.stg.evgo.com/',
    TEST_URL: 'https://operator.stg.evgo.com',
  },
} as const

export const TEST_URL: string = ALL_URLS[(process.env.TEST_ENV || 'QA').toUpperCase()].TEST_URL
export const GRAPHQL_URL: string = ALL_URLS[(process.env.TEST_ENV || 'QA').toUpperCase()].GRAPHQL_URL

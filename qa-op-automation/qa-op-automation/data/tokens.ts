interface TokenType {
  GOOGLE_AUTH_TOKEN: string,
}

const ALL_TOKENS = {
  PROD: {
    GOOGLE_AUTH_TOKEN: 'AIzaSyAcA7OfgtlG_Io2Gu0oRtNPTgXd-J7SOf4',
  },
  QA: {
    GOOGLE_AUTH_TOKEN: 'AIzaSyC0wjGK9rQiU0ATPDas3_BV_LUvtIJxb98',
  },
  STG: {
    GOOGLE_AUTH_TOKEN: 'AIzaSyC4H7ETPEptPt7uu0XBvmHtXRzd7TqoejA',
  },
} as const

export const GOOGLE_AUTH_TOKEN: TokenType = ALL_TOKENS[(process.env.TEST_ENV || 'QA').toUpperCase()].GOOGLE_AUTH_TOKEN
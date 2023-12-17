// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
  generates: {
    './apollo/types/graphql-types.ts': {
      plugins: [
        'typescript',
      ],
    },
  },
  overwrite: true,
  schema: `https://graphql.${process.env.TEST_ENV}.evgo.com`,
}
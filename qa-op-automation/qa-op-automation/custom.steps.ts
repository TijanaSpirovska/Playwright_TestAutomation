import * as assertSteps from './custom-steps/assert/assert.steps'
import * as auth from './api/auth.api'
import * as customHelpers from './api/custom-helpers/customHelpers'
import * as graphQL from './api/graphql.api'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    ...assertSteps,
    ...graphQL,
    ...auth,
    ...customHelpers,
  })
}

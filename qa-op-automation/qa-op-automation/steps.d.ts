/// <reference types='codeceptjs' />

type loginPage = typeof import('./pages/login.page');
type mainPage = typeof import('./pages/main.page');
type plansPage = typeof import('./pages/plans.page');
type DriivzGatewayRestHelper = import('./custom-helpers/driivz/driivz-gateway.rest.helper');
type driversPage = typeof import('./pages/drivers.page');

type CustomSteps = typeof import('./custom.steps')

type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface Methods extends
    ChaiWrapper,
    DriivzGatewayRestHelper,
    FileSystem,
    GraphQL,
    GraphQLDataFactory,
    Playwright,
    REST
  {}

  interface I extends
    ReturnType<CustomSteps>,
    WithTranslation<ChaiWrapper>,
    WithTranslation<DriivzGatewayRestHelper>,
    WithTranslation<FileSystem>,
    WithTranslation<GraphQL>,
    WithTranslation<GraphQLDataFactory>,
    WithTranslation<REST>
  {}

  interface SupportObject {
    I: I,
    loginPage: loginPage,
    mainPage: mainPage,
    plansPage: plansPage,
    driversPage: driversPage,
  }

  namespace Translation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Actions {}
  }
}

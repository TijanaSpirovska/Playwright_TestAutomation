import { ACCOUNTS } from '../../../../data/accounts';

Feature('Drivers Page')

Before(async ({ I, loginPage, driversPage }) => {
  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await driversPage.buttons.drivers.click()
  await I.see('Driver Management')
  await driversPage.fields.search.verifyElementIsDisplayed()
})

const driverEmail = 'gk@op.com'

Scenario('@C429686 - Verify that the user will be able to search for a driver by email',async ({ driversPage }) => {
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.search.clearAndFill(driverEmail)
  await driversPage.results.searchResultEmail.verifyTextInColumnHeader(driverEmail)
}).tag('@driver').tag('@operatorPortal')

Scenario('@C429759 - Verify that the user will be able to sort by States',async ({ I, driversPage }) => {
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.statesButton.subMenuselect('California')
  await I.pressKey('Escape')
  await driversPage.results.billingAddressRow.verifyTableColumn(' CA ')
}).tag('@driver').tag('@operatorPortal')

Scenario('@C429758 - Verify that the user will be able to sort by driver status',async ({ I, driversPage }) => {
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.driverStatus.subMenuselect('Invited')
  await I.pressKey('Escape')
  await driversPage.results.driverStatusRow.verifyTableColumn('Invited')
}).tag('@driver').tag('@operatorPortal')

Scenario('@C429757 - Verify that the user will be able to sort by account status',async ({ I, driversPage }) => {
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.accountStatus.subMenuselect('Active')
  await I.pressKey('Escape')
  await driversPage.results.accountStatusRow.verifyTableColumn('Active')
}).tag('@driver').tag('@operatorPortal')
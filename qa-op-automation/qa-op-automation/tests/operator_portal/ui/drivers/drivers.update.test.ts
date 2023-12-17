import { ACCOUNTS } from '../../../../data/accounts'
import faker from 'faker';

Feature('Drivers Page')

Before(async ({ I, loginPage, driversPage }) => {
  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await driversPage.buttons.drivers.click()
  await I.see('Driver Management')
  await driversPage.fields.search.verifyElementIsDisplayed()
})

const driverEmail = 'gk@op.com'
const driverFirstName = faker.name.firstName()
const driverLastName = faker.name.lastName()

Scenario('@C429756 - Verify that the user will be able to edit driver',async ({ driversPage }) => {
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.search.clearAndFill(driverEmail)
  await driversPage.results.secondTableRow.checkForUpdatedTable()
  await driversPage.results.searchResultDriverName.clickRow()
  await driversPage.buttons.allAccountsButton.verifyElementIsDisplayed()
  await driversPage.profile.accountProfile.checkForTableLoadingSpinner()
  await driversPage.fields.firstName.clearAndFill(driverFirstName)
  await driversPage.fields.lastName.clearAndFill(driverLastName)
  await driversPage.buttons.saveButton.click()
  await driversPage.snackBar.snackbarDrivers.verifyElementIsDisplayed()
  await driversPage.snackBar.snackbarDrivers.verifyVisible()
  await driversPage.snackBar.snackbarDrivers.verifyTextInSnackbar('AccountOwner Updated')
  await driversPage.buttons.allAccountsButton.click()
  await driversPage.results.driversTable.checkForTableLoadingSpinner()
  await driversPage.fields.search.fill(driverEmail)
  await driversPage.results.secondTableRow.checkForUpdatedTable()
  await driversPage.results.searchResultDriverName.clickRow()
  await driversPage.profile.accountProfile.checkForTableLoadingSpinner()
  await driversPage.fields.firstName.verifyValue(driverFirstName)
  await driversPage.fields.lastName.verifyValue(driverLastName)
}).tag('@operatorPortal')
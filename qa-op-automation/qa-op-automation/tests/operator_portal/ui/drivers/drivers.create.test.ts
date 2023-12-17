import { ACCOUNTS } from '../../../../data/accounts';
import faker from 'faker';
import { sevenDigitRandomNumber } from '../../../../utils/random'

Feature('Drivers Page')

Before(async ({ I, loginPage, driversPage }) => {
  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await driversPage.buttons.drivers.click()
  await I.see('Driver Management')
  await driversPage.fields.search.verifyElementIsDisplayed()
})

const randomNumber = sevenDigitRandomNumber()
const phoneNumber = `249${randomNumber}`
const driverFirstName = faker.name.firstName()
const driverLastName = faker.name.lastName()
const USaddress = '780 mission st'
const USaddress2 = '790 mission street'
const UScity = 'San Francisco'
const USzipCode = '94103'

Scenario('@C429755 - Verify that the user will be able to add driver with US Address',async ({ driversPage }) => {
  const currentTime = new Date().getTime().toString()
  const driverEmail = `op.automation${currentTime}@gmail.com`

  await driversPage.buttons.addDriverButton.click()
  await driversPage.buttons.allAccountsButton.verifyElementIsDisplayed()
  await driversPage.fields.firstName.fill(driverFirstName)
  await driversPage.fields.lastName.fill(driverLastName)
  await driversPage.fields.email.fill(driverEmail)
  await driversPage.fields.phoneNumber.fill(phoneNumber)
  await driversPage.fields.addressLine1.fill(USaddress)
  await driversPage.fields.addressLine2.fill(USaddress2)
  await driversPage.fields.city.fill(UScity)
  await driversPage.fields.state.select('California')
  await driversPage.fields.zipCode.fill(USzipCode)
  await driversPage.buttons.sameAsMailingCheckBox.click()
  await driversPage.buttons.saveButton.click()
  await driversPage.snackBar.snackbarDrivers.verifyElementIsDisplayed()
  await driversPage.snackBar.snackbarDrivers.verifyVisible()
  await driversPage.snackBar.snackbarDrivers.verifyTextInSnackbar('AccountOwner Created')
  await driversPage.buttons.allAccountsButton.click()
  await driversPage.general.loadingSpinner.checkForLoadingSpinner()
  await driversPage.fields.search.clearAndFill(driverEmail)
  await driversPage.general.loadingSpinner.checkForLoadingSpinner()
  await driversPage.results.secondTableRow.checkForUpdatedTable()
  await driversPage.results.searchResultEmail.verifyTextInColumnHeader(driverEmail)
}).tag('@operatorPortal')
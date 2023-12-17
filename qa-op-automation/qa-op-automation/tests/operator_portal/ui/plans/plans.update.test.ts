import {
  existingPlanName,
  updatePlanSuccessMessage,
} from '../../../../data/reservedTestData';

import { ACCOUNTS } from '../../../../data/accounts';
import { currentTime } from '../../../../utils/date'
import { randomNumber } from '../../../../utils/random'

Feature('Plans Page')

Before(async ({ I, loginPage, plansPage }) => {
  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await plansPage.buttons.plans.click()
  await I.see('Plan Management')
  await plansPage.fields.search.verifyElementIsDisplayed()
})

const intervalLengthRandomNumber = randomNumber().toString()

Scenario('@C430718 Verify that the superAdmin user will be able to edit Plan',async ({ I, plansPage }) => {
  await plansPage.fields.search.clearAndFill(existingPlanName)
  await plansPage.results.secondTableRow.checkForUpdatedTable()
  await plansPage.results.searchResult.clickRow()
  await I.waitForText(existingPlanName, 15)
  await I.see('Plan Details')
  await plansPage.fields.planDescription.verifyElementIsDisplayed()
  await plansPage.fields.planDescription.clearAndFill(`${existingPlanName}${currentTime}`)
  await plansPage.fields.intervalLength.clearAndFill(intervalLengthRandomNumber)
  await plansPage.buttons.save.click()
  await plansPage.snackBar.snackbarPlans.verifyElementIsDisplayed()
  await plansPage.snackBar.snackbarPlans.verifyVisible()
  await plansPage.snackBar.snackbarPlans.verifyTextInSnackbar(updatePlanSuccessMessage)
  await plansPage.buttons.allPlansButton.click()
  await plansPage.fields.search.clearAndFill(existingPlanName)
  await plansPage.results.secondTableRow.checkForUpdatedTable()
  await plansPage.results.searchResult.clickRow()
  await I.waitForText(existingPlanName, 15)
  await plansPage.fields.planDescription.verifyElementIsDisplayed()
  await I.see('Plan Details')
  await plansPage.fields.planDescription.verifyValue(`${existingPlanName}${currentTime}`)
  await plansPage.fields.intervalLength.verifyValue(intervalLengthRandomNumber)
}).tag('@operatorPortal')

Scenario('@C430720 - Verify that user can check "Display to Customers" check box',async ({ I, plansPage }) => {
  await plansPage.fields.search.clearAndFill(existingPlanName)
  await plansPage.results.secondTableRow.checkForUpdatedTable()
  await plansPage.results.searchResult.clickRow()
  await I.waitForText(existingPlanName, 15)
  await I.see('Plan Details')
  await plansPage.buttons.displayTab.verifyElementIsDisplayed()
  await plansPage.buttons.displayTab.click()
  await plansPage.buttons.displayCustomersCheckBox.verifyCheckboxIsUnchecked()
  await plansPage.buttons.displayCustomersCheckBox.click()
  await plansPage.buttons.displayCustomersCheckBox.verifyCheckboxIsChecked()
  await plansPage.buttons.displayCustomersCheckBox.click()
  await plansPage.buttons.displayCustomersCheckBox.verifyCheckboxIsUnchecked()
}).tag('@operatorPortal')
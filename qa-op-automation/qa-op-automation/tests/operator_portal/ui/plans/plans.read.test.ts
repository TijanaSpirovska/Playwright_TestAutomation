import { ACCOUNTS } from '../../../../data/accounts';
import { Random } from 'random-js'
import { existingPlanName } from '../../../../data/reservedTestData';

const random = new Random()

Feature('Plans Page')

let mobileUserBearer: string;

Before(async ({ I, loginPage, plansPage }) => {
  mobileUserBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.PARTNER_ADMIN_USER!.email,
    password: ACCOUNTS.PARTNER_ADMIN_USER!.password,
  });
  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  plansPage.buttons.plans.click()
  await I.see('Plan Management')
  await plansPage.fields.search.verifyElementIsDisplayed()
})

Scenario('@C430716 Verify that the superAdmin user will be able to search Plan',async ({ I, plansPage }) => {
  const plans = await I.listPlansForMobileQuery(mobileUserBearer, {})

  const plan = random.pick(plans.listPlansForMobile.edges!)

  const planName = plan?.planName

  await plansPage.fields.search.clearAndFill(planName)
  await plansPage.results.plansTable.verifyTextInColumnHeader(planName)
}).tag('@operatorPortal')

Scenario('@C482702 - Verify Display page on Operator Portal',async ({ I, plansPage }) => {
  await plansPage.fields.search.clearAndFill(existingPlanName)
  await plansPage.results.plansTable.verifyTextInColumnHeader(existingPlanName)
  const getFirstPlan = await plansPage.results.searchResult.getTextFromElement()

  await plansPage.results.searchResult.clickRow()
  await I.waitForText(getFirstPlan, 30)
  await I.see('Plan Details')
  await plansPage.buttons.displayTab.verifyElementIsDisplayed()
  await plansPage.buttons.displayTab.click()
  await plansPage.buttons.displayCustomersCheckBox.verifyElementIsDisplayed()
  const verifyCheckBoxStatus = plansPage.buttons.checkDisplayCustomersCheckBoxStatus.selector

  const count = await I.grabNumberOfVisibleElements(verifyCheckBoxStatus)

  if(count === 0){
    await plansPage.buttons.displayCustomersCheckBox.click()
  }
  await plansPage.fields.templateDropDown.clickElement()
  await I.see('Perk')
  await I.see('PAYGO')
  await I.see('Membership')
  await I.see('Plus')
  await plansPage.buttons.displayLoggedOutUsers.verifyElementIsDisplayed()
  await plansPage.buttons.displayPlanCard.verifyElementIsDisplayed()
  await plansPage.fields.description.verifyElementIsDisplayed()
  await plansPage.fields.discount.verifyElementIsDisplayed()
  await plansPage.fields.ctaField.verifyElementIsDisplayed()
  await plansPage.fields.badge.verifyElementIsDisplayed()
  await plansPage.fields.templateDropDown.verifyElementIsDisplayed()
  await plansPage.fields.pageHeaderField.verifyElementIsDisplayed()
  await plansPage.buttons.addSessionTimes.verifyElementIsDisplayed()
  await I.see('Session Times')
  await I.see('Start Time')
  await I.see('End Time')
  await plansPage.buttons.addListSection.verifyElementIsDisplayed()
  await plansPage.fields.legalese.verifyTextAreaFieldIsDisplayed()
}).tag('@operatorPortal')

Scenario('@C585238 - Verify that the superAdmin user is not able to delete a plan that is not selected',
  async ({ I, plansPage }) => {
    await I.seeInCurrentUrl('/plans/list')
    await plansPage.buttons.deletePlan.verifyEnabled(false)
  }).tag('@operatorPortal')

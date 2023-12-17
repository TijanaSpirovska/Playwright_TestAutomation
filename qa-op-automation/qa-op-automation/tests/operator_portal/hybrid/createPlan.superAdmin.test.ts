import { ACCOUNTS } from '../../../data/accounts'

Feature('superAdmin createPlan')

let superAdminBearer: string

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  })
})

Scenario('@C430730 superAdmin can createPlan with required fields',async ({ I, loginPage, plansPage }) => {
  const { createPlan, createPlanInputData, errors } = await I.createPlanHelper(
    superAdminBearer,
  )

  await I.assertNoErrors(errors)
  await I.assertOk(createPlan)
  await I.assertEqual(createPlan.planDescription, createPlanInputData.planDescription)
  await I.assertEqual(createPlan.intervalLength, createPlanInputData.intervalLength)
  await I.assertEqual(createPlan.planCode?.toUpperCase(), createPlanInputData.planCode.toUpperCase())
  await I.assertEqual(createPlan.planName?.toUpperCase(), createPlanInputData.planName.toUpperCase())
  await I.assertEqual(createPlan.planDuration, createPlanInputData.planDuration)

  await I.amOnPage('/')
  await loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await plansPage.buttons.plans.click()
  await plansPage.fields.search.clearAndFill(createPlanInputData.planName)
  await plansPage.results.secondTableRow.checkForUpdatedTable()
  await plansPage.results.searchResult.clickRow()
  await plansPage.fields.planName.verifyValue(createPlanInputData.planName)
  await plansPage.fields.planDescription.verifyValue(createPlanInputData.planDescription)
  await plansPage.fields.intervalLength.verifyValue(`${createPlanInputData.intervalLength}`)

}).tag('@op-ext').tag('@plan').tag('@createPlan').tag('@superAdmin').tag('@backend').tag('@smoke_test')
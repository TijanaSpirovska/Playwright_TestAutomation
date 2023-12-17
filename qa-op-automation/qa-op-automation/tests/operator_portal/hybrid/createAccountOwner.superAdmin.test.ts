import { ACCOUNTS } from '../../../data/accounts'

Feature('superAdmin createAccountOwner aka Driver')

let superAdminBearer: string

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  })
})

Scenario('@C430737 superAdmin can createAccountOwner with required fields',async ( { I, loginPage, driversPage }) => {
  const { createAccountOwner, createAccountOwnerInputData, errors } = await I.createAccountOwnerHelper(superAdminBearer)

  await I.assertOk(createAccountOwner)
  await I.assertNoErrors(errors)
  await I.assertEqual(createAccountOwnerInputData.email, createAccountOwner.email)
  await I.assertEqual(createAccountOwnerInputData.firstName, createAccountOwner.firstName)
  await I.assertEqual(createAccountOwnerInputData.lastName, createAccountOwner.lastName)
  await I.assertToBeA(createAccountOwner.accountId, 'string')
  await I.assertToBeA(createAccountOwner.firebaseId, 'string')

  I.amOnPage('/')
  loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
  await driversPage.buttons.drivers.click()
  await driversPage.fields.search.clearAndFill(createAccountOwner.email)
  await driversPage.results.searchResultEmail.verifyTextInColumnHeader(`${createAccountOwner.email}`)
}).tag('@op-ext').tag('@accountOwner').tag('@createAccountOwner').tag('@superAdmin').tag('@backend')
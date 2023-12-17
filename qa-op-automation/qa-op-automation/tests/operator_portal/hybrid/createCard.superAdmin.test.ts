import { ACCOUNTS } from '../../../data/accounts'

Feature('superAdmin createCard')

let superAdminBearer: string

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  })
})

Scenario('@C439848 superAdmin can createCard with required fields',async ( { I }) => {
  const { createCard, createCardInputData, errors } = await I.createCardHelper(superAdminBearer)

  await I.assertOk(createCard)
  await I.assertNoErrors(errors)
  await I.assertEqual(createCard.externalNumber, createCardInputData.externalNumber)
  await I.assertEqual(createCard.internalNumber, createCardInputData.internalNumber)
  await I.assertEqual(createCard.nickName, createCardInputData.nickName)
  await I.assertEqual(createCard.cardTypeId, 291)
  await I.assertEqual(createCard.cardType, 'RFID')
  await I.assertToBeA(createCard.altId, 'string')
}).tag('@op-ext').tag('@card').tag('@createCard').tag('@superAdmin').tag('@backend')
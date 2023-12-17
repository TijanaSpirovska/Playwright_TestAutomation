import { ACCOUNTS } from '../../../data/accounts'

Feature('superAdmin createChargerModel')

let superAdminBearer: string

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  })
})

Scenario('@C457104 superAdmin can createChargerModel with required fields',async ( { I }) => {
  const { errors,
    createChargerModelInputData,
    createChargerModel } = await I.createChargerModelHelper(
    superAdminBearer)

  await I.assertOk(createChargerModel)
  await I.assertNoErrors(errors)
  await I.assertEqual(createChargerModelInputData.modelName, createChargerModel.modelName)
  await I.assertEqual(createChargerModelInputData.modelSku, createChargerModel.modelSku)
  await I.assertEqual(createChargerModelInputData.powerOutput, createChargerModel.powerOutput)
  await I.assertOk(createChargerModel.altId)
}).tag('@createChargerModel').tag('@superAdmin').tag('@backend').tag('@superAdmin')
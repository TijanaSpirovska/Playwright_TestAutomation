import { ACCOUNTS } from '../../../data/accounts'

Feature('superAdmin createHost')

let superAdminBearer: string

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  })
})

xScenario('@C437265 superAdmin can createHost with required fields',async ( { I }) => {
  const { createHost, createHostInputData, errors } = await I.createHostHelper(
    superAdminBearer,
  )

  await I.assertOk(createHost)
  await I.assertNoErrors(errors)
  await I.assertEqual(createHostInputData.address1, createHost.address1)
  await I.assertEqual(createHostInputData.administrativeArea, createHost.administrativeArea)
  await I.assertEqual(createHostInputData.country, createHost.country)
  await I.assertEqual(createHostInputData.locality, createHost.locality)
  await I.assertEqual(createHostInputData.postalCode, createHost.postalCode)
  await I.assertEqual(createHostInputData.hostName, createHost.hostName)
  await I.assertEqual(createHostInputData.hid, createHost.hid)
  await I.assertToBeA(createHost.altId, 'string')
}).tag('@backend').tag('@host').tag('@createHost').tag('@superAdmin')
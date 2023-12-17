Feature('Dummy Test')

BeforeSuite(async ({ I }) => {
  await I.assertEqual(2 + 2, 4, '2+2 should equal 4')
})

Before(async ({ I }) => {
  await I.assertEqual(2 + 3, 5, '2+3 should equal 5')
})

Scenario('@C12345 dummy test', async ({ I }) => {
  interface Foo {
    a: string
    b: number
  }

  const foo: Foo = { a: 'a', b: 1 }
  const bar = { a: 'a', b: 1 }

  await I.assertOk(foo)
  await I.assertFieldsMatch(foo, bar)
  await I.assertEqual(2 + 4, 6, '2+4 should equal 6')
}).tag('@dummy').tag('@smoke')

Scenario('@C12345 dummy test', async ({ I }) => {
  interface Foo {
    a: string
    b: number
  }

  const foo: Foo = { a: 'a', b: 1 }
  const bar = { a: 'a', b: 1 }

  await I.assertOk(foo)
  await I.assertFieldsMatch(foo, bar)
  await I.assertEqual(2 + 4, 6, '2+4 should equal 6')
}).tag('@dummy').tag('@smoke').tag('@important')

Scenario('C123456 dummy graphql test', async ({ I }) => {
  const token = await I.getAuthBearerToken({
    email: 'internal@evgo.com',
    password: 'doctorwho',
  })

  const { listPlans, errors } = await I.listPlansQuery(token)

  console.log('listPlans', listPlans)
  console.log('errors', errors)

}).tag('@debug')
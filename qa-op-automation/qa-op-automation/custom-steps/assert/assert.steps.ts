import flat from 'flat'

export async function assertFieldsMatch<T>(actual: T, expected: T) {
  const I = this as CodeceptJS.I

  for (const field in expected) {
    await I.assertEqual(actual[field], expected[field], `Property "${field}" should match`)
  }
}

export async function assertOk<T>(value: T, message = 'Expected value should be truth') {
  const isOk = value !== null && typeof value !== 'undefined' && !!value

  const I = this as CodeceptJS.I

  await I.assertTrue(isOk, `${message} (value = ${value ? JSON.stringify(value): value})`)
}

export async function assertNoErrors<T>(errors: T, message = 'Errors should be undefined') {
  const I = this as CodeceptJS.I

  if (errors) {
    await I.assertEqual(JSON.stringify(errors, null, 2), undefined, message)
  }
}

export async function assertPropertiesAreOk<T>(actualObject: T, expectedProperties: string[], message?: string) {
  const I = this as CodeceptJS.I
  const flatObject = flat(actualObject)

  for (let i = 0; i < expectedProperties.length; i++) {
    await I.assertHasProperty(
      flatObject,
      expectedProperties[i],
      message?? `Object should have ${expectedProperties[i]} property`,
    )

    await I.assertOk(
      flatObject[expectedProperties[i]],
      message?? `Expect property (${expectedProperties[i]}) value to be defined`,
    )
  }
}

export async function assertDefined(actualValue: any, message?: string) {
  const I = this as CodeceptJS.I

  await I.assertNotContain([null, undefined], actualValue, message)
}

export async function assertDeepEqualExceptForSome<T extends object>(
  actualObject: T,
  expectedObject: Partial<T>,
  excludedProperties: string[],
  message?: string,
) {

  const isActualObject = typeof actualObject === 'object' && actualObject !== null
  const isExpectedObject = typeof expectedObject === 'object' && expectedObject !== null

  const actualObjectCopy = isActualObject ? JSON.parse(JSON.stringify(actualObject)) : actualObject
  const expectedObjectCopy = isExpectedObject ? JSON.parse(JSON.stringify(expectedObject)) : expectedObject

  excludedProperties.forEach(excludedProperty => {
    isActualObject && delete actualObjectCopy[excludedProperty]
    isExpectedObject && delete expectedObjectCopy[excludedProperty]
  })

  const actualObjectFlat = isActualObject ? flat(JSON.parse(JSON.stringify(actualObjectCopy))) : actualObject
  const expectedObjectFlat = isExpectedObject ? flat(JSON.parse(JSON.stringify(expectedObjectCopy))) : expectedObject

  excludedProperties.forEach(excludedProperty => {
    isActualObject && delete actualObjectFlat[excludedProperty]
    isExpectedObject && delete expectedObjectFlat[excludedProperty]
  })

  const I = this as CodeceptJS.I

  await I.assertDeepEqual(actualObjectFlat, expectedObjectFlat, message)
}
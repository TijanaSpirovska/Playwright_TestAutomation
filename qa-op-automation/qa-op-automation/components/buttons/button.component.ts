import { fail } from 'assert'

const { I } = inject()

export const ButtonComponent = (selector: string) => {
  const rootSelector = selector

  const verifyText = async (text: string) => {
    await I.see(text, rootSelector)
  }

  const click = async () => {
    await I.click(rootSelector)
  }

  const checkElementSelected = async (attribute: string) => {
    const getAttributeValue = await I.grabAttributeFrom(rootSelector, attribute)

    if(getAttributeValue !== 'true') fail('Button is not selected by default')
  }

  const verifyEnabled = async (enabled = true) => {
    if (enabled) {
      await I.waitForEnabled(rootSelector)
    } else {
      await I.seeElement(`${rootSelector}[@disabled]`)
    }
  }

  const verifyElementEnabled = async (enabled = true) => {
    if (enabled) {
      await I.waitForEnabled(rootSelector)
    } else {
      await I.seeElement(`${rootSelector}[@aria-disabled="true"]`)
    }
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(rootSelector, 40)
  }

  const verifyElementIsNotDisplayed = async () => {
    await I.dontSee(rootSelector)
  }

  const verifyCheckboxIsUnchecked = async () => {
    await I.dontSeeCheckboxIsChecked(rootSelector)
  }

  const verifyCheckboxIsChecked = async () => {
    await I.seeCheckboxIsChecked(rootSelector)
  }

  const verifyFirstButtonText = async (option: string) => {
    let tableRow = ''

    tableRow = `${rootSelector}`
    await I.assertDeepEqual(await I.grabTextFrom(tableRow), option)
  }

  return {
    checkElementSelected,
    click,
    selector,
    verifyCheckboxIsChecked,
    verifyCheckboxIsUnchecked,
    verifyElementEnabled,
    verifyElementIsDisplayed,
    verifyElementIsNotDisplayed,
    verifyEnabled,
    verifyFirstButtonText,
    verifyText,
  }
}

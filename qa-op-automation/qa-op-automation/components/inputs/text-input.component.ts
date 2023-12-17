import { notNulUndefined } from '../../utils/not-null-undefined'

const { I } = inject()

export const TextInputComponent = (componentSelector: string) => {
  const rootSelector = componentSelector
  const labelSelector = `${rootSelector}//label`
  const inputSelector = `${rootSelector}//input`
  const errorSelector = `${rootSelector}//*[contains(@class, "Mui-error")]`

  const verifyError = async (message?: string) => {
    if (!message){
      await I.dontSeeElement(errorSelector)
      return
    }
    await I.see(message, errorSelector)
  }

  const verifyEnabled = async (enabled = true) => {
    if (enabled) {
      await I.waitForEnabled(inputSelector)
    } else {
      await I.seeElement(`${inputSelector}[@disabled]`)
    }
  }

  const verifyVisible = async (visible = true) => {
    if (visible) {
      await I.seeElement(rootSelector)
    } else {
      await I.dontSeeElement(rootSelector)
    }
  }

  const verifyTextIsNotVisible = async (text: string) => {
    await I.dontSee(text, rootSelector)
  }

  const verifyLabel = async (text: string) => {
    if (text) {
      await I.see(text, labelSelector)
    } else {
      await I.dontSeeElement(labelSelector)
    }
  }

  const verifyValue = async (value: string) => {
    await I.waitForValue(inputSelector, value)
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(inputSelector, 40)
  }

  const verifyTextAreaFieldIsDisplayed = async () => {
    await I.waitForElement(rootSelector, 10)
  }

  const fill = async (value?: string) => {
    await I.waitForEnabled(inputSelector, 5)

    if (!notNulUndefined(value)) {
      await I.clearField(inputSelector)
      return
    }

    await I.fillField(inputSelector, value!)
  }

  const clearAndFill = async (value?: string) => {
    await I.waitForEnabled(inputSelector)

    await I.clearField(inputSelector)

    if (!notNulUndefined(value)) {
      return
    }

    await I.fillField(inputSelector, value!)
  }

  const clearTextField = async () => {
    await I.clearField(inputSelector)
  }

  const click = async () => {
    await I.click(rootSelector)
  }

  const clearAndFillTextAreaField = async (value?: string) => {
    await I.waitForEnabled(rootSelector)

    await I.clearField(rootSelector)

    if (!notNulUndefined(value)) {
      return
    }

    await I.fillField(rootSelector, value!)
  }

  const getTextFromElement = async () => {
    const text = await I.grabValueFrom(inputSelector)

    return text
  }

  return{
    clearAndFill,
    clearAndFillTextAreaField,
    clearTextField,
    click,
    fill,
    getTextFromElement,
    inputSelector,
    selector: rootSelector,
    verifyElementIsDisplayed,
    verifyEnabled,
    verifyError,
    verifyLabel,
    verifyTextAreaFieldIsDisplayed,
    verifyTextIsNotVisible,
    verifyValue,
    verifyVisible,
  }
}

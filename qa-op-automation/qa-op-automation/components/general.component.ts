import { fail } from 'assert'

const { I } = inject()

export const GeneralComponent = (componentSelector: string) => {
  const elementSelector = componentSelector

  const loadingSpinner = '//*[contains(@class, "MuiCircularProgress-svg")]'

  const checkForLoadingSpinner = async () => {
    await I.waitForInvisible(loadingSpinner, 40)
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(elementSelector, 20)
  }

  const verifyTextInElement = async (text: string) => {
    await I.see(text, elementSelector)
  }

  const verifyTextIsNotDisplayedInTheElement = async (text: string) => {
    await I.dontSee(text, elementSelector)
  }

  const verifyElementIsNotDisplayed = async () => {
    await I.waitForInvisible(elementSelector)
  }

  const checkMetricCardsText = async () => {
    const text = await I.grabTextFrom(elementSelector)

    if(text.includes('No change')){
      await I.see('No change in the past 30 days versus the previous 30 days')
    } else if(text.includes('kWh increase')){
      await I.see('% kWh increase in the past 30 days versus the previous 30 days')
    } else if(text.includes('increase')){
      await I.see('% increase in the past 30 days versus the previous 30 days')
    } else if(text.includes('kWh decrease')){
      await I.see('% kWh decrease in the past 30 days versus the previous 30 days')
    }else if(text.includes('decrease')){
      await I.see('% decrease in the past 30 days versus the previous 30 days')
    } else{
      fail('Incorrect Text')
    }
  }

  const checkConnectorStatus = async () => {
    const text = await I.grabTextFrom(elementSelector)

    if(text.includes('Available')){
      await I.see('Available')
    } else if (text.includes('Charging')){
      await I.see('Charging')
    } else{
      fail('Incorrect Status')
    }
  }

  const scrollToElement = async () => {
    await I.scrollTo(elementSelector)
  }

  const moveCursorToElement = async () => {
    await I.moveCursorTo(elementSelector, 5,5)
  }

  return {
    checkConnectorStatus,
    checkForLoadingSpinner,
    checkMetricCardsText,
    moveCursorToElement,
    scrollToElement,
    verifyElementIsDisplayed,
    verifyElementIsNotDisplayed,
    verifyTextInElement,
    verifyTextIsNotDisplayedInTheElement,
  }
}
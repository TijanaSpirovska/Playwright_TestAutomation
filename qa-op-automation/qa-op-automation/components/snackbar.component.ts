
const { I } = inject()

export const SnackbarComponent = (componentSelector: string) => {
  const snackbarSelector = componentSelector
  const snackbarTextSelector = `${snackbarSelector}//*[@class="MuiAlert-message"]/..`
  const snackbarCloseSelector = `${snackbarSelector}//*[@class="MuiAlert-action"]/..`

  const verifyTextInSnackbar = async (snackBar: string) => {
    await I.waitForElement(snackbarSelector, 30)
    await I.see(snackBar, snackbarTextSelector)
  }

  const verifyVisible = async (visible = true) => {
    if (visible) {
      await I.seeElement(snackbarSelector)
      await I.seeElement(snackbarCloseSelector)
    } else {
      await I.dontSeeElement(snackbarSelector)
    }
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(snackbarSelector, 40)
  }

  return{
    selector: snackbarSelector,
    verifyElementIsDisplayed,
    verifyTextInSnackbar,
    verifyVisible,
  }
}
const { I } = inject()

export const DropDownSelectComponent = (componentSelector: string) => {
  const rootSelector = componentSelector
  const labelSelector = `${rootSelector}//label`
  const inputSelector = `${rootSelector}//input`
  const errorSelector = `${rootSelector}//*[contains(@class, "Mui-error")]`

  const menuSelector = '//*[@role="menu-list"]'
  const subMenuSelector = '//*[@role="listbox"]'
  const subMenuItemSelector = `${subMenuSelector}//*[@data-testid="option-label"]/span`
  const menuItemSelector = `${menuSelector}//*[@role="option"]/button`
  const subMenuItemSelectorByOption = (option: string) => `${subMenuItemSelector}[text()="${option}"]`
  const subMenuItemSelectorByIndex = (index: number) => `${subMenuItemSelector}[${index}]`
  const menuItemSelectorByOption = (option: string) => `${menuItemSelector}[text()="${option}"]`
  const menuItemSelectorByIndex = (index: number) => `${menuItemSelector}[${index}]`

  const verifyError = async (message?: string) => {
    if (!message) {
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

  const verifyText = async (text: string) => {
    await I.see(text, rootSelector)
  }

  const select = async (option: string | number) => {
    await I.click(rootSelector)

    let optionSelector

    switch (typeof option) {
      case 'string':
        optionSelector = menuItemSelectorByOption(option)
        break
      case 'number':
        optionSelector = menuItemSelectorByIndex(option)
        break
      default:
        throw new Error(`Unknown option ${option}`)
    }

    await I.click(optionSelector)
  }

  const subMenuselect = async (option: string | number) => {
    await I.click(rootSelector)

    let optionSelector

    switch (typeof option) {
      case 'string':
        optionSelector = subMenuItemSelectorByOption(option)
        break
      case 'number':
        optionSelector = subMenuItemSelectorByIndex(option)
        break
      default:
        throw new Error(`Unknown option ${option}`)
    }

    await I.click(optionSelector)
    await I.wait(5)
  }

  const verifyOptions = async (options: string[]) => {
    await I.click(rootSelector)

    const actualOptions = await I.grabTextFromAll(menuItemSelector)

    await I.assertDeepEqual(actualOptions, options)
    await I.pressKey('Escape')
  }

  const clickElement = async () => {
    await I.click(rootSelector)
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(inputSelector, 40)
  }

  return {
    clickElement,
    menuItemSelectorByIndex,
    menuItemSelectorByOption,
    select,
    selector: rootSelector,
    subMenuselect,
    verifyElementIsDisplayed,
    verifyEnabled,
    verifyError,
    verifyLabel,
    verifyOptions,
    verifyText,
    verifyValue,
    verifyVisible,
  }
}

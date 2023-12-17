import assert from 'assert'

const { I } = inject()

export const DropDownButtonComponent = (componentSelector: string) => {
  const rootSelector = componentSelector

  const menuSelector = '//*[@role="menu"]'
  const menuItemSelector = `${menuSelector}//*[@role="menuitem"]`

  const verifyText = async (text: string) => {
    await I.see(text, rootSelector)
  }

  const select = async (option: string | number) => {
    await I.click(rootSelector)

    let optionSelector

    switch (typeof option) {
      case 'string':
        optionSelector = `${menuItemSelector}[text()="${option}"]`
        break
      case 'number':
        optionSelector = `${menuItemSelector}[${option}]`
        break
      default:
        throw new Error(`Unknown option ${option}`)
    }

    await I.click(optionSelector)
  }

  const verifyOptions = async (options: string[]) => {
    await I.click(rootSelector)

    const actualOptions = await I.grabTextFromAll(menuItemSelector)

    assert.deepStrictEqual(actualOptions, options)
  }

  const clickElement = async () => {
    await I.click(rootSelector)
  }

  return {
    clickElement,
    select,
    verifyOptions,
    verifyText,
  }
}

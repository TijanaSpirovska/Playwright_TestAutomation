import { ButtonComponent } from './buttons/button.component'
import { DropDownButtonComponent } from './buttons/drop-down-button.component'
import assert from 'assert'

const { I } = inject()

export const TableComponent = (componentSelector?: string) => {
  const tableSelector = componentSelector ?? '//table'
  const columnHeaderSelector = `${tableSelector}//*[contains(@class, "MuiTableCell-head")]`

  const nextPageButton = ButtonComponent(`${tableSelector}/..//button[@title="Next page"]`)
  const previousPageButton = ButtonComponent(`${tableSelector}/..//button[@title="Previous page"]`)

  const pageSizeSelectButton = DropDownButtonComponent(
    `${tableSelector}/..//*[contains(@class,"MuiTablePagination-input")]`,
  )

  const paginationOptions = '//*[@role="listbox"]/li'

  const loadingSpinner = (`${tableSelector}//*[contains(@class, "MuiCircularProgress-svg")]`)

  const rowCount = '//table/tbody/tr'

  const rowCountSecondTable = '//table[@data-testid="charger-selection-list"]/tbody/tr'

  const secondTableRow = tableSelector

  const removeChargerButton = '//*[@data-testid="remove-charger-btn"]'

  const confirmRemoveChargerButton = '//*[@data-testid="confirmation-dialog-confirm-button"]'

  const verifyColumnHeaders = async (headers: string[]) => {
    const actualHeaders = await I.grabTextFromAll(columnHeaderSelector)

    assert.deepStrictEqual(actualHeaders, headers)
  }

  const checkForTableLoadingSpinner = async () => {
    await I.waitForInvisible(loadingSpinner, 40)
  }

  const checkForUpdatedTable = async () => {
    await I.waitForInvisible(secondTableRow, 30)
  }

  const getTextFromElement = async () => {
    return await I.grabTextFrom(tableSelector)
  }

  const verifyTextInColumnHeader = async (header: string) => {
    await I.see(header, componentSelector)
  }

  const verifyTextIsNotDisplayedInTheElement = async (text: string) => {
    await I.dontSee(text, tableSelector)
  }

  const verifyTextIsDisplayedInTheElement = async (text: string) => {
    await I.see(text, tableSelector)
  }

  const clickRow = async () => {
    await I.click(tableSelector)
  }

  const clickElement = async () => {
    await I.click(tableSelector)
  }

  const clickColumnHeader = async (columnHeader: string) => {
    await I.click(`${columnHeaderSelector}//*[text()="${columnHeader}"]`)
  }

  const goToNextPage = async () => {
    await nextPageButton.click()
  }

  const goToPreviousPage = async () => {
    await previousPageButton.click()
  }

  const verifyPaginationInfo = async (info: string) => {
    await I.seeTextEquals(info, `${tableSelector}/..//*[contains(@class,"MuiTablePagination-caption")][2]`)
  }

  const verifySelectPaginationInfo = async (info: string) => {
    // eslint-disable-next-line max-len
    await I.seeTextEquals(info, `${tableSelector}/..//*[contains(@class,"MuiTablePagination-input")]/div`)
  }

  const verifyElementIsDisplayed = async () => {
    await I.waitForElement(tableSelector, 30)
  }

  const verifyElementIsNotDisplayed = async () => {
    await I.waitForInvisible(tableSelector, 40)
  }

  const getPaginationInfo = async () => {
    return await I.grabTextFrom(`${tableSelector}/..//*[contains(@class,"MuiTablePagination-caption")][2]`)
  }

  const selectPageSize = async (size: number) => {
    await pageSizeSelectButton.select(`${size}`)
  }

  const verifyPaginationPageSizeOptions = async (pageSize: string[]) => {
    await pageSizeSelectButton.clickElement()

    const actualPageSize = await I.grabTextFromAll(paginationOptions)

    assert.deepStrictEqual(actualPageSize, pageSize)
  }

  const verifyRow = async (columnsValues: (string | null)[], rowIndex?: number) => {
    for (let columnIndex = 0; columnIndex < columnsValues.length; columnIndex++) {
      if (columnsValues[columnIndex] === null) {
        /**
         * In case we don't want to verify some column because they contain non-text values like an image
         * set column value to null in columnsValues
         */
        continue
      }

      const rowSelector = `tr[${rowIndex || ''}]`
      const textSelector = columnsValues[columnIndex] ? `[text()="${columnsValues[columnIndex]}"]` : '[not(text())]'
      const columnSelectorA = `td[${columnIndex + 1}]${textSelector}`
      const columnSelectorB = `td[${columnIndex + 1}]//*${textSelector}`

      const selectorA = `${tableSelector}/tbody/${rowSelector}/${columnSelectorA}`
      const selectorB = `${tableSelector}/tbody/${rowSelector}/${columnSelectorB}`

      const fullSelector = `${selectorA} | ${selectorB}`

      await I.waitForElement(fullSelector)
    }
  }

  const verifyTableColumn = async (option: string) => {
    let tableRow

    await I.wait(5)
    for(let i = 0; i < 10; i++){
      tableRow = `${tableSelector}${i.toString()}"]`
      await I.assertContain( await I.grabTextFrom(tableRow), option)
    }
  }

  const verifyTableColumnWithoutPagination = async (option: string, element = false) => {
    let tableRow

    await I.wait(5)
    if (element) {
      const count = await I.grabNumberOfVisibleElements(`//div[@role="presentation"]${rowCount}`)

      for(let i = 0; i < await count; i++){
        tableRow = `//div[@role="presentation"]${tableSelector}${i.toString()}"]`
        await I.assertContain( await I.grabTextFrom(tableRow), option)
      }
    } else {
      const count = await I.grabNumberOfVisibleElements(rowCount)

      for(let i = 0; i < await count; i++){
        tableRow = `${tableSelector}${i.toString()}"]`
        await I.assertContain( await I.grabTextFrom(tableRow), option)
      }
    }
  }

  const verifySecondTableColumnWithoutPagination = async (option: string, option2: string, option3: string, element = false) => {
    let tableRow

    await I.wait(5)
    if (element) {
      const count = await I.grabNumberOfVisibleElements(`//div[@role="presentation"]${rowCount}`)

      for(let i = 0; i < await count; i++){
        tableRow = `//div[@role="presentation"]${tableSelector}${i.toString()}"]`
        await I.assertContain( await I.grabTextFrom(tableRow), option)
      }
    } else {
      const count = await I.grabNumberOfVisibleElements(rowCountSecondTable)

      for(let i = 0; i < await count; i++){
        tableRow = `${tableSelector}${i.toString()}"]`
        const result = (await I.grabTextFrom(tableRow))

        if(result.includes(option)){
          await I.assertContain(result, option)
        } else if (result.includes(option2)){
          await I.assertContain(result, option2)
        }else if(result.includes(option3)){
          await I.assertContain(result, option3)
        }else{
          throw new Error(`Unknown option ${option}`)
        }
      }
    }
  }

  const verifyTableRowText = async (option: string) => {
    let tableRow = ''

    tableRow = `${tableSelector}`
    await I.assertDeepEqual(await I.grabTextFrom(tableRow), option)
  }

  const verifyCheckboxesAreChecked = async () => {
    const count = await I.grabNumberOfVisibleElements(tableSelector)

    for(let i = 0; i < count; i++){
      await I.seeCheckboxIsChecked(tableSelector)
    }
  }

  const verifyCheckboxesAreUnchecked = async () => {
    const count = await I.grabNumberOfVisibleElements(tableSelector)

    for(let i = 0; i < count; i++){
      await I.dontSeeCheckboxIsChecked(tableSelector)
    }
  }

  const removeAllChargers = async () => {
    await I.waitForElement(removeChargerButton,5)
    const chargersNumber = await I.grabNumberOfVisibleElements(removeChargerButton)

    for(let i = 0; i < chargersNumber; i++){
      await I.click(removeChargerButton)
      await I.click(confirmRemoveChargerButton)
      await I.wait(3)
    }
  }

  const removerCharger = async () => {
    await I.waitForElement(removeChargerButton,5)
    await I.click(removeChargerButton)
    await I.waitForElement(confirmRemoveChargerButton,5)
    await I.see('Remove Charger')
    await I.see('Are you sure you want to remove this charger from the group?')
    await I.click(confirmRemoveChargerButton)
  }

  const moveCursorToElement = async () => {
    await I.moveCursorTo(tableSelector, 5,5)
  }

  return {
    checkForTableLoadingSpinner,
    checkForUpdatedTable,
    clickColumnHeader,
    clickElement,
    clickRow,
    componentSelector,
    getPaginationInfo,
    getTextFromElement,
    goToNextPage,
    goToPreviousPage,
    moveCursorToElement,
    removeAllChargers,
    removerCharger,
    selectPageSize,
    verifyCheckboxesAreChecked,
    verifyCheckboxesAreUnchecked,
    verifyColumnHeaders,
    verifyElementIsDisplayed,
    verifyElementIsNotDisplayed,
    verifyPaginationInfo,
    verifyPaginationPageSizeOptions,
    verifyRow,
    verifySecondTableColumnWithoutPagination,
    verifySelectPaginationInfo,
    verifyTableColumn,
    verifyTableColumnWithoutPagination,
    verifyTableRowText,
    verifyTextInColumnHeader,
    verifyTextIsDisplayedInTheElement,
    verifyTextIsNotDisplayedInTheElement,
  }
}

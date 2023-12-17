import { ButtonComponent } from '../components/buttons/button.component'
import { DropDownSelectComponent } from '../components/inputs/drop-down-select.component'
import { GeneralComponent } from '../components/general.component'
import { SnackbarComponent } from '../components/snackbar.component'
import { TableComponent } from '../components/table.component'
import { TextInputComponent } from '../components/inputs/text-input.component'

const buttons = {
  addElementButton: ButtonComponent('//*[@data-testid="plan-elements-panel-header-add-button"]'),
  addListSection: ButtonComponent('//*[@data-testid="plan-detail-panel-header-add-button"]'),
  addPlanButton: ButtonComponent('#ay-add-plan-button'),
  addProductButton: ButtonComponent('//*[@id="plan-products-add-product-button"]'),
  addSessionTimes: ButtonComponent('//*[@data-testid="plan-detail-session-times-session-times-add-button"]'),
  allPlansButton: ButtonComponent('#plan-header-header-back-button'),
  checkDisplayCustomersCheckBoxStatus: ButtonComponent('(//*[contains(@class, "Mui-checked")])[1]'),
  deletePlan: ButtonComponent('//*[@id="ay-delete-plans-button"]'),
  displayCustomersCheckBox: ButtonComponent('//*[@id="plan-display-settings-display-to-customers-checkbox"]'),
  displayLoggedOutUsers: ButtonComponent('//*[@id="plan-display-settings-display-to-logged-out-users-checkbox"]'),
  displayPlanCard: ButtonComponent('//*[@id="plan-display-settings-display-plan-card"]'),
  displayTab: ButtonComponent('//*[@id="plan-form-display-tab"]'),
  duplicatePlanButton: ButtonComponent('//*[@id="ay-plan-0-duplicate-button-container"]'),
  mondayCheckBox: ButtonComponent('//*[@id="yy-0-hour-0-monday-checkbox"]'),
  plans: ButtonComponent('//*[@data-testid="Sidenav-plans-menu-item"]'),
  save: ButtonComponent('#plan-form-save-button'),
}

const fields = {
  badge: TextInputComponent('//*[@data-testid="plan-card-badge-input"]'),
  cardBrand: DropDownSelectComponent('//*[@data-testid="plan-details-card-brand-input"]'),
  connectorType: DropDownSelectComponent('//*[@id="uy-0-connectorType-input"]'),
  creditAmount: TextInputComponent('//*[@data-testid="plan-product-0-credit-amount-input"]'),
  creditExpBehavior: DropDownSelectComponent('//*[@id="plan-product-0-credit-exp-policy-input"]'),
  creditOneTimeAmount: TextInputComponent('//*[@data-testid="plan-product-0-credit-one-time-amount-input"]'),
  creditRecurrence: DropDownSelectComponent('//*[@id="plan-product-0-credit-reoccurrence-input"]'),
  ctaField: TextInputComponent('//*[@data-testid="plan-card-cta-label-input"]'),
  description: TextInputComponent('//*[@data-testid="plan-card-plan-subheading-input"]'),
  discount: TextInputComponent('//*[@data-testid="plan-card-discount-input"]'),
  displayName: TextInputComponent('//*[@id="plan-details-display-name-input"]/..'),
  endTime: TextInputComponent('//*[@data-testid="plan-elements-yy-0-hour-0-end-time-input"]'),
  enrollmentClosed: TextInputComponent('//*[@data-testid="plan-details-enrollment-closed-input"]'),
  enrollmentOpen: TextInputComponent('//*[@data-testid="plan-details-enrollment-open-input"]'),
  financeCode: TextInputComponent('//*[@data-testid="plan-details-finance-code-input"]'),
  intervalLength: TextInputComponent('//*[@id="plan-details-interval-length-input"]/..'),
  intervalUnit: DropDownSelectComponent('//*[@data-testid="plan-details-interval-unit-input"]'),
  legalese: TextInputComponent('//*[@data-testid="plan-detail-legalese-input"]/textarea'),
  pageHeaderField: TextInputComponent('//*[@data-testid="plan-detail-page-header-input"]'),
  planCardDescriptionField: TextInputComponent('//*[@id="plan-card-plan-subheading-input"]'),
  planCode: TextInputComponent('//*[@data-testid="plan-details-plan-code-input"]/..'),
  planDescription: TextInputComponent('//*[@id="plan-details-description-input"]/..'),
  planDuration: TextInputComponent('//*[@data-testid="plan-details-duration-input"]'),
  planName: TextInputComponent('//*[@id="plan-details-plan-name-input"]/..'),
  planStatus: DropDownSelectComponent('//*[@id="plan-details-status-input"]/..'),
  productType: DropDownSelectComponent('//*[@id="plan-product-0-type-input"]'),
  rolloverPlan: DropDownSelectComponent('//*[@data-testid="plan-details-rollover-plan-input"]'),
  search: TextInputComponent('//*[@id="plans-list-search-box-container"]/..'),
  startTime: TextInputComponent('//*[@data-testid="plan-elements-yy-0-hour-0-start-time-input"]'),
  subscriptionFee: TextInputComponent('//*[@data-testid="plan-product-0-subscription-fee-input"]'),
  subscriptionRecurrence: DropDownSelectComponent('//*[@id="plan-product-0-subscription-reoccurrence-input"]'),
  templateDropDown: DropDownSelectComponent('//*[@data-testid="plan-card-template-input"]'),
  terminationBehavior: DropDownSelectComponent('//*[@data-testid="plan-details-termination-behavior-input"]//*[contains(@class, " css-xju512")]'),
}

const results = {
  plansTable: TableComponent('//*[@data-testid="plan-management-table"]'),
  searchResult: TableComponent('//*[@id="ay-plan-0-name-link"]'),
  secondTableRow: TableComponent('//*[@id="ay-plan-1-name-link-container"]/a'),
}

const snackBar = {
  snackbarPlans: SnackbarComponent('//*[contains(@class, "MuiSnackbar-root")]'),
}

const checkHeader = {
  loadingHeader: TextInputComponent('//*[contains(@id, "plan-header-header-name")]'),
}

const general = {
  errorMessageStartTime: GeneralComponent('//*[@title="Start time is required and must be before end time"]'),
}

export {
  buttons,
  checkHeader,
  fields,
  results,
  snackBar,
  general,
}

import { ButtonComponent } from '../components/buttons/button.component'
import { DropDownSelectComponent } from '../components/inputs/drop-down-select.component'
import { GeneralComponent } from '../components/general.component'
import { SnackbarComponent } from '../components/snackbar.component'
import { TableComponent } from '../components/table.component'
import { TextInputComponent } from '../components/inputs/text-input.component'

const buttons = {
  addDriverButton: ButtonComponent('//*[@data-testid="add-driver-button"]'),
  allAccountsButton: ButtonComponent('//*[@data-testid="account-edit-header-all-accounts-back-button"]'),
  drivers: ButtonComponent('//*[@data-testid="Sidenav-drivers-menu-item"]'),
  sameAsMailingCheckBox: ButtonComponent('//*[@data-testid="account-profile-form-billing-same-as-mailing-checkbox"]'),
  saveButton: ButtonComponent('//*[@data-testid="account-profile-form-save-button"]'),
}

const fields = {
  accountStatus: DropDownSelectComponent('//*[@data-testid="account-status-select"]'),
  addressLine1: TextInputComponent('//*[@data-testid="account-profile-form-mailing-address-street"]'),
  addressLine2: TextInputComponent('//*[@data-testid="account-profile-form-mailing-address-2"]'),
  city: TextInputComponent('//*[@data-testid="account-profile-form-mailing-address-city"]'),
  country: DropDownSelectComponent('//*[@data-testid="account-profile-form-mailing-address-country"]'),
  driverStatus: DropDownSelectComponent('//*[@data-testid="driver-status-select"]'),
  email: TextInputComponent('//*[@data-testid="account-profile-form-email"]'),
  firstName: TextInputComponent('//*[@data-testid="account-profile-form-first-name"]'),
  lastName: TextInputComponent('//*[@data-testid="account-profile-form-last-name"]'),
  phoneNumber: TextInputComponent('//*[@data-testid="account-profile-form-phone"]'),
  search: TextInputComponent('//*[@data-testid="list-search"]'),
  state: DropDownSelectComponent('//*[@data-testid="account-profile-form-mailing-address-state"]'),
  statesButton: DropDownSelectComponent('//*[@data-testid="states-select"]'),
  zipCode: TextInputComponent('//*[@data-testid="account-profile-form-mailing-address-postal-code"]'),
}

const results = {
  accountStatusRow: TableComponent('//*[@data-testid="drivers-list-table-cell-accountStatus-'),
  billingAddressRow: TableComponent('//*[@data-testid="drivers-list-table-cell-billingAddress-'),
  billingAddressTableRow: TableComponent('//*[@data-testid="drivers-list-table-cell-billingAddress-0"]'),
  driverStatusRow: TableComponent('//*[@data-testid="drivers-list-table-cell-driverStatus-'),
  driversTable: TableComponent('//*[@data-testid="driver-management-table"]'),
  searchResultDriverName: TableComponent('//*[@data-testid="drivers-list-table-cell-driverLink-0"]/a'),
  searchResultEmail: TableComponent('//*[@data-testid="drivers-list-table-cell-email-0"]'),
  secondTableRow: TableComponent('//*[contains(@data-testid, "drivers-list-table-cell-driverLink-1")]/a'),
}

const profile = {
  accountProfile: TableComponent('//*[@id="scrollable-prevent-tabpanel-0"]'),
}

const snackBar = {
  snackbarDrivers: SnackbarComponent('//*[contains(@class, "MuiSnackbar-root")]'),
}

const general = {
  loadingSpinner: GeneralComponent(''),
}

export {
  buttons,
  snackBar,
  results,
  fields,
  profile,
  general,
}
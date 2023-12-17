import { ACCOUNTS } from '../../../../data/accounts';

Feature('Login Page')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('@C429622 Verify that user will be able to log in to the OP with valid credentials',
  ({ I, loginPage, mainPage }) => {
    I.see('Login')
    loginPage.sendForm(ACCOUNTS.GENERAL_USE!.email, ACCOUNTS.GENERAL_USE!.password)
    I.see('Charger Management')
    mainPage.logOut()
  }).tag('@operatorPortal').tag('@login')
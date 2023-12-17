import { ButtonComponent } from '../components/buttons/button.component'

const { I } = inject()

const buttons = {
  logOut: ButtonComponent("//*[contains(@id, 'header-menu-profile-menu-item')]"),
  logOutReportals: ButtonComponent('//*[@data-testid="profile-menu-button"]'),
  submit: ButtonComponent("//li[contains(.,'Log out')]"),
}

const logOut = () => {
  I.waitForEnabled(buttons.logOut.selector, 10)
  buttons.logOut.click()
  buttons.submit.click()
  I.waitToHide(buttons.submit.selector)
}

export {
  buttons,
  logOut,
}

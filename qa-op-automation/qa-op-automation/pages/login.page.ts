import { ButtonComponent } from '../components/buttons/button.component'
import { TextInputComponent } from '../components/inputs/text-input.component';

const { I } = inject()

const fields = {
  email: TextInputComponent('[name="username"]'),
  password: TextInputComponent('[name="password"]'),
  reportalsEmail: TextInputComponent('[name="email"]'),
}

const buttons = {
  submit: ButtonComponent('button[type="submit"]'),
}

const sendForm = (email: string, password: string) => {
  I.waitForElement(fields.email.selector, 30)
  I.fillField(fields.email.selector, email)
  I.fillField(fields.password.selector, password)
  I.waitForEnabled(buttons.submit.selector, 5)
  buttons.submit.click()
  if (password !== 'wrongPassword') {
    I.waitForNavigation('networkidle')
  }
}

const reportalsLogin = async (email: string, password: string) => {
  await I.waitForElement(fields.reportalsEmail.selector, 40)
  I.fillField(fields.reportalsEmail.selector, email)
  I.fillField(fields.password.selector, password)
  I.waitForEnabled(buttons.submit.selector, 5)
  buttons.submit.click()
  if (password !== 'wrongPassword') {
    I.waitForNavigation('networkidle')
  }
}

const verifyElementIsDisplayed = async () => {
  await I.waitForElement(fields.email.selector)
}

export {
  buttons,
  fields,
  sendForm,
  reportalsLogin,
  verifyElementIsDisplayed,
}

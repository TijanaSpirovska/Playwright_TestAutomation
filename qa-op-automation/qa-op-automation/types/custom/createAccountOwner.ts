import { Address } from '../custom/Address'
export interface CreateAccountOwner{
  accountId: string,
  billingAddress: Address,
  email: string,
  firebaseId: string,
  firstName: string,
  lastName: string,
  mailingAddress: Address,
  password: string,
}

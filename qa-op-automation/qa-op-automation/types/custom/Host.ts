import { Address } from './Address'
import { ExtendUser } from './extendUser';
import { Property } from './Property';
export interface Host extends Address {
  extendUsers: ExtendUser,
  hostName: string,
  status: string,
  hid: string,
  altId: string,
  properties: [Property]
}

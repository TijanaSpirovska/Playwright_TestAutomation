import { Host } from '../custom/Host'
export interface ExtendUser {
  altId: string,
  firebaseId: string,
  username: string,
  hosts: { edges: [Host] }
}
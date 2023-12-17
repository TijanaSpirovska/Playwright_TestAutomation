import { Tags } from './Tags'

export interface Charger {
  altId: string,
  chargerId: string,
  chargerName: string
  serialNumber: string
  edges: [Tags]
}
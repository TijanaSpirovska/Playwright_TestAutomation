import { Charger } from './Charger'
import { Host } from './Host'

interface chargerEdges {
  edges: [Charger]
}

export interface ChargerGroup {
  altId: string,
  chargerGroupName: string,
  chargerGroupType: string,
  chargerGroupTypeId: number,
  description: string,
  chargers: chargerEdges,
  host: Host
}

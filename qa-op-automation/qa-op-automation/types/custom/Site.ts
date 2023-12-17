import { ChargersWithMeta } from './ChargersWithMeta'

interface SiteEdges {
  altId: string
  siteName: string
  siteStatusId: number
  chargers: ChargersWithMeta
}

export interface Site {
  edges: SiteEdges
}
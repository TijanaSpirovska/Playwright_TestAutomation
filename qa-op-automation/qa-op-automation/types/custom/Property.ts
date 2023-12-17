import { Address } from './Address'
import { Site } from './Site'

interface PropertyEdges extends Address{
  altId: string
  sites: [Site]
}

export interface Property {
  edges: PropertyEdges
}
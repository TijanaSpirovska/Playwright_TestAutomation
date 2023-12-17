export interface geoEdges {
  abbreviation: string,
  country: string,
  name: string,
  type: string
}

export interface GeographicalRegion {
  edges: [geoEdges]
}

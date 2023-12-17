interface connectorType{
  name: string,
  id: number
}
interface ElementEdge{
  connectorTypeId: number,
  day: string,
  endTime: string,
  startTime: string,
  discount: number,
  connector: connectorType
}

interface Elements{
  edges: [ElementEdge]
}

export interface CreatePlan{
  planDescription: string,
  planCode: string,
  intervalLength: string
  altId: string,
  intervalUnit: number,
  planDuration: number,
  planName: string,
  elements: [Elements]
}
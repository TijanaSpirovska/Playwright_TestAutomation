export const connectorTypes = ['CHAdeMO', 'Combo', 'SAE J1772'];

const connectorsArray = {
  QA:{ id: [
    16653,
    16650,
    16656,
    16652,
    16654,
    16646,
  ] },
  STG:{ id: [
    61263,
    61182,
    61256,
    61179,
    61261,
    61097,
  ] },
}

const CONNECTOR = {
  QA:{
    id: 16656,
  },
  STG:{
    id: 61256,
  },
}

export const CONNECTORS = CONNECTOR[(process.env.TEST_ENV || 'QA').toUpperCase()]
export const CONNECTORS_ARRAY = connectorsArray[(process.env.TEST_ENV || 'QA').toUpperCase()]
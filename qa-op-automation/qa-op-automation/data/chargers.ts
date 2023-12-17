enum ChargerType {
  EXTEND = 'EXTEND',
}

  type Charger = { altId?: string, driivzId: number, name: string, siteAltId?: string }
  type Chargers = {
    [chargerType in ChargerType]?: Charger | undefined
  }
  type AllChargers = Record<string, Chargers>

const ALL_CHARGERS: AllChargers = {
  PRE_PROD: {},
  PROD: {},
  QA: {
    EXTEND: {
      driivzId: 10261,
      name: '',
      siteAltId: '5483',
    },
  },
  STG: {},
} as const

export const CHARGERS: Chargers = ALL_CHARGERS[(process.env.TEST_ENV || 'QA').toUpperCase()]

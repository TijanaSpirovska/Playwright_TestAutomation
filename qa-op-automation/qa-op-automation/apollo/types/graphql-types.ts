export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Email: any;
  EncryptedEmail: any;
  EncryptedJson: any;
  Object: any;
  Phone: any;
  PowerUnit: any;
  RequiredString: any;
  SanitizeString: any;
  Time: any;
  Timestamp: any;
  UUID: any;
  Upload: any;
  Vin: any;
  Void: any;
};

export type AaaInitiateOpenEnrollInput = {
  /** The AAA Membership Number. (Required) */
  membershipNumber: Scalars['String'];
  /** The 'promotion_ref' of the high-level promotion which encapsulates the campaign and promo codes. (Required) */
  promotionRef: Scalars['String'];
};

export type AaaOpenEnrollPromoCode = {
  __typename?: 'AAAOpenEnrollPromoCode';
  /** The AAA Membership Number. */
  membershipNumber?: Maybe<Scalars['String']>;
  /** The generated promo code */
  promotionCode?: Maybe<Scalars['String']>;
  /** The 'promotion_ref' of the high-level promotion under which the promo code was generated. */
  promotionRef?: Maybe<Scalars['String']>;
  /** The 'promotion_type' of the high-level promotion under which the promo code was generated. */
  promotionType?: Maybe<Scalars['String']>;
  /** Did the request succeed? */
  success?: Maybe<Scalars['Boolean']>;
};

export type Account = {
  __typename?: 'Account';
  accountStatus: AccountStatus;
  accountType?: Maybe<Scalars['String']>;
  accountVehicles?: Maybe<AccountVehiclesWithMeta>;
  altId: Scalars['ID'];
  balance?: Maybe<Scalars['Float']>;
  balanceType?: Maybe<FalconConstraint>;
  billingAddress?: Maybe<Address>;
  cardOrders?: Maybe<CardOrdersWithMeta>;
  cards?: Maybe<CardsWithMeta>;
  contracts?: Maybe<ContractsWithMeta>;
  driivzSyncedAt?: Maybe<Scalars['Date']>;
  drivers?: Maybe<DriversWithMeta>;
  enrolledOn?: Maybe<Scalars['Date']>;
  evcId?: Maybe<Scalars['String']>;
  evcSyncedAt?: Maybe<Scalars['Date']>;
  fleets?: Maybe<Array<Fleet>>;
  id?: Maybe<Scalars['ID']>;
  isFcms?: Maybe<Scalars['Boolean']>;
  mailingAddress?: Maybe<Address>;
  optIn?: Maybe<Scalars['Boolean']>;
  optInPromotions?: Maybe<Scalars['Boolean']>;
  sites?: Maybe<Array<Site>>;
  users?: Maybe<Array<User>>;
  vendorAccountType?: Maybe<FalconConstraint>;
  vendorId?: Maybe<Scalars['Int']>;
  vendorSyncedAt?: Maybe<Scalars['Date']>;
};


export type AccountAccountVehiclesArgs = {
  input?: InputMaybe<ListAccountVehiclesInput>;
};


export type AccountCardsArgs = {
  input?: InputMaybe<ListCardsInput>;
};


export type AccountContractsArgs = {
  input?: InputMaybe<ListContractsInput>;
};


export type AccountDriversArgs = {
  input?: InputMaybe<ListDriversInput>;
};

export type AccountOwner = {
  __typename?: 'AccountOwner';
  account?: Maybe<Account>;
  accountVehicles?: Maybe<AccountVehiclesWithMeta>;
  altId?: Maybe<Scalars['ID']>;
  cards?: Maybe<CardsWithMeta>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  driverStatus?: Maybe<FalconConstraint>;
  driverType?: Maybe<DriverType>;
  email?: Maybe<Scalars['String']>;
  enrolledOn?: Maybe<Scalars['Date']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  notificationPreferences?: Maybe<NotificationPreferencesWithMeta>;
  optInPromotions?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  subscriptionCopy?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendorAccountType?: Maybe<FalconConstraint>;
  vendorId?: Maybe<Scalars['ID']>;
};


export type AccountOwnerAccountVehiclesArgs = {
  input?: InputMaybe<ListAccountVehiclesInput>;
};


export type AccountOwnerCardsArgs = {
  input?: InputMaybe<ListCardsInput>;
};


export type AccountOwnerNotificationPreferencesArgs = {
  input?: InputMaybe<ListNotificationPreferencesInput>;
};

export enum AccountStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Closed */
  Closed = 'CLOSED',
  /** Deleted */
  Deleted = 'DELETED',
  /** Registered */
  Registered = 'REGISTERED',
  /** Suspended */
  Suspended = 'SUSPENDED',
  /** Unknown */
  Unknown = 'UNKNOWN',
  /** UnSuspended */
  Unsuspended = 'UNSUSPENDED'
}

export type AccountVehicle = {
  __typename?: 'AccountVehicle';
  accountId?: Maybe<Scalars['ID']>;
  altId?: Maybe<Scalars['UUID']>;
  autochargeFlag?: Maybe<Scalars['Boolean']>;
  autochargeStatus?: Maybe<FalconConstraint>;
  deletedAt?: Maybe<Scalars['Date']>;
  driverFirstName?: Maybe<Scalars['String']>;
  driverId?: Maybe<Scalars['ID']>;
  driverLastName?: Maybe<Scalars['String']>;
  macAddress?: Maybe<Scalars['SanitizeString']>;
  media?: Maybe<Media>;
  nickName?: Maybe<Scalars['SanitizeString']>;
  vehicle?: Maybe<Vehicle>;
  vin?: Maybe<Scalars['Vin']>;
};

export type AccountVehicleInput = {
  accountVendorId?: InputMaybe<Scalars['ID']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelName?: InputMaybe<Scalars['String']>;
  vehicleYear?: InputMaybe<Scalars['Int']>;
};

export type AccountVehiclesWithMeta = {
  __typename?: 'AccountVehiclesWithMeta';
  edges?: Maybe<Array<Maybe<AccountVehicle>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AccountsWithMeta = {
  __typename?: 'AccountsWithMeta';
  edges?: Maybe<Array<Maybe<Account>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sort?: Maybe<ListAccountsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type ActivateCardForMobileInput = {
  driverId?: InputMaybe<Scalars['ID']>;
  visibleCardNumber: Scalars['String'];
};

export type ActivateCardInput = {
  comments?: InputMaybe<Scalars['String']>;
  driverId: Scalars['ID'];
  visibleCardNumber: Scalars['String'];
};

export type ActivateCardsInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cardIds: Array<Scalars['UUID']>;
  driverId?: InputMaybe<Scalars['UUID']>;
};

export enum ActivityStatus {
  AvailableToCharge = 'AVAILABLE_TO_CHARGE',
  Charging = 'CHARGING',
  Enroute = 'ENROUTE',
  UnavailableToCharge = 'UNAVAILABLE_TO_CHARGE',
  Unknown = 'UNKNOWN'
}

export enum ActivityStatusLabel {
  Charging = 'CHARGING',
  Done = 'DONE',
  Idle = 'IDLE',
  InMaintainance = 'IN_MAINTAINANCE'
}

export type AdHocContract = {
  __typename?: 'AdHocContract';
  amountUsed?: Maybe<Scalars['Float']>;
  contractId?: Maybe<Scalars['String']>;
  creditBalance?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** Input for adding chargers to a charger group */
export type AddChargersToChargerGroupForExtendInput = {
  /** Charger Group altId */
  altId: Scalars['ID'];
  /** List of charger altIds to add to the charger group */
  chargerIds: Array<Scalars['ID']>;
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
};

/** Input for adding a permission to a service. */
export type AddClaimsInput = {
  /** Name of the role to add to the custom claim. */
  authClaim: Scalars['String'];
  /** Firebase Id. */
  firebaseId: Scalars['String'];
  /** Name of the graph service to set the auth custom claim for. */
  serviceName: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea: Scalars['String'];
  altId: Scalars['ID'];
  city?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  locality: Scalars['String'];
  longitude?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  timeZone?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type AggregatedMeterValues = {
  __typename?: 'AggregatedMeterValues';
  powerMeterValuesInWatts?: Maybe<Array<Maybe<PowerMeterValue>>>;
};

export type Alert = {
  __typename?: 'Alert';
  altId: Scalars['ID'];
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  links?: Maybe<Array<Maybe<AlertLink>>>;
  state?: Maybe<AlertState>;
  title: Scalars['String'];
  type: AlertType;
};

export type AlertLink = {
  __typename?: 'AlertLink';
  displayText?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityTypeId?: Maybe<Scalars['ID']>;
};

export type AlertState = {
  __typename?: 'AlertState';
  isRead: Scalars['Boolean'];
  isTicketSubmitted: Scalars['Boolean'];
  isUrgent: Scalars['Boolean'];
};

export enum AlertType {
  ChargerOffline = 'CHARGER_OFFLINE',
  ConnectorDisconnected = 'CONNECTOR_DISCONNECTED',
  ConnectorFailed = 'CONNECTOR_FAILED',
  ConnectorUnavailable = 'CONNECTOR_UNAVAILABLE',
  MeterTimeout = 'METER_TIMEOUT',
  NetworkUnavailable = 'NETWORK_UNAVAILABLE',
  PeakHoursCharging = 'PEAK_HOURS_CHARGING',
  SessionComplete = 'SESSION_COMPLETE',
  SessionEndedBeforeTargetMet = 'SESSION_ENDED_BEFORE_TARGET_MET',
  SessionFailed = 'SESSION_FAILED',
  SessionStarted = 'SESSION_STARTED',
  SessionStopped = 'SESSION_STOPPED',
  SessionTerminated = 'SESSION_TERMINATED',
  SiteOffline = 'SITE_OFFLINE',
  ThrottleAttemptFailed = 'THROTTLE_ATTEMPT_FAILED',
  ThrottleFinished = 'THROTTLE_FINISHED',
  ThrottleStarted = 'THROTTLE_STARTED',
  ThrottleValidationFailed = 'THROTTLE_VALIDATION_FAILED'
}

export type AlertsData = {
  __typename?: 'AlertsData';
  data?: Maybe<Array<Maybe<Alert>>>;
  total?: Maybe<Scalars['Int']>;
  urgent?: Maybe<Scalars['Int']>;
};

/** Mobile Input for reassigning a card to a driver */
export type AssignCardForMobileInput = {
  /** alt-id in falcon for card that is to be reassigned */
  cardId: Scalars['ID'];
  /** alt-id in falcon for driver card is to be assigned to */
  driverId: Scalars['ID'];
};

export type AssignCardInput = {
  accountId: Scalars['ID'];
  cardId: Scalars['ID'];
  driverId: Scalars['ID'];
  nickName?: InputMaybe<Scalars['String']>;
};

export type AssignCardsInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cardIds: Array<Scalars['UUID']>;
  driverId?: InputMaybe<Scalars['UUID']>;
  nickName?: InputMaybe<Scalars['String']>;
};

export type AssignFleetVehicleRouteInput = {
  fleetVehicleId: Scalars['UUID'];
  /** New departure time to be used instead of the specified route's departure time */
  newDepartureTime?: InputMaybe<Scalars['Time']>;
  /** New route to be created first before assigning to the vehicle. In this case routeId and newDepartureTime are ignored */
  newRoute?: InputMaybe<CreateRouteInput>;
  /** AltId of the route to be assigned */
  routeId?: InputMaybe<Scalars['UUID']>;
};

export type AssignRouteMessage = {
  __typename?: 'AssignRouteMessage';
  fleetVehicleAltId: Scalars['ID'];
  fleetVehicleExpectedDeparture: Scalars['Date'];
  routeAltId: Scalars['String'];
  routeScheduledDepartureTime: Scalars['String'];
};

export type AssignRouteSuccess = {
  __typename?: 'AssignRouteSuccess';
  fleetVehicleId: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum AuthServiceType {
  ShpHsmWelcome = 'SHP_HSM_WELCOME',
  ShpPasswordReset = 'SHP_PASSWORD_RESET',
  ShpShWelcome = 'SHP_SH_WELCOME'
}

export type AuthenticateUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Input for resetting the users permissions. */
export type BlankClaimsInput = {
  /** Firebase Id. */
  firebaseId: Scalars['String'];
};

export type Cabinet = {
  __typename?: 'Cabinet';
  altId: Scalars['ID'];
  cabinetModel: CabinetModel;
  chargers: Array<Charger>;
  chargingSystem: ChargingSystem;
  /** NEW property! needs to be a database table column, the value can either be provided during creation/seed or during an update mutation */
  circuit?: Maybe<Circuit>;
  serialNumber: Scalars['String'];
  /** NEW property! needs to be a database table column, the value can either be provided during creation/seed or during an update mutation */
  wiredVolts: Scalars['Int'];
  /** NEW property! needs to be a database table column, the value can either be provided during creation/seed or during an update mutation */
  wiredVoltsPhases: Scalars['Int'];
  /** NEW property! needs to be a database table column, the value can either be provided during creation/seed or during an update mutation */
  wiringConfig: WiringConfig;
};

export type CabinetInput = {
  cabinetModelAltId: Scalars['RequiredString'];
  serialNumber: Scalars['RequiredString'];
  wiredVolts: Scalars['Float'];
  wiredVoltsPhases: Scalars['Float'];
  wiringConfig: WiringConfig;
};

export type CabinetModel = {
  __typename?: 'CabinetModel';
  altId: Scalars['ID'];
  breakerRating: Scalars['Float'];
  efficiency: Scalars['String'];
  inputAcVoltage: InputAcVoltage;
  isIntegrated: Scalars['Boolean'];
  manufacturer: Scalars['String'];
  modelName: Scalars['String'];
  modelSku?: Maybe<Scalars['String']>;
  powerFactor: Scalars['Float'];
};

export enum CableCooling {
  /** Air Cooled */
  AirCooled = 'AIR_COOLED',
  /** Liquid Cooled */
  LiquidCooled = 'LIQUID_COOLED'
}

export enum CableLength {
  /** 18 ft */
  EighteenFeet = 'EIGHTEEN_FEET',
  /** 15 ft */
  FifteenFeet = 'FIFTEEN_FEET',
  /** 10 ft */
  TenFeet = 'TEN_FEET',
  /** 12 ft */
  TwelveFeet = 'TWELVE_FEET',
  /** 20 ft */
  TwentyFeet = 'TWENTY_FEET',
  /** 25 ft */
  TwentyFiveFeet = 'TWENTY_FIVE_FEET'
}

export enum CableManufacturer {
  /** Delphi */
  Delphi = 'DELPHI',
  /** Huber + Suhner */
  HuberSuhner = 'HUBER_SUHNER',
  /** ITT */
  Itt = 'ITT',
  /** JAE */
  Jae = 'JAE',
  /** KST */
  Kst = 'KST',
  /** Phoenix Contact */
  PhoenixContact = 'PHOENIX_CONTACT',
  /** REMA */
  Rema = 'REMA',
  /** Sumitomo (Metal Body) */
  SumitomoMetalBody = 'SUMITOMO_METAL_BODY',
  /** Sumitomo (Plastic Body) */
  SumitomoPlasticBody = 'SUMITOMO_PLASTIC_BODY',
  /** Yazaki */
  Yazaki = 'YAZAKI',
  /** Yazaki (Gen 2) */
  YazakiGen_2 = 'YAZAKI_GEN_2'
}

export type CancelAutochargeEnrollmentInput = {
  altId: Scalars['UUID'];
};

export type CancelInviteDriverInput = {
  altId: Scalars['ID'];
};

export type CancelReservationInput = {
  reservationId: Scalars['ID'];
};

export type Card = {
  __typename?: 'Card';
  account?: Maybe<Account>;
  activatedAt?: Maybe<Scalars['Date']>;
  altId: Scalars['ID'];
  brand?: Maybe<Scalars['String']>;
  cardStatus?: Maybe<CardStatus>;
  cardType?: Maybe<Scalars['String']>;
  cardTypeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  driver?: Maybe<Driver>;
  evcId?: Maybe<Scalars['ID']>;
  externalNumber?: Maybe<Scalars['String']>;
  internalNumber?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendorId?: Maybe<Scalars['ID']>;
  vendorSyncedAt?: Maybe<Scalars['Date']>;
};

export enum CardBrand {
  /** EVgo */
  Evgo = 'EVGO',
  /** Lyft */
  Lyft = 'LYFT',
  /** Maven */
  Maven = 'MAVEN'
}

export type CardOrder = {
  __typename?: 'CardOrder';
  account?: Maybe<CardOrderAccount>;
  altId?: Maybe<Scalars['ID']>;
  driver?: Maybe<Driver>;
  fulfilledAt?: Maybe<Scalars['Date']>;
  orderStatus?: Maybe<CardOrdersStatus>;
  orderedAt?: Maybe<Scalars['Date']>;
  vendorId?: Maybe<Scalars['ID']>;
};

export type CardOrderAccount = {
  __typename?: 'CardOrderAccount';
  accountStatus?: Maybe<AccountStatus>;
  altId?: Maybe<Scalars['ID']>;
  balance?: Maybe<Scalars['Int']>;
  billingAddress?: Maybe<Address>;
  enrolledOn?: Maybe<Scalars['Date']>;
  evcId?: Maybe<Scalars['String']>;
  evcSyncedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  mailingAddress?: Maybe<Address>;
  status?: Maybe<AccountStatus>;
};

export type CardOrderNotificationInput = {
  startDate: Scalars['Date'];
};

export enum CardOrdersStatus {
  /** Completed */
  Completed = 'COMPLETED',
  /** Ordered */
  Ordered = 'ORDERED',
  /** Sent */
  Sent = 'SENT'
}

export type CardOrdersWithMeta = {
  __typename?: 'CardOrdersWithMeta';
  edges?: Maybe<Array<Maybe<CardOrder>>>;
  filter?: Maybe<ListCardOrdersFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListCardOrdersSearchType>;
  sort?: Maybe<ListCardOrdersSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum CardStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Deactivated */
  Deactivated = 'DEACTIVATED',
  /** Deleted */
  Deleted = 'DELETED',
  /** Inactive */
  Inactive = 'INACTIVE',
  /** Lost */
  Lost = 'LOST',
  /** Reserved */
  Reserved = 'RESERVED',
  /** Stolen */
  Stolen = 'STOLEN',
  /** Suspended */
  Suspended = 'SUSPENDED',
  /** Unassigned */
  Unassigned = 'UNASSIGNED'
}

export type CardsWithMeta = {
  __typename?: 'CardsWithMeta';
  edges?: Maybe<Array<Maybe<Card>>>;
  filter?: Maybe<ListCardsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListCardsSearchType>;
  sort?: Maybe<ListCardsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type Charger = {
  __typename?: 'Charger';
  additionalEquipment?: Maybe<Scalars['String']>;
  additionalSerial?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  authenticationMethodsConstraint?: Maybe<FalconConstraint>;
  authenticationMode?: Maybe<Scalars['String']>;
  authenticationModeId?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  brand?: Maybe<Scalars['String']>;
  /** Index 0 of Cabinet array indicates primary */
  cabinets: Array<Cabinet>;
  ccReaderType?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  certified?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  chargePointIdentity?: Maybe<Scalars['String']>;
  chargerId?: Maybe<Scalars['ID']>;
  chargerIsManaged?: Maybe<Scalars['Boolean']>;
  chargerModel?: Maybe<ChargerModel>;
  chargerName?: Maybe<Scalars['String']>;
  chargerStatus?: Maybe<Scalars['String']>;
  chargerStatusId?: Maybe<Scalars['Int']>;
  chargingSystem?: Maybe<ChargingSystem>;
  cid?: Maybe<Scalars['String']>;
  coBranding?: Maybe<Scalars['String']>;
  communicationMethod?: Maybe<Scalars['String']>;
  connectionDate?: Maybe<Scalars['String']>;
  connectionUri?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  connectors?: Maybe<Array<Maybe<Connector>>>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  energyUtilization?: Maybe<Scalars['Float']>;
  equipmentId?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  evcId?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  evcSyncedAt?: Maybe<Scalars['Date']>;
  /** @deprecated Cleanup */
  evseId?: Maybe<Scalars['String']>;
  evses?: Maybe<EvsesWithMeta>;
  excludeFromOcpi?: Maybe<Scalars['Boolean']>;
  excluded?: Maybe<Scalars['Boolean']>;
  fieldStationStatus?: Maybe<FieldStationStatus>;
  fundingSource?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  identityKey?: Maybe<Scalars['String']>;
  ignoreStatusNotifications?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Cleanup */
  infrastructureProviderCompanyId?: Maybe<Scalars['Int']>;
  installDate?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  ipAddress?: Maybe<Scalars['String']>;
  lastReceivedCommSignal?: Maybe<Scalars['Timestamp']>;
  lastReportedFirmwareVersion?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  legacyId?: Maybe<Scalars['Int']>;
  localLoadBalancingEnabled?: Maybe<Scalars['Boolean']>;
  localNetworkMaster?: Maybe<Scalars['Boolean']>;
  macAddress?: Maybe<Scalars['String']>;
  maintenanceComments?: Maybe<Scalars['String']>;
  maintenanceVendor?: Maybe<Scalars['String']>;
  maintenanceVendorId?: Maybe<Scalars['Int']>;
  managed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  maxPower?: Maybe<Scalars['Int']>;
  meterSigningSupported?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  modelNotes?: Maybe<Scalars['String']>;
  modemSerialNumber?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  mountType?: Maybe<Scalars['String']>;
  networkConnectionType?: Maybe<Scalars['String']>;
  networkConnectionTypeId?: Maybe<Scalars['Int']>;
  nextMaintenanceDate?: Maybe<Scalars['Date']>;
  nonNetworked: Scalars['Boolean'];
  physicalLocation?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  ports?: Maybe<PortsWithMeta>;
  /** @deprecated Cleanup */
  ports2?: Maybe<PortsWithMeta>;
  productIdentityKeyId?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  publish?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  serverSideLocalLoadBalancingEnabled?: Maybe<Scalars['Boolean']>;
  showInThirdPartyFilters: Scalars['Boolean'];
  simCardImsi?: Maybe<Scalars['String']>;
  simultaneousChargingEnabled: Scalars['Boolean'];
  site?: Maybe<Site>;
  smartChargingEnabled: Scalars['Boolean'];
  smiCardIccid?: Maybe<Scalars['String']>;
  tags?: Maybe<TagsWithMeta>;
  teslaAdapter: Scalars['Boolean'];
  /** @deprecated Cleanup */
  underEaProgram?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  usageStartDate?: Maybe<Scalars['String']>;
  validateMeterSignature: Scalars['Boolean'];
  vendorId?: Maybe<Scalars['Int']>;
  vendorSyncedAt?: Maybe<Scalars['Timestamp']>;
  warehouse?: Maybe<Warehouse>;
  warrantyExpirationDate?: Maybe<Scalars['Date']>;
  warrantyLength?: Maybe<Scalars['String']>;
  warrantyLengthId?: Maybe<Scalars['Int']>;
  warrantyStartDate?: Maybe<Scalars['Date']>;
  warrantyStatus?: Maybe<Scalars['String']>;
  warrantyStatusId?: Maybe<Scalars['Int']>;
  wirelessConnectionCarrier?: Maybe<Scalars['String']>;
  wirelessConnectionCarrierId?: Maybe<Scalars['Int']>;
};


export type ChargerPortsArgs = {
  input?: InputMaybe<ListPortsInput>;
};


export type ChargerPorts2Args = {
  input?: InputMaybe<ListPortsInput>;
};

export type ChargerAggregateMeterValues = {
  __typename?: 'ChargerAggregateMeterValues';
  chargerCapacity?: Maybe<Scalars['Int']>;
  powerMeterValuesInWatts?: Maybe<Array<Maybe<ChargerPowerMeterValue>>>;
};

export type ChargerFilterInput = {
  chargerName?: InputMaybe<TableStringFilterInput>;
  cid?: InputMaybe<TableStringFilterInput>;
};

export type ChargerFilterType = {
  __typename?: 'ChargerFilterType';
  chargerName?: Maybe<TableStringFilterType>;
  cid?: Maybe<TableStringFilterType>;
};

export type ChargerForFleet = {
  __typename?: 'ChargerForFleet';
  chargerAltId: Scalars['ID'];
  chargerModel?: Maybe<ChargerModel>;
  chargerName?: Maybe<Scalars['String']>;
  chargerSerialNumber?: Maybe<Scalars['SanitizeString']>;
  chargingVehicleSoC?: Maybe<Scalars['String']>;
  connector?: Maybe<Connector>;
  connectorIndex?: Maybe<Scalars['Int']>;
  session?: Maybe<Session>;
};

export type ChargerForMobile = {
  __typename?: 'ChargerForMobile';
  altId: Scalars['ID'];
  chargerName?: Maybe<Scalars['String']>;
  chargerStatus?: Maybe<Scalars['String']>;
  chargerType?: Maybe<Scalars['String']>;
  /** @deprecated Use simultaneousChargingEnabled instead */
  concurrentCharging?: Maybe<Scalars['Boolean']>;
  evses?: Maybe<Array<Maybe<EvseForMobile>>>;
  lastUsed?: Maybe<Scalars['String']>;
  maxConnectorPower?: Maybe<Scalars['Float']>;
  openFrom?: Maybe<Scalars['String']>;
  openTo?: Maybe<Scalars['String']>;
  /** Indication of whether the charger has simultaneous charging enabled */
  simultaneousChargingEnabled: Scalars['Boolean'];
  site?: Maybe<ChargerForMobileSite>;
};

export type ChargerForMobileSite = {
  __typename?: 'ChargerForMobileSite';
  access?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type ChargerGroupForExtend = {
  __typename?: 'ChargerGroupForExtend';
  altId: Scalars['ID'];
  chargerGroupName: Scalars['String'];
  /** Charger group type as string */
  chargerGroupType: Scalars['String'];
  /** Falcon constraint id for charger group type */
  chargerGroupTypeId: Scalars['Int'];
  chargers: ChargersWithMeta;
  deletedAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  host: Host;
  tariff?: Maybe<TariffForExtend>;
};


export type ChargerGroupForExtendChargersArgs = {
  input?: InputMaybe<ListChargersForExtendInput>;
};

export type ChargerGroupsForExtendWithMeta = {
  __typename?: 'ChargerGroupsForExtendWithMeta';
  edges: Array<ChargerGroupForExtend>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type ChargerImage = {
  __typename?: 'ChargerImage';
  url?: Maybe<Scalars['SanitizeString']>;
};

export enum ChargerLevel {
  Dcfc = 'DCFC',
  L2 = 'L2'
}

export type ChargerLineGroup = {
  __typename?: 'ChargerLineGroup';
  chargers: Array<Charger>;
  id: Scalars['ID'];
  line: Line;
  powerLimit?: Maybe<Scalars['Float']>;
};

export type ChargerModel = {
  __typename?: 'ChargerModel';
  additionalDetails?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  autoChargeSupported?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  breakerRating?: Maybe<Scalars['Float']>;
  cabinetModel?: Maybe<CabinetModel>;
  /**
   * chargerLevel is used to group chargers by how fast they can charge
   * @deprecated Changed to connector type based level of charging
   */
  chargerLevel?: Maybe<ChargerLevel>;
  chargerModelEvses?: Maybe<ChargerModelEvsesWithMeta>;
  communicationProtocol?: Maybe<Scalars['String']>;
  currentThd?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  efficiency?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  evcId?: Maybe<Scalars['ID']>;
  /** @deprecated Use chargerModelEvses */
  evses?: Maybe<ChargerModelEvsesWithMeta>;
  firmwareVersion?: Maybe<Scalars['String']>;
  ingressProtection?: Maybe<Scalars['String']>;
  inputAcVoltage?: Maybe<InputAcVoltage>;
  interfaceVersion?: Maybe<InterfaceVersion>;
  isoIec?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  legacyId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Manufacturer>;
  modelName?: Maybe<Scalars['String']>;
  modelNotes?: Maybe<Scalars['String']>;
  modelSku?: Maybe<Scalars['String']>;
  mountType?: Maybe<Scalars['String']>;
  networkCommunication?: Maybe<NetworkCommunication>;
  nfcReader?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  ports?: Maybe<ChargerModelPortsWithMeta>;
  powerFactor?: Maybe<Scalars['Float']>;
  powerOutput?: Maybe<Scalars['PowerUnit']>;
  simultaneousChargeSupported?: Maybe<Scalars['Boolean']>;
  smartEnergyProfileSupport?: Maybe<Scalars['Boolean']>;
  unitType?: Maybe<UnitType>;
  weight?: Maybe<Scalars['String']>;
};


export type ChargerModelPortsArgs = {
  input?: InputMaybe<ListPortsInput>;
};

export type ChargerModelConnector = {
  __typename?: 'ChargerModelConnector';
  altId?: Maybe<Scalars['ID']>;
  cableCooling?: Maybe<CableCooling>;
  cableLength?: Maybe<CableLength>;
  cableManufacturer?: Maybe<CableManufacturer>;
  chargerConnectorId?: Maybe<Scalars['String']>;
  connectorMaxCurrent?: Maybe<Scalars['Float']>;
  connectorPlacement?: Maybe<ConnectorPlacement>;
  connectorType?: Maybe<FalconConstraint>;
  connectorTypeId?: Maybe<Scalars['ID']>;
  /** @deprecated Cleanup */
  evcId?: Maybe<Scalars['String']>;
  evseConnectorId?: Maybe<Scalars['String']>;
  evseConnectorNumber?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  format?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  inMaintenance?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  lastMeterUpdateTime?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  lastMeterValue?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  legacyConnectorId?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  legacyId?: Maybe<Scalars['Int']>;
  maxConnectorPower?: Maybe<Scalars['Float']>;
  outputAmperes?: Maybe<Scalars['Int']>;
  outputVoltageRange?: Maybe<Scalars['String']>;
  outputVolts?: Maybe<Scalars['Int']>;
  outputWatts?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  port?: Maybe<ChargerModelPort>;
  powerType?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  status?: Maybe<ConnectorStatus>;
  /** @deprecated Cleanup */
  teslaConnectorType?: Maybe<TeslaConnectorType>;
  /** @deprecated Cleanup */
  teslaInstallationDate?: Maybe<Scalars['Date']>;
  /** @deprecated Cleanup */
  teslaSerialNumber?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** @deprecated Use chargerConnectorId */
  uniqueConnectorId?: Maybe<Scalars['String']>;
};

export type ChargerModelConnectorInput = {
  altId?: InputMaybe<Scalars['SanitizeString']>;
  cableCooling?: InputMaybe<CableCooling>;
  cableLength?: InputMaybe<CableLength>;
  cableManufacturer?: InputMaybe<CableManufacturer>;
  chargerConnectorId?: InputMaybe<Scalars['String']>;
  chargerModelEvseId?: InputMaybe<Scalars['SanitizeString']>;
  connectorMaxCurrent: Scalars['Float'];
  connectorPlacement?: InputMaybe<ConnectorPlacement>;
  connectorType?: InputMaybe<VehicleConnectorInput>;
  connectorTypeId?: InputMaybe<Scalars['ID']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  evseConnectorId?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['SanitizeString']>;
  identityKey?: InputMaybe<Scalars['Int']>;
  inMaintenance?: InputMaybe<Scalars['Boolean']>;
  lastMeterUpdateTime?: InputMaybe<Scalars['SanitizeString']>;
  lastMeterValue?: InputMaybe<Scalars['Int']>;
  legacyConnectorId?: InputMaybe<Scalars['SanitizeString']>;
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  maxConnectorPower?: InputMaybe<Scalars['Float']>;
  outputAmperes?: InputMaybe<Scalars['Int']>;
  outputVoltageRange?: InputMaybe<Scalars['SanitizeString']>;
  outputVolts?: InputMaybe<Scalars['Int']>;
  outputWatts?: InputMaybe<Scalars['Int']>;
  portId?: InputMaybe<Scalars['ID']>;
  powerType?: InputMaybe<Scalars['SanitizeString']>;
  status?: InputMaybe<ConnectorStatus>;
  teslaConnectorType?: InputMaybe<TeslaConnectorType>;
  teslaInstallationDate?: InputMaybe<Scalars['Date']>;
  teslaSerialNumber?: InputMaybe<Scalars['SanitizeString']>;
  uniqueConnectorId?: InputMaybe<Scalars['SanitizeString']>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
  wiredPhase?: InputMaybe<Scalars['Int']>;
};

export type ChargerModelConnectorsWithMeta = {
  __typename?: 'ChargerModelConnectorsWithMeta';
  edges?: Maybe<Array<Maybe<ChargerModelConnector>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargerModelEvse = {
  __typename?: 'ChargerModelEvse';
  altId?: Maybe<Scalars['ID']>;
  chargerModelConnectors?: Maybe<ChargerModelConnectorsWithMeta>;
  /** @deprecated Cleanup */
  connectors?: Maybe<ConnectorsWithMeta>;
  /** @deprecated Cleanup */
  evseId?: Maybe<Scalars['String']>;
  identityKey?: Maybe<Scalars['String']>;
};

export type ChargerModelEvseInput = {
  altId?: InputMaybe<Scalars['ID']>;
  chargerModelConnectors?: InputMaybe<Array<InputMaybe<ChargerModelConnectorInput>>>;
  connectors?: InputMaybe<Array<InputMaybe<ChargerModelConnectorInput>>>;
  evseId?: InputMaybe<Scalars['String']>;
  identityKey?: InputMaybe<Scalars['String']>;
};

export type ChargerModelEvsesWithMeta = {
  __typename?: 'ChargerModelEvsesWithMeta';
  edges?: Maybe<Array<Maybe<ChargerModelEvse>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargerModelPort = {
  __typename?: 'ChargerModelPort';
  accessType?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  chargeBoxIdentity?: Maybe<Scalars['String']>;
  concurrentChargingSupported?: Maybe<Scalars['Boolean']>;
  connectors?: Maybe<ChargerModelConnectorsWithMeta>;
  evcId?: Maybe<Scalars['String']>;
  handicapAccessible?: Maybe<Scalars['Boolean']>;
  lastHeartbeat?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['Int']>;
  powerLevel?: Maybe<Scalars['String']>;
  qrCode?: Maybe<Scalars['String']>;
};


export type ChargerModelPortConnectorsArgs = {
  input?: InputMaybe<ListConnectorsInput>;
};

export type ChargerModelPortsWithMeta = {
  __typename?: 'ChargerModelPortsWithMeta';
  edges?: Maybe<Array<Maybe<ChargerModelPort>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargerModelsWithMeta = {
  __typename?: 'ChargerModelsWithMeta';
  edges?: Maybe<Array<Maybe<ChargerModel>>>;
  filter?: Maybe<ListChargerModelsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListChargerModelsSearchType>;
  sort?: Maybe<ListChargerModelsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargerPowerMeterValue = {
  __typename?: 'ChargerPowerMeterValue';
  chargerLimit?: Maybe<Scalars['Float']>;
  powerMeterValueInWatts?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Date']>;
};

export type ChargerPrice = {
  __typename?: 'ChargerPrice';
  chargerType?: Maybe<Scalars['String']>;
  connectorType?: Maybe<Scalars['String']>;
  connectorsPrice?: Maybe<Array<Maybe<Connectors>>>;
  maxSessionFee?: Maybe<Scalars['String']>;
  touPricing?: Maybe<Array<Maybe<TouPrices>>>;
};


export type ChargerPriceConnectorsPriceArgs = {
  input?: InputMaybe<ConnectorPriceInput>;
};


export type ChargerPriceTouPricingArgs = {
  input?: InputMaybe<TouPricingInput>;
};

export type ChargerUtilizationChart = {
  __typename?: 'ChargerUtilizationChart';
  points: Array<Maybe<ChargerUtilizationPoint>>;
  xLabel: Scalars['String'];
};

export type ChargerUtilizationChartData = {
  __typename?: 'ChargerUtilizationChartData';
  groupedBy: ChargerUtilizationChartGroupEnum;
  totalSiteUtilization: Scalars['Float'];
  utilizationChart: Array<Maybe<ChargerUtilizationChart>>;
};

export enum ChargerUtilizationChartGroupEnum {
  Day = 'Day',
  Hour = 'Hour',
  Month = 'Month',
  Year = 'Year'
}

export type ChargerUtilizationChartInput = {
  endDate: Scalars['Date'];
  siteId: Scalars['UUID'];
  startDate: Scalars['Date'];
  timeZone: Scalars['String'];
};

export type ChargerUtilizationPoint = {
  __typename?: 'ChargerUtilizationPoint';
  name: Scalars['String'];
  utilizationPercentage: Scalars['Float'];
};

export type ChargerUtilizationReport = {
  __typename?: 'ChargerUtilizationReport';
  chargerId: Scalars['String'];
  chargerModel: Scalars['String'];
  siteUtilizationPercentage: Scalars['Float'];
  totalKwh: Scalars['Float'];
  utilizationPercentage: Scalars['Float'];
};

export type ChargersConsumptionForExtendData = {
  __typename?: 'ChargersConsumptionForExtendData';
  chargerId: Scalars['String'];
  chargerName: Scalars['String'];
  /** Alt ID of the connector */
  connectorId: Scalars['ID'];
  /** Max power output of the connector in kW */
  connectorMaxOutput: Scalars['Float'];
  /** Status of the connector at the time of the query */
  connectorStatus?: Maybe<Scalars['String']>;
  connectorType?: Maybe<Scalars['String']>;
  evseId: Scalars['String'];
  /** Vendor Id of the last session */
  lastSessionVendorId?: Maybe<Scalars['Int']>;
  /** Total sessions in that connection for that datePreset */
  totalSessions: Scalars['Int'];
  /** Total sessions power value dispensed in kWh */
  totalSessionsPower: Scalars['Float'];
  /** Total sessions time in minutes */
  totalSessionsTime: Scalars['Int'];
};

export type ChargersForFleetMeta = {
  __typename?: 'ChargersForFleetMeta';
  edges?: Maybe<Array<Maybe<ChargerForFleet>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListChargersForFleetSearchType>;
  sort?: Maybe<ListChargersForFleetSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargersForMobile = {
  __typename?: 'ChargersForMobile';
  altId: Scalars['ID'];
  chargerName?: Maybe<Scalars['String']>;
  chargerStatus?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  openFrom?: Maybe<Scalars['String']>;
  openTo?: Maybe<Scalars['String']>;
  /** Indication of whether the charger has simultaneous charging enabled */
  simultaneousChargingEnabled: Scalars['Boolean'];
  site?: Maybe<ChargerForMobileSite>;
};

export type ChargersForMobileInput = {
  /** Required: A float used to calculate the users distance from the site */
  latitude: Scalars['Float'];
  /** Required: A float used to calculate the users distance from the site */
  longitude: Scalars['Float'];
  search?: InputMaybe<Scalars['String']>;
};

export type ChargersForMobileWithMeta = {
  __typename?: 'ChargersForMobileWithMeta';
  edges?: Maybe<Array<Maybe<ChargersForMobile>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ChargersWithMeta = {
  __typename?: 'ChargersWithMeta';
  edges?: Maybe<Array<Maybe<Charger>>>;
  filter?: Maybe<ListChargersFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListChargersSearchType>;
  sort?: Maybe<ListChargersSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum ChargingLevel {
  Dcfc = 'DCFC',
  L2 = 'L2'
}

export enum ChargingProfileStatus {
  /** Accepted */
  Accepted = 'ACCEPTED',
  /** Error */
  Error = 'ERROR',
  /** Sent */
  Sent = 'SENT',
  /** Validated */
  Validated = 'VALIDATED'
}

export type ChargingSystem = {
  __typename?: 'ChargingSystem';
  altId: Scalars['ID'];
  cabinets: Array<Cabinet>;
  chargers: Array<Charger>;
  chargingSystemName: Scalars['String'];
  powerSharingEnabled: Scalars['Boolean'];
  site: Site;
};

export type ChargingSystemInput = {
  cabinetSerialNumbers: Array<InputMaybe<Scalars['String']>>;
  chargerSerialNumbers: Array<InputMaybe<Scalars['String']>>;
  chargingSystemName: Scalars['RequiredString'];
  powerSharingEnabled: Scalars['Boolean'];
};

export type CheckDriverFirebaseInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CheckDriverPhoneNumberInput = {
  phone: Scalars['SanitizeString'];
};

export type CheckPromoCodeRedemptionByDisplayValueInput = {
  /** The 'display_value' of the promo code to check the redemption status of. */
  displayValue: Scalars['String'];
  /** The 'campaign_ref' or 'group_name' of the campaign under which the promo code was generated. */
  groupName: Scalars['String'];
  /** The 'promotion_ref' of the high-level promotion under which the promo code was generated. */
  promotionRef: Scalars['String'];
};

export type CheckPromoCodeRedemptionByDisplayValueResult = {
  __typename?: 'CheckPromoCodeRedemptionByDisplayValueResult';
  /** Has the input displayValue been used on a promo code which has previously been redeemed? */
  hasBeenRedeemed?: Maybe<Scalars['Boolean']>;
};

/** ALL SEEDED */
export type Circuit = {
  __typename?: 'Circuit';
  altId: Scalars['ID'];
  childCabinets: Array<Maybe<Cabinet>>;
  childCircuits: Array<Maybe<Circuit>>;
  circuitName?: Maybe<Scalars['String']>;
  circuitType: CircuitType;
  hasBreaker?: Maybe<Scalars['Boolean']>;
  lineKwChargerLimit?: Maybe<Scalars['Float']>;
  maxAmpsSetting?: Maybe<Scalars['Float']>;
  ratingAmps?: Maybe<Scalars['Float']>;
  ratingVolts?: Maybe<Scalars['Float']>;
  ratingVoltsPhases?: Maybe<Scalars['Int']>;
  switchgear: Switchgear;
};

export type CircuitInput = {
  childCabinets?: InputMaybe<Array<CabinetInput>>;
  childCircuits?: InputMaybe<Array<CircuitInput>>;
  circuitName: Scalars['RequiredString'];
  circuitType: CircuitType;
  lineKwChargerLimit?: InputMaybe<Scalars['Float']>;
  maxAmpsSetting: Scalars['Float'];
  ratingAmps: Scalars['Float'];
  ratingVolts: Scalars['Float'];
  ratingVoltsPhases: Scalars['Float'];
};

export enum CircuitType {
  DistributionHighVoltage = 'DISTRIBUTION_HIGH_VOLTAGE',
  DistributionLowVoltage = 'DISTRIBUTION_LOW_VOLTAGE',
  FinalCircuit = 'FINAL_CIRCUIT',
  Main = 'MAIN'
}

export type ClientToken = {
  __typename?: 'ClientToken';
  clientToken?: Maybe<Scalars['String']>;
};

export type CodeType = {
  __typename?: 'CodeType';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CompleteAutochargeEnrollmentInput = {
  connectorId: Scalars['ID'];
};

export type Connector = {
  __typename?: 'Connector';
  /**
   * QUESTION: outputWatts... can we use this or is it deprecated? Where is meter value coming? Its a real-time power measurement - updated by Subscription
   * @deprecated use activePowerInWatts field instead
   */
  activePower?: Maybe<Scalars['Float']>;
  activePowerInWatts?: Maybe<Scalars['Float']>;
  altId: Scalars['ID'];
  cableCooling?: Maybe<CableCooling>;
  cableLength?: Maybe<CableLength>;
  cableManufacturer?: Maybe<CableManufacturer>;
  chargerConnectorId?: Maybe<Scalars['String']>;
  /** chargingLevel is used to group connectors by how fast they can charge */
  chargingLevel: ChargingLevel;
  /** @deprecated Use chargingProfileStatusConstraint */
  chargingProfileStatus?: Maybe<ChargingProfileStatus>;
  chargingProfileStatusConstraint?: Maybe<FalconConstraint>;
  /** Currently connected fleet vehicle */
  connectedVehicle?: Maybe<FleetVehicle>;
  connectorFormatConstraint?: Maybe<FalconConstraint>;
  connectorIndex?: Maybe<Scalars['Int']>;
  connectorMaxCurrent?: Maybe<Scalars['Float']>;
  connectorOverrides?: Maybe<ConnectorOverrides>;
  /** @deprecated Use connectorPlacementConstraint */
  connectorPlacement?: Maybe<ConnectorPlacement>;
  connectorPlacementConstraint?: Maybe<FalconConstraint>;
  connectorStatusConstraint?: Maybe<FalconConstraint>;
  connectorType?: Maybe<FalconConstraint>;
  connectorTypeId?: Maybe<Scalars['ID']>;
  energyUtilization?: Maybe<Scalars['Float']>;
  /** @deprecated Cleanup */
  evcId?: Maybe<Scalars['String']>;
  evse?: Maybe<Evse>;
  /** @deprecated Use connectorFormatConstraint */
  format?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  identityKey?: Maybe<Scalars['Int']>;
  inMaintenance?: Maybe<Scalars['Boolean']>;
  isThrottling?: Maybe<Scalars['Boolean']>;
  /** @deprecated Cleanup */
  lastMeterUpdateTime?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  lastMeterValue?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  legacyConnectorId?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  legacyId?: Maybe<Scalars['Int']>;
  maxConnectorPower?: Maybe<Scalars['Float']>;
  /** Setting of current maximum power.. */
  maxPowerSetting?: Maybe<Scalars['Float']>;
  outputAmperes?: Maybe<Scalars['Int']>;
  outputKw?: Maybe<Scalars['Float']>;
  outputVoltageRange?: Maybe<Scalars['String']>;
  outputVolts?: Maybe<Scalars['Int']>;
  /** @deprecated Use outputKw */
  outputWatts?: Maybe<Scalars['Int']>;
  /** @deprecated Cleanup */
  port?: Maybe<Port>;
  powerLimit?: Maybe<Scalars['Float']>;
  /** @deprecated Cleanup */
  powerType?: Maybe<Scalars['String']>;
  price?: Maybe<Price>;
  requestedPowerLimit?: Maybe<Scalars['Float']>;
  reservable?: Maybe<Scalars['Boolean']>;
  serialNumber?: Maybe<Scalars['String']>;
  site?: Maybe<Site>;
  /** @deprecated Use connectorStatusConstraint */
  status?: Maybe<ConnectorStatus>;
  teslaAdapterInMaintenance?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use teslaConnectorTypeConstraint */
  teslaConnectorType?: Maybe<TeslaConnectorType>;
  teslaConnectorTypeConstraint?: Maybe<FalconConstraint>;
  teslaInstallationDate?: Maybe<Scalars['Date']>;
  teslaSerialNumber?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  type?: Maybe<Scalars['String']>;
  /** @deprecated Use chargerConnectorId */
  uniqueConnectorId?: Maybe<Scalars['String']>;
  /** @deprecated Cleanup */
  vehicleConnectorType?: Maybe<VehicleConnector>;
  /** @deprecated Cleanup */
  vehicleConnectorTypeId?: Maybe<Scalars['ID']>;
  vendorId?: Maybe<Scalars['Int']>;
  wiredPhase?: Maybe<Scalars['Int']>;
};

export type ConnectorFilterInput = {
  connectorTypeId?: InputMaybe<TableIntFilterInput>;
  outputWatts?: InputMaybe<TableIntFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
};

export type ConnectorFilterType = {
  __typename?: 'ConnectorFilterType';
  connectorTypeId?: Maybe<TableIntFilterType>;
  outputWatts?: Maybe<TableIntFilterType>;
  status?: Maybe<TableStringFilterType>;
};

export type ConnectorForMobile = {
  __typename?: 'ConnectorForMobile';
  altId?: Maybe<Scalars['ID']>;
  connectorPlacement: ConnectorPlacement;
  connectorStatus?: Maybe<Scalars['String']>;
  connectorType?: Maybe<Scalars['String']>;
  hasTeslaAdapter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  maxPower?: Maybe<Scalars['Float']>;
  reservable?: Maybe<Scalars['Boolean']>;
  supportsAutocharge: Scalars['Boolean'];
  vehicleConnectorTypeId?: Maybe<Scalars['Int']>;
};

export type ConnectorInput = {
  altId?: InputMaybe<Scalars['SanitizeString']>;
  cableCooling?: InputMaybe<CableCooling>;
  cableLength?: InputMaybe<CableLength>;
  cableManufacturer?: InputMaybe<CableManufacturer>;
  chargerConnectorId?: InputMaybe<Scalars['String']>;
  chargingProfileStatus?: InputMaybe<ChargingProfileStatus>;
  connectorMaxCurrent?: InputMaybe<Scalars['Float']>;
  connectorPlacement?: InputMaybe<ConnectorPlacement>;
  connectorType?: InputMaybe<VehicleConnectorInput>;
  connectorTypeId?: InputMaybe<Scalars['ID']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  format?: InputMaybe<Scalars['SanitizeString']>;
  identityKey?: InputMaybe<Scalars['Int']>;
  inMaintenance?: InputMaybe<Scalars['Boolean']>;
  isThrottling?: InputMaybe<Scalars['Boolean']>;
  lastMeterUpdateTime?: InputMaybe<Scalars['SanitizeString']>;
  lastMeterValue?: InputMaybe<Scalars['Int']>;
  legacyConnectorId?: InputMaybe<Scalars['SanitizeString']>;
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  maxConnectorPower?: InputMaybe<Scalars['Float']>;
  outputAmperes?: InputMaybe<Scalars['Int']>;
  outputKw?: InputMaybe<Scalars['Float']>;
  outputVoltageRange?: InputMaybe<Scalars['SanitizeString']>;
  outputVolts?: InputMaybe<Scalars['Int']>;
  outputWatts?: InputMaybe<Scalars['Int']>;
  portId?: InputMaybe<Scalars['ID']>;
  powerType?: InputMaybe<Scalars['SanitizeString']>;
  requestedPowerLimit?: InputMaybe<Scalars['Float']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ConnectorStatus>;
  teslaAdapterInMaintenance?: InputMaybe<Scalars['Boolean']>;
  teslaConnectorType?: InputMaybe<TeslaConnectorType>;
  teslaInstallationDate?: InputMaybe<Scalars['Date']>;
  teslaSerialNumber?: InputMaybe<Scalars['SanitizeString']>;
  uniqueConnectorId?: InputMaybe<Scalars['SanitizeString']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  wiredPhase?: InputMaybe<Scalars['Int']>;
};

export type ConnectorOverrides = {
  __typename?: 'ConnectorOverrides';
  canOverride?: Maybe<Scalars['Boolean']>;
  isOverridden?: Maybe<Scalars['Boolean']>;
};

export enum ConnectorPlacement {
  /** Bottom */
  Bottom = 'BOTTOM',
  /** Center */
  Center = 'CENTER',
  /** Left */
  Left = 'LEFT',
  /** Not specified */
  NotSpecified = 'NOT_SPECIFIED',
  /** Other */
  Other = 'OTHER',
  /** Right */
  Right = 'RIGHT',
  /** Top */
  Top = 'TOP'
}

export type ConnectorPriceInput = {
  /** Description of the type which includes DC, L2, Roaming */
  chargerType?: InputMaybe<Scalars['String']>;
  /** All of the connectors available at the charging station */
  connectors?: InputMaybe<Array<InputMaybe<ConnectorsInput>>>;
  /** This is passed to verify if a charger is DC or not in order to search for touPricing */
  isDCCharger?: InputMaybe<Scalars['String']>;
  /** Session fee at the charger */
  maxSessionFee?: InputMaybe<Scalars['String']>;
  /** Used to find Tou pricing */
  planId?: InputMaybe<Scalars['String']>;
  /** Used to find Tou Pricing */
  siteId?: InputMaybe<Scalars['String']>;
};

export enum ConnectorStatus {
  /** Available */
  Available = 'AVAILABLE',
  /** Charging */
  Charging = 'CHARGING',
  /** Discharging */
  Discharging = 'DISCHARGING',
  /** Faulted */
  Faulted = 'FAULTED',
  /** Finishing */
  Finishing = 'FINISHING',
  /** New */
  New = 'NEW',
  /** Paused */
  Paused = 'PAUSED',
  /** Preparing */
  Preparing = 'PREPARING',
  /** Reserved */
  Reserved = 'RESERVED',
  /** Unavailable */
  Unavailable = 'UNAVAILABLE',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

export type Connectors = {
  __typename?: 'Connectors';
  /** A string represents the Roaming relationship */
  altText?: Maybe<Scalars['String']>;
  /** A string that represents the fee related to being idle */
  idleFee?: Maybe<Scalars['String']>;
  /** A string that represents the kilowatt hour fee */
  kwhFee?: Maybe<Scalars['String']>;
  /** A string that represents the fee per minute */
  minuteFee?: Maybe<Scalars['String']>;
  /** A string that represents the session Fee related to the connector type */
  sessionFee?: Maybe<Scalars['String']>;
  /** An integer that maps to connectors IDs */
  vehicleConnectorId?: Maybe<Scalars['Int']>;
};

export type ConnectorsInput = {
  /** A string represents the Roaming relationship */
  altText?: InputMaybe<Scalars['String']>;
  /** A string that describes the connector type */
  connectorType?: InputMaybe<Scalars['String']>;
  /** A string that represents the fee related to being idle */
  idleFee?: InputMaybe<Scalars['String']>;
  /** A string that represents the kilowatt hour fee */
  kwhFee?: InputMaybe<Scalars['String']>;
  /** A string that represents the fee per minute */
  minuteFee?: InputMaybe<Scalars['String']>;
  /** A string that represents the session Fee related to the connector type */
  sessionFee?: InputMaybe<Scalars['String']>;
};

export type ConnectorsWithMeta = {
  __typename?: 'ConnectorsWithMeta';
  edges?: Maybe<Array<Maybe<Connector>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ConsumptionChartBar = {
  __typename?: 'ConsumptionChartBar';
  tiers: ConsumptionChartTiers;
  xLabel: Scalars['String'];
};

export type ConsumptionChartData = {
  __typename?: 'ConsumptionChartData';
  bars: Array<Maybe<ConsumptionChartBar>>;
  groupedBy: ConsumptionChartGroupEnum;
  tiers: ConsumptionChartTiers;
};

export enum ConsumptionChartGroupEnum {
  Day = 'Day',
  Hour = 'Hour',
  Month = 'Month',
  Year = 'Year'
}

export type ConsumptionChartInput = {
  endDate: Scalars['Date'];
  siteIds: Array<Scalars['UUID']>;
  startDate: Scalars['Date'];
  timeZone: Scalars['RequiredString'];
};

export type ConsumptionChartTiers = {
  __typename?: 'ConsumptionChartTiers';
  consumptionTierTotals: ConsumptionTier;
  consumptionTiers: Array<Maybe<ConsumptionTier>>;
};

export type ConsumptionTier = {
  __typename?: 'ConsumptionTier';
  consumption: Scalars['Float'];
  cost: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type Contact = {
  __typename?: 'Contact';
  altId?: Maybe<Scalars['ID']>;
  contactName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  workTitle?: Maybe<Scalars['String']>;
};

export type ContactsWithMeta = {
  __typename?: 'ContactsWithMeta';
  edges?: Maybe<Array<Maybe<Contact>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Contract = {
  __typename?: 'Contract';
  account?: Maybe<Account>;
  altId?: Maybe<Scalars['ID']>;
  closureDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  plan?: Maybe<Plan>;
  startDate?: Maybe<Scalars['Date']>;
  status?: Maybe<FalconConstraint>;
  vendorId?: Maybe<Scalars['ID']>;
  vendorSyncedAt?: Maybe<Scalars['Date']>;
};

export type ContractExpirationInput = {
  monthsFromExp: Scalars['Int'];
};

export type ContractsWithMeta = {
  __typename?: 'ContractsWithMeta';
  edges?: Maybe<Array<Maybe<Contract>>>;
  filter?: Maybe<ListContractsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListContractsSearchType>;
  sort?: Maybe<ListContractsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum CorruptedReason {
  CorruptedByWrongPowerPerHourTransactions = 'CORRUPTED_BY_WRONG_POWER_PER_HOUR_TRANSACTIONS',
  Unknown = 'UNKNOWN'
}

export type CostTariff = {
  __typename?: 'CostTariff';
  altId: Scalars['ID'];
  demandRateValue?: Maybe<Scalars['Float']>;
  energyRates: Array<Maybe<EnergyRate>>;
  utilityName: Scalars['String'];
  validFromDate: Scalars['Date'];
  validToDate: Scalars['Date'];
};

export type CostTariffInput = {
  demandRateValue: Scalars['Float'];
  energyRates: Array<InputMaybe<EnergyRateInput>>;
  utilityName: Scalars['RequiredString'];
  validFromDate: Scalars['Date'];
  validToDate: Scalars['Date'];
};

export type Coupon = {
  __typename?: 'Coupon';
  adUrl?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateAccountInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  billingAddress?: InputMaybe<CreateAddressInput>;
  enrolledOn?: InputMaybe<Scalars['Date']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  isFcms?: InputMaybe<Scalars['Boolean']>;
  mailingAddress?: InputMaybe<CreateAddressInput>;
  vendorId?: InputMaybe<Scalars['Int']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type CreateAccountOwnerFromDriivzInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountStatus?: InputMaybe<AccountStatus>;
  balance?: InputMaybe<Scalars['Float']>;
  balanceType?: InputMaybe<Scalars['ID']>;
  billingAddress: CreateAddressInput;
  card?: InputMaybe<CreateCardInput>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  driverType?: InputMaybe<DriverType>;
  email: Scalars['SanitizeString'];
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firstName: Scalars['SanitizeString'];
  importedDriivzAccount?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['SanitizeString'];
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  legacyPhone?: InputMaybe<Scalars['SanitizeString']>;
  mailingAddress?: InputMaybe<CreateAddressInput>;
  password?: InputMaybe<Scalars['SanitizeString']>;
  phone?: InputMaybe<Scalars['SanitizeString']>;
  vendorAccountType?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type CreateAccountOwnerInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountStatus?: InputMaybe<AccountStatus>;
  balanceType?: InputMaybe<Scalars['ID']>;
  billingAddress: CreateAddressInput;
  card?: InputMaybe<CreateCardInput>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  email: Scalars['SanitizeString'];
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firstName: Scalars['SanitizeString'];
  importedDriivzAccount?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['SanitizeString'];
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  legacyPhone?: InputMaybe<Scalars['SanitizeString']>;
  mailingAddress: CreateAddressInput;
  password?: InputMaybe<Scalars['SanitizeString']>;
  phone?: InputMaybe<Scalars['SanitizeString']>;
  vendorAccountType?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type CreateAccountOwnerWithoutPhoneInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountStatus?: InputMaybe<AccountStatus>;
  billingAddress?: InputMaybe<CreateAddressInput>;
  card?: InputMaybe<CreateCardInput>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firstName: Scalars['String'];
  importedDriivzAccount?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  legacyId?: InputMaybe<Scalars['String']>;
  mailingAddress?: InputMaybe<CreateAddressInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type CreateAccountVehicleInput = {
  accountId: Scalars['UUID'];
  driverId?: InputMaybe<Scalars['UUID']>;
  macAddress?: InputMaybe<Scalars['SanitizeString']>;
  media?: InputMaybe<GetMediaInput>;
  nickName?: InputMaybe<Scalars['SanitizeString']>;
  vehicleId: Scalars['UUID'];
  vin?: InputMaybe<Scalars['Vin']>;
};

export type CreateAdHocContractInput = {
  accountId: Scalars['ID'];
  amount: Scalars['Int'];
};

export type CreateAddressInput = {
  address1?: InputMaybe<Scalars['SanitizeString']>;
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  /** administrativeArea must be the 2-character state-code for US addresses (CA, OR, AZ), or the full name of the province for Canadian addresses (Quebec, Ontario, British Columbia) */
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
};

export type CreateAlertInput = {
  body: Scalars['RequiredString'];
  links?: InputMaybe<Array<InputMaybe<CreateAlertLinkInput>>>;
  siteId: Scalars['ID'];
  state?: InputMaybe<CreateAlertStateInput>;
  title: Scalars['RequiredString'];
  type: AlertType;
};

export type CreateAlertLinkInput = {
  displayText: Scalars['RequiredString'];
  entityType: Scalars['RequiredString'];
  entityTypeId: Scalars['ID'];
};

export type CreateAlertStateInput = {
  isRead: Scalars['Boolean'];
  isTicketSubmitted: Scalars['Boolean'];
  isUrgent: Scalars['Boolean'];
};

export type CreateCabinetAdminInput = {
  cabinetModelAltId: Scalars['UUID'];
  circuitAltId?: InputMaybe<Scalars['UUID']>;
  serialNumber: Scalars['String'];
  wiredVolts: Scalars['Float'];
  wiredVoltsPhases: Scalars['Float'];
  wiringConfig: WiringConfig;
};

export type CreateCabinetInput = {
  cabinetModelAltId: Scalars['UUID'];
  chargingSystemAltId: Scalars['UUID'];
  circuitAltId?: InputMaybe<Scalars['UUID']>;
  serialNumber: Scalars['String'];
  wiredVolts: Scalars['Float'];
  wiredVoltsPhases: Scalars['Float'];
  wiringConfig: WiringConfig;
};

export type CreateCabinetModelInput = {
  breakerRating: Scalars['Float'];
  chargerModelAltId: Scalars['String'];
  efficiency: Scalars['RequiredString'];
  inputAcVoltage: InputAcVoltage;
  isIntegrated: Scalars['Boolean'];
  manufacturer: Scalars['RequiredString'];
  modelName: Scalars['RequiredString'];
  modelSku?: InputMaybe<Scalars['String']>;
  powerFactor: Scalars['Float'];
};

export type CreateCardInput = {
  brand: Scalars['String'];
  cardTypeId?: InputMaybe<Scalars['Int']>;
  cardVendorId?: InputMaybe<Scalars['ID']>;
  externalNumber: Scalars['String'];
  internalNumber: Scalars['String'];
  nickName?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['Int']>;
};

export type CreateCardOrderInput = {
  contractId?: InputMaybe<Scalars['ID']>;
  driverId: Scalars['ID'];
};

/** Input for creating a charger group */
export type CreateChargerGroupForExtendInput = {
  chargerGroupName: Scalars['SanitizeString'];
  /** Falcon constraint id for charger group type */
  chargerGroupTypeId: Scalars['Int'];
  description?: InputMaybe<Scalars['SanitizeString']>;
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
};

export type CreateChargerInput = {
  additionalEquipment?: InputMaybe<Scalars['SanitizeString']>;
  additionalSerial?: InputMaybe<Scalars['SanitizeString']>;
  altId?: InputMaybe<Scalars['ID']>;
  authenticationMethodsConstraint?: InputMaybe<Scalars['Int']>;
  authenticationModeId?: InputMaybe<Scalars['Int']>;
  brand?: InputMaybe<Scalars['SanitizeString']>;
  chargePointIdentity?: InputMaybe<Scalars['SanitizeString']>;
  chargerIsManaged?: InputMaybe<Scalars['Boolean']>;
  chargerModelId: Scalars['ID'];
  chargerName: Scalars['SanitizeString'];
  chargerStatusId?: InputMaybe<Scalars['Int']>;
  cid: Scalars['SanitizeString'];
  coBranding?: InputMaybe<Scalars['SanitizeString']>;
  communicationMethod?: InputMaybe<Scalars['SanitizeString']>;
  connectionDate?: InputMaybe<Scalars['SanitizeString']>;
  connectionUri?: InputMaybe<Scalars['SanitizeString']>;
  description?: InputMaybe<Scalars['SanitizeString']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  equipmentId?: InputMaybe<Scalars['SanitizeString']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  evseId?: InputMaybe<Scalars['SanitizeString']>;
  evses?: InputMaybe<Array<InputMaybe<EvseInput>>>;
  excludeFromOcpi?: InputMaybe<Scalars['Boolean']>;
  excluded?: InputMaybe<Scalars['Boolean']>;
  fieldStationStatus: FieldStationStatus;
  fundingSource?: InputMaybe<Scalars['SanitizeString']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  identityKey?: InputMaybe<Scalars['SanitizeString']>;
  ignoreStatusNotifications?: InputMaybe<Scalars['Boolean']>;
  infrastructureProviderCompanyId?: InputMaybe<Scalars['Int']>;
  ipAddress?: InputMaybe<Scalars['SanitizeString']>;
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  localLoadBalancingEnabled?: InputMaybe<Scalars['Boolean']>;
  locationId: Scalars['ID'];
  locationType: Scalars['SanitizeString'];
  macAddress?: InputMaybe<Scalars['SanitizeString']>;
  maintenanceComments?: InputMaybe<Scalars['String']>;
  maintenanceVendorId?: InputMaybe<Scalars['Int']>;
  maxPower?: InputMaybe<Scalars['Int']>;
  meterSigningSupported?: InputMaybe<Scalars['Boolean']>;
  modemSerialNumber?: InputMaybe<Scalars['String']>;
  networkConnectionTypeId?: InputMaybe<Scalars['Int']>;
  nextMaintenanceDate?: InputMaybe<Scalars['Date']>;
  nonNetworked?: InputMaybe<Scalars['Boolean']>;
  ports?: InputMaybe<Array<InputMaybe<PortInput>>>;
  productIdentityKeyId?: InputMaybe<Scalars['Int']>;
  serialNumber: Scalars['SanitizeString'];
  serverSideLocalLoadBalancingEnabled?: InputMaybe<Scalars['Boolean']>;
  showInThirdPartyFilters?: InputMaybe<Scalars['Boolean']>;
  simultaneousChargingEnabled?: InputMaybe<Scalars['Boolean']>;
  smartChargingEnabled?: InputMaybe<Scalars['Boolean']>;
  usageStartDate?: InputMaybe<Scalars['SanitizeString']>;
  validateMeterSignature?: InputMaybe<Scalars['Boolean']>;
  vendorId?: InputMaybe<Scalars['Int']>;
  warehouseLocation?: InputMaybe<Scalars['SanitizeString']>;
  warrantyExpirationDate?: InputMaybe<Scalars['Date']>;
  warrantyLengthId?: InputMaybe<Scalars['Int']>;
  warrantyStartDate?: InputMaybe<Scalars['Date']>;
  warrantyStatusId?: InputMaybe<Scalars['Int']>;
  wirelessConnectionCarrierId?: InputMaybe<Scalars['Int']>;
};

export type CreateChargerModelInput = {
  additionalDetails?: InputMaybe<Scalars['SanitizeString']>;
  autoChargeSupported?: InputMaybe<Scalars['Boolean']>;
  breakerRating?: InputMaybe<Scalars['Float']>;
  chargerModelEvses?: InputMaybe<Array<InputMaybe<ChargerModelEvseInput>>>;
  communicationProtocol?: InputMaybe<Scalars['SanitizeString']>;
  currentThd?: InputMaybe<Scalars['SanitizeString']>;
  dimensions?: InputMaybe<Scalars['SanitizeString']>;
  display?: InputMaybe<Scalars['SanitizeString']>;
  efficiency?: InputMaybe<Scalars['SanitizeString']>;
  evses?: InputMaybe<Array<InputMaybe<ChargerModelEvseInput>>>;
  firmwareVersion?: InputMaybe<Scalars['SanitizeString']>;
  ingressProtection?: InputMaybe<Scalars['SanitizeString']>;
  inputAcVoltage?: InputMaybe<InputAcVoltage>;
  interfaceVersion?: InputMaybe<InterfaceVersion>;
  isoIec?: InputMaybe<Scalars['Boolean']>;
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  manufacturer?: InputMaybe<Manufacturer>;
  modelName?: InputMaybe<Scalars['SanitizeString']>;
  modelNotes?: InputMaybe<Scalars['String']>;
  modelSku?: InputMaybe<Scalars['SanitizeString']>;
  mountType?: InputMaybe<Scalars['String']>;
  networkCommunication?: InputMaybe<NetworkCommunication>;
  nfcReader?: InputMaybe<Scalars['Boolean']>;
  ports?: InputMaybe<Array<InputMaybe<PortInput>>>;
  powerFactor?: InputMaybe<Scalars['Float']>;
  powerOutput: Scalars['PowerUnit'];
  simultaneousChargeSupported?: InputMaybe<Scalars['Boolean']>;
  smartEnergyProfileSupport?: InputMaybe<Scalars['Boolean']>;
  unitType?: InputMaybe<UnitType>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
  weight?: InputMaybe<Scalars['SanitizeString']>;
};

export type CreateChargingSystemAdminInput = {
  cabinet: CreateCabinetAdminInput;
  chargerAltId: Scalars['String'];
  chargingSystemName: Scalars['String'];
  powerSharingEnabled: Scalars['Boolean'];
  siteAltId: Scalars['String'];
};

export type CreateChargingSystemInput = {
  chargingSystemName: Scalars['RequiredString'];
  powerSharingEnabled?: InputMaybe<Scalars['Boolean']>;
  siteId: Scalars['RequiredString'];
};

export type CreateCircuitInput = {
  childCabinetIds?: InputMaybe<Array<Scalars['UUID']>>;
  circuitName?: InputMaybe<Scalars['String']>;
  circuitType: CircuitType;
  hasBreaker?: InputMaybe<Scalars['Boolean']>;
  lineKwChargerLimit?: InputMaybe<Scalars['Float']>;
  maxAmpsSetting?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['UUID']>;
  ratingAmps?: InputMaybe<Scalars['Float']>;
  ratingVolts?: InputMaybe<Scalars['Float']>;
  ratingVoltsPhases?: InputMaybe<Scalars['Int']>;
  switchgearId: Scalars['UUID'];
};

export type CreateConnectorForFleetInput = {
  altId: Scalars['UUID'];
  canOverride?: InputMaybe<Scalars['Boolean']>;
  isOverridden?: InputMaybe<Scalars['Boolean']>;
  siteId: Scalars['UUID'];
};

export type CreateContactInput = {
  contactName?: InputMaybe<Scalars['SanitizeString']>;
  email?: InputMaybe<Scalars['SanitizeString']>;
  hostId: Scalars['ID'];
  phone?: InputMaybe<Scalars['SanitizeString']>;
  workTitle?: InputMaybe<Scalars['SanitizeString']>;
};

export type CreateContractInput = {
  accountId: Scalars['ID'];
  closureDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  planId: Scalars['ID'];
  startDate: Scalars['Date'];
  statusId: Scalars['ID'];
};

export type CreateCostTariffInput = {
  demandRateValue: Scalars['Float'];
  siteId: Scalars['UUID'];
  utilityName: Scalars['RequiredString'];
  validFromDate: Scalars['Date'];
  validToDate: Scalars['Date'];
};

export type CreateCustomPricingForExtendInput = {
  pricing: CreatePricingForExtendInput;
  tariffSchedule: Array<CreateTariffScheduleForExtendInput>;
};

export type CreateDriverInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountVendorId?: InputMaybe<Scalars['ID']>;
  billingAddress?: InputMaybe<CreateAddressInput>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firstName: Scalars['String'];
  invited?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  legacyPhone?: InputMaybe<Scalars['SanitizeString']>;
  mailingAddress?: InputMaybe<CreateAddressInput>;
  phone?: InputMaybe<Scalars['Phone']>;
  tokenAndroid?: InputMaybe<Scalars['String']>;
  tokenIos?: InputMaybe<Scalars['String']>;
  vendorDriverStatus?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type CreateEmailListInput = {
  name: Scalars['SanitizeString'];
};

export type CreateEmailListRecipientInput = {
  emailAddress: Scalars['EncryptedEmail'];
  emailListId: Scalars['ID'];
  internalId: Scalars['SanitizeString'];
  isEligible: Scalars['Boolean'];
  lastEmailed?: InputMaybe<Scalars['Date']>;
  mergeVars?: InputMaybe<Scalars['EncryptedJson']>;
  tags?: InputMaybe<Scalars['String']>;
};

export type CreateEnergyRateInput = {
  costTariffAltId: Scalars['ID'];
  endDate: Scalars['Date'];
  endDayOfWeek: Scalars['Int'];
  endTime?: InputMaybe<Scalars['Time']>;
  /** Value of endTimeInSiteTime is based on site's time instead of UTC time */
  endTimeInSiteTime?: InputMaybe<Scalars['Time']>;
  energyRateRank: Scalars['Int'];
  energyRateValue: Scalars['Float'];
  fromDate: Scalars['Date'];
  fromDayOfWeek: Scalars['Int'];
  name: Scalars['RequiredString'];
  startTime?: InputMaybe<Scalars['Time']>;
  /** Value of startTimeInSiteTime is based on site's time instead of UTC time */
  startTimeInSiteTime?: InputMaybe<Scalars['Time']>;
};

export type CreateExtendHostInput = {
  /** Host ID in the Hosts table of the Extend Host */
  hostId: Scalars['ID'];
};

export type CreateExtendUserInput = {
  /** ID stored in firebase for the user */
  firebaseId: Scalars['String'];
  /** IDs of the hosts which are being added to the user */
  hostIds: Array<Scalars['ID']>;
  /** Unique username string */
  username: Scalars['String'];
};

export type CreateFcmUserRolesInput = {
  /** Firebase Id. */
  firebaseId?: InputMaybe<Scalars['String']>;
  /** Name of the role to add to the custom claim. */
  role?: InputMaybe<Scalars['String']>;
};

export type CreateFilterInput = {
  criteria?: InputMaybe<Scalars['SanitizeString']>;
  exclude?: InputMaybe<Scalars['Boolean']>;
  operator?: InputMaybe<Scalars['SanitizeString']>;
  values?: InputMaybe<Array<InputMaybe<CreateFilterValueInput>>>;
};

export type CreateFilterValueInput = {
  label?: InputMaybe<Scalars['SanitizeString']>;
  valid?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['SanitizeString'];
};

export type CreateFleetInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  fleetName: Scalars['RequiredString'];
  siteId: Scalars['ID'];
};

export type CreateFleetUserInput = {
  accountId: Scalars['ID'];
  firebaseId: Scalars['String'];
  username: Scalars['String'];
};

export type CreateFleetVehicleInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cardId: Scalars['UUID'];
  chargeCurveId?: InputMaybe<Scalars['Int']>;
  connectorType: VehicleConnectorType;
  defaultTargetSoc: Scalars['Float'];
  dimensions?: InputMaybe<Scalars['String']>;
  economyCity?: InputMaybe<Scalars['Float']>;
  economyHwy?: InputMaybe<Scalars['Float']>;
  estimatedChargingCompletionTime?: InputMaybe<Scalars['Date']>;
  fleetId: Scalars['UUID'];
  isOperational: Scalars['Boolean'];
  lastKnownSoc?: InputMaybe<Scalars['Float']>;
  lastKnownSocUpdateSource?: InputMaybe<LastKnownSocUpdateSource>;
  make: Scalars['RequiredString'];
  model: Scalars['RequiredString'];
  modelYear: Scalars['RequiredString'];
  range: Scalars['Float'];
  ratingAmps: Scalars['Float'];
  ratingKw: Scalars['Float'];
  ratingKwh: Scalars['Float'];
  ratingVolts: Scalars['Float'];
  trim?: InputMaybe<Scalars['String']>;
  vehicleClass: VehicleClass;
  vehicleIdentifier: Scalars['RequiredString'];
  vendorSku?: InputMaybe<Scalars['String']>;
  vin: Scalars['RequiredString'];
};

export type CreateHostInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  address4?: InputMaybe<Scalars['String']>;
  administrativeArea?: InputMaybe<Scalars['String']>;
  contacts?: InputMaybe<Array<InputMaybe<CreateContactInput>>>;
  country?: InputMaybe<Scalars['String']>;
  hid?: InputMaybe<Scalars['String']>;
  hostName?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<CreatePropertyInput>>>;
  status?: InputMaybe<HostStatus>;
};

export type CreateMilestoneDocumentInput = {
  fileName: Scalars['String'];
  projectId: Scalars['ID'];
  projectMilestoneId: Scalars['ID'];
};

export type CreateMonthlyUtilizationInput = {
  month: Scalars['Int'];
  siteId: Scalars['ID'];
  utilization: Scalars['Float'];
  year: Scalars['Int'];
};

export type CreateNissanPromoCodeInput = {
  codeDetailId: Scalars['ID'];
  codes: Array<Scalars['String']>;
  promotionId: Scalars['ID'];
};

export type CreatePaymentCardForMobileInput = {
  cardNumber: Scalars['String'];
  expiryMonth: Scalars['Int'];
  expiryYear: Scalars['Int'];
  nameOnCard: Scalars['String'];
  nonce: Scalars['String'];
  optIn?: InputMaybe<Scalars['Boolean']>;
  paymentMethodType: Scalars['String'];
};

export type CreatePlanInput = {
  badge?: InputMaybe<Scalars['SanitizeString']>;
  cardBrandId?: InputMaybe<Scalars['Int']>;
  ctaLabel?: InputMaybe<Scalars['SanitizeString']>;
  defaultAccountPlan?: InputMaybe<Scalars['Boolean']>;
  detailHeading?: InputMaybe<Scalars['SanitizeString']>;
  detailSections?: InputMaybe<Array<InputMaybe<DetailSectionInput>>>;
  detailSessionTimes?: InputMaybe<Array<InputMaybe<DetailSessionTimeInput>>>;
  displayPlanCard?: InputMaybe<Scalars['Boolean']>;
  displayToCustomer?: InputMaybe<Scalars['Boolean']>;
  elements?: InputMaybe<Array<InputMaybe<ElementInput>>>;
  enrollmentClose?: InputMaybe<Scalars['Date']>;
  enrollmentOpen?: InputMaybe<Scalars['Date']>;
  financeCode?: InputMaybe<Scalars['SanitizeString']>;
  intervalLength: Scalars['Int'];
  intervalUnitId: Scalars['Int'];
  legalese?: InputMaybe<Scalars['String']>;
  planCode: Scalars['SanitizeString'];
  planDescription: Scalars['SanitizeString'];
  planDiscount?: InputMaybe<Scalars['Float']>;
  planDisplayName?: InputMaybe<Scalars['SanitizeString']>;
  planDuration: Scalars['Int'];
  planName: Scalars['SanitizeString'];
  planStatusId?: InputMaybe<Scalars['Int']>;
  planSubheading?: InputMaybe<Scalars['SanitizeString']>;
  products?: InputMaybe<Array<InputMaybe<ProductInput>>>;
  rolloverPlanId?: InputMaybe<Scalars['ID']>;
  templateId?: InputMaybe<Scalars['Int']>;
  terminationBehaviorId?: InputMaybe<Scalars['Int']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vinRequiredFlag?: InputMaybe<Scalars['Boolean']>;
};

export type CreatePortalsUserInput = {
  user?: InputMaybe<UserInputForCreate>;
};

export type CreatePricingForExtendInput = {
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
};

export type CreatePromotionCampaignInput = {
  campaignName: Scalars['String'];
  campaignRef: Scalars['String'];
  codeRedemptionLimit: Scalars['Int'];
  codeType: Scalars['ID'];
  creditAmount?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['Date']>;
  planCode?: InputMaybe<Scalars['String']>;
  promotionId: Scalars['ID'];
  startsAt?: InputMaybe<Scalars['Date']>;
};

export type CreatePromotionInput = {
  anonymousPromoCodes: Scalars['Boolean'];
  filterStartDate?: InputMaybe<Scalars['Date']>;
  partnerType?: InputMaybe<Scalars['Int']>;
  promotionName: Scalars['String'];
  promotionRef: Scalars['String'];
  promotionType?: InputMaybe<Scalars['Int']>;
};

export type CreatePropertyInput = {
  address1?: InputMaybe<Scalars['SanitizeString']>;
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  hostId?: InputMaybe<Scalars['ID']>;
  legacyId?: InputMaybe<Scalars['ID']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  pid?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
  propertyName?: InputMaybe<Scalars['SanitizeString']>;
  status?: InputMaybe<PropertyStatus>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
};

export type CreateReservationInput = {
  connectorId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type CreateRouteInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cityFactor?: InputMaybe<Scalars['Float']>;
  departurePropertyId?: InputMaybe<Scalars['ID']>;
  routeDistance: Scalars['Float'];
  routeName: Scalars['SanitizeString'];
  scheduledDeparture?: InputMaybe<Scalars['Time']>;
  siteId: Scalars['UUID'];
};

export type CreateSessionInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accountVendorId: Scalars['ID'];
  cardVendorId?: InputMaybe<Scalars['ID']>;
  connectorVendorId: Scalars['ID'];
  corrupted?: InputMaybe<Scalars['Boolean']>;
  endTime?: InputMaybe<Scalars['Date']>;
  isSessionEnd?: InputMaybe<Scalars['Boolean']>;
  meterEnd?: InputMaybe<Scalars['Int']>;
  meterStart?: InputMaybe<Scalars['Int']>;
  planVendorId?: InputMaybe<Scalars['ID']>;
  startSource: Scalars['String'];
  startTime: Scalars['Date'];
  stopSource?: InputMaybe<Scalars['String']>;
  vendorId: Scalars['ID'];
};

export type CreateShpHostContactInput = {
  email: Scalars['String'];
  hostId: Scalars['ID'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateShpHostInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  externalHostId: Scalars['ID'];
  googleMapsLink?: InputMaybe<Scalars['String']>;
  hostSuccessManagerId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  /** Email Field that will be used to create a new Site Host User */
  siteHostEmail?: InputMaybe<Scalars['String']>;
  siteHostId?: InputMaybe<Scalars['ID']>;
  /** Name Field that will be used to create a new Site Host User */
  siteHostName?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateShpProjectInput = {
  chargerCount: Scalars['Int'];
  externalProjectId: Scalars['ID'];
  name: Scalars['String'];
  propertyId: Scalars['ID'];
};

export type CreateShpProjectMilestoneContactInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  projectMilestoneId: Scalars['ID'];
  state?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CreateShpPropertyInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  externalPropertyId: Scalars['ID'];
  googleMapsLink?: InputMaybe<Scalars['String']>;
  hostId: Scalars['ID'];
  name: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  projectManager?: InputMaybe<Scalars['String']>;
  siteDeveloper?: InputMaybe<Scalars['String']>;
  siteId: Scalars['String'];
  state: Scalars['String'];
  storeId: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateShpUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role: UserShpRole;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSiteForFleetInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  chargeDurationBufferSoc?: InputMaybe<Scalars['Float']>;
  demandLimit?: InputMaybe<Scalars['Float']>;
  demandSensitivity?: InputMaybe<Scalars['Float']>;
  serviceCapacityKw?: InputMaybe<Scalars['Float']>;
  siteId: Scalars['UUID'];
};

export type CreateSiteForFleetWithRelationsInput = {
  chargingSystems: Array<ChargingSystemInput>;
  costTariff: CostTariffInput;
  demandLimit?: InputMaybe<Scalars['Float']>;
  serviceCapacityKw?: InputMaybe<Scalars['Float']>;
  siteId: Scalars['RequiredString'];
  switchgear: SwitchgearInput;
  utilizationHistory?: InputMaybe<Array<InputMaybe<MonthlyUtilizationInput>>>;
};

export type CreateSiteImageInput = {
  media?: InputMaybe<GetMediaInput>;
  mediaOrder?: InputMaybe<Scalars['Int']>;
};

export type CreateSiteInput = {
  access: SiteAccess;
  accessNotes?: InputMaybe<Scalars['SanitizeString']>;
  address1: Scalars['SanitizeString'];
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea: Scalars['SanitizeString'];
  country?: InputMaybe<Scalars['SanitizeString']>;
  description: Scalars['SanitizeString'];
  directions?: InputMaybe<Scalars['SanitizeString']>;
  displayName?: InputMaybe<Scalars['SanitizeString']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  hoursOfOperation?: InputMaybe<HoursInput>;
  latitude: Scalars['Float'];
  legacyId?: InputMaybe<Scalars['ID']>;
  locality: Scalars['SanitizeString'];
  locationMarket?: InputMaybe<SiteMarket>;
  locationNotes?: InputMaybe<Scalars['SanitizeString']>;
  longitude: Scalars['Float'];
  maxCurrent?: InputMaybe<Scalars['SanitizeString']>;
  meterNumber?: InputMaybe<Scalars['SanitizeString']>;
  postalCode: Scalars['SanitizeString'];
  property: CreatePropertyInput;
  propertyId?: InputMaybe<Scalars['SanitizeString']>;
  ratedVoltage?: InputMaybe<Scalars['SanitizeString']>;
  sid: Scalars['SanitizeString'];
  siteImages?: InputMaybe<Array<InputMaybe<CreateSiteImageInput>>>;
  siteName: Scalars['SanitizeString'];
  siteStatusId?: InputMaybe<Scalars['Int']>;
  type: SiteType;
  utilityCompany?: InputMaybe<SiteUtilityCompany>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type CreateSwitchgearInput = {
  enclosureType?: InputMaybe<Scalars['String']>;
  isIntegrated: Scalars['Boolean'];
  manufacturer: Scalars['RequiredString'];
  model: Scalars['RequiredString'];
  modelYear?: InputMaybe<Scalars['String']>;
  siteAltId: Scalars['UUID'];
  vendorSku?: InputMaybe<Scalars['String']>;
};

export type CreateTagInput = {
  description?: InputMaybe<Scalars['SanitizeString']>;
  filters?: InputMaybe<Array<InputMaybe<CreateFilterInput>>>;
  tagName?: InputMaybe<Scalars['SanitizeString']>;
};

export type CreateTariffConnectorTypeInput = {
  connectorTypeId: Scalars['ID'];
  tariffId: Scalars['ID'];
};

export type CreateTariffForExtendInput = {
  chargerGroupAltId: Scalars['ID'];
  customPricing?: InputMaybe<Array<CreateCustomPricingForExtendInput>>;
  defaultPricing: DefaultPricingForExtendInput;
};

export type CreateTariffInput = {
  connectorTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tariffDescription?: InputMaybe<Scalars['SanitizeString']>;
  tariffItems?: InputMaybe<Array<InputMaybe<TariffItemInput>>>;
  tariffName: Scalars['SanitizeString'];
  tariffRank?: InputMaybe<Scalars['Int']>;
};

export type CreateTariffItemInput = {
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
  tariffItemName: Scalars['String'];
};

export type CreateTariffScheduleForExtendInput = {
  daysOfWeek: Array<Day>;
  endTime: Scalars['String'];
  startTime: Scalars['String'];
};

export type CreateTicketComment = {
  __typename?: 'CreateTicketComment';
  body?: Maybe<Scalars['String']>;
};

export type CreateTicketCommentInput = {
  body: Scalars['RequiredString'];
  ticketNumber: Scalars['RequiredString'];
};

export type CreateTicketCustomFields = {
  __typename?: 'CreateTicketCustomFields';
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type CreateTicketFieldInput = {
  displayName: Scalars['RequiredString'];
  type: TicketFieldType;
  vendorId: Scalars['RequiredString'];
};

export type CreateTicketInput = {
  chargerAltId?: InputMaybe<Scalars['ID']>;
  chargerModel?: InputMaybe<Scalars['String']>;
  comment: Scalars['RequiredString'];
  errorData?: InputMaybe<Scalars['String']>;
  issueType: TicketIssueType;
  siteAltId: Scalars['ID'];
  subject: Scalars['RequiredString'];
  vehicleMake?: InputMaybe<Scalars['String']>;
  vehicleModel?: InputMaybe<Scalars['String']>;
  vehicleType?: InputMaybe<Scalars['String']>;
  vehicleYear?: InputMaybe<Scalars['String']>;
};

export type CreateTicketPayload = {
  __typename?: 'CreateTicketPayload';
  request?: Maybe<CreateTicketRequest>;
};

export type CreateTicketRequest = {
  __typename?: 'CreateTicketRequest';
  comment?: Maybe<CreateTicketComment>;
  custom_fields?: Maybe<Array<Maybe<CreateTicketCustomFields>>>;
  priority?: Maybe<Scalars['String']>;
  requester?: Maybe<TicketRequester>;
  subject: Scalars['String'];
  ticket_form_id?: Maybe<Scalars['ID']>;
};

export type CreateTripInput = {
  departureDatetimeUtc?: InputMaybe<Scalars['Date']>;
  routeAltId?: InputMaybe<Scalars['UUID']>;
  source: TripSource;
  status: TripStatus;
  targetSoc: Scalars['Float'];
  vehicleAltId?: InputMaybe<Scalars['UUID']>;
};

export type CreateUploadsInput = {
  files: Array<InputMaybe<Scalars['Upload']>>;
  path?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  userRole?: InputMaybe<UserRole>;
  username: Scalars['String'];
};

export type CreateUserResult = {
  __typename?: 'CreateUserResult';
  result?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserResultforCreate>;
};

export type CreateVehicleMakeInput = {
  makeName: Scalars['String'];
  vendorId: Scalars['ID'];
};

export type CreateVehicleModelInput = {
  modelName: Scalars['String'];
  vehicleMake?: InputMaybe<CreateVehicleMakeInput>;
  vendorId: Scalars['ID'];
};

export type Credit = {
  __typename?: 'Credit';
  allocatedCredit?: Maybe<Scalars['Float']>;
  expiresOn?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  remainingCredit?: Maybe<Scalars['Float']>;
  usedCredit?: Maybe<Scalars['Float']>;
};

export enum CreditExpPolicy {
  /** Carry Over */
  CarryOver = 'CARRY_OVER',
  /** Expires */
  Expires = 'EXPIRES'
}

export type CreditsWithMeta = {
  __typename?: 'CreditsWithMeta';
  edges?: Maybe<Array<Maybe<Credit>>>;
  total?: Maybe<Scalars['Int']>;
};

export type CurrentUserResponse = {
  __typename?: 'CurrentUserResponse';
  driver?: Maybe<Driver>;
  user?: Maybe<User>;
};

export type CustomHourInput = {
  closed?: InputMaybe<Scalars['Boolean']>;
  timeslots?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
};

export type CustomHourType = {
  __typename?: 'CustomHourType';
  closed?: Maybe<Scalars['Boolean']>;
  timeslots?: Maybe<Array<Maybe<TimeSlotType>>>;
};

export enum Day {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type DeactivateCardsInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cardIds: Array<Scalars['UUID']>;
  driverId?: InputMaybe<Scalars['UUID']>;
};

export type DefaultPricingForExtendInput = {
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
};

export type DeleteAccountVehicleInput = {
  altId: Scalars['UUID'];
};

export type DeleteCabinetModelInput = {
  altId: Scalars['ID'];
};

/** Input for deleting a charger group */
export type DeleteChargerGroupForExtendInput = {
  /** Charger group altId */
  altId: Scalars['ID'];
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
};

export type DeleteChargingSystemInput = {
  altId: Scalars['UUID'];
};

export type DeleteCircuitInput = {
  altId: Scalars['ID'];
};

export type DeleteCostTariffInput = {
  altId: Scalars['UUID'];
};

export type DeleteDriverInput = {
  altId: Scalars['ID'];
};

export type DeleteEmailListInput = {
  altId: Scalars['UUID'];
};

export type DeleteEmailListRecipientInput = {
  altId?: InputMaybe<Scalars['UUID']>;
};

export type DeleteEnergyRateInput = {
  altId: Scalars['ID'];
};

export type DeleteExtendHostInput = {
  /** Unique ID of the Extend Host */
  altId: Scalars['ID'];
};

export type DeleteExtendUserHostsInput = {
  /** Unique UUID of the user */
  altId: Scalars['ID'];
  /** IDs of the hosts which are being removed from the user */
  hostIds: Array<Scalars['ID']>;
};

export type DeleteFleetInput = {
  altId: Scalars['ID'];
};

export type DeleteHostInput = {
  altId: Scalars['ID'];
};

export type DeletePaymentMethodForMobileInput = {
  altId: Scalars['ID'];
};

export type DeletePaymentMethodInput = {
  vendorId: Scalars['ID'];
};

export type DeleteRouteInput = {
  altId: Scalars['ID'];
};

export type DeleteShpHostContactInput = {
  hostId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type DeleteShpUserInput = {
  email: Scalars['String'];
};

export type DeleteSwitchgearInput = {
  altId: Scalars['ID'];
};

export type DeleteTagInput = {
  altId: Scalars['ID'];
};

export type DeleteTariffInput = {
  altId: Scalars['ID'];
};

export type DeleteTicketFieldInput = {
  altId: Scalars['UUID'];
};

export type DeleteTripInput = {
  altId: Scalars['UUID'];
};

export type DeleteUserInput = {
  filters?: InputMaybe<DeleteUserInputFiltersInput>;
};

export type DeleteUserInputFiltersInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type DeleteUserInputFiltersType = {
  __typename?: 'DeleteUserInputFiltersType';
  uid?: Maybe<Scalars['String']>;
};

export type DeleteUserResult = {
  __typename?: 'DeleteUserResult';
  filters?: Maybe<DeleteUserInputFiltersType>;
  result?: Maybe<Scalars['Boolean']>;
};

export enum DepartureStatus {
  Delayed = 'DELAYED',
  DelayExpected = 'DELAY_EXPECTED',
  Na = 'NA',
  OnTime = 'ON_TIME'
}

export type DetailSection = {
  __typename?: 'DetailSection';
  header?: Maybe<Scalars['SanitizeString']>;
  items?: Maybe<Array<Maybe<Scalars['SanitizeString']>>>;
};

export type DetailSectionInput = {
  header?: InputMaybe<Scalars['SanitizeString']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
};

export type DetailSessionTime = {
  __typename?: 'DetailSessionTime';
  duration?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Time']>;
  interval?: Maybe<Scalars['SanitizeString']>;
  startTime?: Maybe<Scalars['Time']>;
};

export type DetailSessionTimeInput = {
  duration?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['Time']>;
  interval?: InputMaybe<Scalars['SanitizeString']>;
  startTime?: InputMaybe<Scalars['Time']>;
};

export type DisassociateAccountVehicleInput = {
  altId: Scalars['UUID'];
};

/** DisplayTariffInput is an input type which describes the parameters availble to the DisplayTariff mutation. THIS SHOULD NOT BE CALLED MANUALLY! */
export type DisplayTariffInput = {
  /** A billingPlanId for updating displayed values on a charger when a plan associated with a charger is updated. */
  billingPlanId?: InputMaybe<Scalars['Int']>;
  /** A billingPlanProductTariffId for updating displayed values on a charger when a tariff associated with a plan which is associated with the charger is updated. */
  billingPlanProductTariffId?: InputMaybe<Scalars['Int']>;
  /** A billingStationSocketTariffId for updating displayed values on a charger when a tariff associated with a specific socket on a charger is updated. */
  billingStationSocketTariffId?: InputMaybe<Scalars['Int']>;
  /** A billingTariffId for updating displayed values on a charger when an associated tariff is updated. */
  billingTariffId?: InputMaybe<Scalars['Int']>;
  /** A treeNodeId for updating displayed values on a group of chargers. Must be used in conjunction with 'treeNodeStationId'. */
  treeNodeId?: InputMaybe<Scalars['Int']>;
  /** A treeNodeStationId for updating displayed values on a group of chargers. Must be used in conjunction with 'treeNodeId'. */
  treeNodeStationId?: InputMaybe<Scalars['Int']>;
};

export type Distribution = {
  __typename?: 'Distribution';
  sessionInterval?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Float']>;
};

export type DistributionByWeekdayHour = {
  __typename?: 'DistributionByWeekdayHour';
  sessionInterval?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DriivzEntityInput = {
  activation_date?: InputMaybe<Scalars['String']>;
  billing_plan_id?: InputMaybe<Scalars['ID']>;
  contract_id?: InputMaybe<Scalars['ID']>;
  end_date?: InputMaybe<Scalars['String']>;
  external_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  paying_entity_customer_id?: InputMaybe<Scalars['Int']>;
  stopped_on?: InputMaybe<Scalars['String']>;
};

export type DriivzTagInput = {
  vendorId: Scalars['ID'];
};

export type Driver = {
  __typename?: 'Driver';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']>;
  accountVehicles?: Maybe<AccountVehiclesWithMeta>;
  altId?: Maybe<Scalars['ID']>;
  cards?: Maybe<CardsWithMeta>;
  /** contactId is used to track the contact with the emarsys sdk */
  contactId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  driverStatus?: Maybe<FalconConstraint>;
  driverType?: Maybe<DriverType>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hasPendingAutochargeEnrollment: Scalars['Boolean'];
  hasValidPaymentMethod?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  inGoodStanding?: Maybe<InGoodStanding>;
  invited?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  legacyPhone?: Maybe<Scalars['String']>;
  metrics?: Maybe<DriverMetrics>;
  notificationPreferences?: Maybe<NotificationPreferencesWithMeta>;
  optInPromotions?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['Phone']>;
  tokenAndroid?: Maybe<Scalars['String']>;
  tokenIos?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendorId?: Maybe<Scalars['ID']>;
  vendorSyncedAt?: Maybe<Scalars['Date']>;
};


export type DriverAccountVehiclesArgs = {
  input?: InputMaybe<ListAccountVehiclesInput>;
};


export type DriverCardsArgs = {
  input?: InputMaybe<ListCardsInput>;
};


export type DriverNotificationPreferencesArgs = {
  input?: InputMaybe<ListNotificationPreferencesInput>;
};

export type DriverMetrics = {
  __typename?: 'DriverMetrics';
  CO2Offset?: Maybe<Scalars['Float']>;
  DCFCSessions?: Maybe<Scalars['Int']>;
  EVMilesPowered?: Maybe<Scalars['Float']>;
  GHGAvoided?: Maybe<Scalars['Float']>;
  L2Sessions?: Maybe<Scalars['Int']>;
  favoriteCharger?: Maybe<Scalars['String']>;
  kWh?: Maybe<Scalars['Float']>;
  totalSessions?: Maybe<Scalars['Int']>;
};

export enum DriverType {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type DriversWithMeta = {
  __typename?: 'DriversWithMeta';
  edges?: Maybe<Array<Maybe<Driver>>>;
  filter?: Maybe<ListDriversFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListDriversSearchType>;
  sort?: Maybe<ListDriversSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type ElectricVehicle = {
  __typename?: 'ElectricVehicle';
  altId?: Maybe<Scalars['ID']>;
  make?: Maybe<VehicleMake>;
  model?: Maybe<VehicleModel>;
  year?: Maybe<Scalars['String']>;
};

export type ElectricVehiclesWithMeta = {
  __typename?: 'ElectricVehiclesWithMeta';
  edges?: Maybe<Array<Maybe<ElectricVehicle>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Element = {
  __typename?: 'Element';
  altId?: Maybe<Scalars['ID']>;
  connectorType?: Maybe<VehicleConnector>;
  day?: Maybe<Day>;
  discount?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Time']>;
  maxDuration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Time']>;
};

export type ElementInput = {
  altId?: InputMaybe<Scalars['ID']>;
  connectorTypeId: Scalars['ID'];
  day: Day;
  discount: Scalars['Float'];
  endTime: Scalars['Time'];
  maxDuration?: InputMaybe<Scalars['Int']>;
  startTime: Scalars['Time'];
};

export type ElementsWithMeta = {
  __typename?: 'ElementsWithMeta';
  edges?: Maybe<Array<Maybe<Element>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EmailList = {
  __typename?: 'EmailList';
  altId: Scalars['UUID'];
  emailListRecipients?: Maybe<EmailListRecipientsWithMeta>;
  id: Scalars['ID'];
  name: Scalars['SanitizeString'];
};


export type EmailListEmailListRecipientsArgs = {
  input?: InputMaybe<ListEmailListRecipientsInput>;
};

export type EmailListRecipient = {
  __typename?: 'EmailListRecipient';
  altId: Scalars['UUID'];
  emailAddress: Scalars['EncryptedEmail'];
  emailListId: Scalars['ID'];
  id: Scalars['ID'];
  internalId: Scalars['SanitizeString'];
  isEligible: Scalars['Boolean'];
  lastEmailed?: Maybe<Scalars['Timestamp']>;
  mergeVars?: Maybe<Scalars['EncryptedJson']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EmailListRecipientsWithMeta = {
  __typename?: 'EmailListRecipientsWithMeta';
  edges?: Maybe<Array<Maybe<EmailListRecipient>>>;
  filter?: Maybe<ListEmailListRecipientsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListEmailListRecipientsSearchType>;
  sort?: Maybe<ListEmailListRecipientsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type EmailListsWithMeta = {
  __typename?: 'EmailListsWithMeta';
  edges?: Maybe<Array<Maybe<EmailList>>>;
  filter?: Maybe<ListEmailListsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListEmailListsSearchType>;
  sort?: Maybe<ListEmailListsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum EmailProvider {
  Emarsys = 'EMARSYS',
  Mandrill = 'MANDRILL'
}

export type EmailRecipient = {
  emailAddress: Scalars['SanitizeString'];
  mergeVars?: InputMaybe<Scalars['EncryptedJson']>;
};

/** EndSessionTariffInput is an input type which describes the parameters available to the EndSessionTariff mutation. THIS SHOULD NOT BE CALLED MANUALLY! */
export type EndSessionTariffInput = {
  /** A stationChargeTransactionId for looking up the charge transaction and sending the session billing information to the charger for display. */
  stationChargeTransactionId: Scalars['Int'];
};

export type EnergyRate = {
  __typename?: 'EnergyRate';
  altId: Scalars['ID'];
  endDate: Scalars['Date'];
  endDayOfWeek: Scalars['Int'];
  /** @deprecated Use `endTimeInSiteTime`. */
  endTime?: Maybe<Scalars['Time']>;
  /** Value of endTimeInSiteTime is based on site's time instead of UTC time */
  endTimeInSiteTime?: Maybe<Scalars['Time']>;
  energyRateRank: Scalars['Int'];
  energyRateValue: Scalars['Float'];
  fromDate: Scalars['Date'];
  fromDayOfWeek: Scalars['Int'];
  name: Scalars['String'];
  /** @deprecated Use `startTimeInSiteTime`. */
  startTime?: Maybe<Scalars['Time']>;
  /** Value of startTimeInSiteTime is based on site's time instead of UTC time */
  startTimeInSiteTime?: Maybe<Scalars['Time']>;
};

export type EnergyRateInput = {
  endDate: Scalars['Date'];
  endDayOfWeek: Scalars['Float'];
  endTime?: InputMaybe<Scalars['String']>;
  endTimeInSiteTime?: InputMaybe<Scalars['String']>;
  energyRateRank: Scalars['Float'];
  energyRateValue: Scalars['Float'];
  fromDate: Scalars['Date'];
  fromDayOfWeek: Scalars['Float'];
  name: Scalars['RequiredString'];
  startTime?: InputMaybe<Scalars['String']>;
  startTimeInSiteTime?: InputMaybe<Scalars['String']>;
};

export type EnrollDriverInput = {
  action: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  oobCode?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EnrollPortalsDriverInput = {
  DISABLE_WESQL_LEGACY_AWS_LAMBDA_API?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  planCode?: InputMaybe<Scalars['String']>;
  platformName?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  promotionCode?: InputMaybe<Scalars['String']>;
  promotionRef?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subscribe: Scalars['Boolean'];
  subscriptionCopy: Scalars['String'];
  terms: Scalars['Boolean'];
  year?: InputMaybe<Scalars['String']>;
};

export type EnrollUserInRewardsInput = {
  /** The account vendorId */
  accountNumber: Scalars['ID'];
  /** The driver email address */
  email: Scalars['String'];
  /** The drivers first name */
  firstName: Scalars['String'];
  /** A boolean indicating whether or not the driver opts in to rewards */
  optIn: Scalars['Boolean'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kWh?: Maybe<Scalars['Float']>;
  marketName?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  promoCode?: Maybe<Scalars['String']>;
  sessionCost?: Maybe<Scalars['Float']>;
  sessions?: Maybe<Scalars['Float']>;
  siteName?: Maybe<Scalars['String']>;
  stationName?: Maybe<Scalars['String']>;
};

export type EnrollmentExport = {
  __typename?: 'EnrollmentExport';
  address?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  propRef?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  sessionCost?: Maybe<Scalars['Float']>;
  sessionId?: Maybe<Scalars['Int']>;
  sessionInitiator?: Maybe<Scalars['String']>;
  sessionKwh?: Maybe<Scalars['Float']>;
  sessionMinutes?: Maybe<Scalars['Int']>;
  sessionStartOn?: Maybe<Scalars['Date']>;
  sessionStoppedOn?: Maybe<Scalars['Date']>;
  siteId?: Maybe<Scalars['Int']>;
  siteName?: Maybe<Scalars['String']>;
  stationCity?: Maybe<Scalars['String']>;
  stationId?: Maybe<Scalars['Int']>;
  stationName?: Maybe<Scalars['String']>;
  stationState?: Maybe<Scalars['String']>;
};

export type EnrollmentMarket = {
  __typename?: 'EnrollmentMarket';
  dma?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  marketName?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Int']>;
};

export type EnrollmentPromotionCategory = {
  __typename?: 'EnrollmentPromotionCategory';
  enrollments?: Maybe<Scalars['Int']>;
  promotionCategory?: Maybe<Scalars['String']>;
};

export type EnrollmentPromotionCategoryAndSessionPeriod = {
  __typename?: 'EnrollmentPromotionCategoryAndSessionPeriod';
  enrollments?: Maybe<Scalars['Int']>;
  promotionCategory?: Maybe<Scalars['String']>;
  sessionPeriod?: Maybe<Scalars['String']>;
};

export type EnrollmentTotals = {
  __typename?: 'EnrollmentTotals';
  kWh?: Maybe<Scalars['Float']>;
  minutes?: Maybe<Scalars['Float']>;
  sessionCost?: Maybe<Scalars['Float']>;
  sessions?: Maybe<Scalars['Float']>;
  totalRecords?: Maybe<Scalars['Int']>;
};

export type EnrollmentTotalsFilterType = {
  __typename?: 'EnrollmentTotalsFilterType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchText?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type EnrollmentTotalsFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchText?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type EnrollmentTotalsInput = {
  filters?: InputMaybe<EnrollmentTotalsFiltersInput>;
};

export type EnrollmentTotalsWithMeta = {
  __typename?: 'EnrollmentTotalsWithMeta';
  edges?: Maybe<GetEnrollmentTotals>;
  filters?: Maybe<EnrollmentTotalsFilterType>;
};

export type Enrollments = {
  __typename?: 'Enrollments';
  date?: Maybe<Scalars['Date']>;
  promoCode?: Maybe<Scalars['String']>;
};

export type EnrollmentsByPromotionCategoryAndSessionPeriodWithMeta = {
  __typename?: 'EnrollmentsByPromotionCategoryAndSessionPeriodWithMeta';
  edges?: Maybe<Array<Maybe<EnrollmentPromotionCategoryAndSessionPeriod>>>;
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EnrollmentsByPromotionCategoryWithMeta = {
  __typename?: 'EnrollmentsByPromotionCategoryWithMeta';
  edges?: Maybe<Array<Maybe<EnrollmentPromotionCategory>>>;
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EnrollmentsExport = {
  __typename?: 'EnrollmentsExport';
  edges?: Maybe<Array<Maybe<EnrollmentExport>>>;
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type EnrollmentsFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchText?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type EnrollmentsFiltersType = {
  __typename?: 'EnrollmentsFiltersType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchText?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type EnrollmentsInput = {
  filters?: InputMaybe<EnrollmentsFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type EnrollmentsTotalsWithMeta = {
  __typename?: 'EnrollmentsTotalsWithMeta';
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  totals?: Maybe<EnrollmentTotals>;
};

export type EnrollmentsWithMeta = {
  __typename?: 'EnrollmentsWithMeta';
  edges?: Maybe<Array<Maybe<Enrollment>>>;
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export enum EvcStatus {
  ChangeAvailability = 'CHANGE_AVAILABILITY',
  ChangeConfiguration = 'CHANGE_CONFIGURATION',
  DataTransfer = 'DATA_TRANSFER',
  GetConfiguration = 'GET_CONFIGURATION',
  GetDiagnostic = 'GET_DIAGNOSTIC',
  ResetStation = 'RESET_STATION',
  StartCharge = 'START_CHARGE',
  StopCharge = 'STOP_CHARGE',
  UnlockConnector = 'UNLOCK_CONNECTOR',
  UpdateFirmware = 'UPDATE_FIRMWARE'
}

export enum EvcStatusInput {
  ChangeAvailability = 'CHANGE_AVAILABILITY',
  ChangeConfiguration = 'CHANGE_CONFIGURATION',
  DataTransfer = 'DATA_TRANSFER',
  GetConfiguration = 'GET_CONFIGURATION',
  GetDiagnostic = 'GET_DIAGNOSTIC',
  ResetStation = 'RESET_STATION',
  StartCharge = 'START_CHARGE',
  StopCharge = 'STOP_CHARGE',
  UnlockConnector = 'UNLOCK_CONNECTOR',
  UpdateFirmware = 'UPDATE_FIRMWARE'
}

export type EvgoAccessQrCode = {
  __typename?: 'EvgoAccessQRCode';
  credential?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type EvgoAuthClaim = {
  __typename?: 'EvgoAuthClaim';
  falcon?: Maybe<Array<Scalars['String']>>;
  fcm?: Maybe<Array<Scalars['String']>>;
};

export type EvgoRoles = {
  __typename?: 'EvgoRoles';
  roles?: Maybe<EvgoAuthClaim>;
};

export type Evse = {
  __typename?: 'Evse';
  altId?: Maybe<Scalars['ID']>;
  charger?: Maybe<Charger>;
  connectors?: Maybe<ConnectorsWithMeta>;
  evseId?: Maybe<Scalars['String']>;
};

export type EvseForMobile = {
  __typename?: 'EvseForMobile';
  altId?: Maybe<Scalars['ID']>;
  connectors?: Maybe<Array<Maybe<ConnectorForMobile>>>;
};

export type EvseInput = {
  altId?: InputMaybe<Scalars['ID']>;
  connectors: Array<InputMaybe<ConnectorInput>>;
  evseId: Scalars['String'];
};

export type EvsesWithMeta = {
  __typename?: 'EvsesWithMeta';
  edges?: Maybe<Array<Maybe<Evse>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ExpireAllCodesOfCampaignInput = {
  codeDetailId: Scalars['ID'];
  promotionId: Scalars['ID'];
};

export type ExpireCodesOfCampaignInput = {
  codeDetailId: Scalars['ID'];
  codeIds: Array<InputMaybe<Scalars['ID']>>;
  promotionId: Scalars['ID'];
};

export type ExpireCodesOfCampaignResult = {
  __typename?: 'ExpireCodesOfCampaignResult';
  success: Scalars['Boolean'];
};

export type ExportPromocodesInput = {
  codeDetailId: Scalars['ID'];
  promotionId: Scalars['ID'];
};

export type ExportPromotionCode = {
  __typename?: 'ExportPromotionCode';
  codeValue?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  isRedeemed?: Maybe<Scalars['Boolean']>;
  isTestPromocode?: Maybe<Scalars['Boolean']>;
  redemptionDate?: Maybe<Scalars['Date']>;
};

export type ExtendHost = {
  __typename?: 'ExtendHost';
  /** UUID of the Extend Host */
  altId: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  /** Host associated to the Extend Host */
  host: Host;
  updatedAt?: Maybe<Scalars['Date']>;
  /** Driivz host folder ID - used to create charger groups */
  vendorFolderId: Scalars['Int'];
};

export type ExtendHostsWithMeta = {
  __typename?: 'ExtendHostsWithMeta';
  edges?: Maybe<Array<ExtendHost>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ExtendUser = {
  __typename?: 'ExtendUser';
  /** Unique UUID of the user */
  altId: Scalars['ID'];
  /** Timestamp when the user was created */
  createdAt?: Maybe<Scalars['Date']>;
  /** Timestamp when the user was deleted */
  deletedAt?: Maybe<Scalars['Date']>;
  /** ID stored in firebase for the user */
  firebaseId: Scalars['String'];
  /** Hosts the user is associated to */
  hosts: HostsWithMeta;
  /** Unique ID of the user */
  id?: Maybe<Scalars['ID']>;
  /** Timestamp when the user was last updated */
  updatedAt?: Maybe<Scalars['Date']>;
  /** Unique username string */
  username: Scalars['String'];
};

export type ExtendUsersWithMeta = {
  __typename?: 'ExtendUsersWithMeta';
  edges?: Maybe<Array<Maybe<ExtendUser>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ExternalPromotionInput = {
  displayValue?: InputMaybe<Scalars['String']>;
  groupName?: InputMaybe<Scalars['String']>;
  promotionRef?: InputMaybe<Scalars['String']>;
};

export type ExternalPromotionResult = {
  __typename?: 'ExternalPromotionResult';
  success: Scalars['Boolean'];
};

export type FalconConstraint = {
  __typename?: 'FalconConstraint';
  columnName?: Maybe<Scalars['String']>;
  columnText?: Maybe<Scalars['String']>;
  columnValue?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  tableName?: Maybe<Scalars['String']>;
};

export type FalconConstraintsWithMeta = {
  __typename?: 'FalconConstraintsWithMeta';
  edges?: Maybe<Array<Maybe<FalconConstraint>>>;
  filter?: Maybe<ListFalconConstraintsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sort?: Maybe<ListFalconConstraintsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum FcmUserRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type FcmUserRoleInput = {
  role?: InputMaybe<FcmUserRole>;
};

export enum FieldStationStatus {
  /** Connected */
  Connected = 'CONNECTED',
  /** In Stock */
  InStock = 'IN_STOCK',
  /** Ordered */
  Ordered = 'ORDERED',
  /** Provisioned */
  Provisioned = 'PROVISIONED',
  /** Ready for Installation */
  ReadyForInstallation = 'READY_FOR_INSTALLATION',
  /** Site Testing */
  SiteTesting = 'SITE_TESTING',
  /** Warehouse Testing */
  WarehouseTesting = 'WAREHOUSE_TESTING'
}

export type Filter = {
  __typename?: 'Filter';
  criteria?: Maybe<Scalars['String']>;
  exclude?: Maybe<Scalars['Boolean']>;
  operator?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<FilterValue>>>;
};

export enum FilterOperator {
  Eq = 'eq'
}

export type FilterValue = {
  __typename?: 'FilterValue';
  label?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  customClaims?: Maybe<EvgoRoles>;
  disabled: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  emailVerified: Scalars['Boolean'];
  metadata: Metadata;
  providerData: Array<ProviderData>;
  tokensValidAfterTime?: Maybe<Scalars['String']>;
  uid: Scalars['ID'];
};

export type FirebaseUserForExtend = {
  __typename?: 'FirebaseUserForExtend';
  firebaseId: Scalars['String'];
  username: Scalars['String'];
};

export type Fleet = {
  __typename?: 'Fleet';
  altId: Scalars['ID'];
  fleetName: Scalars['String'];
  siteId: Scalars['ID'];
  vehicles: Array<Maybe<FleetVehicle>>;
};

export type FleetDriver = {
  __typename?: 'FleetDriver';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type FleetSiteValidationResult = {
  __typename?: 'FleetSiteValidationResult';
  errors: Array<Maybe<Scalars['String']>>;
  isValidated: Scalars['Boolean'];
};

export type FleetVehicle = {
  __typename?: 'FleetVehicle';
  activeDriver?: Maybe<FleetDriver>;
  activeRoute?: Maybe<Route>;
  activeTrip?: Maybe<Trip>;
  activityStatus?: Maybe<ActivityStatus>;
  activityStatusLabel?: Maybe<ActivityStatusLabel>;
  altId: Scalars['ID'];
  assignedConnector?: Maybe<Connector>;
  card: Card;
  cardsUsed?: Maybe<Array<Maybe<Card>>>;
  chargeCurve?: Maybe<VehicleChargeCurve>;
  connectorType: VehicleConnectorType;
  currentSession?: Maybe<Session>;
  defaultTargetSoc: Scalars['Float'];
  departureStatus?: Maybe<DepartureStatus>;
  dimensions?: Maybe<Scalars['String']>;
  economyCity?: Maybe<Scalars['Float']>;
  economyHwy?: Maybe<Scalars['Float']>;
  estimatedChargingCompletionTime?: Maybe<Scalars['Date']>;
  expectedDeparture?: Maybe<Scalars['Date']>;
  fleet: Fleet;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  isOperational: Scalars['Boolean'];
  /** derived from SOC >= socTarget */
  isSocTargetMet?: Maybe<Scalars['Boolean']>;
  /**
   * Includes SOC
   * Last known SOC (Telematics, etc)
   */
  lastKnownSoc?: Maybe<Scalars['Float']>;
  lastKnownSocUpdateSource?: Maybe<LastKnownSocUpdateSource>;
  make: Scalars['String'];
  model: Scalars['String'];
  modelYear: Scalars['String'];
  range: Scalars['Float'];
  ratingAmps: Scalars['Float'];
  ratingKw: Scalars['Float'];
  ratingKwh: Scalars['Float'];
  ratingVolts: Scalars['Float'];
  sessions?: Maybe<SessionsWithMeta>;
  /** Target SOC percentage */
  socTarget?: Maybe<Scalars['Float']>;
  trim?: Maybe<Scalars['String']>;
  vehicleClass: VehicleClass;
  vehicleIdentifier?: Maybe<Scalars['String']>;
  vendorSku?: Maybe<Scalars['String']>;
  vin: Scalars['String'];
};


export type FleetVehicleSessionsArgs = {
  input?: InputMaybe<ListSessionsInput>;
};

export type FleetVehicleUpsertPayload = {
  __typename?: 'FleetVehicleUpsertPayload';
  fleetVehicleAltId: Scalars['ID'];
  isActivityStatusUpdate: Scalars['Boolean'];
  isCreate: Scalars['Boolean'];
  isRouteUpdate: Scalars['Boolean'];
  isSocUpdateByUser: Scalars['Boolean'];
  isSpecsUpdate: Scalars['Boolean'];
  isTripUpdate: Scalars['Boolean'];
  siteAltId: Scalars['String'];
};

export type FleetVehiclesWithMeta = {
  __typename?: 'FleetVehiclesWithMeta';
  edges?: Maybe<Array<Maybe<FleetVehicle>>>;
  filter?: Maybe<ListFleetVehiclesFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListFleetVehiclesSearchType>;
  sort?: Maybe<ListFleetVehiclesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type GatewayUser = {
  __typename?: 'GatewayUser';
  firebaseEmail: Scalars['String'];
  firebaseId: Scalars['String'];
  roles?: Maybe<Scalars['Object']>;
};

export enum GenabilityChargeClass {
  /** Charges which apply post utility and other taxes. A good example would be the California Climate credit which is applied to the bill after the taxes are applied to the bill subtotal. */
  AfterTax = 'AFTER_TAX',
  /** Charges which get replaced or overridden when you pass the retail (contracted) energy supply rate in the calculation. */
  Contracted = 'CONTRACTED',
  /** Distribution level (last mile) delivery charges of moving electricity into your home or business. */
  Distribution = 'DISTRIBUTION',
  /** Charges which cannot be offset by credits (usually Net Metering) */
  NonBypassable = 'NON_BYPASSABLE',
  /** Charges which cannot be classified in any of the above buckets. This is very rare. */
  Other = 'OTHER',
  /** Energy related charges. */
  Supply = 'SUPPLY',
  /** Tax surcharges which appear in the utility tariff document. */
  Tax = 'TAX',
  /** Transmission level delivery charges. */
  Transmission = 'TRANSMISSION',
  /** Additional or custom rates you can add to a public or private tariff. An example would be a local tax rate which Genability does not model but you would want included. */
  UserAdjusted = 'USER_ADJUSTED'
}

export enum GenabilityChargePeriod {
  /** every year */
  Annually = 'ANNUALLY',
  /** calculated for each day */
  Daily = 'DAILY',
  /** each calendar month */
  Monthly = 'MONTHLY',
  /** every 3 months */
  Quarterly = 'QUARTERLY'
}

export enum GenabilityChargeType {
  /** based on quantity used (e.g. kW/h) */
  ConsumptionBased = 'CONSUMPTION_BASED',
  /** based on the peak demand (e.g. kW) */
  DemandBased = 'DEMAND_BASED',
  /** a fixed charge for the period */
  FixedPrice = 'FIXED_PRICE',
  /** a rate that has a specific or custom formula */
  Formula = 'FORMULA',
  /** a maximum amount that the LSE will charge you, overriding higher pre-tax charges */
  Maximum = 'MAXIMUM',
  /** a minimum amount that the LSE will charge you, overriding lower pre-tax charges */
  Minimum = 'MINIMUM',
  /** a rate per number of items (e.g. $5 per street light) */
  Quantity = 'QUANTITY',
  /** a percentage tax rate which is applied to the sum of all of the other charges on a bill */
  Tax = 'TAX'
}

export enum GenabilityCustomerClass {
  /** commercial, industrial and other business and organization service types (often have additional applicability criteria) */
  General = 'GENERAL',
  /** Utility rates that have been proposed by utilities and approved by utility commissions, but are not yet effective (requires product subscription) */
  Proposed = 'PROPOSED',
  /** homes, apartments etc. */
  Residential = 'RESIDENTIAL',
  /** examples are government, agriculture, street lighting, transportation */
  SpecialUse = 'SPECIAL_USE'
}

export type GenabilityInterval = {
  __typename?: 'GenabilityInterval';
  /** The day and time this interval starts, in ISO 8601 format. */
  fromDateTime?: Maybe<Scalars['DateTime']>;
  /** The day and time this Interval ends, in ISO 8601 format. */
  toDateTime?: Maybe<Scalars['DateTime']>;
  /** The time of use group ID this interval applies to. This ID is unique within an LSE. */
  touGroupId?: Maybe<Scalars['String']>;
  /** The unique ID (foreign key) of the time of use this Interval applies to. */
  touId?: Maybe<Scalars['String']>;
  /** The name of the time of use this interval applies to. e.g. On Peak. */
  touName?: Maybe<Scalars['String']>;
};

export type GenabilityMasterUtilityTariff = {
  __typename?: 'GenabilityMasterUtilityTariff';
  /** How frequently bills are generated. */
  billingPeriod?: Maybe<Scalars['String']>;
  /** The most fine grained period for which charges are calculated. */
  chargePeriod?: Maybe<Scalars['String']>;
  /** A comma separated list of all the different ChargeType rates on this tariff (see field on TariffRate below). */
  chargeTypes?: Maybe<Scalars['String']>;
  /** Date on which a tariff became closed to new customers, but still available for customers who were on it at the time. Can be null which means that the tariff is not closed. All versions of a particular tariff (i.e. those that share a particular masterTariffId) will have the same closedDate value. See example */
  closedDate?: Maybe<Scalars['Date']>;
  /** ISO Currency code that the rates for this tariff refer to (e.g. USD for USA Dollar) */
  currency?: Maybe<Scalars['String']>;
  customerClass: GenabilityCustomerClass;
  /** Number of customers that are on this master tariff */
  customerCount?: Maybe<Scalars['Int']>;
  /** Where we got the customer count numbers from. Typically FERC (form 1 filings) or Genability (our own estimates). */
  customerCountSource?: Maybe<Scalars['String']>;
  /** The likelihood that a customer is on this tariff of all the tariffs in the search results. Only populated when getting more than one tariff. */
  customerLikelihood?: Maybe<Scalars['Float']>;
  /** In states like Texas where the load serving entity that sells the power is different than the load serving entity that distributes the power, this will contain the ID of the distribution LSE. Otherwise, it will be null. */
  distributionLseId?: Maybe<Scalars['String']>;
  /** Date on which the tariff was or will be effective */
  effectiveDate?: Maybe<Scalars['DateTime']>;
  /** Date on which this tariff is no longer effective. Can be null which means end date is not known or tariff is open ended */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Indicates whether this tariff contains one or more Rate that can be contracted (sometimes called by-passable or associated with a price to compare). */
  hasContractedRates?: Maybe<Scalars['Boolean']>;
  /** Indicates whether this tariff contains one or more net metered rates. */
  hasNetMetering?: Maybe<Scalars['Boolean']>;
  /** Indicates that one or more rates on this tariff are only applicable to customer with a particular circumstance. When true, this will be specified in the TariffProperty collection, and also on the TariffRate or rates in question. */
  hasRateApplicability?: Maybe<Scalars['Boolean']>;
  /** Indicates that this tariff has additional eligibility criteria, as specified in the TariffProperty collection (below). */
  hasTariffApplicability?: Maybe<Scalars['Boolean']>;
  /** Indicates whether this tariff contains one or more Tiered Rate. */
  hasTieredRates?: Maybe<Scalars['Boolean']>;
  /** Indicates whether this tariff contains one or more Time of Use Rate. */
  hasTimeOfUseRates?: Maybe<Scalars['Boolean']>;
  /** ID of load serving entity this tariff belongs to */
  lseId: Scalars['String'];
  /** Name of the load serving entity */
  lseName: Scalars['String'];
  /** Unique Genability ID that persists across all revisions of this tariff */
  masterTariffId: Scalars['String'];
  /** When applicable, the minimum monthly consumption allowed in order to be eligible for this tariff. */
  maxMonthlyConsumption?: Maybe<Scalars['Float']>;
  /** When applicable, the minimum monthly demand allowed in order to be eligible for this tariff. */
  maxMonthlyDemand?: Maybe<Scalars['Float']>;
  /** When applicable, the maximum monthly consumption allowed in order to be eligible for this tariff. */
  minMonthlyConsumption?: Maybe<Scalars['Float']>;
  /** When applicable, the maximum monthly demand allowed in order to be eligible for this tariff. */
  minMonthlyDemand?: Maybe<Scalars['Float']>;
  /** Unique Genability ID that identifies the prior revision of the tariffId above */
  priorTariffId?: Maybe<Scalars['String']>;
  /** The properties on this tariff. See below for the TariffProperty structure. */
  properties?: Maybe<Array<Maybe<GenabilityTariffProperty>>>;
  /** The rates for this tariff. See below for TariffRate structure */
  rates?: Maybe<Array<Maybe<GenabilityTariffRate>>>;
  /** Type of service for the tariff. Current values include ELECTRICITY (grid power), SOLAR_PV (for a Solar PPA, Lease or similar) and GAS (Natural Gas) */
  serviceType: Scalars['String'];
  /** Short code that the LSE uses as an alternate name for the tariff */
  tariffCode: Scalars['String'];
  /** Unique Genability ID (primary key) for this tariff */
  tariffId: Scalars['String'];
  /** Name of the tariff as used by the LSE */
  tariffName: Scalars['String'];
  tariffType: GenabilityTariffType;
  /** ID of the territory that this tariff applies to. This is typically the service area for the LSE in this regulatory region (i.e. a state in the USA) */
  territoryId?: Maybe<Scalars['String']>;
  /** If populated (usually is), its the timezone that this tariffs dates and times refer to */
  timeZone?: Maybe<Scalars['String']>;
};

export type GenabilityPeriod = {
  __typename?: 'GenabilityPeriod';
  /** The day of the week this period starts. 0-6 Monday-Sunday. */
  fromDayOfWeek?: Maybe<Scalars['Int']>;
  /** The hour this period starts. 0-23. */
  fromHour?: Maybe<Scalars['Int']>;
  /** The minute this period starts. 0-59. */
  fromMinute?: Maybe<Scalars['Int']>;
  /** The day of the week this period ends. 0-6 Monday-Sunday. */
  toDayOfWeek?: Maybe<Scalars['Int']>;
  /** The hour this period ends. 0-23. */
  toHour?: Maybe<Scalars['Int']>;
  /** The minute this period ends. 0-59. */
  toMinute?: Maybe<Scalars['Int']>;
  /** The ID of the parent time of use this period belongs to (foreign key). */
  touId?: Maybe<Scalars['String']>;
  /** The unique Genability ID of this period. This is unique across all LSE’s. */
  touPeriodId?: Maybe<Scalars['String']>;
};

export enum GenabilityRateUnit {
  /** rate amount multiplied by the number of units */
  CostPerUnit = 'COST_PER_UNIT',
  /** percentage of a value (e.g. percentage of overall bill) */
  Percentage = 'PERCENTAGE'
}

export type GenabilitySeason = {
  __typename?: 'GenabilitySeason';
  /** Can be null (from date is a fixed date), PREDOMINANT (from date is the start of the bill the season starts starts in), or SUBSERVIENT (from date is the end of the bill the season starts in). */
  fromEdgePredominance?: Maybe<Scalars['String']>;
  /** The ID of the LSE this territory belongs to */
  lseId?: Maybe<Scalars['String']>;
  /** Value of 1-31 (depending on month) representing the day this season begins */
  seasonFromDay?: Maybe<Scalars['Int']>;
  /** Value of 1-12 representing the month this season begins */
  seasonFromMonth?: Maybe<Scalars['Int']>;
  /** The ID of the season group that contains this season */
  seasonGroupId?: Maybe<Scalars['String']>;
  /** Unique Genability ID (primary key) for each season */
  seasonId?: Maybe<Scalars['String']>;
  /** The name of the season (i.e. "Summer" or "Winter") */
  seasonName?: Maybe<Scalars['String']>;
  /** Value of 1-31 (depending on month) representing the day this season ends */
  seasonToDay?: Maybe<Scalars['Int']>;
  /** Value of 1-12 representing the month this season ends */
  seasonToMonth?: Maybe<Scalars['Int']>;
  /** Can be null (to date is a fixed date), PREDOMINANT (to date is the start of the bill the season starts ends in), or SUBSERVIENT (to date is the end of the bill the season starts in). */
  toEdgePredominance?: Maybe<Scalars['String']>;
};

export type GenabilitySeasonGroup = {
  __typename?: 'GenabilitySeasonGroup';
  /** Unique Genability ID (primary key) for each season group */
  seasonGroupId?: Maybe<Scalars['String']>;
  /** A List of the Seasons within this Season Group */
  seasons?: Maybe<Array<Maybe<GenabilitySeason>>>;
};

export enum GenabilityTariffPeriod {
  CriticalPeak = 'CRITICAL_PEAK',
  OffPeak = 'OFF_PEAK',
  OnPeak = 'ON_PEAK',
  PartialPeak = 'PARTIAL_PEAK'
}

export type GenabilityTariffProperty = {
  __typename?: 'GenabilityTariffProperty';
  /** MISSING ENUM OR TYPE CHOICES. The possible choices for this array */
  choices?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The data type of this property. Possible values are string, choice, boolean, date, decimal, integer, formula, demand */
  dataType: Scalars['String'];
  /** A longer description of the tariff property. Good for further explanation as part of a customer questionnaire */
  description: Scalars['String'];
  /** The display name of this property */
  displayName: Scalars['String'];
  /** Second level categorization of the property hierarchy, below keyspace */
  family: Scalars['String'];
  /** If this property is a FORMULA type, the formula details will be in this field. */
  formulaDetail?: Maybe<Scalars['String']>;
  /** Whether the value of this Property is the default value. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Unique name for this property */
  keyName: Scalars['String'];
  /** Top level categorization of the property hierarchy */
  keyspace: Scalars['String'];
  /** If applicable the maximum value of this property. */
  maxValue?: Maybe<Scalars['String']>;
  /** If applicable the minimum value of this property. */
  minValue?: Maybe<Scalars['String']>;
  /** The mathematical operator associated with this property’s value, where applicable. */
  operator?: Maybe<Scalars['String']>;
  /** If applicable the type of time of use. Possible values are . */
  period?: Maybe<Scalars['String']>;
  /** The category of property. Possible values are APPLICABILITY, RATE_CRITERIA, BENEFIT, DATA_REPUTATION, SERVICE_TERMS */
  propertyTypes: Scalars['String'];
  /** If applicable the specific value of this property. */
  propertyValue?: Maybe<Scalars['String']>;
};

export type GenabilityTariffRate = {
  __typename?: 'GenabilityTariffRate';
  /** When not null, the property that defines the eligibility criteria for this rate. (e.g. connectionType : property which defines how the service is connected to the grid) */
  applicabilityKey?: Maybe<Scalars['String']>;
  /** A comma separated string that indicates what class(es) of charges this rate is for. Values include: */
  chargeClass?: Maybe<Array<Maybe<GenabilityChargeClass>>>;
  /** Indicates what period this charge is calculated for. This is usually the same as the billing period (and is usually monthly) but can be other intervals. Possible values are: */
  chargePeriod?: Maybe<GenabilityChargePeriod>;
  chargeType?: Maybe<GenabilityChargeType>;
  /** If populated, this indicates the rates effective date is not the same as that of its tariff */
  fromDateTime?: Maybe<Scalars['DateTime']>;
  /** When not null, the property that defines the type of quantity this rate applies to. (e.g. billingMeter : property which defines the number of billing meters the rate will apply to) */
  quantityKey?: Maybe<Scalars['String']>;
  rateBands?: Maybe<Array<Maybe<GenabilityTariffRateBand>>>;
  /** Name of the group this rate belongs to */
  rateGroupName: Scalars['String'];
  /** Name of this rate. Can be null (in which case use the group name) */
  rateName: Scalars['String'];
  /** Master Tariff ID of the rider linked to this tariff rate. */
  riderId: Scalars['String'];
  /** Tariff ID of the rider attached to this tariff version. null otherwise */
  riderTariffId?: Maybe<Scalars['String']>;
  /** The season this rate applies to. Only used for seasonal rates (null otherwise) */
  season?: Maybe<GenabilitySeason>;
  /** Associates the rate with a tariff (foreign key) */
  tariffId: Scalars['String'];
  /** Unique Genability ID (primary key) for each tariff rate */
  tariffRateId: Scalars['String'];
  /** Sequence of this rate in the tariff, for display purposes only (e.g. this is the order on the bill) */
  tariffSequenceNumber: Scalars['Int'];
  /** LOOSE END THAT IS NOT NEEDED: TERRITORY. Only populated when this rate applies to a different region than the whole tariff (e.g. California Baseline Regions). This how-to has more. */
  territory?: Maybe<Scalars['String']>;
  /** The time period this rate applies to. Only used for TOU rates (null otherwise) */
  timeOfUse?: Maybe<GenabilityTimeOfUse>;
  /** If populated, this indicates the rates end date is not the same as that of its tariff */
  toDateTime?: Maybe<Scalars['DateTime']>;
  transactionType?: Maybe<GenabilityTransactionType>;
  /** When not null, this is the name of the property that defines the variable factor to apply to this rate. (e.g billingPeriodProrationFactor: property which defines a prorated number of billing days) */
  variableFactorKey?: Maybe<Scalars['String']>;
  /** When populated this defines the variable which determines the upper limit(s) of this rate. (e.g. demandMultiplierTierswithkWhTiers2416: property which uses the demand value to drive the consumption limits) */
  variableLimitKey?: Maybe<Scalars['String']>;
  /** When not null, this is the name of the property that defines the variable rate. In this case the rate field is null, or can (rarely) be used as an input to the determination of the variable rate. (e.g massachusettsResidentialRetailPrevailingRates : property which provides the regional prevailing residential supply rate for Massachusetts ) */
  variableRateKey?: Maybe<Scalars['String']>;
};

export type GenabilityTariffRateBand = {
  __typename?: 'GenabilityTariffRateBand';
  /** When not null, this indicates the value of applicability property that qualifies for this rate. */
  applicabilityValue?: Maybe<Scalars['String']>;
  /** A factor to be applied to the cost of the rate. */
  calculationFactor?: Maybe<Scalars['Float']>;
  /** When hasConsumptionLimit is true, this indicates the upper consumption limit of this band. null means no upper limit */
  consumptionUpperLimit?: Maybe<Scalars['Float']>;
  /** When hasDemandLimit is true, this indicates the upper demand limit of this band. null means no upper limit */
  demandUpperLimit?: Maybe<Scalars['Float']>;
  /** true indicates that this has banded consumption */
  hasConsumptionLimit?: Maybe<Scalars['Boolean']>;
  /** true indicates that this has banded demand */
  hasDemandLimit?: Maybe<Scalars['Boolean']>;
  /** true indicates that this has a limit based on a property */
  hasPropertyLimit?: Maybe<Scalars['Boolean']>;
  /** When true this band is a credit amount (reduces the bill) */
  isCredit?: Maybe<Scalars['Boolean']>;
  /** When hasPropertyLimit is true, this indicates the upper limit of this band. null means no upper limit */
  propertyUpperLimit?: Maybe<Scalars['Float']>;
  /** Charge amount for this band */
  rateAmount?: Maybe<Scalars['Float']>;
  /** This bands position in the bands for its rate */
  rateSequenceNumber?: Maybe<Scalars['Int']>;
  /** Possible values: */
  rateUnit?: Maybe<GenabilityRateUnit>;
  /** Unique Genability ID (primary key) for each Band */
  tariffRateBandId?: Maybe<Scalars['String']>;
  /** ID of the rate this band belongs to (foreign key) */
  tariffRateId?: Maybe<Scalars['String']>;
};

export enum GenabilityTariffType {
  /** opt in alternate tariff for this service class */
  Alternate = 'ALTERNATE',
  /** tariff that is automatically given to this service class */
  Default = 'DEFAULT',
  /** opt in extra, such as green power or a smart thermostat program */
  OptionalExtra = 'OPTIONAL_EXTRA',
  /** charge that can apply to multiple tariffs. Often a regulatory mandated charge */
  Rider = 'RIDER'
}

export type GenabilityTimeOfUse = {
  __typename?: 'GenabilityTimeOfUse';
  /** The ID of the calendar of events and holidays that this TOU should apply to, regardless of the TOU period definitions. For example, a calendar could be used to specify that the entirety of Labor Day should be treated as OFF_PEAK, even though it falls on a Summer weekday. */
  calendarId?: Maybe<Scalars['String']>;
  /** Indicates if the timeOfUse includes a calendar whose dates change from year-to-year. For example Critical Peak timeOfUse objects are dynamic, since the dates/hours change from year to year. */
  isDynamic?: Maybe<Scalars['Boolean']>;
  /** ID of load serving entity this time of use group belongs to */
  lseId?: Maybe<Scalars['String']>;
  /** Indicates whether this TimeOfUse is PUBLIC or PRIVATE. Only TOU groups created by your organization will be returned as PRIVATE. */
  privacy?: Maybe<Scalars['String']>;
  /** The Season object that this time of use applies to (if applicable). */
  season?: Maybe<GenabilitySeason>;
  /** Associates the rate with a tariff (foreign key) */
  touGroupId?: Maybe<Scalars['String']>;
  /** Unique Genability ID (primary key) for each time of use. This is unique across all LSEs. */
  touId?: Maybe<Scalars['String']>;
  /** Display name of this TOU. Example: "On Peak */
  touName?: Maybe<Scalars['String']>;
  /** The periods that comprise this time of use. */
  touPeriods?: Maybe<Array<Maybe<GenabilityPeriod>>>;
};

export type GenabilityTimeOfUseGroup = {
  __typename?: 'GenabilityTimeOfUseGroup';
  /** ID of load serving entity this time of use group belongs to */
  lseId?: Maybe<Scalars['String']>;
  /** The times of use that comprise this time of use group. */
  timeOfUses?: Maybe<Array<Maybe<GenabilityTimeOfUse>>>;
  /** Genability ID (primary key) for this time of use group. This is unique within the LSE, not across LSEs so you will always need to specify the LSE ID when requested a TOU group. */
  touGroupId?: Maybe<Scalars['String']>;
};

export enum GenabilityTransactionType {
  /** charge when importing from the grid, no credit when exporting */
  Buy = 'BUY',
  /** charge only when importing */
  BuyImport = 'BUY_IMPORT',
  /** charge when importing, credit when exporting with imports and exports resolved according the the chargePeriod. */
  Net = 'NET',
  /** credit when exporting to the grid, no charge when importing */
  Sell = 'SELL',
  /** credit only when exporting indicate that imports and exports are resolved in real-time (instantaneous netting) */
  SellExport = 'SELL_EXPORT'
}

export type GeneratePromoCodesInput = {
  /** Number of promotion codes to generate. */
  amount: Scalars['Int'];
  /** List of words or letter combination to exclude from the promotion codes. */
  bannedWords: Array<InputMaybe<Scalars['String']>>;
  /** List if characters to be be used to generate the promotion code. */
  characters: Array<InputMaybe<Scalars['String']>>;
  /** The campaign ID. */
  codeDetailId: Scalars['ID'];
  /** The amount of random characters generated for the promocode. Code prefix and suffix do not count. */
  codeLength: Scalars['Int'];
  /** A prefix to be added to all promotion codes being generated. */
  codePrefix: Scalars['String'];
  /** A suffix to be added to all promotion codes being generated. */
  codeSuffix: Scalars['String'];
  /** The Promotion ID. */
  promotionId: Scalars['ID'];
  /** If true, all promotion codes generated will be marked as test only, and will not redeem benefits during redemption, or counted on reporting. */
  testCodes: Scalars['Boolean'];
};

export type GeneratePromoCodesResult = {
  __typename?: 'GeneratePromoCodesResult';
  /** Status of the operation. Only returns 'success', or exception should be thrown. */
  status: Scalars['String'];
};

export type GeographicalRegion = {
  __typename?: 'GeographicalRegion';
  abbreviation?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GeographicalRegionsWithMeta = {
  __typename?: 'GeographicalRegionsWithMeta';
  edges?: Maybe<Array<Maybe<GeographicalRegion>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type GetAccountInput = {
  altId?: InputMaybe<Scalars['ID']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type GetAccountVehicleInput = {
  altId: Scalars['UUID'];
  paranoid?: InputMaybe<Scalars['Boolean']>;
};

export type GetActiveSessionInput = {
  connectorId?: InputMaybe<Scalars['ID']>;
};

export type GetAdHocContractInput = {
  accountId: Scalars['ID'];
};

export type GetAggregatedPowerMeterValuesForFleetInput = {
  aggregateIntervalMinutes: Scalars['Int'];
  from: Scalars['Date'];
  siteAltId: Scalars['ID'];
  until: Scalars['Date'];
};

export type GetCabinetInput = {
  altId: Scalars['ID'];
};

export type GetCabinetModelInput = {
  altId: Scalars['ID'];
};

export type GetCardInput = {
  altId?: InputMaybe<Scalars['UUID']>;
  externalNumber?: InputMaybe<Scalars['String']>;
};

export type GetChargerAggregatedPowerMeterValuesForFleetInput = {
  aggregateIntervalMinutes: Scalars['Int'];
  chargerAltId: Scalars['ID'];
  from: Scalars['Date'];
  siteAltId: Scalars['ID'];
  until: Scalars['Date'];
};

export type GetChargerGroupForExtendInput = {
  altId: Scalars['ID'];
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
  showDeleted?: InputMaybe<Scalars['Boolean']>;
};

export type GetChargerInput = {
  altId: Scalars['ID'];
};

export type GetChargerModelInput = {
  altId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['SanitizeString']>;
};

export type GetChargerPricingForMobileInput = {
  /** Driivz charger Id */
  chargerId: Scalars['ID'];
};

export type GetChargingSystemInput = {
  altId: Scalars['ID'];
};

export type GetCircuitInput = {
  altId: Scalars['ID'];
};

export type GetConnectorInput = {
  altId: Scalars['ID'];
};

export type GetContractInput = {
  altId: Scalars['ID'];
};

export type GetCouponInput = {
  adType: Scalars['String'];
  stationId?: InputMaybe<Scalars['Int']>;
};

export type GetDriverInput = {
  altId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  paranoid?: InputMaybe<Scalars['Boolean']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type GetEmailListInput = {
  altId: Scalars['UUID'];
};

export type GetEmailListRecipientInput = {
  altId?: InputMaybe<Scalars['UUID']>;
  internalId?: InputMaybe<Scalars['SanitizeString']>;
};

export type GetEvgoAccessQrCodeInput = {
  accountVendorId: Scalars['Int'];
  siteVendorId: Scalars['Int'];
};

export type GetExtendUserInput = {
  /** Unique UUID of the user */
  altId?: InputMaybe<Scalars['ID']>;
  /** Firebase ID of the user */
  firebaseId?: InputMaybe<Scalars['String']>;
};

export type GetFirebaseUserForExtendInput = {
  email: Scalars['String'];
};

export type GetFleetInput = {
  altId: Scalars['ID'];
};

export type GetFleetVehicleInput = {
  accountId?: InputMaybe<Scalars['String']>;
  altId: Scalars['ID'];
};

export type GetHostInput = {
  altId?: InputMaybe<Scalars['ID']>;
  hid?: InputMaybe<Scalars['SanitizeString']>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
};

/** Input type for GetInvoiceForMobile */
export type GetInvoiceInput = {
  /** A number indicating the Driivz ID of the invoice */
  invoiceId: Scalars['Int'];
};

export type GetMediaInput = {
  altId: Scalars['UUID'];
};

export type GetNissanRdrInput = {
  uuid: Scalars['String'];
};

export type GetPlanForMobileInput = {
  /** altId used to retrieve plans */
  altId: Scalars['ID'];
  /** user's current latitude value in float */
  lat?: InputMaybe<Scalars['Float']>;
  /** user's current longitude value in float */
  long?: InputMaybe<Scalars['Float']>;
};

export type GetPlanInput = {
  altId: Scalars['ID'];
};

export type GetPortInput = {
  altId: Scalars['ID'];
};

export type GetPortalsVehicleModelInput = {
  DISABLE_WESQL_LEGACY_AWS_LAMBDA_API?: InputMaybe<Scalars['Boolean']>;
  altId: Scalars['ID'];
};

export type GetPresignedUrlDownloadInput = {
  key: Scalars['String'];
};

export type GetPresignedUrlUploadInput = {
  fileName: Scalars['String'];
  projectId: Scalars['String'];
  projectMilestoneId: Scalars['String'];
};

export type GetPromotionByIdInput = {
  id: Scalars['ID'];
};

export type GetPromotionByRefInput = {
  ref: Scalars['String'];
};

export type GetPromotionCampaignsInput = {
  /** Filter by campaigns where the campaignRef is in the campaignRefs list */
  campaignRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  promotionRef?: InputMaybe<Scalars['String']>;
};

export type GetPropertyInput = {
  pid: Scalars['SanitizeString'];
};

export type GetRouteInput = {
  altId: Scalars['ID'];
};

export type GetSalesforceHostInput = {
  hid?: InputMaybe<Scalars['SanitizeString']>;
};

export type GetSalesforcePropertyInput = {
  hid: Scalars['SanitizeString'];
  pid: Scalars['SanitizeString'];
};

export type GetSessionForFleetInput = {
  altId: Scalars['ID'];
};

export type GetSessionInput = {
  sessionId: Scalars['ID'];
};

export type GetSessionValidationForMobileInput = {
  /** The connectorId of the charger for which a session creation attempt was made. */
  connectorId?: InputMaybe<Scalars['ID']>;
};

export type GetSessionsConsumptionForExtendInput = {
  aggregateBy: SessionAggregation;
  /** Filter the timeseries data by chargers, if not send will return for all chargers */
  chargerIds?: InputMaybe<Array<Scalars['ID']>>;
  datePreset?: InputMaybe<SessionDatePreset>;
  endDate?: InputMaybe<Scalars['Date']>;
  /** Filter the timeseries data by chargers in these sites, if not send will return for all sites */
  siteIds?: InputMaybe<Array<Scalars['ID']>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type GetSessionsConsumptionForExtendResponse = {
  __typename?: 'GetSessionsConsumptionForExtendResponse';
  timeSeries?: Maybe<Array<Maybe<SessionsConsumptionForExtendData>>>;
};

export type GetShpNotificationControlInput = {
  id?: InputMaybe<Scalars['ID']>;
  projectMilestoneDueDateApproaching?: InputMaybe<Scalars['String']>;
  projectMilestoneDueDateExpired?: InputMaybe<Scalars['String']>;
  projectMilestoneDueDateMidway?: InputMaybe<Scalars['String']>;
  projectMilestoneId?: InputMaybe<Scalars['ID']>;
  projectMilestoneStatus?: InputMaybe<ShpProjectMilestoneStatus>;
};

export type GetSiteForFleetInput = {
  chargingSystemId?: InputMaybe<Scalars['UUID']>;
  siteId?: InputMaybe<Scalars['UUID']>;
  switchgearId?: InputMaybe<Scalars['UUID']>;
};

export type GetSiteImageInput = {
  altId: Scalars['ID'];
};

export type GetSiteInput = {
  altId: Scalars['ID'];
};

export type GetSitesForExtendInput = {
  /** Host ID of the sites */
  hostId?: InputMaybe<Scalars['ID']>;
};

export type GetStatementCurrentInput = {
  /** A string parameter indicating the currency type to be shown on the returned statement */
  currency: Scalars['String'];
};

export type GetStatementInput = {
  /** An Id parameter required to find statements in Driivz */
  invoiceId: Scalars['ID'];
};

export type GetSwitchgearInput = {
  altId: Scalars['ID'];
};

export type GetTagInput = {
  altId: Scalars['ID'];
  description?: InputMaybe<Scalars['SanitizeString']>;
  filters?: InputMaybe<Array<InputMaybe<UpdateFilterInput>>>;
  tagName?: InputMaybe<Scalars['SanitizeString']>;
};

export type GetTariffInput = {
  altId: Scalars['ID'];
};

export type GetTicketCommentsInput = {
  ticketID: Scalars['ID'];
};

export type GetTicketInput = {
  ticketNumber: Scalars['RequiredString'];
};

export type GetTransactionInput = {
  transactionId: Scalars['ID'];
};

export type GetTripInput = {
  altId: Scalars['ID'];
};

export type GetVehicleByVinInput = {
  vin: Scalars['SanitizeString'];
};

export type GetVehicleChargeCurveInput = {
  altId: Scalars['ID'];
};

export type GetVehicleModelInput = {
  altId: Scalars['ID'];
};

export type GetWarehouseInput = {
  altId?: InputMaybe<Scalars['ID']>;
  warehouseName?: InputMaybe<Scalars['SanitizeString']>;
};

export type Host = {
  __typename?: 'Host';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  contacts?: Maybe<ContactsWithMeta>;
  country?: Maybe<Scalars['String']>;
  extendUsers?: Maybe<ExtendUsersWithMeta>;
  hid?: Maybe<Scalars['String']>;
  hostName?: Maybe<Scalars['String']>;
  hostStatus?: Maybe<FalconConstraint>;
  legacyId?: Maybe<Scalars['ID']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  properties?: Maybe<PropertiesWithMeta>;
  /** @deprecated Use hostStatus */
  status?: Maybe<HostStatus>;
  vendorId?: Maybe<Scalars['String']>;
  vendorSyncedAt?: Maybe<Scalars['Date']>;
};


export type HostContactsArgs = {
  input?: InputMaybe<ListContactsInput>;
};


export type HostExtendUsersArgs = {
  input?: InputMaybe<ListExtendUsersInput>;
};


export type HostPropertiesArgs = {
  input?: InputMaybe<ListPropertiesInput>;
};

export type HostFilterInput = {
  hid?: InputMaybe<TableStringFilterInput>;
  hostName?: InputMaybe<TableStringFilterInput>;
};

export type HostFilterType = {
  __typename?: 'HostFilterType';
  hid?: Maybe<TableStringFilterType>;
  hostName?: Maybe<TableStringFilterType>;
};

export enum HostStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Closed */
  Closed = 'CLOSED',
  /** Closed Customer Request */
  ClosedCustomerRequest = 'CLOSED_CUSTOMER_REQUEST',
  /** Closed Delinquency */
  ClosedDelinquency = 'CLOSED_DELINQUENCY',
  /** Deleted */
  Deleted = 'DELETED',
  /** Invited */
  Invited = 'INVITED',
  /** In 3DS Validation */
  In_3DsValidation = 'IN_3DS_VALIDATION',
  /** Pre-registered */
  PreRegistered = 'PRE_REGISTERED',
  /** Registered */
  Registered = 'REGISTERED',
  /** Suspended */
  Suspended = 'SUSPENDED',
  /** Suspended Delinquency */
  SuspendedDelinquency = 'SUSPENDED_DELINQUENCY',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

export type HostsWithMeta = {
  __typename?: 'HostsWithMeta';
  edges?: Maybe<Array<Maybe<Host>>>;
  filter?: Maybe<ListHostFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListHostSearchType>;
  sort?: Maybe<ListHostSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type HoursInput = {
  custom?: InputMaybe<Scalars['Boolean']>;
  friday?: InputMaybe<CustomHourInput>;
  from?: InputMaybe<Scalars['SanitizeString']>;
  monday?: InputMaybe<CustomHourInput>;
  saturday?: InputMaybe<CustomHourInput>;
  sunday?: InputMaybe<CustomHourInput>;
  thursday?: InputMaybe<CustomHourInput>;
  to?: InputMaybe<Scalars['SanitizeString']>;
  tuesday?: InputMaybe<CustomHourInput>;
  wednesday?: InputMaybe<CustomHourInput>;
};

export type HoursType = {
  __typename?: 'HoursType';
  custom?: Maybe<Scalars['Boolean']>;
  friday?: Maybe<CustomHourType>;
  from?: Maybe<Scalars['String']>;
  monday?: Maybe<CustomHourType>;
  saturday?: Maybe<CustomHourType>;
  sunday?: Maybe<CustomHourType>;
  thursday?: Maybe<CustomHourType>;
  to?: Maybe<Scalars['String']>;
  tuesday?: Maybe<CustomHourType>;
  wednesday?: Maybe<CustomHourType>;
};

export type ImportAccountOwnerInput = {
  accountOwners: Array<CreateAccountOwnerFromDriivzInput>;
};

export type ImportAccountVehicleInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  driverId?: InputMaybe<Scalars['ID']>;
  vehicleId?: InputMaybe<Scalars['ID']>;
};

export type ImportAccountVehiclesInput = {
  accountVehicles?: InputMaybe<Array<InputMaybe<ImportAccountVehicleInput>>>;
};

export type ImportCardsInput = {
  cards?: InputMaybe<Array<InputMaybe<UpsertCardInput>>>;
};

export type ImportContractItemInput = {
  accountId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['Date']>;
  planId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['Date']>;
  vendorId: Scalars['ID'];
  vendorStatus?: InputMaybe<Scalars['String']>;
};

export type ImportContractsInput = {
  contracts: Array<ImportContractItemInput>;
};

export type ImportHostInput = {
  address1?: InputMaybe<Scalars['SanitizeString']>;
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  hid: Scalars['SanitizeString'];
  hostName: Scalars['SanitizeString'];
  legacyId?: InputMaybe<Scalars['ID']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
  status?: InputMaybe<HostStatus>;
};

export type ImportPaymentMethodsInput = {
  paymentMethods: Array<UpsertPaymentMethodInput>;
};

export type ImportPropertyInput = {
  address1?: InputMaybe<Scalars['SanitizeString']>;
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  hostId: Scalars['ID'];
  legacyId?: InputMaybe<Scalars['ID']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  pid: Scalars['SanitizeString'];
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
  propertyName: Scalars['SanitizeString'];
  status?: InputMaybe<PropertyStatus>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
};

export type ImportVehicleModelsInput = {
  vehicleModels: Array<InputMaybe<CreateVehicleModelInput>>;
};

export type ImportVehiclesInput = {
  vehicleModels?: InputMaybe<Array<InputMaybe<VehicleInput>>>;
};

export type InGoodStanding = {
  __typename?: 'InGoodStanding';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type InitiateCustomOpenEnrollInput = {
  /** The 'display_value' to be set on the generated promo code. (Optional) */
  customDisplayValue?: InputMaybe<Scalars['String']>;
  /** A flag for indicating whether promo code creation should be stopped if a promo code has been redeemed and exists with the same displayValue as customDisplayValue. (Optional) */
  enforceUniqueDisplayValue?: InputMaybe<Scalars['Boolean']>;
  /** The 'campaign_ref' or 'group_name' of the campaign you wish to create a promo code for. (Optional) */
  groupName?: InputMaybe<Scalars['String']>;
  /** The 'promotion_ref' of the high-level promotion which encapsulates the campaign and promo codes. (Required) */
  promotionRef: Scalars['String'];
};

export type InitiateCustomOpenEnrollResult = {
  __typename?: 'InitiateCustomOpenEnrollResult';
  /** The 'display_value' of the generated promo code */
  displayValue?: Maybe<Scalars['String']>;
  /** The generated promo code */
  promotionCode?: Maybe<Scalars['String']>;
  /** The 'promotion_ref' of the high-level promotion under which the promo code was generated. */
  promotionRef?: Maybe<Scalars['String']>;
  /** The 'promotion_type' of the high-level promotion under which the promo code was generated. */
  promotionType?: Maybe<Scalars['String']>;
  /** Did the request succeed? */
  success?: Maybe<Scalars['Boolean']>;
};

export type InitiateOpenEnrollInput = {
  /** The 'promotion_ref' of the high-level promotion which encapsulates the campaign and promo codes. (Required) */
  promotionRef: Scalars['String'];
};

export type InitiateOpenEnrollResult = {
  __typename?: 'InitiateOpenEnrollResult';
  /** The generated promo code */
  promotionCode?: Maybe<Scalars['String']>;
  /** The 'promotion_ref' of the high-level promotion under which the promo code was generated. */
  promotionRef?: Maybe<Scalars['String']>;
  /** The 'promotion_type' of the high-level promotion under which the promo code was generated. */
  promotionType?: Maybe<Scalars['String']>;
};

export enum InputAcVoltage {
  /** 120V Single Phase */
  SinglePhase_120V = 'SINGLE_PHASE_120V',
  /** 208/240 Single Phase */
  SinglePhase_208_240 = 'SINGLE_PHASE_208_240',
  /** 208V/120V Three Phase 3 Wire */
  ThreePhase_3Wire_208V_120V = 'THREE_PHASE_3_WIRE_208V_120V',
  /** 480V/277V Three Phase 3 Wire */
  ThreePhase_3Wire_480V_277V = 'THREE_PHASE_3_WIRE_480V_277V',
  /** 480V/277V Three Phase 4 Wire */
  ThreePhase_4Wire_480V_277V = 'THREE_PHASE_4_WIRE_480V_277V'
}

export enum InterfaceVersion {
  /** 2 Button */
  Button_2 = 'BUTTON_2',
  /** 3 Button */
  Button_3 = 'BUTTON_3',
  /** No buttons */
  NoButton = 'NO_BUTTON'
}

export enum IntervalUnit {
  /** Day */
  Day = 'DAY',
  /** Month */
  Month = 'MONTH',
  /** Week */
  Week = 'WEEK',
  /** Year */
  Year = 'YEAR'
}

export type InviteDriverInput = {
  altId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['Email']>;
};

/** An invoice of billed transactions */
export type Invoice = {
  __typename?: 'Invoice';
  /** A string identifying where the authorization for this invoice was initiated */
  authorization?: Maybe<Scalars['String']>;
  /** The amount of tax billed on the invoice */
  billingTax?: Maybe<Scalars['Float']>;
  /** Charger details for the charger used in the invoice transactions */
  charger?: Maybe<Charger>;
  /** A confirmation number for the paid invoice */
  confirmationNumber?: Maybe<Scalars['String']>;
  /** The date on which the current invoice was created */
  createdOn?: Maybe<Scalars['Date']>;
  /** The amount of credits applied to the invoice */
  creditApplied?: Maybe<Scalars['Float']>;
  /** The credit card number which was used for payment */
  creditCardNumber?: Maybe<Scalars['String']>;
  /** The type of the credit card used for payment */
  creditCardType?: Maybe<Scalars['String']>;
  /** The name of the driver associated with the invoice */
  driverName?: Maybe<Scalars['String']>;
  /** The amount of energy delivered in kWh */
  energyDeliveredKw?: Maybe<Scalars['Float']>;
  /** A string defining which invoice category applies to the current invoice */
  invoiceCategory?: Maybe<Scalars['String']>;
  /** A number indicating the Driivz ID of the invoice */
  invoiceId?: Maybe<Scalars['Int']>;
  /** A number indicating the invoiceNumber of the current invoice */
  invoiceNumber?: Maybe<Scalars['Int']>;
  /** Transaction line item details */
  lineItems?: Maybe<Array<Maybe<InvoiceLineItem>>>;
  /** Network operator details describing the hostName of the applicable network operator */
  networkOperator?: Maybe<NetworkOperator>;
  /** The date on which the current invoice was paid */
  paidOn?: Maybe<Scalars['Date']>;
  /** The duration of the session billed on the current invoice Format: (HH:MM:SS.MS) */
  sessionDuration?: Maybe<Scalars['Time']>;
  /** An id for identifying the charge session related to this invoice */
  sessionId?: Maybe<Scalars['String']>;
  /** Site details for the location where the invoice transactions took place */
  site?: Maybe<Site>;
  /** The sum total of the lineItem.amounts */
  subtotal?: Maybe<Scalars['Float']>;
  /** The total amount paid by the customer */
  totalPaid?: Maybe<Scalars['Float']>;
};

/** Transaction line item details */
export type InvoiceLineItem = {
  __typename?: 'InvoiceLineItem';
  /** The total cost of this transaction */
  amount?: Maybe<Scalars['Float']>;
  /** Comments on the transaction */
  comments?: Maybe<Scalars['String']>;
  /** The type of transaction */
  productType?: Maybe<Scalars['String']>;
  /** How many units were billed under this transaction */
  quantity?: Maybe<Scalars['Float']>;
  /** The cost of each unit under this transaction */
  unitPrice?: Maybe<Scalars['String']>;
};

/** return type for ListInvoicesForMobile */
export type InvoicesWithMeta = {
  __typename?: 'InvoicesWithMeta';
  edges?: Maybe<Array<Maybe<Invoice>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type LambdaEvent = {
  __typename?: 'LambdaEvent';
  success?: Maybe<Scalars['Boolean']>;
};

export type LambdaEventInput = {
  after?: InputMaybe<DriivzEntityInput>;
  before?: InputMaybe<DriivzEntityInput>;
  operation?: InputMaybe<Scalars['String']>;
};

export enum LastKnownSocUpdateSource {
  Engine = 'ENGINE',
  Meters = 'METERS',
  UserSession = 'USER_SESSION'
}

export enum Line {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type ListAccountVehiclesFilterInput = {
  accountId?: InputMaybe<TableIntFilterInput>;
};

export type ListAccountVehiclesInput = {
  filter?: InputMaybe<ListAccountVehiclesFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  paranoid?: InputMaybe<Scalars['Boolean']>;
};

export type ListAccountsFilterInput = {
  accountStatus?: InputMaybe<TableStringFilterInput>;
  evcId?: InputMaybe<TableStringFilterInput>;
};

export type ListAccountsInput = {
  filter?: InputMaybe<ListAccountsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListAccountsSortInput>;
};

export type ListAccountsSortInput = {
  accountStatus?: InputMaybe<TableSortInput>;
  firstName?: InputMaybe<TableSortInput>;
};

export type ListAccountsSortType = {
  __typename?: 'ListAccountsSortType';
  accountStatus?: Maybe<TableSortType>;
  evcId?: Maybe<TableSortType>;
  firstName?: Maybe<TableSortType>;
};

export type ListAdminCabinetsInput = {
  circuitAltId?: InputMaybe<Scalars['UUID']>;
  siteAltId: Scalars['UUID'];
};

export type ListAlertsInput = {
  siteId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListCabinetsInput = {
  cabinetModelAltId?: InputMaybe<Scalars['String']>;
  chargerAltId?: InputMaybe<Scalars['String']>;
  chargingSystemAltId?: InputMaybe<Scalars['String']>;
  circuitAltId?: InputMaybe<Scalars['String']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  switchGearAltId?: InputMaybe<Scalars['String']>;
};

export type ListCardOrdersFilterInput = {
  account_altId?: InputMaybe<TableStringFilterInput>;
  brand?: InputMaybe<TableStringFilterInput>;
  driver_altId?: InputMaybe<TableStringFilterInput>;
  orderStatus?: InputMaybe<TableStringFilterInput>;
};

export type ListCardOrdersFilterType = {
  __typename?: 'ListCardOrdersFilterType';
  account_altId?: Maybe<TableStringFilterType>;
  brand?: Maybe<TableStringFilterType>;
  driver_altId?: Maybe<TableStringFilterType>;
  orderStatus?: Maybe<TableStringFilterType>;
};

export type ListCardOrdersForMobileInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListCardOrdersInput = {
  filter?: InputMaybe<ListCardOrdersFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListCardOrdersSearchInput>;
  sort?: InputMaybe<ListCardOrdersSortInput>;
};

export type ListCardOrdersSearchInput = {
  accountId?: InputMaybe<TableIntFilterInput>;
  account_billingAddress_address1?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_administrativeArea?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_locality?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_postalCode?: InputMaybe<TableStringFilterInput>;
  driver_firstName?: InputMaybe<TableStringFilterInput>;
  driver_lastName?: InputMaybe<TableStringFilterInput>;
};

export type ListCardOrdersSearchType = {
  __typename?: 'ListCardOrdersSearchType';
  accountId?: Maybe<TableIntFilterType>;
  account_billingAddress_address1?: Maybe<TableStringFilterType>;
  account_billingAddress_administrativeArea?: Maybe<TableStringFilterType>;
  account_billingAddress_locality?: Maybe<TableStringFilterType>;
  account_billingAddress_postalCode?: Maybe<TableStringFilterType>;
  driver_firstName?: Maybe<TableStringFilterType>;
  driver_lastName?: Maybe<TableStringFilterType>;
};

export type ListCardOrdersSortInput = {
  driver_firstName?: InputMaybe<TableSortInput>;
  driver_lastName?: InputMaybe<TableSortInput>;
};

export type ListCardOrdersSortType = {
  __typename?: 'ListCardOrdersSortType';
  driver_firstName?: Maybe<TableSortType>;
  driver_lastName?: Maybe<TableSortType>;
};

export type ListCardsFilterInput = {
  account_altId?: InputMaybe<TableStringFilterInput>;
  brand?: InputMaybe<TableStringFilterInput>;
  cardStatus?: InputMaybe<TableStringFilterInput>;
  cardTypeId?: InputMaybe<TableIntFilterInput>;
  driver_altId?: InputMaybe<TableStringFilterInput>;
};

export type ListCardsFilterType = {
  __typename?: 'ListCardsFilterType';
  account_altId?: Maybe<TableStringFilterType>;
  brand?: Maybe<TableStringFilterType>;
  cardStatus?: Maybe<TableStringFilterType>;
  cardTypeId?: Maybe<TableStringFilterType>;
  driver_altId?: Maybe<TableStringFilterType>;
};

export type ListCardsInput = {
  filter?: InputMaybe<ListCardsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListCardsSearchInput>;
  sort?: InputMaybe<ListCardsSortInput>;
};

export type ListCardsSearchInput = {
  accountId?: InputMaybe<TableIntFilterInput>;
  driver_firstName?: InputMaybe<TableStringFilterInput>;
  driver_lastName?: InputMaybe<TableStringFilterInput>;
  evcId?: InputMaybe<TableStringFilterInput>;
  externalNumber?: InputMaybe<TableStringFilterInput>;
  internalNumber?: InputMaybe<TableStringFilterInput>;
};

export type ListCardsSearchType = {
  __typename?: 'ListCardsSearchType';
  accountId?: Maybe<TableIntFilterType>;
  driver_firstName?: Maybe<TableStringFilterType>;
  driver_lastName?: Maybe<TableStringFilterType>;
  evcId?: Maybe<TableStringFilterType>;
  externalNumber?: Maybe<TableStringFilterType>;
  internalNumber?: Maybe<TableStringFilterType>;
};

export type ListCardsSortInput = {
  driver_email?: InputMaybe<TableSortInput>;
  driver_firstName?: InputMaybe<TableSortInput>;
  driver_lastName?: InputMaybe<TableSortInput>;
  driver_phone?: InputMaybe<TableSortInput>;
  externalNumber?: InputMaybe<TableSortInput>;
  internalNumber?: InputMaybe<TableSortInput>;
  nickName?: InputMaybe<TableSortInput>;
};

export type ListCardsSortType = {
  __typename?: 'ListCardsSortType';
  driver_email?: Maybe<TableSortType>;
  driver_firstName?: Maybe<TableSortType>;
  driver_lastName?: Maybe<TableSortType>;
  driver_phone?: Maybe<TableSortType>;
  externalNumber?: Maybe<TableSortType>;
  internalNumber?: Maybe<TableSortType>;
  nickName?: Maybe<TableSortType>;
};

export type ListChargerGroupsFilterForExtendInput = {
  chargerGroupName?: InputMaybe<TableStringFilterInput>;
  chargerGroupTypeId?: InputMaybe<TableIntFilterInput>;
};

export type ListChargerGroupsForExtendInput = {
  filter?: InputMaybe<ListChargerGroupsFilterForExtendInput>;
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showDeleted?: InputMaybe<Scalars['Boolean']>;
};

export type ListChargerModelsFilterInput = {
  manufacturer?: InputMaybe<TableStringFilterInput>;
};

export type ListChargerModelsFilterType = {
  __typename?: 'ListChargerModelsFilterType';
  manufacturer?: Maybe<TableStringFilterType>;
};

export type ListChargerModelsInput = {
  filter?: InputMaybe<ListChargerModelsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListChargerModelsSearchInput>;
  sort?: InputMaybe<ListChargerModelsSortInput>;
};

export type ListChargerModelsSearchInput = {
  modelName?: InputMaybe<TableStringFilterInput>;
};

export type ListChargerModelsSearchType = {
  __typename?: 'ListChargerModelsSearchType';
  modelName?: Maybe<TableStringFilterType>;
};

export type ListChargerModelsSortInput = {
  altId?: InputMaybe<TableSortInput>;
  manufacturer?: InputMaybe<TableSortInput>;
  modelName?: InputMaybe<TableSortInput>;
  unitType?: InputMaybe<TableSortInput>;
};

export type ListChargerModelsSortType = {
  __typename?: 'ListChargerModelsSortType';
  manufacturer?: Maybe<TableSortType>;
  modelName?: Maybe<TableSortType>;
  unitType?: Maybe<TableSortType>;
};

export type ListChargerUtilization = {
  __typename?: 'ListChargerUtilization';
  edges?: Maybe<Array<Maybe<ChargerUtilizationReport>>>;
  endDate: Scalars['Date'];
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  startDate: Scalars['Date'];
  timeZone: Scalars['String'];
  total?: Maybe<Scalars['Int']>;
};

export type ListChargerUtilizationInput = {
  endDate: Scalars['Date'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteId: Scalars['UUID'];
  startDate: Scalars['Date'];
  timeZone: Scalars['String'];
};

/** Filter the consumption data in that datePreset, for all chargers in these site altIds, return all chargers if siteIds not sent */
export type ListChargersConsumptionForExtendInput = {
  chargerIds?: InputMaybe<Array<Scalars['ID']>>;
  datePreset: SessionDatePreset;
  siteIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ListChargersFilterInput = {
  and?: InputMaybe<ChargerFilterInput>;
  chargerModel_altId?: InputMaybe<TableStringFilterInput>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  fieldStationStatus?: InputMaybe<TableStringFilterInput>;
  or?: InputMaybe<ChargerFilterInput>;
  port?: InputMaybe<ListPortsRootFilterInput>;
  radius?: InputMaybe<ListChargersRadiusInput>;
  tagId?: InputMaybe<TableStringFilterInput>;
  tags?: InputMaybe<TableFilterInput>;
};

export type ListChargersFilterType = {
  __typename?: 'ListChargersFilterType';
  chargerModel_altId?: Maybe<TableStringFilterType>;
  fieldStationStatus?: Maybe<TableStringFilterType>;
  tags?: Maybe<TableFilterType>;
};

export type ListChargersForExtendInput = {
  filter?: InputMaybe<ListChargersFilterInput>;
  hostId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListChargersForFleetInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListChargersForFleetSearchInput>;
  siteId: Scalars['ID'];
  sort?: InputMaybe<ListChargersForFleetSortInput>;
};

export type ListChargersForFleetSearchInput = {
  chargers_chargerName?: InputMaybe<TableStringFilterInput>;
  evses_connectors_connectorTypeConstraint_columnValue?: InputMaybe<TableStringFilterInput>;
};

export type ListChargersForFleetSearchType = {
  __typename?: 'ListChargersForFleetSearchType';
  chargers_chargerName?: Maybe<TableStringFilterType>;
  evses_connectors_connectorTypeConstraint_columnValue?: Maybe<TableStringFilterType>;
};

export type ListChargersForFleetSortInput = {
  chargerName?: InputMaybe<TableSortInput>;
};

export type ListChargersForFleetSortType = {
  __typename?: 'ListChargersForFleetSortType';
  chargerName?: Maybe<TableSortType>;
};

export type ListChargersForMobileInput = {
  connectorTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  distance: Scalars['Int'];
  /** If this flag is set to true and connectorTypeIds has CHADEMO station supports Tesla charging */
  hasTeslaAdapter?: InputMaybe<Scalars['Boolean']>;
  latitude: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
  longitude: Scalars['Float'];
  search: Scalars['String'];
  vehicleConnectorIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ListChargersInput = {
  filter?: InputMaybe<ListChargersFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListChargersSearchInput>;
  sort?: InputMaybe<ListChargersSortInput>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListChargersRadiusInput = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  radius?: InputMaybe<Scalars['Int']>;
};

export type ListChargersRootFilterInput = {
  and?: InputMaybe<ChargerFilterInput>;
  or?: InputMaybe<ChargerFilterInput>;
  port?: InputMaybe<ListPortsRootFilterInput>;
};

export type ListChargersRootFilterType = {
  __typename?: 'ListChargersRootFilterType';
  and?: Maybe<ChargerFilterType>;
  or?: Maybe<ChargerFilterType>;
  port?: Maybe<ListPortsRootFilterType>;
};

export type ListChargersSearchInput = {
  chargerName?: InputMaybe<TableStringFilterInput>;
  cid?: InputMaybe<TableStringFilterInput>;
  evcId?: InputMaybe<TableStringFilterInput>;
  site_address1?: InputMaybe<TableStringFilterInput>;
  site_administrativeArea?: InputMaybe<TableStringFilterInput>;
  site_locality?: InputMaybe<TableStringFilterInput>;
  site_postalCode?: InputMaybe<TableStringFilterInput>;
  site_property_propertyName?: InputMaybe<TableStringFilterInput>;
};

export type ListChargersSearchType = {
  __typename?: 'ListChargersSearchType';
  chargerName?: Maybe<TableStringFilterType>;
  cid?: Maybe<TableStringFilterType>;
  site_address1?: Maybe<TableStringFilterType>;
  site_administrativeArea?: Maybe<TableStringFilterType>;
  site_locality?: Maybe<TableStringFilterType>;
  site_postalCode?: Maybe<TableStringFilterType>;
  site_property_propertyName?: Maybe<TableStringFilterType>;
};

export type ListChargersSortInput = {
  chargerModel_modelName?: InputMaybe<TableSortInput>;
  chargerName?: InputMaybe<TableSortInput>;
  cid?: InputMaybe<TableSortInput>;
  fieldStationStatus?: InputMaybe<TableSortInput>;
  hostName?: InputMaybe<TableSortInput>;
  propertyName?: InputMaybe<TableSortInput>;
};

export type ListChargersSortType = {
  __typename?: 'ListChargersSortType';
  chargerModel_modelName?: Maybe<TableSortType>;
  chargerName?: Maybe<TableSortType>;
  cid?: Maybe<TableSortType>;
  fieldStationStatus?: Maybe<TableSortType>;
  hostName?: Maybe<TableSortType>;
  propertyName?: Maybe<TableSortType>;
};

export type ListChargingSystemInput = {
  siteAltId?: InputMaybe<Scalars['String']>;
  switchGearId?: InputMaybe<Scalars['String']>;
};

export type ListConnectorsFilterInput = {
  and?: InputMaybe<ConnectorFilterInput>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<ConnectorFilterInput>;
};

export type ListConnectorsInput = {
  filter?: InputMaybe<ListConnectorsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListConnectorsSortInput>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListConnectorsRootFilterInput = {
  and?: InputMaybe<ConnectorFilterInput>;
  or?: InputMaybe<ConnectorFilterInput>;
};

export type ListConnectorsRootFilterType = {
  __typename?: 'ListConnectorsRootFilterType';
  and?: Maybe<ConnectorFilterType>;
  or?: Maybe<ConnectorFilterType>;
};

export type ListConnectorsSortInput = {
  altId?: InputMaybe<TableSortInput>;
};

export type ListContactsFilterInput = {
  contactName?: InputMaybe<TableStringFilterInput>;
};

export type ListContactsInput = {
  filter?: InputMaybe<ListContactsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListContactsSortInput>;
};

export type ListContactsSortInput = {
  contactName?: InputMaybe<TableSortInput>;
};

export type ListContractsFilterInput = {
  accountId?: InputMaybe<TableStringFilterInput>;
  planId?: InputMaybe<TableStringFilterInput>;
  statusId?: InputMaybe<TableIntFilterInput>;
};

export type ListContractsFilterType = {
  __typename?: 'ListContractsFilterType';
  accountId?: Maybe<TableStringFilterType>;
  planId?: Maybe<TableStringFilterType>;
  statusId?: Maybe<TableIntFilterType>;
};

export type ListContractsInput = {
  filter?: InputMaybe<ListContractsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListContractsSearchInput>;
  sort?: InputMaybe<ListContractsSortInput>;
};

export type ListContractsSearchInput = {
  accountId?: InputMaybe<TableStringFilterInput>;
  planId?: InputMaybe<TableStringFilterInput>;
  statusId?: InputMaybe<TableStringFilterInput>;
};

export type ListContractsSearchType = {
  __typename?: 'ListContractsSearchType';
  accountId?: Maybe<TableStringFilterType>;
  planId?: Maybe<TableStringFilterType>;
  statusId?: Maybe<TableIntFilterType>;
};

export type ListContractsSortInput = {
  statusId?: InputMaybe<TableSortInput>;
};

export type ListContractsSortType = {
  __typename?: 'ListContractsSortType';
  statusId?: Maybe<TableSortType>;
};

export type ListCreditsInput = {
  accountId: Scalars['ID'];
};

export type ListDriversFilterInput = {
  account_accountStatus?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_administrativeArea?: InputMaybe<TableStringFilterInput>;
  driverStatusId?: InputMaybe<TableStringFilterInput>;
};

export type ListDriversFilterType = {
  __typename?: 'ListDriversFilterType';
  account_accountStatus?: Maybe<TableStringFilterType>;
  account_billingAddress_administrativeArea?: Maybe<TableStringFilterType>;
  driverStatusId?: Maybe<TableStringFilterType>;
};

export type ListDriversInput = {
  filter?: InputMaybe<ListDriversFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  paranoid?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<ListDriversSearchInput>;
  sort?: InputMaybe<ListDriversSortInput>;
};

export type ListDriversSearchInput = {
  account_billingAddress_address1?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_address2?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_administrativeArea?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_locality?: InputMaybe<TableStringFilterInput>;
  account_billingAddress_postalCode?: InputMaybe<TableStringFilterInput>;
  account_id?: InputMaybe<TableIntFilterInput>;
  email?: InputMaybe<TableStringFilterInput>;
  firstName?: InputMaybe<TableStringFilterInput>;
  lastName?: InputMaybe<TableStringFilterInput>;
  phone?: InputMaybe<TableStringFilterInput>;
};

export type ListDriversSearchType = {
  __typename?: 'ListDriversSearchType';
  account_billingAddress_address1?: Maybe<TableStringFilterType>;
  account_billingAddress_address2?: Maybe<TableStringFilterType>;
  account_billingAddress_administrativeArea?: Maybe<TableStringFilterType>;
  account_billingAddress_locality?: Maybe<TableStringFilterType>;
  account_billingAddress_postalCode?: Maybe<TableStringFilterType>;
  account_id?: Maybe<TableIntFilterType>;
  email?: Maybe<TableStringFilterType>;
  firstName?: Maybe<TableStringFilterType>;
  lastName?: Maybe<TableStringFilterType>;
  phone?: Maybe<TableStringFilterType>;
};

export type ListDriversSortInput = {
  account_accountStatus?: InputMaybe<TableSortInput>;
  account_balance?: InputMaybe<TableSortInput>;
  account_billingAddress_address1?: InputMaybe<TableSortInput>;
  account_id?: InputMaybe<TableSortInput>;
  driverStatusId?: InputMaybe<TableSortInput>;
  email?: InputMaybe<TableSortInput>;
  firstName?: InputMaybe<TableSortInput>;
  lastName?: InputMaybe<TableSortInput>;
};

export type ListDriversSortType = {
  __typename?: 'ListDriversSortType';
  account_accountStatus?: Maybe<TableSortType>;
  account_balance?: Maybe<TableSortType>;
  account_billingAddress_address1?: Maybe<TableSortType>;
  account_id?: Maybe<TableSortType>;
  driverStatusId?: Maybe<TableSortType>;
  email?: Maybe<TableSortType>;
  firstName?: Maybe<TableSortType>;
  lastName?: Maybe<TableSortType>;
};

export type ListElectricVehiclesInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListElectricVehiclesSearchInput>;
  sort?: InputMaybe<ListElectricVehiclesSortInput>;
};

export type ListElectricVehiclesSearchInput = {
  vehicleMake_manufacturer?: InputMaybe<TableStringFilterInput>;
  vehicleModelYear_ModelYear?: InputMaybe<TableStringFilterInput>;
  vehicleModel_modelName?: InputMaybe<TableStringFilterInput>;
};

export type ListElectricVehiclesSortInput = {
  make_manufacturer?: InputMaybe<TableSortInput>;
  vehicleMake_manufacturer?: InputMaybe<TableSortInput>;
  vehicleModelYear_ModelYear?: InputMaybe<TableSortInput>;
  vehicleModel_modelName?: InputMaybe<TableSortInput>;
};

export type ListElementsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListEmailListRecipientsFilterInput = {
  emailListId?: InputMaybe<TableStringFilterInput>;
};

export type ListEmailListRecipientsFilterType = {
  __typename?: 'ListEmailListRecipientsFilterType';
  altId?: Maybe<TableStringFilterType>;
  emailListId?: Maybe<TableStringFilterType>;
  internalId?: Maybe<TableIntFilterType>;
};

export type ListEmailListRecipientsInput = {
  filter?: InputMaybe<ListEmailListRecipientsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListEmailListRecipientsSearchInput>;
  sort?: InputMaybe<ListEmailListRecipientsSortInput>;
};

export type ListEmailListRecipientsSearchInput = {
  altId?: InputMaybe<TableStringFilterInput>;
  emailListId?: InputMaybe<TableStringFilterInput>;
  internalId?: InputMaybe<TableStringFilterInput>;
  lastEmailed?: InputMaybe<TableStringFilterInput>;
};

export type ListEmailListRecipientsSearchType = {
  __typename?: 'ListEmailListRecipientsSearchType';
  altId?: Maybe<TableStringFilterType>;
  emailListId?: Maybe<TableStringFilterType>;
  internalId?: Maybe<TableStringFilterType>;
  lastEmailed?: Maybe<TableStringFilterType>;
};

export type ListEmailListRecipientsSortInput = {
  internalId?: InputMaybe<TableSortInput>;
  lastEmailed?: InputMaybe<TableSortInput>;
};

export type ListEmailListRecipientsSortType = {
  __typename?: 'ListEmailListRecipientsSortType';
  internalId?: Maybe<TableSortType>;
  lastEmailed?: Maybe<TableSortType>;
};

export type ListEmailListsFilterInput = {
  altId?: InputMaybe<TableStringFilterInput>;
};

export type ListEmailListsFilterType = {
  __typename?: 'ListEmailListsFilterType';
  altId?: Maybe<TableIntFilterType>;
};

export type ListEmailListsInput = {
  filter?: InputMaybe<ListEmailListsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListEmailListsSearchInput>;
  sort?: InputMaybe<ListEmailListsSortInput>;
};

export type ListEmailListsSearchInput = {
  name?: InputMaybe<TableStringFilterInput>;
};

export type ListEmailListsSearchType = {
  __typename?: 'ListEmailListsSearchType';
  name?: Maybe<TableStringFilterType>;
};

export type ListEmailListsSortInput = {
  name?: InputMaybe<TableSortInput>;
};

export type ListEmailListsSortType = {
  __typename?: 'ListEmailListsSortType';
  name?: Maybe<TableSortType>;
};

export type ListEnrollmentsFilterType = {
  __typename?: 'ListEnrollmentsFilterType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchText?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ListEnrollmentsFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchText?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListEnrollmentsInput = {
  filters?: InputMaybe<ListEnrollmentsFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListEnrollmentsWithMeta = {
  __typename?: 'ListEnrollmentsWithMeta';
  edges?: Maybe<Array<Maybe<Enrollments>>>;
  filters?: Maybe<EnrollmentsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ListExtendHostsInput = {
  /** Page you would like to request */
  page?: InputMaybe<Scalars['Int']>;
  /** Size of page you would like to request */
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListExtendUsersInput = {
  /** Page you would like to request */
  page?: InputMaybe<Scalars['Int']>;
  /** Size of page you would like to request */
  pageSize?: InputMaybe<Scalars['Int']>;
  /** Total number of results returned */
  total?: InputMaybe<Scalars['Int']>;
};

export type ListFalconConstraintsFilterInput = {
  columnName: TableStringFilterInput;
  columnText?: InputMaybe<TableStringFilterInput>;
  columnValue?: InputMaybe<TableStringFilterInput>;
  tableName: TableStringFilterInput;
};

export type ListFalconConstraintsFilterType = {
  __typename?: 'ListFalconConstraintsFilterType';
  columnName?: Maybe<TableStringFilterType>;
  columnText?: Maybe<TableStringFilterType>;
  columnValue?: Maybe<TableStringFilterType>;
  tableName?: Maybe<TableStringFilterType>;
};

export type ListFalconConstraintsInput = {
  filter?: InputMaybe<ListFalconConstraintsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListFalconConstraintsSortInput>;
};

export type ListFalconConstraintsSortInput = {
  columnText?: InputMaybe<TableSortInput>;
  id?: InputMaybe<TableSortInput>;
  orderBy?: InputMaybe<TableSortInput>;
};

export type ListFalconConstraintsSortType = {
  __typename?: 'ListFalconConstraintsSortType';
  columnText?: Maybe<TableSortType>;
  id?: Maybe<TableSortType>;
  orderBy?: Maybe<TableSortType>;
};

export type ListFleetVehiclesActiceRouteFilterInput = {
  routeName?: InputMaybe<TableStringFilterInput>;
};

export type ListFleetVehiclesActiceRouteFilterType = {
  __typename?: 'ListFleetVehiclesActiceRouteFilterType';
  routeName?: Maybe<TableStringFilterType>;
};

export type ListFleetVehiclesFilterInput = {
  accountId?: InputMaybe<TableStringFilterInput>;
  activityStatus?: InputMaybe<TableStringFilterInput>;
  fleetId?: InputMaybe<TableNumberFilterInput>;
};

export type ListFleetVehiclesFilterType = {
  __typename?: 'ListFleetVehiclesFilterType';
  activityStatus?: Maybe<TableStringFilterType>;
};

export type ListFleetVehiclesInput = {
  filter?: InputMaybe<ListFleetVehiclesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListFleetVehiclesSearchInput>;
  siteId: Scalars['UUID'];
  sort?: InputMaybe<ListFleetVehiclesSortInput>;
};

export type ListFleetVehiclesSearchInput = {
  activeRoute?: InputMaybe<ListFleetVehiclesActiceRouteFilterInput>;
  card?: InputMaybe<Array<InputMaybe<TableStringFilterInput>>>;
  vehicleIdentifier?: InputMaybe<TableStringFilterInput>;
};

export type ListFleetVehiclesSearchType = {
  __typename?: 'ListFleetVehiclesSearchType';
  activeRoute?: Maybe<ListFleetVehiclesActiceRouteFilterType>;
  card?: Maybe<Array<Maybe<TableStringFilterType>>>;
  vehicleIdentifier?: Maybe<TableStringFilterType>;
};

export type ListFleetVehiclesSortInput = {
  activeDriver?: InputMaybe<TableSortType>;
  activeRoute?: InputMaybe<TableSortType>;
  activityStatus?: InputMaybe<TableSortType>;
  assignedConnector?: InputMaybe<TableSortType>;
  card?: InputMaybe<TableSortType>;
  chargeCurve?: InputMaybe<TableSortType>;
  currentSession?: InputMaybe<TableSortType>;
  departureStatus?: InputMaybe<TableSortType>;
  expectedDeparture?: InputMaybe<TableSortType>;
  fleet?: InputMaybe<TableSortType>;
  isOperational?: InputMaybe<TableSortType>;
  isSocTargetMet?: InputMaybe<TableSortType>;
  lastKnownSoc?: InputMaybe<TableSortType>;
  socTarget?: InputMaybe<TableSortType>;
  vehicleIdentifier?: InputMaybe<TableSortType>;
  vin?: InputMaybe<TableSortType>;
};

export type ListFleetVehiclesSortType = {
  __typename?: 'ListFleetVehiclesSortType';
  activeDriver?: Maybe<TableSortType>;
  activeRoute?: Maybe<TableSortType>;
  activityStatus?: Maybe<TableSortType>;
  assignedConnector?: Maybe<TableSortType>;
  card?: Maybe<TableSortType>;
  chargeCurve?: Maybe<TableSortType>;
  currentSession?: Maybe<TableSortType>;
  departureStatus?: Maybe<TableSortType>;
  expectedDeparture?: Maybe<TableSortType>;
  fleet?: Maybe<TableSortType>;
  isOperational?: Maybe<TableSortType>;
  isSocTargetMet?: Maybe<TableSortType>;
  lastKnownSoc?: Maybe<TableSortType>;
  socTarget?: Maybe<TableSortType>;
  vehicleIdentifier?: Maybe<TableSortType>;
  vin?: Maybe<TableSortType>;
};

export type ListGeographicalRegionsFilterInput = {
  abbreviation?: InputMaybe<TableStringFilterInput>;
  country?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
};

export type ListGeographicalRegionsInput = {
  filter?: InputMaybe<ListGeographicalRegionsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListGeographicalRegionsSortInput>;
};

export type ListGeographicalRegionsSortInput = {
  abbreviation?: InputMaybe<TableSortInput>;
  name?: InputMaybe<TableSortInput>;
};

export type ListHostFilterInput = {
  status?: InputMaybe<TableStringFilterInput>;
};

export type ListHostFilterType = {
  __typename?: 'ListHostFilterType';
  status?: Maybe<TableStringFilterType>;
};

export type ListHostSearchInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  hid?: InputMaybe<TableStringFilterInput>;
  hostName?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
};

export type ListHostSearchType = {
  __typename?: 'ListHostSearchType';
  address1?: Maybe<TableStringFilterType>;
  administrativeArea?: Maybe<TableStringFilterType>;
  hid?: Maybe<TableStringFilterType>;
  hostName?: Maybe<TableStringFilterType>;
  locality?: Maybe<TableStringFilterType>;
  postalCode?: Maybe<TableStringFilterType>;
};

export type ListHostSortInput = {
  altId?: InputMaybe<TableSortInput>;
  hid?: InputMaybe<TableSortInput>;
  hostName?: InputMaybe<TableSortInput>;
  status?: InputMaybe<TableSortInput>;
};

export type ListHostSortType = {
  __typename?: 'ListHostSortType';
  altId?: Maybe<TableSortType>;
  hid?: Maybe<TableSortType>;
  hostName?: Maybe<TableSortType>;
  status?: Maybe<TableSortType>;
};

export type ListHostsInput = {
  filter?: InputMaybe<ListHostFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListHostSearchInput>;
  sort?: InputMaybe<ListHostSortInput>;
};

export type ListHostsRootFilterInput = {
  and?: InputMaybe<HostFilterInput>;
  or?: InputMaybe<HostFilterInput>;
};

export type ListHostsRootFilterType = {
  __typename?: 'ListHostsRootFilterType';
  and?: Maybe<HostFilterType>;
  or?: Maybe<HostFilterType>;
};

/** Input type for ListInvoicesForMobile */
export type ListInvoicesInput = {
  /** The cardID to further limit results to invoices associated with a specific card */
  cardId?: InputMaybe<Scalars['ID']>;
  /** The end of the date range in which to look for invoices to list; If NULL, uses server's current Date as default */
  endDate?: InputMaybe<Scalars['Date']>;
  /** The page number of results to request; page 0 is the first page */
  page?: InputMaybe<Scalars['Int']>;
  /** The number of results to include per page. Default is 9999 */
  pageSize?: InputMaybe<Scalars['Int']>;
  /** The beginning of the date range in which to look for invoices to list */
  startDate: Scalars['Date'];
};

export type ListNotificationGroupsFilterInput = {
  groupName?: InputMaybe<TableStringFilterInput>;
};

export type ListNotificationGroupsFilterType = {
  __typename?: 'ListNotificationGroupsFilterType';
  groupName?: Maybe<TableStringFilterType>;
};

export type ListNotificationGroupsInput = {
  filter?: InputMaybe<ListNotificationGroupsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListNotificationGroupsSearchInput>;
  sort?: InputMaybe<ListNotificationGroupsSortInput>;
};

export type ListNotificationGroupsSearchInput = {
  groupName?: InputMaybe<TableStringFilterInput>;
};

export type ListNotificationGroupsSearchType = {
  __typename?: 'ListNotificationGroupsSearchType';
  groupName?: Maybe<TableStringFilterType>;
};

export type ListNotificationGroupsSortInput = {
  groupName?: InputMaybe<TableSortInput>;
  sortOrder?: InputMaybe<TableSortInput>;
};

export type ListNotificationGroupsSortType = {
  __typename?: 'ListNotificationGroupsSortType';
  groupName?: Maybe<TableSortType>;
  sortOrder?: Maybe<TableSortType>;
};

export type ListNotificationItemsFilterInput = {
  driverLevel?: InputMaybe<TableStringFilterInput>;
};

export type ListNotificationItemsFilterType = {
  __typename?: 'ListNotificationItemsFilterType';
  driverLevel?: Maybe<TableStringFilterType>;
};

export type ListNotificationItemsInput = {
  filter?: InputMaybe<ListNotificationItemsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListNotificationItemsSearchInput>;
  sort?: InputMaybe<ListNotificationItemsSortInput>;
};

export type ListNotificationItemsSearchInput = {
  driverLevel?: InputMaybe<TableStringFilterInput>;
};

export type ListNotificationItemsSearchType = {
  __typename?: 'ListNotificationItemsSearchType';
  driverLevel?: Maybe<TableStringFilterType>;
};

export type ListNotificationItemsSortInput = {
  groupName?: InputMaybe<TableSortInput>;
  sortOrder?: InputMaybe<TableSortInput>;
};

export type ListNotificationItemsSortType = {
  __typename?: 'ListNotificationItemsSortType';
  groupName?: Maybe<TableSortType>;
  sortOrder?: Maybe<TableSortType>;
};

export type ListNotificationPreferencesFilterInput = {
  emailOn?: InputMaybe<TableBooleanFilterInput>;
  pushOn?: InputMaybe<TableBooleanFilterInput>;
  smsOn?: InputMaybe<TableBooleanFilterInput>;
};

export type ListNotificationPreferencesFilterType = {
  __typename?: 'ListNotificationPreferencesFilterType';
  emailOn?: Maybe<TableBooleanFilterType>;
  pushOn?: Maybe<TableBooleanFilterType>;
  smsOn?: Maybe<TableBooleanFilterType>;
};

export type ListNotificationPreferencesInput = {
  filter?: InputMaybe<ListNotificationPreferencesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListNotificationPreferencesSearchInput>;
  sort?: InputMaybe<ListNotificationPreferencesSortInput>;
};

export type ListNotificationPreferencesSearchInput = {
  emailOn?: InputMaybe<TableBooleanFilterInput>;
  pushOn?: InputMaybe<TableBooleanFilterInput>;
  smsOn?: InputMaybe<TableBooleanFilterInput>;
};

export type ListNotificationPreferencesSearchType = {
  __typename?: 'ListNotificationPreferencesSearchType';
  emailOn?: Maybe<TableBooleanFilterType>;
  pushOn?: Maybe<TableBooleanFilterType>;
  smsOn?: Maybe<TableBooleanFilterType>;
};

export type ListNotificationPreferencesSortInput = {
  createdAt?: InputMaybe<TableSortInput>;
  updatedAt?: InputMaybe<TableSortInput>;
};

export type ListNotificationPreferencesSortType = {
  __typename?: 'ListNotificationPreferencesSortType';
  createdAt?: Maybe<TableSortType>;
  updatedAt?: Maybe<TableSortType>;
};

export type ListPartnerDriversInput = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  platformName: Scalars['String'];
};

export type ListPaymentMethodsForMobileInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListPlansFilterInput = {
  /** Array of plan altIds used to filter a list of plans */
  altId?: InputMaybe<TableStringFilterInput>;
  tags?: InputMaybe<TableStringFilterInput>;
};

export type ListPlansInput = {
  filter?: InputMaybe<ListPlansFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListPlansSearchInput>;
  sort?: InputMaybe<ListPlansSortInput>;
};

export type ListPlansSearchInput = {
  planName?: InputMaybe<TableStringFilterInput>;
};

export type ListPlansSearchType = {
  __typename?: 'ListPlansSearchType';
  planName?: Maybe<TableStringFilterType>;
};

export type ListPlansSortInput = {
  createdAt?: InputMaybe<TableSortInput>;
  planDisplayName?: InputMaybe<TableSortInput>;
  planName?: InputMaybe<TableSortInput>;
};

export type ListPlansSortType = {
  __typename?: 'ListPlansSortType';
  createdAt?: Maybe<TableSortInput>;
  planDescription?: Maybe<TableSortInput>;
  planDisplayName?: Maybe<TableSortInput>;
  planName?: Maybe<TableSortInput>;
};

export type ListPortalsSessionsInput = {
  filters?: InputMaybe<ListSessionFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListPortalsVehicleMakesInput = {
  DISABLE_WESQL_LEGACY_AWS_LAMBDA_API?: InputMaybe<Scalars['Boolean']>;
};

export type ListPortsFilterInput = {
  and?: InputMaybe<PortFilterInput>;
  connector?: InputMaybe<ListConnectorsRootFilterInput>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<PortFilterInput>;
};

export type ListPortsInput = {
  filter?: InputMaybe<ListPortsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListPortsSearchInput>;
  sort?: InputMaybe<ListPortsSortInput>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListPortsRootFilterInput = {
  and?: InputMaybe<PortFilterInput>;
  connector?: InputMaybe<ListConnectorsRootFilterInput>;
  or?: InputMaybe<PortFilterInput>;
};

export type ListPortsRootFilterType = {
  __typename?: 'ListPortsRootFilterType';
  and?: Maybe<PortFilterType>;
  connector?: Maybe<ListConnectorsRootFilterType>;
  or?: Maybe<PortFilterType>;
};

export type ListPortsSearchInput = {
  evcId?: InputMaybe<TableStringFilterInput>;
};

export type ListPortsSortInput = {
  chargeBoxIdentity?: InputMaybe<TableSortInput>;
};

export type ListProductsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListProductsSearchInput>;
  sort?: InputMaybe<ListProductsSortInput>;
};

export type ListProductsSearchInput = {
  name?: InputMaybe<TableStringFilterInput>;
};

export type ListProductsSearchType = {
  __typename?: 'ListProductsSearchType';
  name?: Maybe<TableStringFilterType>;
};

export type ListProductsSortInput = {
  createdAt?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
};

export type ListProductsSortType = {
  __typename?: 'ListProductsSortType';
  createdAt?: Maybe<TableSortInput>;
  description?: Maybe<TableSortInput>;
  name?: Maybe<TableSortInput>;
};

export type ListPromoCodesInput = {
  codeDetailId: Scalars['ID'];
  filters?: InputMaybe<ListPromoCodesInputFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  promotionId: Scalars['ID'];
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListPromoCodesInputFiltersInput = {
  searchText?: InputMaybe<Scalars['String']>;
};

export type ListPromoCodesInputFiltersType = {
  __typename?: 'ListPromoCodesInputFiltersType';
  searchText?: Maybe<Scalars['String']>;
};

export type ListPromotionCategorySessionsInput = {
  filters?: InputMaybe<ListSessionFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListPromotionsInput = {
  filters?: InputMaybe<ListPromotionsInputFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListPromotionsInputFiltersInput = {
  searchText?: InputMaybe<Scalars['String']>;
};

export type ListPromotionsInputFiltersType = {
  __typename?: 'ListPromotionsInputFiltersType';
  searchText?: Maybe<Scalars['String']>;
};

export type ListPropertiesFilterInput = {
  host_hid?: InputMaybe<TableStringFilterInput>;
  propertyName?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
};

export type ListPropertiesFilterType = {
  __typename?: 'ListPropertiesFilterType';
  status?: Maybe<TableStringFilterType>;
};

export type ListPropertiesInput = {
  filter?: InputMaybe<ListPropertiesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListPropertiesSearchInput>;
  sort?: InputMaybe<ListPropertiesSortInput>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListPropertiesRootFilterInput = {
  and?: InputMaybe<PropertyFilterInput>;
  host?: InputMaybe<ListHostsRootFilterInput>;
  or?: InputMaybe<PropertyFilterInput>;
};

export type ListPropertiesRootFilterType = {
  __typename?: 'ListPropertiesRootFilterType';
  and?: Maybe<PropertyFilterType>;
  host?: Maybe<ListHostsRootFilterType>;
  or?: Maybe<PropertyFilterType>;
};

export type ListPropertiesSearchInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  pid?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
  propertyName?: InputMaybe<TableStringFilterInput>;
};

export type ListPropertiesSearchType = {
  __typename?: 'ListPropertiesSearchType';
  address1?: Maybe<TableStringFilterType>;
  administrativeArea?: Maybe<TableStringFilterType>;
  locality?: Maybe<TableStringFilterType>;
  pid?: Maybe<TableStringFilterType>;
  postalCode?: Maybe<TableStringFilterType>;
  propertyName?: Maybe<TableStringFilterType>;
};

export type ListPropertiesSortInput = {
  altId?: InputMaybe<TableSortInput>;
  host?: InputMaybe<ListHostSortInput>;
  hostName?: InputMaybe<TableSortInput>;
  pid?: InputMaybe<TableSortInput>;
  propertyName?: InputMaybe<TableSortInput>;
  status?: InputMaybe<TableSortInput>;
};

export type ListPropertiesSortType = {
  __typename?: 'ListPropertiesSortType';
  altId?: Maybe<TableSortType>;
  hostName?: Maybe<TableSortType>;
  pid?: Maybe<TableSortType>;
  propertyName?: Maybe<TableSortType>;
  status?: Maybe<TableSortType>;
};

export type ListReservationTermsInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  siteId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListReservationsByDriverInput = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type ListReservationsInput = {
  /** ID of the card to filter reservations for; Required for listReservationsByCard */
  cardId?: InputMaybe<Scalars['ID']>;
  /** ID of the charger to look up reservations for; Required for listReservations query */
  chargerId?: InputMaybe<Scalars['ID']>;
  /** ID of the connector to look up reservations for; Required for listAvailableSlots query */
  connectorId?: InputMaybe<Scalars['ID']>;
  /** The end range of reservations to look up; Required for listReservations, listReservationsByDriver, listAvailableSlots queries */
  endDate?: InputMaybe<Scalars['Date']>;
  /** The beginning range of reservations to look up; Required for listReservations, listReservationsByDriver, listAvailableSlots queries */
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListRoutesInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListRoutesSearchInput>;
  siteId: Scalars['UUID'];
  sort?: InputMaybe<ListRoutesSortInput>;
};

export type ListRoutesSearchInput = {
  cityFactor?: InputMaybe<TableStringFilterInput>;
  departurePropertyId?: InputMaybe<TableStringFilterInput>;
  routeDistance?: InputMaybe<TableStringFilterInput>;
  routeName?: InputMaybe<TableStringFilterInput>;
  scheduledDeparture?: InputMaybe<TableStringFilterInput>;
};

export type ListRoutesSearchType = {
  __typename?: 'ListRoutesSearchType';
  cityFactor?: Maybe<TableStringFilterType>;
  departurePropertyId?: Maybe<TableStringFilterType>;
  routeDistance?: Maybe<TableStringFilterType>;
  routeName?: Maybe<TableStringFilterType>;
  scheduledDeparture?: Maybe<TableStringFilterType>;
};

export type ListRoutesSortInput = {
  cityFactor?: InputMaybe<TableSortType>;
  routeDistance?: InputMaybe<TableSortType>;
  routeName?: InputMaybe<TableSortType>;
  scheduledDeparture?: InputMaybe<TableSortType>;
};

export type ListRoutesSortType = {
  __typename?: 'ListRoutesSortType';
  cityFactor?: Maybe<TableSortType>;
  routeDistance?: Maybe<TableSortType>;
  routeName?: Maybe<TableSortType>;
  scheduledDeparture?: Maybe<TableSortType>;
};

export type ListSalesforceHostContactsFilterInput = {
  contactName?: InputMaybe<TableStringFilterInput>;
  hid?: InputMaybe<TableStringFilterInput>;
};

export type ListSalesforceHostContactsInput = {
  filter?: InputMaybe<ListSalesforceHostContactsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListSalesforceHostContactsSortInput>;
};

export type ListSalesforceHostContactsSortInput = {
  contactName?: InputMaybe<TableSortInput>;
};

export type ListSalesforceHostsFilterInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  hostName?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
};

export type ListSalesforceHostsInput = {
  filter?: InputMaybe<ListSalesforceHostsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListSalesforceHostsSearchInput>;
  sort?: InputMaybe<ListSalesforceHostsSortInput>;
};

export type ListSalesforceHostsSearchInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  address2?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  hid?: InputMaybe<TableStringFilterInput>;
  hostName?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
};

export type ListSalesforceHostsSortInput = {
  hid?: InputMaybe<TableSortInput>;
};

export type ListSalesforceHostsType = {
  __typename?: 'ListSalesforceHostsType';
  hostName?: Maybe<TableStringFilterType>;
};

export type ListSalesforcePropertiesFilterInput = {
  hid?: InputMaybe<TableStringFilterInput>;
  propertyName?: InputMaybe<TableStringFilterInput>;
};

export type ListSalesforcePropertiesFilterType = {
  __typename?: 'ListSalesforcePropertiesFilterType';
  propertyName?: Maybe<TableStringFilterType>;
};

export type ListSalesforcePropertiesInput = {
  filter?: InputMaybe<ListSalesforcePropertiesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListSalesforcePropertiesSearchInput>;
  sort?: InputMaybe<ListSalesforcePropertiesSortInput>;
  total?: InputMaybe<Scalars['Int']>;
};

export type ListSalesforcePropertiesSearchInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  pid?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
  propertyName?: InputMaybe<TableStringFilterInput>;
};

export type ListSalesforcePropertiesSearchType = {
  __typename?: 'ListSalesforcePropertiesSearchType';
  address1?: Maybe<TableStringFilterType>;
  administrativeArea?: Maybe<TableStringFilterType>;
  locality?: Maybe<TableStringFilterType>;
  pid?: Maybe<TableStringFilterType>;
  postalCode?: Maybe<TableStringFilterType>;
  propertyName?: Maybe<TableStringFilterType>;
};

export type ListSalesforcePropertiesSortInput = {
  hostName?: InputMaybe<TableSortInput>;
  pid?: InputMaybe<TableSortInput>;
  propertyName?: InputMaybe<TableSortInput>;
};

export type ListSalesforcePropertiesSortType = {
  __typename?: 'ListSalesforcePropertiesSortType';
  hostName?: Maybe<TableSortType>;
  pid?: Maybe<TableSortType>;
  propertyName?: Maybe<TableSortType>;
};

export type ListSessionFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchText?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListSessionMaintFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  repairOnly?: InputMaybe<Scalars['Boolean']>;
  searchText?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListSessionsConsumptionForExtendData = {
  __typename?: 'ListSessionsConsumptionForExtendData';
  chargerName: Scalars['String'];
  connectorType?: Maybe<Scalars['String']>;
  /** Date of the session */
  date: Scalars['Date'];
  /** Time in AM/PM format that the session ended */
  endTime?: Maybe<Scalars['String']>;
  /** Total power value dispensed in the session in kWh */
  powerValue: Scalars['Float'];
  /** Total session duration in minutes */
  sessionDuration: Scalars['Int'];
  sessionId: Scalars['String'];
  sessionVendorId?: Maybe<Scalars['String']>;
  siteName: Scalars['String'];
  /** Source of what event triggered the session start */
  startSource?: Maybe<Scalars['String']>;
  /** Time in AM/PM format that the session started */
  startTime: Scalars['String'];
};

/** Filter the session consumption data in that datePreset, for all chargers in these site altIds, return all chargers if siteIds not sent */
export type ListSessionsConsumptionForExtendInput = {
  /** Filter the sessions by chargers, if not send will return for all chargers */
  chargerIds?: InputMaybe<Array<Scalars['ID']>>;
  /** if false will retrieve on going sessions too, default value is true */
  completedSessionOnly?: InputMaybe<Scalars['Boolean']>;
  datePreset?: InputMaybe<SessionDatePreset>;
  endDate?: InputMaybe<Scalars['Date']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  /** Filter the sessions by chargers in these sites, if not send will return for all sites */
  siteIds?: InputMaybe<Array<Scalars['ID']>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListSessionsConsumptionForExtendWithMeta = {
  __typename?: 'ListSessionsConsumptionForExtendWithMeta';
  edges?: Maybe<Array<ListSessionsConsumptionForExtendData>>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type ListSessionsFilterInput = {
  card_altId?: InputMaybe<TableStringFilterInput>;
  connector_evse_charger_altId?: InputMaybe<TableStringFilterInput>;
  connector_evse_charger_locationId?: InputMaybe<TableStringFilterInput>;
  endTime?: InputMaybe<TableTimestampRangeFilterInput>;
  sessionId?: InputMaybe<TableStringFilterInput>;
  sessionStartOn?: InputMaybe<TableTimestampRangeFilterInput>;
  sessionStoppedOn?: InputMaybe<TableTimestampRangeFilterInput>;
  startSource?: InputMaybe<TableStringFilterInput>;
  startTime?: InputMaybe<TableTimestampRangeFilterInput>;
};

export type ListSessionsFilterType = {
  __typename?: 'ListSessionsFilterType';
  card_altId?: Maybe<TableStringFilterType>;
  connector_evse_charger_locationId?: Maybe<TableStringFilterType>;
  sessionId?: Maybe<TableStringFilterType>;
  sessionStartOn?: Maybe<TableTimestampRangeFilterType>;
  sessionStoppedOn?: Maybe<TableTimestampRangeFilterType>;
  startSource?: Maybe<TableStringFilterType>;
};

export type ListSessionsFiltersType = {
  __typename?: 'ListSessionsFiltersType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ListSessionsInput = {
  filter?: InputMaybe<ListSessionsFilterInput>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  search?: InputMaybe<ListSessionsSearchInput>;
  sort?: InputMaybe<ListSessionsSortInput>;
};

export type ListSessionsMaintFiltersType = {
  __typename?: 'ListSessionsMaintFiltersType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  repairOnly?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ListSessionsMaintInput = {
  filters?: InputMaybe<ListSessionMaintFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListSessionsSearchInput = {
  card_externalNumber?: InputMaybe<TableStringFilterInput>;
  chargerId?: InputMaybe<TableStringFilterInput>;
  sessionId?: InputMaybe<TableStringFilterInput>;
};

export type ListSessionsSearchType = {
  __typename?: 'ListSessionsSearchType';
  chargerId?: Maybe<TableStringFilterType>;
  sessionId?: Maybe<TableStringFilterType>;
};

export type ListSessionsSortInput = {
  sessionId?: InputMaybe<TableSortInput>;
};

export type ListShpHostContactsInput = {
  hostId: Scalars['ID'];
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
};

export type ListShpHostsInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpProjectMilestonesActivityInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  milestoneFilters?: InputMaybe<Array<ShpFilter>>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpProjectsInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpPropertiesInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpPropertiesWithLeastProjectStatusInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  id?: InputMaybe<Scalars['ID']>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpPropertyProjectInput = {
  pageParams?: InputMaybe<PageParams>;
  projectFilters?: InputMaybe<Array<ShpFilter>>;
  propertyFilters?: InputMaybe<Array<ShpFilter>>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListShpUsersInput = {
  filters?: InputMaybe<Array<ShpFilter>>;
  pageParams?: InputMaybe<PageParams>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
};

export type ListSiteFilterType = {
  __typename?: 'ListSiteFilterType';
  and?: Maybe<SiteFilterType>;
  charger?: Maybe<ListChargersRootFilterType>;
  chargers_evses_connectors_connectorTypeId?: Maybe<TableIntFilterType>;
  chargers_evses_connectors_outputWatts?: Maybe<TableIntFilterType>;
  distance?: Maybe<Scalars['Float']>;
  distinct?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  neLat?: Maybe<Scalars['Float']>;
  neLng?: Maybe<Scalars['Float']>;
  or?: Maybe<SiteFilterType>;
  property?: Maybe<ListPropertiesRootFilterType>;
  siteStatusId?: Maybe<TableStringFilterType>;
  swLat?: Maybe<Scalars['Float']>;
  swLng?: Maybe<Scalars['Float']>;
};

export type ListSiteImagesInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteId: Scalars['ID'];
};

export type ListSiteSearchType = {
  __typename?: 'ListSiteSearchType';
  address1?: Maybe<TableStringFilterType>;
  administrativeArea?: Maybe<TableStringFilterType>;
  locality?: Maybe<TableStringFilterType>;
  postalCode?: Maybe<TableStringFilterType>;
  property_host_hostName?: Maybe<TableStringFilterType>;
  sid?: Maybe<TableStringFilterType>;
  siteName?: Maybe<TableStringFilterType>;
};

export type ListSitesConsumptionForExtendData = {
  __typename?: 'ListSitesConsumptionForExtendData';
  /** Address of that site */
  address?: Maybe<Scalars['String']>;
  siteId: Scalars['String'];
  siteName: Scalars['String'];
  /** Total chargers in that site, in that time interval */
  totalChargers: Scalars['Int'];
  /** Total sessions in that site, in that time interval */
  totalSessions: Scalars['Int'];
  /** Total cost value of all the sessions in $, in that site, in that time interval */
  totalSessionsCost: Scalars['Float'];
  /** Total power value dispensed in all the sessions in kWh, in that site, in that time interval */
  totalSessionsPower: Scalars['Float'];
};

/** Filter the session consumption data in that datePreset, for all sessions in these site altIds */
export type ListSitesConsumptionForExtendFilterInput = {
  datePreset?: InputMaybe<SessionDatePreset>;
  endDate?: InputMaybe<Scalars['Date']>;
  /** Filter the sessions in these sites, if not send will return for all sites */
  siteIds?: InputMaybe<Array<Scalars['ID']>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListSitesConsumptionForExtendInput = {
  filter: ListSitesConsumptionForExtendFilterInput;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListSitesConsumptionForExtendWithMeta = {
  __typename?: 'ListSitesConsumptionForExtendWithMeta';
  edges?: Maybe<Array<ListSitesConsumptionForExtendData>>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type ListSitesFilterInput = {
  and?: InputMaybe<SiteFilterInput>;
  charger?: InputMaybe<ListChargersRootFilterInput>;
  chargers_evses_connectors_connectorTypeId?: InputMaybe<TableIntFilterInput>;
  distance?: InputMaybe<Scalars['Float']>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  neLat?: InputMaybe<Scalars['Float']>;
  neLng?: InputMaybe<Scalars['Float']>;
  or?: InputMaybe<SiteFilterInput>;
  property?: InputMaybe<ListPropertiesRootFilterInput>;
  siteStatusId?: InputMaybe<TableIntFilterInput>;
  swLat?: InputMaybe<Scalars['Float']>;
  swLng?: InputMaybe<Scalars['Float']>;
};

export type ListSitesForMobileInput = {
  /** An array of integers used to filter by connector types. */
  connectorTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** An integer used to find sites within a radius. Units in miles. */
  distance: Scalars['Int'];
  /** If this flag is set to true and connectorTypeIds has CHADEMO site supports Tesla charging */
  hasTeslaAdapter?: InputMaybe<Scalars['Boolean']>;
  /** An float for latitude of the driver or POI. */
  latitude: Scalars['Float'];
  /** An float for longitude of the driver or POI. */
  longitude: Scalars['Float'];
  /** An array of integers used to filter network operators. */
  networkOperatorIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** An integer for the min desired output in kW filter */
  outputKwMax?: InputMaybe<Scalars['Int']>;
  /** An integer for the min desired output in kW filter */
  outputKwMin?: InputMaybe<Scalars['Int']>;
  /** DEPRECATED - no longer used in listSitesForMobile */
  outputWattsMax?: InputMaybe<Scalars['Int']>;
  /** DEPRECATED - no longer used in listSitesForMobile */
  outputWattsMin?: InputMaybe<Scalars['Int']>;
  /** A boolean flag which applies a true/false filter to the RESERVABLE property of the results returned. */
  reservable?: InputMaybe<Scalars['Boolean']>;
  /** A string used to search against the name, displayName, adddress1, city, zipCode, and usaStateName. */
  search?: InputMaybe<Scalars['String']>;
  /** An array of integers used to filter vehicle connectors. */
  vehicleConnectorIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ListSitesInput = {
  filter?: InputMaybe<ListSitesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListSitesSearchInput>;
  sort?: InputMaybe<ListSitesSortInput>;
};

export type ListSitesSearchInput = {
  address1?: InputMaybe<TableStringFilterInput>;
  administrativeArea?: InputMaybe<TableStringFilterInput>;
  displayName?: InputMaybe<TableStringFilterInput>;
  locality?: InputMaybe<TableStringFilterInput>;
  postalCode?: InputMaybe<TableStringFilterInput>;
  property_host_hostName?: InputMaybe<TableStringFilterInput>;
  sid?: InputMaybe<TableStringFilterInput>;
  siteName?: InputMaybe<TableStringFilterInput>;
};

export type ListSitesSessionConsumptionFilterType = {
  __typename?: 'ListSitesSessionConsumptionFilterType';
  siteId?: Maybe<Scalars['UUID']>;
};

export type ListSitesSessionConsumptionInput = {
  endDate: Scalars['Date'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListSitesSessionConsumptionSearchInput>;
  siteIds: Array<Scalars['UUID']>;
  sort?: InputMaybe<ListSitesSessionConsumptionSortInput>;
  startDate: Scalars['Date'];
  timeZone: Scalars['RequiredString'];
};

export type ListSitesSessionConsumptionSearchInput = {
  vehicleIdentifier?: InputMaybe<TableStringFilterInput>;
};

export type ListSitesSessionConsumptionSearchType = {
  __typename?: 'ListSitesSessionConsumptionSearchType';
  vehicleIdentifier?: Maybe<TableStringFilterType>;
};

export type ListSitesSessionConsumptionSortInput = {
  date?: InputMaybe<TableSortType>;
  startTime?: InputMaybe<TableSortType>;
};

export type ListSitesSessionConsumptionSortType = {
  __typename?: 'ListSitesSessionConsumptionSortType';
  date?: Maybe<TableSortType>;
  startTime?: Maybe<TableSortType>;
};

export type ListSitesSortInput = {
  distance?: InputMaybe<TableSortInput>;
  property?: InputMaybe<ListPropertiesSortInput>;
  sid?: InputMaybe<TableSortInput>;
  siteName?: InputMaybe<TableSortInput>;
  siteStatusId?: InputMaybe<TableSortInput>;
};

export type ListSitesSortType = {
  __typename?: 'ListSitesSortType';
  hostName?: Maybe<TableSortType>;
  sid?: Maybe<TableSortType>;
  siteName?: Maybe<TableSortType>;
  siteStatusId?: Maybe<TableSortType>;
};

export type ListStatementsInput = {
  /** The end date in ISO format */
  endDate?: InputMaybe<Scalars['Date']>;
  /** The start date in ISO format */
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListSwitchgearsInput = {
  siteAltId?: InputMaybe<Scalars['String']>;
};

export type ListTagsFilterInput = {
  description?: InputMaybe<TableStringFilterInput>;
  tagName?: InputMaybe<TableStringFilterInput>;
};

export type ListTagsInput = {
  filter?: InputMaybe<ListTagsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListTagsSearchInput>;
  sort?: InputMaybe<ListTagsSortInput>;
};

export type ListTagsSearchInput = {
  tagName?: InputMaybe<TableStringFilterInput>;
};

export type ListTagsSearchType = {
  __typename?: 'ListTagsSearchType';
  tagName?: Maybe<TableStringFilterType>;
};

export type ListTagsSortInput = {
  tagName?: InputMaybe<TableSortInput>;
};

export type ListTagsSortType = {
  __typename?: 'ListTagsSortType';
  tagName?: Maybe<Scalars['String']>;
};

export type ListTariffConnectorTypesInput = {
  tariffId: Scalars['ID'];
};

export type ListTariffsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListTariffsSearchInput>;
  sort?: InputMaybe<ListTariffsSortInput>;
};

export type ListTariffsSearchInput = {
  tariffDescription?: InputMaybe<TableStringFilterInput>;
  tariffName?: InputMaybe<TableStringFilterInput>;
};

export type ListTariffsSearchType = {
  __typename?: 'ListTariffsSearchType';
  tariffDescription?: Maybe<TableStringFilterType>;
  tariffName?: Maybe<TableStringFilterType>;
};

export type ListTariffsSortInput = {
  altId?: InputMaybe<TableSortInput>;
  createdAt?: InputMaybe<TableSortInput>;
  tariffDescription?: InputMaybe<TableSortInput>;
  tariffName?: InputMaybe<TableSortInput>;
  tariffRank?: InputMaybe<TableSortInput>;
};

export type ListTariffsSortType = {
  __typename?: 'ListTariffsSortType';
  altId?: Maybe<TableSortType>;
  createdAt?: Maybe<TableSortType>;
  tariffDescription?: Maybe<TableSortType>;
  tariffName?: Maybe<TableSortType>;
  tariffRank?: Maybe<TableSortType>;
};

export type ListTicketInput = {
  filter?: InputMaybe<ListTicketsFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListTicketsSearchInput>;
  sort?: InputMaybe<ListTicketsSortInput>;
};

export type ListTicketsFilterInput = {
  issueType?: InputMaybe<TableStringFilterInput>;
  priority?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
};

export type ListTicketsFilterType = {
  __typename?: 'ListTicketsFilterType';
  issueType?: Maybe<TableStringFilterType>;
  priority?: Maybe<TableStringFilterType>;
  status?: Maybe<TableStringFilterType>;
};

export type ListTicketsSearchInput = {
  subject?: InputMaybe<TableStringFilterInput>;
  ticketNumber?: InputMaybe<TableStringFilterInput>;
};

export type ListTicketsSearchType = {
  __typename?: 'ListTicketsSearchType';
  subject?: Maybe<TableStringFilterType>;
  ticketNumber?: Maybe<TableStringFilterType>;
};

export type ListTicketsSortInput = {
  ticketNumber?: InputMaybe<TableSortType>;
};

export type ListTicketsSortType = {
  __typename?: 'ListTicketsSortType';
  ticketNumber?: Maybe<TableSortType>;
};

export type ListTransactionsForMobileInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['Date'];
};

export type ListTransactionsInput = {
  accountId: Scalars['ID'];
  cardId?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  startDate: Scalars['Date'];
};

export type ListUnassociatedChargersForFleetInput = {
  siteId: Scalars['ID'];
};

export type ListUploadsFilterInput = {
  url?: InputMaybe<TableStringFilterInput>;
};

export type ListUploadsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ListUploadsFilterInput>;
};

export type ListUsersInput = {
  filters?: InputMaybe<ListUsersInputFiltersInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
};

export type ListUsersInputFiltersInput = {
  promotion?: InputMaybe<Scalars['String']>;
  searchText?: InputMaybe<Scalars['String']>;
};

export type ListUsersInputFiltersType = {
  __typename?: 'ListUsersInputFiltersType';
  promotion?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
};

export type ListVehicleConnectorsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListVehiclesInput = {
  fuzzySearch?: InputMaybe<Scalars['SanitizeString']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListWarehousesFilterInput = {
  warehouseName?: InputMaybe<TableStringFilterInput>;
};

export type ListWarehousesInput = {
  filter?: InputMaybe<ListWarehousesFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ListWarehousesSortInput>;
};

export type ListWarehousesSortInput = {
  warehouseName?: InputMaybe<TableSortInput>;
};

export type ListWarehousesSortType = {
  __typename?: 'ListWarehousesSortType';
  warehouseName?: Maybe<TableSortInput>;
};

export type ListkWhByDayFilterType = {
  __typename?: 'ListkWhByDayFilterType';
  endDate?: Maybe<Scalars['Date']>;
  markets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  promotion?: Maybe<Scalars['String']>;
  promotionCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ListkWhByDayFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  markets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['String']>;
  promotionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ListkWhByDayInput = {
  filters?: InputMaybe<ListkWhByDayFiltersInput>;
};

export type LoginPartnerDriverResult = {
  __typename?: 'LoginPartnerDriverResult';
  promotionCode: Scalars['String'];
  promotionRef: Scalars['String'];
  promotionType: Scalars['String'];
};

export enum MaintenanceVendor {
  /** BTC */
  Btc = 'BTC',
  /** MaxGen */
  Maxgen = 'MAXGEN'
}

export type MandrillResponse = {
  __typename?: 'MandrillResponse';
  mandrillId: Scalars['ID'];
  recipientEmail: Scalars['String'];
  status: Scalars['String'];
};

export enum Manufacturer {
  /** ABB */
  Abb = 'ABB',
  /** AV */
  Av = 'AV',
  Bosch = 'BOSCH',
  /** BTC */
  Btc = 'BTC',
  /** Delta */
  Delta = 'DELTA',
  Efacec = 'EFACEC',
  /** LiteOn */
  Liteon = 'LITEON',
  /** Nissan */
  Nissan = 'NISSAN',
  Semaconnect = 'SEMACONNECT',
  /** Signet */
  Signet = 'SIGNET',
  /** SPX */
  Spx = 'SPX'
}

export type Media = {
  __typename?: 'Media';
  altId: Scalars['UUID'];
  createdAt?: Maybe<Scalars['Date']>;
  encoding?: Maybe<Scalars['String']>;
  fileName: Scalars['String'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
};

export type Metadata = {
  __typename?: 'Metadata';
  creationTime: Scalars['String'];
  lastSignInTime: Scalars['String'];
};

export type MilestoneNotification = {
  __typename?: 'MilestoneNotification';
  siteHost?: Maybe<Array<MilestoneSiteHostNotificationItem>>;
  successManager?: Maybe<Array<MilestoneSuccessManagerNotificationItem>>;
};

export type MilestoneSiteHostNotificationItem = {
  __typename?: 'MilestoneSiteHostNotificationItem';
  capability: SiteHostCapabilityType;
  notification?: Maybe<ShpNotificationType>;
};

export type MilestoneSuccessManagerNotificationItem = {
  __typename?: 'MilestoneSuccessManagerNotificationItem';
  capability: SuccessManagerCapabilityType;
  notification?: Maybe<ShpNotificationType>;
};

export type MinimumStartDate = {
  __typename?: 'MinimumStartDate';
  filters?: Maybe<MinimumStartDateFilterType>;
  minimumDate?: Maybe<Scalars['Date']>;
};

export type MinimumStartDateFilterInput = {
  promotion?: InputMaybe<Scalars['String']>;
};

export type MinimumStartDateFilterType = {
  __typename?: 'MinimumStartDateFilterType';
  promotion?: Maybe<Scalars['String']>;
};

export type MinimumStartDateInput = {
  filters?: InputMaybe<MinimumStartDateFilterInput>;
};

export type MobileTransaction = {
  __typename?: 'MobileTransaction';
  authorization?: Maybe<Scalars['String']>;
  billingTax?: Maybe<Scalars['Float']>;
  charger?: Maybe<Charger>;
  createdAt?: Maybe<Scalars['Date']>;
  driverName?: Maybe<Scalars['String']>;
  energyDeliveredKw?: Maybe<Scalars['Float']>;
  lineItems?: Maybe<Array<Maybe<MobileTransactionLineItem>>>;
  networkOperator?: Maybe<NetworkOperator>;
  sessionDuration?: Maybe<Scalars['Time']>;
  sessionId?: Maybe<Scalars['String']>;
  site?: Maybe<Site>;
  subtotal?: Maybe<Scalars['Float']>;
  transactionCategory?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['ID']>;
};

export type MobileTransactionLineItem = {
  __typename?: 'MobileTransactionLineItem';
  amount?: Maybe<Scalars['Float']>;
  comments?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['String']>;
};

export type MobileTransactionsWithMeta = {
  __typename?: 'MobileTransactionsWithMeta';
  edges?: Maybe<Array<Maybe<MobileTransaction>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type MonthlyUtilization = {
  __typename?: 'MonthlyUtilization';
  altId: Scalars['ID'];
  id: Scalars['ID'];
  month: Scalars['Int'];
  utilization: Scalars['Float'];
  year: Scalars['Int'];
};

export type MonthlyUtilizationInput = {
  month: Scalars['Int'];
  utilization: Scalars['Float'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateCard?: Maybe<Scalars['Void']>;
  activateCardForMobile?: Maybe<Scalars['Void']>;
  activateCards?: Maybe<Array<Maybe<Card>>>;
  /** Mutation for adding chargers to a charger group */
  addChargersToChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  addCustomAuthClaim: FirebaseUser;
  addHostContactToMilestone: Scalars['Boolean'];
  assignCard?: Maybe<Card>;
  assignCardForMobile?: Maybe<Card>;
  assignCards?: Maybe<Array<Maybe<Card>>>;
  assignRouteToFleetVehicle?: Maybe<AssignRouteSuccess>;
  assignTripToFleetVehicle?: Maybe<FleetVehicle>;
  authenticateUser: AuthResponse;
  blankCustomAuthClaim: FirebaseUser;
  cancelAutochargeEnrollment: AccountVehicle;
  cancelInviteDriver: Driver;
  cancelReservation?: Maybe<Reservation>;
  checkDriverFirebase?: Maybe<Scalars['Void']>;
  checkDriverPhoneNumber: PhoneNumberCheck;
  completeAutochargeEnrollment?: Maybe<Scalars['Void']>;
  createAccount?: Maybe<Account>;
  createAccountOwner: Driver;
  createAccountOwnerWithoutPhone: Driver;
  createAccountVehicle?: Maybe<AccountVehicle>;
  createAdHocContract?: Maybe<AdHocContract>;
  createAlert?: Maybe<Alert>;
  createCabinetModel?: Maybe<CabinetModel>;
  createCard?: Maybe<Card>;
  createCardOrder?: Maybe<Scalars['Void']>;
  createCharger: Charger;
  /** Mutation for creating a charger group */
  createChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  createChargerModel: ChargerModel;
  createChargingSystemAdmin?: Maybe<ChargingSystem>;
  createCircuit?: Maybe<Circuit>;
  createClientToken: ClientToken;
  createConnectorForFleet?: Maybe<Connector>;
  createContact?: Maybe<Contact>;
  createContract?: Maybe<Contract>;
  createCostTariff?: Maybe<CostTariff>;
  /** This is to create tag and tags_chargers when syncing tag from Driivz through kafka lambda */
  createDriivzTag?: Maybe<Tag>;
  createDriver: Driver;
  createDriverForMobile: Driver;
  createEmailList?: Maybe<EmailList>;
  createEmailListRecipient?: Maybe<EmailListRecipient>;
  createEnergyRate?: Maybe<EnergyRate>;
  createExtendHost: ExtendHost;
  createExtendUser?: Maybe<ExtendUser>;
  createFcmUserRole: FirebaseUser;
  createFleet?: Maybe<Fleet>;
  createFleetUser: User;
  createFleetVehicle?: Maybe<FleetVehicle>;
  createHost: Host;
  createMilestoneDocument?: Maybe<ShpProjectMilestoneDocument>;
  createNissanPromoCode?: Maybe<Array<Maybe<Scalars['String']>>>;
  createPaymentCardForMobile?: Maybe<Scalars['Void']>;
  createPlan?: Maybe<Plan>;
  createPlanTariff?: Maybe<Plan>;
  createPortalsUser: CreateUserResult;
  createPromotion: Promotion;
  createPromotionCampaign: PromotionCampaign;
  createProperty: Property;
  createReservation?: Maybe<Reservation>;
  createRoute?: Maybe<Route>;
  createRoutes?: Maybe<Array<Maybe<Route>>>;
  createSession?: Maybe<Session>;
  createShpHost: ShpHost;
  createShpHostContact: ShpUser;
  createShpProject: ShpProject;
  createShpProjectMilestoneContact?: Maybe<ShpProjectMilestoneContact>;
  createShpProperty: ShpProperty;
  createShpUser: ShpUser;
  createSite: Site;
  createSiteForFleet?: Maybe<Site>;
  createSiteForFleetWithRelations?: Maybe<Success>;
  createSwitchgear?: Maybe<Switchgear>;
  createTag?: Maybe<Tag>;
  createTariff?: Maybe<Tariff>;
  createTariffConnectorType?: Maybe<TariffConnectorTypes>;
  createTariffForExtend: TariffForExtend;
  createTariffItem?: Maybe<TariffItem>;
  createTicket?: Maybe<Ticket>;
  createTicketComment?: Maybe<TicketComment>;
  createTicketField?: Maybe<TicketField>;
  createTrip?: Maybe<Trip>;
  createUpload: Media;
  createUploads: Array<Maybe<Media>>;
  createUser: User;
  deactivateCards?: Maybe<Array<Maybe<Card>>>;
  deleteAccountVehicle?: Maybe<Success>;
  deleteCabinetModel?: Maybe<Success>;
  /** Mutation for deleting a charger group */
  deleteChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  deleteChargingSystem?: Maybe<Success>;
  deleteCircuit?: Maybe<Success>;
  deleteCostTariff?: Maybe<Success>;
  /** This is to delete tag and tags_chargers when syncing tag from Driivz through kafka lambda */
  deleteDriivzTag?: Maybe<Scalars['Void']>;
  deleteDriver: Driver;
  deleteEmailList?: Maybe<EmailList>;
  deleteEmailListRecipient?: Maybe<EmailListRecipient>;
  deleteEnergyRate?: Maybe<Success>;
  deleteExtendHost?: Maybe<Success>;
  deleteExtendUserHosts?: Maybe<ExtendUser>;
  deleteFleet?: Maybe<Success>;
  deleteHost: Host;
  deletePaymentMethod?: Maybe<Scalars['Void']>;
  deletePaymentMethodForMobile?: Maybe<Scalars['Void']>;
  deletePlanTariff?: Maybe<Scalars['Void']>;
  deleteRoute?: Maybe<Success>;
  deleteShpHostContact: Scalars['Boolean'];
  deleteShpNotificationControl?: Maybe<ShpNotificationControl>;
  deleteShpProject: Scalars['Boolean'];
  deleteShpUser: Scalars['Boolean'];
  deleteSwitchgear?: Maybe<Success>;
  deleteTag?: Maybe<Tag>;
  deleteTariff?: Maybe<Scalars['Boolean']>;
  deleteTicketField?: Maybe<Success>;
  deleteTrip?: Maybe<Success>;
  deleteUser: DeleteUserResult;
  disassociateAccountVehicle?: Maybe<Success>;
  /** LAMBDA EVENT: displayTariff is a mutation that updates display values on a charger when tariff information pertaining to that charger is updated. THIS SHOULD NOT BE CALLED MANUALLY! */
  displayTariff?: Maybe<Scalars['Void']>;
  /** LAMBDA EVENT: endSessionTariff is a mutation that updates values on the charger and gets triggered by the lambdas when a charge session is ended. THIS SHOULD NOT BE CALLED MANUALLY! */
  endSessionTariff?: Maybe<Scalars['Void']>;
  enrollDriver: Success;
  enrollPortalsDriver: PortalsDriver;
  enrollUserInRewards?: Maybe<Scalars['Void']>;
  expireAllCodesOfCampaign: ExpireCodesOfCampaignResult;
  expireCodesOfCampaign: ExpireCodesOfCampaignResult;
  /** Generates new promotion codes for a promotion. */
  generatePromoCodes: GeneratePromoCodesResult;
  handleAccountEvent?: Maybe<Scalars['Boolean']>;
  handleAccountStatusEvent?: Maybe<Scalars['Boolean']>;
  handleCardEvent?: Maybe<Scalars['Boolean']>;
  handleContractEvent?: Maybe<Scalars['Boolean']>;
  handlePaymentMethodEvent?: Maybe<Scalars['Boolean']>;
  handleSessionEvent?: Maybe<Scalars['Boolean']>;
  handleSessionMeterEvent?: Maybe<Scalars['Boolean']>;
  importAccountDrivers: Scalars['Int'];
  importAccountOwner: Scalars['Int'];
  importAccountVehicles?: Maybe<Scalars['Int']>;
  importCards?: Maybe<Scalars['Int']>;
  importContracts?: Maybe<Scalars['Int']>;
  importHost: Host;
  importPaymentMethods?: Maybe<Scalars['Int']>;
  importProperty: Property;
  importVehicleModels?: Maybe<Array<Maybe<VehicleModel>>>;
  importVehicles?: Maybe<Array<Maybe<ElectricVehicle>>>;
  /** Create a promo code under a Promotion with a specific Campaign and Display Value. */
  initiateCustomOpenEnroll: InitiateCustomOpenEnrollResult;
  /** Create a promo code under the first active Campaign of the input Promotion with an automatically generated Display Value. */
  initiateOpenEnroll: InitiateOpenEnrollResult;
  /** Create a promo code under the first active Campaign of the input Promotion, and set the Display Value to the input Membership Number. */
  initiateOpenEnrollForAAA: AaaOpenEnrollPromoCode;
  inviteDriver: MandrillResponse;
  listVehicleModels?: Maybe<Array<Maybe<VehicleModel>>>;
  loginPartnerDriver: LoginPartnerDriverResult;
  /** @deprecated Cleanup - use optInPromotions instead! */
  optIn?: Maybe<OptIn>;
  optInPromotions?: Maybe<Scalars['Void']>;
  redeemDriver: PortalsDriver;
  redeemExternalPromotion: ExternalPromotionResult;
  redeemPromotion: PortalsDriver;
  refreshTags?: Maybe<Array<Maybe<Charger>>>;
  registerAccountOwner: Driver;
  removeAssignment?: Maybe<FleetVehicle>;
  /** Mutation for removing chargers from a charger group */
  removeChargersFromChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  removeDriver?: Maybe<Scalars['Void']>;
  removeFleetVehicle?: Maybe<Success>;
  removeHostContactFromMilestone: Scalars['Boolean'];
  replaceCard?: Maybe<Card>;
  reserveCards?: Maybe<Array<Maybe<Card>>>;
  resetChargerForExtend?: Maybe<Scalars['Void']>;
  resetDriverPassword: MandrillResponse;
  restartEngineSite?: Maybe<RestartEngineSiteResult>;
  /** Remove a phone number from all databases, freeing the number to be used again */
  reusePhoneNumber?: Maybe<Scalars['Void']>;
  root?: Maybe<Scalars['SanitizeString']>;
  sendCardOrderNotifications?: Maybe<Scalars['Void']>;
  sendContractNotifications?: Maybe<Scalars['Void']>;
  sendEmailMessage?: Maybe<SendSuccess>;
  sendEmailToList?: Maybe<SendSuccess>;
  sendPasswordResetEmail?: Maybe<SendSuccess>;
  sendPaymentMethodNotifications?: Maybe<Scalars['Void']>;
  sendRewardsConfirmationEmail?: Maybe<SendRewardsConfirmationEmailReturn>;
  sessionStartRequest?: Maybe<SessionStartResponse>;
  /** LAMBDA EVENT: sessionTariff is a mutation that updates values on the charger and gets triggered by the lambdas when a charge session is initiated. THIS SHOULD NOT BE CALLED MANUALLY! */
  sessionTariff?: Maybe<Scalars['Void']>;
  setChargingProfile: SetChargingProfileStatusResponse;
  setPrimaryCardForMobile?: Maybe<Scalars['Void']>;
  /** LAMBDA EVENT: setTariff is a mutation that updates pricing values on a charger when tariff information pertaining to that charger is updated. THIS SHOULD NOT BE CALLED MANUALLY! */
  setTariff?: Maybe<Scalars['Void']>;
  startAutochargeEnrollment: AccountVehicle;
  startCharge?: Maybe<Scalars['Void']>;
  startChargeForFleet?: Maybe<Scalars['Void']>;
  startChargeForMobile?: Maybe<Scalars['Void']>;
  stopCharge?: Maybe<Scalars['Void']>;
  stopChargeForMobile?: Maybe<Scalars['Void']>;
  suspendCards?: Maybe<Array<Maybe<Card>>>;
  syncAssignCard?: Maybe<Card>;
  syncChargerModelConnector?: Maybe<ChargerModelConnector>;
  syncChargerStatus: Charger;
  syncConnector?: Maybe<Connector>;
  syncContract?: Maybe<Contract>;
  syncCreateAccountOwner: Driver;
  syncCreateAdHocContract?: Maybe<AdHocContract>;
  syncCreateCardOrder?: Maybe<CardOrder>;
  syncCreateCharger: Charger;
  syncCreateChargerModel: ChargerModel;
  syncCreateContract?: Maybe<Contract>;
  syncCreateDriver?: Maybe<Driver>;
  syncCreateHost: Host;
  syncCreateProperty: Property;
  syncCreateSite: Site;
  syncPasswordReset: Scalars['String'];
  syncPlan?: Maybe<Plan>;
  syncSite: Site;
  syncUpdateAccount: Account;
  syncUpdateAccountOwner: Driver;
  syncUpdateCharger: Charger;
  syncUpdateDriver?: Maybe<Driver>;
  syncUser?: Maybe<Scalars['Void']>;
  unassignCards?: Maybe<Array<Maybe<Card>>>;
  unassignRouteFromFleetVehicle?: Maybe<FleetVehicle>;
  unassignTripFromFleetVehicle?: Maybe<FleetVehicle>;
  unredeemExternalPromotion: ExternalPromotionResult;
  updateAccount?: Maybe<Account>;
  updateAccountOwner: Driver;
  updateAccountVehicle?: Maybe<AccountVehicle>;
  updateAdHocContract?: Maybe<AdHocContract>;
  updateAlert?: Maybe<Alert>;
  updateCabinetModel?: Maybe<CabinetModel>;
  updateCard?: Maybe<Card>;
  updateCardOrders?: Maybe<Array<Maybe<CardOrder>>>;
  updateCardStatus?: Maybe<Card>;
  updateCharger: Charger;
  /** Mutation for updating a charger group and assing chargers to it */
  updateChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  updateChargerModel: ChargerModel;
  updateChargerModelConnector?: Maybe<ChargerModelConnector>;
  updateChargingSystem?: Maybe<ChargingSystem>;
  updateCircuit?: Maybe<Circuit>;
  updateConnector?: Maybe<Connector>;
  updateConnectorForFleet?: Maybe<Connector>;
  updateConnectorPowerLimit?: Maybe<Connector>;
  updateContract?: Maybe<Contract>;
  updateCostTariff?: Maybe<CostTariff>;
  /** This is to update tag and tags_chargers when syncing tag from Driivz through kafka lambda */
  updateDriivzTag?: Maybe<Tag>;
  updateDriver: Driver;
  updateEmailList?: Maybe<EmailList>;
  updateEmailListRecipient?: Maybe<EmailListRecipient>;
  updateEnergyRate?: Maybe<EnergyRate>;
  updateExtendUserHosts?: Maybe<ExtendUser>;
  updateFleet?: Maybe<Fleet>;
  updateFleetUser: User;
  updateFleetVehicle?: Maybe<FleetVehicle>;
  updateHost: Host;
  updatePartnerAccessToken: PartnerAccessToken;
  updatePartnerDriver: UpdatePartnerResult;
  updatePassword?: Maybe<Scalars['Void']>;
  updatePlan?: Maybe<Plan>;
  updatePlanTariff?: Maybe<Plan>;
  updatePortalsUser: UpdateUserResult;
  updatePromotion: Promotion;
  updatePromotionCampaign: PromotionCampaign;
  updatePromotionLogo: Promotion;
  updateProperty: Property;
  updateRoute?: Maybe<Route>;
  updateSession?: Maybe<Session>;
  updateShpHost: ShpHost;
  updateShpProject: ShpProject;
  updateShpProjectMilestone: ShpProjectMilestone;
  updateShpProjectMilestoneContact?: Maybe<ShpProjectMilestoneContact>;
  updateShpProperty: ShpProperty;
  updateShpUser: ShpUser;
  updateSite: Site;
  updateSiteForExtend: Site;
  updateSiteForFleet?: Maybe<Site>;
  updateSwitchgear?: Maybe<Switchgear>;
  updateTag?: Maybe<Tag>;
  updateTariff?: Maybe<Tariff>;
  updateTariffForExtend: TariffForExtend;
  updateTicketField?: Maybe<TicketField>;
  updateTrip?: Maybe<Trip>;
  updateUser: User;
  upsertCard?: Maybe<Card>;
  upsertCardOrder?: Maybe<CardOrder>;
  upsertPaymentMethod?: Maybe<Scalars['Void']>;
  upsertSessionMeter?: Maybe<SessionMeter>;
  upsertShpNotificationControl?: Maybe<ShpNotificationControl>;
  validateAddress: Address;
  validateSiteForFleet?: Maybe<FleetSiteValidationResult>;
  verifyDriverEmail: MandrillResponse;
};


export type MutationActivateCardArgs = {
  input: ActivateCardInput;
};


export type MutationActivateCardForMobileArgs = {
  input: ActivateCardForMobileInput;
};


export type MutationActivateCardsArgs = {
  input: ActivateCardsInput;
};


export type MutationAddChargersToChargerGroupForExtendArgs = {
  input: AddChargersToChargerGroupForExtendInput;
};


export type MutationAddCustomAuthClaimArgs = {
  customAuthClaims: AddClaimsInput;
};


export type MutationAddHostContactToMilestoneArgs = {
  input: ShpHostContactMilestoneInput;
};


export type MutationAssignCardArgs = {
  input?: InputMaybe<AssignCardInput>;
};


export type MutationAssignCardForMobileArgs = {
  input?: InputMaybe<AssignCardForMobileInput>;
};


export type MutationAssignCardsArgs = {
  input: AssignCardsInput;
};


export type MutationAssignRouteToFleetVehicleArgs = {
  input: AssignFleetVehicleRouteInput;
};


export type MutationAssignTripToFleetVehicleArgs = {
  input: AssignTripToFleetVehicleInput;
};


export type MutationAuthenticateUserArgs = {
  input: AuthenticateUserInput;
};


export type MutationBlankCustomAuthClaimArgs = {
  blankAuthClaims: BlankClaimsInput;
};


export type MutationCancelAutochargeEnrollmentArgs = {
  input: CancelAutochargeEnrollmentInput;
};


export type MutationCancelInviteDriverArgs = {
  input?: InputMaybe<CancelInviteDriverInput>;
};


export type MutationCancelReservationArgs = {
  input: CancelReservationInput;
};


export type MutationCheckDriverFirebaseArgs = {
  input: CheckDriverFirebaseInput;
};


export type MutationCheckDriverPhoneNumberArgs = {
  input: CheckDriverPhoneNumberInput;
};


export type MutationCompleteAutochargeEnrollmentArgs = {
  input: CompleteAutochargeEnrollmentInput;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<CreateAccountInput>;
};


export type MutationCreateAccountOwnerArgs = {
  input?: InputMaybe<CreateAccountOwnerInput>;
};


export type MutationCreateAccountOwnerWithoutPhoneArgs = {
  input?: InputMaybe<CreateAccountOwnerWithoutPhoneInput>;
};


export type MutationCreateAccountVehicleArgs = {
  input?: InputMaybe<CreateAccountVehicleInput>;
};


export type MutationCreateAdHocContractArgs = {
  input: CreateAdHocContractInput;
};


export type MutationCreateAlertArgs = {
  input: CreateAlertInput;
};


export type MutationCreateCabinetModelArgs = {
  input: CreateCabinetModelInput;
};


export type MutationCreateCardArgs = {
  input: CreateCardInput;
};


export type MutationCreateCardOrderArgs = {
  input: CreateCardOrderInput;
};


export type MutationCreateChargerArgs = {
  input?: InputMaybe<CreateChargerInput>;
};


export type MutationCreateChargerGroupForExtendArgs = {
  input: CreateChargerGroupForExtendInput;
};


export type MutationCreateChargerModelArgs = {
  input?: InputMaybe<CreateChargerModelInput>;
};


export type MutationCreateChargingSystemAdminArgs = {
  input: CreateChargingSystemAdminInput;
};


export type MutationCreateCircuitArgs = {
  input: CreateCircuitInput;
};


export type MutationCreateConnectorForFleetArgs = {
  input: CreateConnectorForFleetInput;
};


export type MutationCreateContactArgs = {
  input?: InputMaybe<CreateContactInput>;
};


export type MutationCreateContractArgs = {
  input: CreateContractInput;
};


export type MutationCreateCostTariffArgs = {
  input: CreateCostTariffInput;
};


export type MutationCreateDriivzTagArgs = {
  input?: InputMaybe<DriivzTagInput>;
};


export type MutationCreateDriverArgs = {
  input?: InputMaybe<CreateDriverInput>;
};


export type MutationCreateDriverForMobileArgs = {
  input?: InputMaybe<CreateDriverInput>;
};


export type MutationCreateEmailListArgs = {
  input?: InputMaybe<CreateEmailListInput>;
};


export type MutationCreateEmailListRecipientArgs = {
  input?: InputMaybe<CreateEmailListRecipientInput>;
};


export type MutationCreateEnergyRateArgs = {
  input: CreateEnergyRateInput;
};


export type MutationCreateExtendHostArgs = {
  input: CreateExtendHostInput;
};


export type MutationCreateExtendUserArgs = {
  input?: InputMaybe<CreateExtendUserInput>;
};


export type MutationCreateFcmUserRoleArgs = {
  userRole?: InputMaybe<CreateFcmUserRolesInput>;
};


export type MutationCreateFleetArgs = {
  input: CreateFleetInput;
};


export type MutationCreateFleetUserArgs = {
  input: CreateFleetUserInput;
};


export type MutationCreateFleetVehicleArgs = {
  input: CreateFleetVehicleInput;
};


export type MutationCreateHostArgs = {
  input?: InputMaybe<CreateHostInput>;
};


export type MutationCreateMilestoneDocumentArgs = {
  input: CreateMilestoneDocumentInput;
};


export type MutationCreateNissanPromoCodeArgs = {
  input: CreateNissanPromoCodeInput;
};


export type MutationCreatePaymentCardForMobileArgs = {
  input: CreatePaymentCardForMobileInput;
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreatePlanTariffArgs = {
  input: PlanTariffInput;
};


export type MutationCreatePortalsUserArgs = {
  input?: InputMaybe<CreatePortalsUserInput>;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreatePromotionCampaignArgs = {
  input: CreatePromotionCampaignInput;
};


export type MutationCreatePropertyArgs = {
  input?: InputMaybe<CreatePropertyInput>;
};


export type MutationCreateReservationArgs = {
  input: CreateReservationInput;
};


export type MutationCreateRouteArgs = {
  input: CreateRouteInput;
};


export type MutationCreateRoutesArgs = {
  input: Array<CreateRouteInput>;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateShpHostArgs = {
  input: CreateShpHostInput;
};


export type MutationCreateShpHostContactArgs = {
  input: CreateShpHostContactInput;
};


export type MutationCreateShpProjectArgs = {
  input: CreateShpProjectInput;
};


export type MutationCreateShpProjectMilestoneContactArgs = {
  input: CreateShpProjectMilestoneContactInput;
};


export type MutationCreateShpPropertyArgs = {
  input: CreateShpPropertyInput;
};


export type MutationCreateShpUserArgs = {
  input: CreateShpUserInput;
};


export type MutationCreateSiteArgs = {
  input?: InputMaybe<CreateSiteInput>;
};


export type MutationCreateSiteForFleetArgs = {
  input: CreateSiteForFleetInput;
};


export type MutationCreateSiteForFleetWithRelationsArgs = {
  input: CreateSiteForFleetWithRelationsInput;
};


export type MutationCreateSwitchgearArgs = {
  input: CreateSwitchgearInput;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateTariffArgs = {
  input: CreateTariffInput;
};


export type MutationCreateTariffConnectorTypeArgs = {
  input: CreateTariffConnectorTypeInput;
};


export type MutationCreateTariffForExtendArgs = {
  input: CreateTariffForExtendInput;
};


export type MutationCreateTariffItemArgs = {
  input: CreateTariffItemInput;
};


export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};


export type MutationCreateTicketCommentArgs = {
  input: CreateTicketCommentInput;
};


export type MutationCreateTicketFieldArgs = {
  input: CreateTicketFieldInput;
};


export type MutationCreateTripArgs = {
  input: CreateTripInput;
};


export type MutationCreateUploadArgs = {
  input: Scalars['Upload'];
};


export type MutationCreateUploadsArgs = {
  input?: InputMaybe<CreateUploadsInput>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeactivateCardsArgs = {
  input: DeactivateCardsInput;
};


export type MutationDeleteAccountVehicleArgs = {
  input?: InputMaybe<DeleteAccountVehicleInput>;
};


export type MutationDeleteCabinetModelArgs = {
  input: DeleteCabinetModelInput;
};


export type MutationDeleteChargerGroupForExtendArgs = {
  input: DeleteChargerGroupForExtendInput;
};


export type MutationDeleteChargingSystemArgs = {
  input: DeleteChargingSystemInput;
};


export type MutationDeleteCircuitArgs = {
  input: DeleteCircuitInput;
};


export type MutationDeleteCostTariffArgs = {
  input: DeleteCostTariffInput;
};


export type MutationDeleteDriivzTagArgs = {
  input?: InputMaybe<DriivzTagInput>;
};


export type MutationDeleteDriverArgs = {
  input?: InputMaybe<DeleteDriverInput>;
};


export type MutationDeleteEmailListArgs = {
  input?: InputMaybe<DeleteEmailListInput>;
};


export type MutationDeleteEmailListRecipientArgs = {
  input?: InputMaybe<DeleteEmailListRecipientInput>;
};


export type MutationDeleteEnergyRateArgs = {
  input: DeleteEnergyRateInput;
};


export type MutationDeleteExtendHostArgs = {
  input: DeleteExtendHostInput;
};


export type MutationDeleteExtendUserHostsArgs = {
  input?: InputMaybe<DeleteExtendUserHostsInput>;
};


export type MutationDeleteFleetArgs = {
  input: DeleteFleetInput;
};


export type MutationDeleteHostArgs = {
  input?: InputMaybe<DeleteHostInput>;
};


export type MutationDeletePaymentMethodArgs = {
  input: DeletePaymentMethodInput;
};


export type MutationDeletePaymentMethodForMobileArgs = {
  input: DeletePaymentMethodForMobileInput;
};


export type MutationDeletePlanTariffArgs = {
  input: PlanTariffInput;
};


export type MutationDeleteRouteArgs = {
  input: DeleteRouteInput;
};


export type MutationDeleteShpHostContactArgs = {
  input: DeleteShpHostContactInput;
};


export type MutationDeleteShpNotificationControlArgs = {
  input: GetShpNotificationControlInput;
};


export type MutationDeleteShpProjectArgs = {
  input: ShpProjectIdInput;
};


export type MutationDeleteShpUserArgs = {
  input: DeleteShpUserInput;
};


export type MutationDeleteSwitchgearArgs = {
  input: DeleteSwitchgearInput;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteTariffArgs = {
  input: DeleteTariffInput;
};


export type MutationDeleteTicketFieldArgs = {
  input: DeleteTicketFieldInput;
};


export type MutationDeleteTripArgs = {
  input: DeleteTripInput;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDisassociateAccountVehicleArgs = {
  input?: InputMaybe<DisassociateAccountVehicleInput>;
};


export type MutationDisplayTariffArgs = {
  input: DisplayTariffInput;
};


export type MutationEndSessionTariffArgs = {
  input: EndSessionTariffInput;
};


export type MutationEnrollDriverArgs = {
  input: EnrollDriverInput;
};


export type MutationEnrollPortalsDriverArgs = {
  input: EnrollPortalsDriverInput;
};


export type MutationEnrollUserInRewardsArgs = {
  input: EnrollUserInRewardsInput;
};


export type MutationExpireAllCodesOfCampaignArgs = {
  input: ExpireAllCodesOfCampaignInput;
};


export type MutationExpireCodesOfCampaignArgs = {
  input: ExpireCodesOfCampaignInput;
};


export type MutationGeneratePromoCodesArgs = {
  input: GeneratePromoCodesInput;
};


export type MutationHandleAccountEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandleAccountStatusEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandleCardEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandleContractEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandlePaymentMethodEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandleSessionEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationHandleSessionMeterEventArgs = {
  input?: InputMaybe<LambdaEventInput>;
};


export type MutationImportAccountDriversArgs = {
  input?: InputMaybe<ImportAccountOwnerInput>;
};


export type MutationImportAccountOwnerArgs = {
  input?: InputMaybe<ImportAccountOwnerInput>;
};


export type MutationImportAccountVehiclesArgs = {
  input: ImportAccountVehiclesInput;
};


export type MutationImportCardsArgs = {
  input: ImportCardsInput;
};


export type MutationImportContractsArgs = {
  input: ImportContractsInput;
};


export type MutationImportHostArgs = {
  input?: InputMaybe<ImportHostInput>;
};


export type MutationImportPaymentMethodsArgs = {
  input: ImportPaymentMethodsInput;
};


export type MutationImportPropertyArgs = {
  input?: InputMaybe<ImportPropertyInput>;
};


export type MutationImportVehicleModelsArgs = {
  input?: InputMaybe<ImportVehicleModelsInput>;
};


export type MutationImportVehiclesArgs = {
  input: ImportVehiclesInput;
};


export type MutationInitiateCustomOpenEnrollArgs = {
  input: InitiateCustomOpenEnrollInput;
};


export type MutationInitiateOpenEnrollArgs = {
  input: InitiateOpenEnrollInput;
};


export type MutationInitiateOpenEnrollForAaaArgs = {
  input: AaaInitiateOpenEnrollInput;
};


export type MutationInviteDriverArgs = {
  input?: InputMaybe<InviteDriverInput>;
};


export type MutationListVehicleModelsArgs = {
  input?: InputMaybe<GetVehicleModelInput>;
};


export type MutationLoginPartnerDriverArgs = {
  input: PartnerDriverInput;
};


export type MutationOptInArgs = {
  input?: InputMaybe<OptInInput>;
};


export type MutationOptInPromotionsArgs = {
  input?: InputMaybe<OptInPromotionsInput>;
};


export type MutationRedeemDriverArgs = {
  input: RedeemDriverInput;
};


export type MutationRedeemExternalPromotionArgs = {
  input?: InputMaybe<ExternalPromotionInput>;
};


export type MutationRedeemPromotionArgs = {
  input?: InputMaybe<EnrollPortalsDriverInput>;
};


export type MutationRefreshTagsArgs = {
  input?: InputMaybe<RefreshTagsInput>;
};


export type MutationRegisterAccountOwnerArgs = {
  input?: InputMaybe<RegisterAccountOwnerInput>;
};


export type MutationRemoveAssignmentArgs = {
  input: RemoveAssignmentInput;
};


export type MutationRemoveChargersFromChargerGroupForExtendArgs = {
  input: RemoveChargersFromChargerGroupForExtendInput;
};


export type MutationRemoveDriverArgs = {
  input?: InputMaybe<RemoveDriverInput>;
};


export type MutationRemoveFleetVehicleArgs = {
  input: RemoveFleetVehicleInput;
};


export type MutationRemoveHostContactFromMilestoneArgs = {
  input: ShpHostContactMilestoneInput;
};


export type MutationReplaceCardArgs = {
  input: ReplaceCardInput;
};


export type MutationReserveCardsArgs = {
  input: ReserveCardsInput;
};


export type MutationResetChargerForExtendArgs = {
  input: ResetChargerForExtendInput;
};


export type MutationResetDriverPasswordArgs = {
  input?: InputMaybe<ResetDriverPasswordInput>;
};


export type MutationRestartEngineSiteArgs = {
  input: RestartEngineSiteInput;
};


export type MutationReusePhoneNumberArgs = {
  input: ReusePhoneNumberInput;
};


export type MutationSendCardOrderNotificationsArgs = {
  input: CardOrderNotificationInput;
};


export type MutationSendContractNotificationsArgs = {
  input: ContractExpirationInput;
};


export type MutationSendEmailMessageArgs = {
  input?: InputMaybe<SendEmailMessageInput>;
};


export type MutationSendEmailToListArgs = {
  input?: InputMaybe<SendEmailToListInput>;
};


export type MutationSendPasswordResetEmailArgs = {
  input?: InputMaybe<SendPasswordResetInput>;
};


export type MutationSendPaymentMethodNotificationsArgs = {
  input: PaymentMethodExpirationInput;
};


export type MutationSendRewardsConfirmationEmailArgs = {
  input: SendRewardsConfirmationEmailInput;
};


export type MutationSessionStartRequestArgs = {
  input: SessionStartInput;
};


export type MutationSessionTariffArgs = {
  input: SessionTariffInput;
};


export type MutationSetChargingProfileArgs = {
  input?: InputMaybe<SetChargingProfileInput>;
};


export type MutationSetPrimaryCardForMobileArgs = {
  input: SetPrimaryCardForMobileInput;
};


export type MutationSetTariffArgs = {
  input: SetTariffInput;
};


export type MutationStartAutochargeEnrollmentArgs = {
  input: StartAutochargeEnrollmentInput;
};


export type MutationStartChargeArgs = {
  input?: InputMaybe<StartChargeInput>;
};


export type MutationStartChargeForFleetArgs = {
  input?: InputMaybe<StartChargeFleetInput>;
};


export type MutationStartChargeForMobileArgs = {
  input?: InputMaybe<StartChargeForMobileInput>;
};


export type MutationStopChargeArgs = {
  input: StopChargeInput;
};


export type MutationStopChargeForMobileArgs = {
  input: StopChargeForMobileInput;
};


export type MutationSuspendCardsArgs = {
  input: SuspendCardsInput;
};


export type MutationSyncAssignCardArgs = {
  input?: InputMaybe<SyncAssignCardInput>;
};


export type MutationSyncChargerModelConnectorArgs = {
  input?: InputMaybe<SyncConnectorInput>;
};


export type MutationSyncChargerStatusArgs = {
  input?: InputMaybe<SyncChargerStatusInput>;
};


export type MutationSyncConnectorArgs = {
  input?: InputMaybe<SyncConnectorInput>;
};


export type MutationSyncContractArgs = {
  input: SyncContractInput;
};


export type MutationSyncCreateAccountOwnerArgs = {
  input?: InputMaybe<SyncCreateAccountOwnerInput>;
};


export type MutationSyncCreateAdHocContractArgs = {
  input: SyncCreateAdHocContractInput;
};


export type MutationSyncCreateCardOrderArgs = {
  input: SyncCreateCardOrderInput;
};


export type MutationSyncCreateChargerArgs = {
  input?: InputMaybe<SyncCreateChargerInput>;
};


export type MutationSyncCreateChargerModelArgs = {
  input?: InputMaybe<SyncCreateChargerModelInput>;
};


export type MutationSyncCreateContractArgs = {
  input: SyncCreateContractInput;
};


export type MutationSyncCreateDriverArgs = {
  input: SyncDriverInput;
};


export type MutationSyncCreateHostArgs = {
  input?: InputMaybe<SyncCreateHostInput>;
};


export type MutationSyncCreatePropertyArgs = {
  input?: InputMaybe<SyncCreatePropertyInput>;
};


export type MutationSyncCreateSiteArgs = {
  input?: InputMaybe<SyncCreateSiteInput>;
};


export type MutationSyncPasswordResetArgs = {
  input: SyncPasswordResetInput;
};


export type MutationSyncPlanArgs = {
  input: SyncPlanInput;
};


export type MutationSyncSiteArgs = {
  input?: InputMaybe<SyncSiteInput>;
};


export type MutationSyncUpdateAccountArgs = {
  input?: InputMaybe<SyncUpdateAccountInput>;
};


export type MutationSyncUpdateAccountOwnerArgs = {
  input?: InputMaybe<SyncUpdateAccountOwnerInput>;
};


export type MutationSyncUpdateChargerArgs = {
  input?: InputMaybe<SyncUpdateChargerInput>;
};


export type MutationSyncUpdateDriverArgs = {
  input: SyncDriverInput;
};


export type MutationSyncUserArgs = {
  email: Scalars['String'];
  setPhoneNumber?: InputMaybe<Scalars['String']>;
};


export type MutationUnassignCardsArgs = {
  input: UnassignCardsInput;
};


export type MutationUnassignRouteFromFleetVehicleArgs = {
  input: UnassignFleetVehicleRouteInput;
};


export type MutationUnassignTripFromFleetVehicleArgs = {
  input: UnassignTripFromFleetVehicleInput;
};


export type MutationUnredeemExternalPromotionArgs = {
  input?: InputMaybe<ExternalPromotionInput>;
};


export type MutationUpdateAccountArgs = {
  input?: InputMaybe<UpdateAccountInput>;
};


export type MutationUpdateAccountOwnerArgs = {
  input?: InputMaybe<UpdateAccountOwnerInput>;
};


export type MutationUpdateAccountVehicleArgs = {
  input?: InputMaybe<UpdateAccountVehicleInput>;
};


export type MutationUpdateAdHocContractArgs = {
  input: UpdateAdHocContractInput;
};


export type MutationUpdateAlertArgs = {
  input: UpdateAlertInput;
};


export type MutationUpdateCabinetModelArgs = {
  input: UpdateCabinetModelInput;
};


export type MutationUpdateCardArgs = {
  input: UpdateCardInput;
};


export type MutationUpdateCardOrdersArgs = {
  input: UpdateCardOrdersInput;
};


export type MutationUpdateCardStatusArgs = {
  input?: InputMaybe<UpdateCardStatusInput>;
};


export type MutationUpdateChargerArgs = {
  input?: InputMaybe<UpdateChargerInput>;
};


export type MutationUpdateChargerGroupForExtendArgs = {
  input: UpdateChargerGroupForExtendInput;
};


export type MutationUpdateChargerModelArgs = {
  input?: InputMaybe<UpdateChargerModelInput>;
};


export type MutationUpdateChargerModelConnectorArgs = {
  input?: InputMaybe<UpdateConnectorInput>;
};


export type MutationUpdateChargingSystemArgs = {
  input: UpdateChargingSystemInput;
};


export type MutationUpdateCircuitArgs = {
  input: UpdateCircuitInput;
};


export type MutationUpdateConnectorArgs = {
  input?: InputMaybe<UpdateConnectorInput>;
};


export type MutationUpdateConnectorForFleetArgs = {
  input: UpdateConnectorForFleetInput;
};


export type MutationUpdateConnectorPowerLimitArgs = {
  input?: InputMaybe<UpdateConnectorPowerLimitInput>;
};


export type MutationUpdateContractArgs = {
  input: UpdateContractInput;
};


export type MutationUpdateCostTariffArgs = {
  input: UpdateCostTariffInput;
};


export type MutationUpdateDriivzTagArgs = {
  input?: InputMaybe<DriivzTagInput>;
};


export type MutationUpdateDriverArgs = {
  input?: InputMaybe<UpdateDriverInput>;
};


export type MutationUpdateEmailListArgs = {
  input?: InputMaybe<UpdateEmailListInput>;
};


export type MutationUpdateEmailListRecipientArgs = {
  input?: InputMaybe<UpdateEmailListRecipientInput>;
};


export type MutationUpdateEnergyRateArgs = {
  input: UpdateEnergyRateInput;
};


export type MutationUpdateExtendUserHostsArgs = {
  input?: InputMaybe<UpdateExtendUserHostsInput>;
};


export type MutationUpdateFleetArgs = {
  input: UpdateFleetInput;
};


export type MutationUpdateFleetUserArgs = {
  input: UpdateFleetUserInput;
};


export type MutationUpdateFleetVehicleArgs = {
  input: UpdateFleetVehicleInput;
};


export type MutationUpdateHostArgs = {
  input?: InputMaybe<UpdateHostInput>;
};


export type MutationUpdatePartnerAccessTokenArgs = {
  input: UpdatePartnerAccessTokenInput;
};


export type MutationUpdatePartnerDriverArgs = {
  input: UpdatePartnerInput;
};


export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdatePlanArgs = {
  input: UpdatePlanInput;
};


export type MutationUpdatePlanTariffArgs = {
  input: PlanTariffInput;
};


export type MutationUpdatePortalsUserArgs = {
  input?: InputMaybe<UpdatePortalsUserInput>;
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};


export type MutationUpdatePromotionCampaignArgs = {
  input: UpdatePromotionCampaignInput;
};


export type MutationUpdatePromotionLogoArgs = {
  input: UpdatePromotionLogoInput;
};


export type MutationUpdatePropertyArgs = {
  input?: InputMaybe<UpdatePropertyInput>;
};


export type MutationUpdateRouteArgs = {
  input: UpdateRouteInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateShpHostArgs = {
  input: UpdateShpHostInput;
};


export type MutationUpdateShpProjectArgs = {
  input: UpdateShpProjectInput;
};


export type MutationUpdateShpProjectMilestoneArgs = {
  input: UpdateShpProjectMilestoneInput;
};


export type MutationUpdateShpProjectMilestoneContactArgs = {
  input: UpdateShpProjectMilestoneContactInput;
};


export type MutationUpdateShpPropertyArgs = {
  input: UpdateShpPropertyInput;
};


export type MutationUpdateShpUserArgs = {
  input: UpdateShpUserInput;
};


export type MutationUpdateSiteArgs = {
  input?: InputMaybe<UpdateSiteInput>;
};


export type MutationUpdateSiteForExtendArgs = {
  input?: InputMaybe<UpdateSiteForExtendInput>;
};


export type MutationUpdateSiteForFleetArgs = {
  input: UpdateSiteForFleetInput;
};


export type MutationUpdateSwitchgearArgs = {
  input: UpdateSwitchgearInput;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateTariffArgs = {
  input: UpdateTariffInput;
};


export type MutationUpdateTariffForExtendArgs = {
  input: UpdateTariffForExtendInput;
};


export type MutationUpdateTicketFieldArgs = {
  input: UpdateTicketFieldInput;
};


export type MutationUpdateTripArgs = {
  input: UpdateTripInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpsertCardArgs = {
  input: UpsertCardInput;
};


export type MutationUpsertCardOrderArgs = {
  input: UpsertCardOrderInput;
};


export type MutationUpsertPaymentMethodArgs = {
  input: UpsertPaymentMethodInput;
};


export type MutationUpsertSessionMeterArgs = {
  input: UpsertSessionMeterInput;
};


export type MutationUpsertShpNotificationControlArgs = {
  input: UpsertShpNotificationControlInput;
};


export type MutationValidateAddressArgs = {
  input?: InputMaybe<ValidateAddressInput>;
};


export type MutationValidateSiteForFleetArgs = {
  input: ValidateSiteForFleetInput;
};


export type MutationVerifyDriverEmailArgs = {
  input: VerifyDriverEmailInput;
};

export enum NetworkCommunication {
  /** Ethernet */
  Ethernet = 'ETHERNET',
  /** 4G LTE */
  FourGLte = 'FOUR_G_LTE',
  /** NB-IoT */
  NbIot = 'NB_IOT',
  /** Non-Networked */
  NonNetworked = 'NON_NETWORKED',
  /** 3G */
  ThreeG = 'THREE_G',
  /** WiFi */
  Wifi = 'WIFI',
  /** ZigBee */
  Zigbee = 'ZIGBEE'
}

export type NetworkOperator = {
  __typename?: 'NetworkOperator';
  hostId?: Maybe<Scalars['Int']>;
  hostName?: Maybe<Scalars['String']>;
};

/** An object containing the id and name of the network */
export type NetworkOperatorType = {
  __typename?: 'NetworkOperatorType';
  networkOperatorId?: Maybe<Scalars['Int']>;
  networkOperatorName?: Maybe<Scalars['String']>;
};

export type NetworkOperatorWithMeta = {
  __typename?: 'NetworkOperatorWithMeta';
  edges?: Maybe<Array<Maybe<NetworkOperator>>>;
  total?: Maybe<Scalars['Int']>;
};

export type NissanRdr = {
  __typename?: 'NissanRdr';
  form?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  model?: Maybe<Scalars['String']>;
  modelYear?: Maybe<Scalars['Int']>;
  ownerAddress1?: Maybe<Scalars['String']>;
  ownerAddress2?: Maybe<Scalars['String']>;
  ownerCity?: Maybe<Scalars['String']>;
  ownerDayPhone?: Maybe<Scalars['String']>;
  ownerEmailAddress?: Maybe<Scalars['String']>;
  ownerFirstName?: Maybe<Scalars['String']>;
  ownerLastName?: Maybe<Scalars['String']>;
  ownerState?: Maybe<Scalars['String']>;
  ownerZip?: Maybe<Scalars['String']>;
  retailSaleDate?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type NotificationGroup = {
  __typename?: 'NotificationGroup';
  groupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  notificationItems?: Maybe<NotificationItemsWithMeta>;
  sortOrder?: Maybe<Scalars['String']>;
};


export type NotificationGroupNotificationItemsArgs = {
  input?: InputMaybe<ListNotificationItemsInput>;
};

export type NotificationGroupsWithMeta = {
  __typename?: 'NotificationGroupsWithMeta';
  edges?: Maybe<Array<Maybe<NotificationGroup>>>;
  filter?: Maybe<ListNotificationGroupsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListNotificationGroupsSearchType>;
  sort?: Maybe<ListNotificationGroupsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type NotificationItem = {
  __typename?: 'NotificationItem';
  driverLevel?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  notificationDesc?: Maybe<Scalars['String']>;
  notificationGroup?: Maybe<NotificationGroup>;
  notificationName?: Maybe<Scalars['String']>;
  onePrefRequired?: Maybe<Scalars['Boolean']>;
  sortOrder?: Maybe<Scalars['Int']>;
};

export type NotificationItemsWithMeta = {
  __typename?: 'NotificationItemsWithMeta';
  edges?: Maybe<Array<Maybe<NotificationItem>>>;
  filter?: Maybe<ListNotificationItemsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListNotificationItemsSearchType>;
  sort?: Maybe<ListNotificationItemsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type NotificationPreference = {
  __typename?: 'NotificationPreference';
  createdAt?: Maybe<Scalars['Date']>;
  driverId?: Maybe<Scalars['ID']>;
  emailOn?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  notificationItemId?: Maybe<Scalars['ID']>;
  pushOn?: Maybe<Scalars['Boolean']>;
  smsOn?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type NotificationPreferencesWithMeta = {
  __typename?: 'NotificationPreferencesWithMeta';
  edges?: Maybe<Array<Maybe<NotificationPreference>>>;
  filter?: Maybe<ListNotificationPreferencesFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListNotificationPreferencesSearchType>;
  sort?: Maybe<ListNotificationPreferencesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type OptIn = {
  __typename?: 'OptIn';
  /** @deprecated Cleanup */
  insert_id?: Maybe<Scalars['Int']>;
};

export type OptInInput = {
  email?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['String']>;
  promotion_box?: InputMaybe<Scalars['Int']>;
  promotion_copy?: InputMaybe<Scalars['String']>;
};

export type OptInPromotions = {
  __typename?: 'OptInPromotions';
  insertId?: Maybe<Scalars['Int']>;
};

export type OptInPromotionsInput = {
  /** The email address for the user opting to receive promotional communications */
  email?: InputMaybe<Scalars['String']>;
  /** The phone number for the user opting to receive promotional communications */
  mobilePhone?: InputMaybe<Scalars['String']>;
  /** A number indicating whether the user opts in or out (1 = opt-in and 0 = opt-out) */
  promotionBox?: InputMaybe<Scalars['Int']>;
  /** A string describing the subscription terms for the promotional communications */
  promotionCopy?: InputMaybe<Scalars['String']>;
};

export type PageParams = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type PartnerAccessToken = {
  __typename?: 'PartnerAccessToken';
  accessToken?: Maybe<Scalars['String']>;
  authorizedScopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  partnerPlatformId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type PartnerDriver = {
  __typename?: 'PartnerDriver';
  accountNumber?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  partnerAccessToken?: Maybe<PartnerAccessToken>;
  partnerAccessTokenId: Scalars['ID'];
  partnerPlatformId: Scalars['ID'];
  planCode: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PartnerDriverInput = {
  authorizationCode: Scalars['String'];
  platformName: Scalars['String'];
  promotionRef: Scalars['String'];
};

export type PartnerDriverList = {
  __typename?: 'PartnerDriverList';
  edges: Array<PartnerDriver>;
  total: Scalars['Int'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  account?: Maybe<Account>;
  altId?: Maybe<Scalars['ID']>;
  cardNumber?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  expiryMonth?: Maybe<Scalars['Int']>;
  expiryYear?: Maybe<Scalars['Int']>;
  nameOnCard?: Maybe<Scalars['String']>;
  paymentMethodType?: Maybe<FalconConstraint>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type PaymentMethodExpirationInput = {
  monthsFromExp: Scalars['Int'];
};

export type PaymentMethodsWithMeta = {
  __typename?: 'PaymentMethodsWithMeta';
  edges?: Maybe<Array<Maybe<PaymentMethod>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type PdfStatement = {
  __typename?: 'PdfStatement';
  /** @deprecated Use statement instead. */
  base64statement?: Maybe<Scalars['String']>;
  /** A buffer string encoded to base64 (e.g. 'JVBERi0xLjQKJeLjz9M...') */
  statement?: Maybe<Scalars['String']>;
  /** @deprecated Use statement instead. */
  url?: Maybe<Scalars['String']>;
};

export type PhoneNumberCheck = {
  __typename?: 'PhoneNumberCheck';
  associatedEmail?: Maybe<Scalars['String']>;
  phoneNumberAvailable?: Maybe<Scalars['Boolean']>;
};

export type Plan = {
  __typename?: 'Plan';
  altId?: Maybe<Scalars['ID']>;
  badge?: Maybe<Scalars['SanitizeString']>;
  cardBrand?: Maybe<Scalars['SanitizeString']>;
  cardBrandId?: Maybe<Scalars['Int']>;
  contract?: Maybe<Contract>;
  costFactor?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Date']>;
  ctaLabel?: Maybe<Scalars['SanitizeString']>;
  defaultAccountPlan?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  detailHeading?: Maybe<Scalars['SanitizeString']>;
  detailSections?: Maybe<Array<Maybe<DetailSection>>>;
  detailSessionTimes?: Maybe<Array<Maybe<DetailSessionTime>>>;
  displayPlanCard?: Maybe<Scalars['Boolean']>;
  displayToCustomer?: Maybe<Scalars['Boolean']>;
  displayToLoggedOutUser?: Maybe<Scalars['Boolean']>;
  driverRank?: Maybe<Scalars['Int']>;
  elements?: Maybe<ElementsWithMeta>;
  enrollmentClose?: Maybe<Scalars['Date']>;
  enrollmentOpen?: Maybe<Scalars['Date']>;
  financeCode?: Maybe<Scalars['String']>;
  intervalLength?: Maybe<Scalars['Int']>;
  intervalUnit?: Maybe<Scalars['String']>;
  intervalUnitId?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  legalese?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  planCode?: Maybe<Scalars['SanitizeString']>;
  planDescription?: Maybe<Scalars['SanitizeString']>;
  planDiscount?: Maybe<Scalars['Float']>;
  planDisplayName?: Maybe<Scalars['SanitizeString']>;
  planDuration?: Maybe<Scalars['Int']>;
  planName?: Maybe<Scalars['SanitizeString']>;
  planStatus?: Maybe<Scalars['String']>;
  planStatusId?: Maybe<Scalars['Int']>;
  planSubheading?: Maybe<Scalars['SanitizeString']>;
  products?: Maybe<ProductsWithMeta>;
  recurringCost?: Maybe<Scalars['Float']>;
  rolloverPlan?: Maybe<Plan>;
  sortOrder?: Maybe<Scalars['Int']>;
  tariffs?: Maybe<TariffWithMeta>;
  template?: Maybe<Scalars['SanitizeString']>;
  templateId?: Maybe<Scalars['Int']>;
  terminationBehavior?: Maybe<Scalars['String']>;
  terminationBehaviorId?: Maybe<Scalars['Int']>;
  touRegionWithPricing?: Maybe<Array<Maybe<TouRegionWithPricing>>>;
  touRegionWithRangePricing?: Maybe<TouRegionWithRangePricing>;
  vendorId?: Maybe<Scalars['ID']>;
  vinRequiredFlag?: Maybe<Scalars['Boolean']>;
};


export type PlanElementsArgs = {
  input?: InputMaybe<ListElementsInput>;
};


export type PlanProductsArgs = {
  input?: InputMaybe<ListProductsInput>;
};


export type PlanTariffsArgs = {
  input?: InputMaybe<ListTariffsInput>;
};


export type PlanTouRegionWithPricingArgs = {
  input?: InputMaybe<TouRegionWithPricingInput>;
};


export type PlanTouRegionWithRangePricingArgs = {
  input?: InputMaybe<TouRegionWithRangePricingInput>;
};

export type PlanCredit = {
  __typename?: 'PlanCredit';
  altId?: Maybe<Scalars['ID']>;
  creditAmount?: Maybe<Scalars['Float']>;
  creditExpPolicy?: Maybe<Scalars['String']>;
  creditExpPolicyId?: Maybe<Scalars['Int']>;
  creditReoccurrence?: Maybe<Scalars['String']>;
  creditReoccurrenceId?: Maybe<Scalars['Int']>;
  oneTimeCreditAmount?: Maybe<Scalars['Float']>;
};

export type PlanCreditInput = {
  altId?: InputMaybe<Scalars['ID']>;
  creditAmount?: InputMaybe<Scalars['Float']>;
  creditExpPolicyId?: InputMaybe<Scalars['Int']>;
  creditReoccurrenceId?: InputMaybe<Scalars['Int']>;
  oneTimeCreditAmount?: InputMaybe<Scalars['Float']>;
};

export enum PlanStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Inactive */
  Inactive = 'INACTIVE'
}

export type PlanSubscription = {
  __typename?: 'PlanSubscription';
  altId?: Maybe<Scalars['ID']>;
  subscriptionFee?: Maybe<Scalars['Float']>;
  subscriptionReoccurrence?: Maybe<Scalars['String']>;
  subscriptionReoccurrenceId?: Maybe<Scalars['Int']>;
};

export type PlanSubscriptionInput = {
  altId?: InputMaybe<Scalars['ID']>;
  subscriptionFee: Scalars['Float'];
  subscriptionReoccurrence?: InputMaybe<Scalars['String']>;
  subscriptionReoccurrenceId?: InputMaybe<Scalars['Int']>;
};

export type PlanTariffInput = {
  vendorId: Scalars['ID'];
};

export type PlanWithMeta = {
  __typename?: 'PlanWithMeta';
  edges?: Maybe<Array<Maybe<Plan>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListPlansSearchType>;
  sort?: Maybe<ListPlansSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type Port = {
  __typename?: 'Port';
  accessType?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  chargeBoxIdentity?: Maybe<Scalars['String']>;
  concurrentChargingSupported?: Maybe<Scalars['Boolean']>;
  connectors?: Maybe<ConnectorsWithMeta>;
  connectors2?: Maybe<ConnectorsWithMeta>;
  evcId?: Maybe<Scalars['String']>;
  handicapAccessible?: Maybe<Scalars['Boolean']>;
  lastHeartbeat?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['Int']>;
  powerLevel?: Maybe<Scalars['String']>;
  qrCode?: Maybe<Scalars['String']>;
};


export type PortConnectorsArgs = {
  input?: InputMaybe<ListConnectorsInput>;
};


export type PortConnectors2Args = {
  input?: InputMaybe<ListConnectorsInput>;
};

export type PortFilterInput = {
  powerLevel?: InputMaybe<TableStringFilterInput>;
};

export type PortFilterType = {
  __typename?: 'PortFilterType';
  powerLevel?: Maybe<TableStringFilterType>;
};

export type PortInput = {
  accessType?: InputMaybe<Scalars['SanitizeString']>;
  altId?: InputMaybe<Scalars['ID']>;
  chargeBoxIdentity?: InputMaybe<Scalars['SanitizeString']>;
  concurrentChargingSupported?: InputMaybe<Scalars['Boolean']>;
  connectors: Array<InputMaybe<ConnectorInput>>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  handicapAccessible?: InputMaybe<Scalars['Boolean']>;
  lastHeartbeat?: InputMaybe<Scalars['SanitizeString']>;
  legacyId?: InputMaybe<Scalars['SanitizeString']>;
  phone?: InputMaybe<Scalars['SanitizeString']>;
  powerLevel?: InputMaybe<Scalars['SanitizeString']>;
  qrCode?: InputMaybe<Scalars['SanitizeString']>;
};

export type PortalsDriver = {
  __typename?: 'PortalsDriver';
  accountNumber?: Maybe<Scalars['Int']>;
  action?: Maybe<Scalars['String']>;
  activationUrl?: Maybe<Scalars['String']>;
  contractCreated?: Maybe<Scalars['Boolean']>;
  emailAddress?: Maybe<Scalars['String']>;
  isSuccessful?: Maybe<Scalars['Boolean']>;
  planCode?: Maybe<Scalars['String']>;
  platformName?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  welcomeNotificationSent?: Maybe<Scalars['Boolean']>;
};

export type PortalsSession = {
  __typename?: 'PortalsSession';
  address?: Maybe<Scalars['String']>;
  dma?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  inMaintenanceDate?: Maybe<Scalars['String']>;
  kWh?: Maybe<Scalars['Float']>;
  marketName?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  percUtilized?: Maybe<Scalars['String']>;
  promotionCategory?: Maybe<Scalars['String']>;
  promotionCategoryId?: Maybe<Scalars['Int']>;
  scheduledFixDate?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Float']>;
  siteName?: Maybe<Scalars['String']>;
  stationName?: Maybe<Scalars['String']>;
  uniqueVehicles?: Maybe<Scalars['Float']>;
};

export type PortalsSessionsWithMeta = {
  __typename?: 'PortalsSessionsWithMeta';
  edges?: Maybe<Array<Maybe<PortalsSession>>>;
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PortalsUser = {
  __typename?: 'PortalsUser';
  created?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['ID']>;
};

export type PortalsVehicleMake = {
  __typename?: 'PortalsVehicleMake';
  altId?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
};

export type PortalsVehicleModel = {
  __typename?: 'PortalsVehicleModel';
  altId?: Maybe<Scalars['ID']>;
  modelName?: Maybe<Scalars['String']>;
};

export type PortsWithMeta = {
  __typename?: 'PortsWithMeta';
  edges?: Maybe<Array<Maybe<Port>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum PowerLevel {
  /** Level 1 */
  Level_1 = 'LEVEL_1',
  /** Level 2 */
  Level_2 = 'LEVEL_2',
  /** Level 3 */
  Level_3 = 'LEVEL_3',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

export type PowerMeterValue = {
  __typename?: 'PowerMeterValue';
  powerMeterValueInWatts?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Date']>;
};

export type Price = {
  __typename?: 'Price';
  billingPlanCode?: Maybe<Scalars['String']>;
  billingPlanDescription?: Maybe<Scalars['String']>;
  billingPlanId?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fixed?: Maybe<Scalars['Float']>;
  initialFreeTime?: Maybe<Scalars['Int']>;
  kwh?: Maybe<Scalars['Float']>;
  perHour?: Maybe<Scalars['Float']>;
  perMinute?: Maybe<Scalars['Float']>;
  plugInPerHour?: Maybe<Scalars['Float']>;
  plugInPerMinute?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['Float']>;
  transaction?: Maybe<Scalars['Float']>;
};

export enum PriorityType {
  High = 'HIGH',
  Low = 'LOW',
  Normal = 'NORMAL',
  Urgent = 'URGENT'
}

export type Product = {
  __typename?: 'Product';
  altId?: Maybe<Scalars['ID']>;
  credit?: Maybe<PlanCredit>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subscription?: Maybe<PlanSubscription>;
};

export type ProductInput = {
  altId?: InputMaybe<Scalars['ID']>;
  credit?: InputMaybe<PlanCreditInput>;
  description?: InputMaybe<Scalars['SanitizeString']>;
  name?: InputMaybe<Scalars['SanitizeString']>;
  productTypeId?: InputMaybe<Scalars['Int']>;
  subscription?: InputMaybe<PlanSubscriptionInput>;
};

export type ProductsWithMeta = {
  __typename?: 'ProductsWithMeta';
  edges?: Maybe<Array<Maybe<Product>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListProductsSearchType>;
  sort?: Maybe<ListProductsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type PromoCode = {
  __typename?: 'PromoCode';
  promotionCode?: Maybe<Scalars['String']>;
  promotionRef?: Maybe<Scalars['String']>;
  promotionType?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PromoCodeCost = {
  __typename?: 'PromoCodeCost';
  id?: Maybe<Scalars['ID']>;
  promoCode?: Maybe<Scalars['String']>;
  sessionCost?: Maybe<Scalars['Float']>;
};

export type PromoCodeCostWithMeta = {
  __typename?: 'PromoCodeCostWithMeta';
  edges?: Maybe<Array<Maybe<PromoCodeCost>>>;
  filters?: Maybe<ListEnrollmentsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PromoCodesWithMeta = {
  __typename?: 'PromoCodesWithMeta';
  edges?: Maybe<Array<Maybe<PromotionCode>>>;
  filters?: Maybe<ListPromoCodesInputFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  anonymousPromoCodes?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  filterStartDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  partnerType?: Maybe<Scalars['Int']>;
  promotionName?: Maybe<Scalars['String']>;
  promotionRef?: Maybe<Scalars['String']>;
  promotionType?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type PromotionCampaign = {
  __typename?: 'PromotionCampaign';
  benefitId?: Maybe<Scalars['Int']>;
  benefitName?: Maybe<Scalars['String']>;
  campaignName?: Maybe<Scalars['String']>;
  campaignRef?: Maybe<Scalars['String']>;
  codeRedemptionLimit?: Maybe<Scalars['Int']>;
  creditAmount?: Maybe<Scalars['String']>;
  detailId?: Maybe<Scalars['ID']>;
  endsAt?: Maybe<Scalars['Date']>;
  groupId?: Maybe<Scalars['ID']>;
  planCode?: Maybe<Scalars['String']>;
  promotionId?: Maybe<Scalars['ID']>;
  promotionRef?: Maybe<Scalars['String']>;
  startsAt?: Maybe<Scalars['Date']>;
};

export type PromotionCampaignWithMeta = {
  __typename?: 'PromotionCampaignWithMeta';
  edges?: Maybe<Array<Maybe<PromotionCampaign>>>;
};

export type PromotionCategorieswithMeta = {
  __typename?: 'PromotionCategorieswithMeta';
  edges?: Maybe<Array<Maybe<PromotionCategory>>>;
  filters?: Maybe<ListPromotionCategoriesFilterType>;
};

export type PromotionCategory = {
  __typename?: 'PromotionCategory';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type PromotionCategorySession = {
  __typename?: 'PromotionCategorySession';
  promotionCategory?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Int']>;
};

export type PromotionCategorySessionsWithMeta = {
  __typename?: 'PromotionCategorySessionsWithMeta';
  edges?: Maybe<Array<Maybe<PromotionCategorySession>>>;
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type PromotionCode = {
  __typename?: 'PromotionCode';
  codeValue?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Date']>;
  displayValue?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  isRedeemed?: Maybe<Scalars['Boolean']>;
  isTestPromocode?: Maybe<Scalars['Boolean']>;
  redemptionDate?: Maybe<Scalars['Date']>;
};

export type PromotionType = {
  __typename?: 'PromotionType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PromotionWithMeta = {
  __typename?: 'PromotionWithMeta';
  edges?: Maybe<Array<Maybe<Promotion>>>;
  filters?: Maybe<ListPromotionsInputFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PropertiesWithMeta = {
  __typename?: 'PropertiesWithMeta';
  edges?: Maybe<Array<Maybe<Property>>>;
  filter?: Maybe<ListPropertiesFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListPropertiesSearchType>;
  sort?: Maybe<ListPropertiesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type Property = {
  __typename?: 'Property';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  host?: Maybe<Host>;
  legacyId?: Maybe<Scalars['ID']>;
  locality?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  propertyStatus?: Maybe<FalconConstraint>;
  sites?: Maybe<SitesWithMeta>;
  /** @deprecated Use propertyStatus */
  status?: Maybe<PropertyStatus>;
  vendorId?: Maybe<Scalars['String']>;
};


export type PropertySitesArgs = {
  input?: InputMaybe<ListSitesInput>;
};

export type PropertyFilterInput = {
  pid?: InputMaybe<TableStringFilterInput>;
  propertyName?: InputMaybe<TableStringFilterInput>;
};

export type PropertyFilterType = {
  __typename?: 'PropertyFilterType';
  pid?: Maybe<TableStringFilterType>;
  propertyName?: Maybe<TableStringFilterType>;
};

export enum PropertyStatus {
  /** Contract Expired */
  ContractExpired = 'CONTRACT_EXPIRED',
  /** Contract Terminated */
  ContractTerminated = 'CONTRACT_TERMINATED',
  /** Decommissioned */
  Decommissioned = 'DECOMMISSIONED',
  /** Denetworked */
  Denetworked = 'DENETWORKED',
  /** Planned */
  Planned = 'PLANNED',
  Provisioned = 'PROVISIONED',
  /** Ready For Provisioning */
  ReadyForProvisioning = 'READY_FOR_PROVISIONING',
  /** Scheduled For Decommissioning */
  ScheduledForDecommissioning = 'SCHEDULED_FOR_DECOMMISSIONING'
}

export type ProviderData = {
  __typename?: 'ProviderData';
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  uid: Scalars['String'];
};

export type Publish = {
  type: Scalars['String'];
  typeName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  chargersForMobile?: Maybe<ChargersForMobileWithMeta>;
  /** Lookup a displayValue and return whether or not some promo code has been redeemed with it. */
  checkPromoCodeRedemptionByDisplayValue: CheckPromoCodeRedemptionByDisplayValueResult;
  exportPromocodes?: Maybe<Array<Maybe<ExportPromotionCode>>>;
  getAccount?: Maybe<Account>;
  getAccountVehicle?: Maybe<AccountVehicle>;
  getActiveSession?: Maybe<Session>;
  getAdHocContract?: Maybe<AdHocContract>;
  getAggregatedPowerMeterValuesForFleet?: Maybe<AggregatedMeterValues>;
  getCabinet?: Maybe<Cabinet>;
  getCabinetModel?: Maybe<CabinetModel>;
  getCard?: Maybe<Card>;
  getCharger?: Maybe<Charger>;
  getChargerAggregatedPowerMeterValuesForFleet?: Maybe<ChargerAggregateMeterValues>;
  /** Query to get a Charger Group by altId and/or hostId */
  getChargerGroupForExtend?: Maybe<ChargerGroupForExtend>;
  getChargerModel?: Maybe<ChargerModel>;
  getChargerModelConnector?: Maybe<ChargerModelConnector>;
  getChargerPricingForMobile?: Maybe<ChargerPrice>;
  getChargerUtilizationChartData?: Maybe<ChargerUtilizationChartData>;
  getChargerWithEnergyUtilization?: Maybe<Charger>;
  getChargingSystem?: Maybe<ChargingSystem>;
  getConnector?: Maybe<Connector>;
  getConsumptionChartData?: Maybe<ConsumptionChartData>;
  getContract?: Maybe<Contract>;
  getCoupon?: Maybe<Coupon>;
  getCurrentDriver?: Maybe<Driver>;
  getCurrentShpUser?: Maybe<GatewayUser>;
  getCurrentUser: CurrentUserResponse;
  getDriver?: Maybe<Driver>;
  getEmailList?: Maybe<EmailList>;
  getEmailListRecipient?: Maybe<EmailListRecipient>;
  getEnrollmentTotals: EnrollmentTotalsWithMeta;
  getEvgoAccessQRCode?: Maybe<EvgoAccessQrCode>;
  getExtendUser?: Maybe<ExtendUser>;
  /** Gets the firebase user based on the default token being passed to the query. */
  getFirebaseUserByToken: FirebaseUser;
  getFirebaseUserForExtend: FirebaseUserForExtend;
  getFleet?: Maybe<Fleet>;
  getFleetUser: User;
  getFleetVehicle?: Maybe<FleetVehicle>;
  getHost?: Maybe<Host>;
  /** Get a single invoice for the current user based on a given invoiceId */
  getInvoiceForMobile?: Maybe<Invoice>;
  getMinimumStartDate: MinimumStartDate;
  getNissanRdr?: Maybe<NissanRdr>;
  getPlan?: Maybe<Plan>;
  getPlanForMobile?: Maybe<Plan>;
  getPort?: Maybe<Port>;
  getPresignedUrlDownload?: Maybe<Scalars['String']>;
  getPresignedUrlUpload?: Maybe<Scalars['String']>;
  getPromotionById?: Maybe<Promotion>;
  getPromotionByRef?: Maybe<Promotion>;
  getPromotionCampaign?: Maybe<PromotionCampaign>;
  getPromotionCampaigns?: Maybe<PromotionCampaignWithMeta>;
  getProperty?: Maybe<Property>;
  getRewardsTotalForMobile?: Maybe<Rewards>;
  getRoute?: Maybe<Route>;
  getSalesforceHost?: Maybe<SalesforceHost>;
  getSalesforceProperty?: Maybe<SalesforceProperty>;
  getSession?: Maybe<Session>;
  getSessionForFleet?: Maybe<Session>;
  getSessionValidationForMobile?: Maybe<SessionValidation>;
  /** Query to return a timestamp between the date interval or date preset sent, summing the consumption and income of chargers */
  getSessionsConsumptionForExtend?: Maybe<GetSessionsConsumptionForExtendResponse>;
  getShpHost?: Maybe<ShpHost>;
  getShpNotificationControl?: Maybe<ShpNotificationControl>;
  getShpProject?: Maybe<ShpProject>;
  getShpProjectMilestoneContact?: Maybe<ShpProjectMilestoneContact>;
  getShpProperty?: Maybe<ShpProperty>;
  getShpUser?: Maybe<ShpUser>;
  getShpUserHSM?: Maybe<ShpUser>;
  getSite?: Maybe<Site>;
  getSiteForFleet?: Maybe<Site>;
  getSiteForMobile?: Maybe<Site>;
  getSitesForExtend?: Maybe<Array<Maybe<Site>>>;
  getStatement?: Maybe<PdfStatement>;
  getStatementCurrent?: Maybe<PdfStatement>;
  getSwitchgear?: Maybe<Switchgear>;
  getTag?: Maybe<Tag>;
  getTariff?: Maybe<Tariff>;
  getTicket?: Maybe<Ticket>;
  getTicketComments?: Maybe<Array<Maybe<TicketComment>>>;
  getTicketCustomFields?: Maybe<Array<Maybe<TicketCustomField>>>;
  getTransaction?: Maybe<Transaction>;
  getTransactionForMobile?: Maybe<MobileTransaction>;
  getTrip?: Maybe<Trip>;
  getUser: GetUserWithMeta;
  getVehicleByVin?: Maybe<Vehicle>;
  getVehicleChargeCurve?: Maybe<VehicleChargeCurve>;
  getWarehouse?: Maybe<Warehouse>;
  listAccountVehicles?: Maybe<AccountVehiclesWithMeta>;
  listAccounts?: Maybe<AccountsWithMeta>;
  listAdminCabinets?: Maybe<Array<Maybe<Cabinet>>>;
  listAlerts?: Maybe<AlertsData>;
  listAvailableSlots?: Maybe<Array<Maybe<TimeSlot>>>;
  listCabinets?: Maybe<Array<Maybe<Cabinet>>>;
  listCardOrders?: Maybe<CardOrdersWithMeta>;
  listCardOrdersForMobile?: Maybe<CardOrdersWithMeta>;
  listCards?: Maybe<CardsWithMeta>;
  listCardsForMobile?: Maybe<CardsWithMeta>;
  /** Query to list charger groups */
  listChargerGroupsForExtend?: Maybe<ChargerGroupsForExtendWithMeta>;
  listChargerModelConnectors?: Maybe<ChargerModelConnectorsWithMeta>;
  listChargerModelOptions?: Maybe<Array<Maybe<ChargerModel>>>;
  listChargerModelPorts?: Maybe<ChargerModelPortsWithMeta>;
  listChargerModels?: Maybe<ChargerModelsWithMeta>;
  listChargerUtilization?: Maybe<ListChargerUtilization>;
  listChargers?: Maybe<ChargersWithMeta>;
  /** Query to return a list of chargers, by sites and their consumption data by date preset */
  listChargersConsumptionForExtend?: Maybe<Array<ChargersConsumptionForExtendData>>;
  /** List chargers for eXtend team, by hostId through charger group */
  listChargersForExtend?: Maybe<ChargersWithMeta>;
  listChargersForFleet?: Maybe<ChargersForFleetMeta>;
  listChargersForMobile?: Maybe<ChargersWithMeta>;
  listChargingSystems?: Maybe<Array<Maybe<ChargingSystem>>>;
  listCodeTypes?: Maybe<Array<Maybe<CodeType>>>;
  listConnectorAssociations?: Maybe<Array<Maybe<ConnectorAssociation>>>;
  listConnectors?: Maybe<ConnectorsWithMeta>;
  listConnectors2?: Maybe<ConnectorsWithMeta>;
  listContacts?: Maybe<ContactsWithMeta>;
  listContracts?: Maybe<ContractsWithMeta>;
  listCredits?: Maybe<CreditsWithMeta>;
  listDrivers?: Maybe<DriversWithMeta>;
  listElectricVehicles?: Maybe<ElectricVehiclesWithMeta>;
  listEmailListRecipients?: Maybe<EmailListRecipientsWithMeta>;
  listEmailLists?: Maybe<EmailListsWithMeta>;
  listEnrollments: ListEnrollmentsWithMeta;
  listEnrollmentsByPromoCode: EnrollmentsWithMeta;
  listEnrollmentsByPromoCodeAnonymous: EnrollmentsWithMeta;
  listEnrollmentsByPromoCodeToExport: EnrollmentsExport;
  listEnrollmentsByPromoCodeToExportAnonymous: EnrollmentsExport;
  listEnrollmentsByPromoCodeTotals: EnrollmentsTotalsWithMeta;
  listEnrollmentsByPromotionCategory: EnrollmentsByPromotionCategoryWithMeta;
  listEnrollmentsByPromotionCategoryAndSessionPeriod: EnrollmentsByPromotionCategoryAndSessionPeriodWithMeta;
  listExtendHosts?: Maybe<ExtendHostsWithMeta>;
  listExtendUsers?: Maybe<ExtendUsersWithMeta>;
  listFalconConstraints?: Maybe<FalconConstraintsWithMeta>;
  listFleetVehicles?: Maybe<FleetVehiclesWithMeta>;
  listFleets?: Maybe<Array<Maybe<Fleet>>>;
  listGeographicalRegions?: Maybe<GeographicalRegionsWithMeta>;
  listHosts?: Maybe<HostsWithMeta>;
  listHostsForExtend?: Maybe<HostsWithMeta>;
  /** Get a list of invoices for the current user within a given date range, with the optional ability to limit results by cardId */
  listInvoicesForMobile?: Maybe<InvoicesWithMeta>;
  /** A query that fetches a list of partner network operators to populate filters on client */
  listNetworkOperators?: Maybe<NetworkOperatorWithMeta>;
  listNotificationGroups?: Maybe<NotificationGroupsWithMeta>;
  listPartnerDrivers: PartnerDriverList;
  listPaymentMethodsForMobile?: Maybe<PaymentMethodsWithMeta>;
  listPlans?: Maybe<PlanWithMeta>;
  listPlansForMobile?: Maybe<PlanWithMeta>;
  listPortalsVehicleMakes?: Maybe<Array<Maybe<PortalsVehicleMake>>>;
  listPortalsVehicleModels?: Maybe<Array<Maybe<PortalsVehicleModel>>>;
  listPorts?: Maybe<PortsWithMeta>;
  listPorts2?: Maybe<PortsWithMeta>;
  listPromoCodeCosts: PromoCodeCostWithMeta;
  listPromoCodes: PromoCodesWithMeta;
  listPromotionCategories: PromotionCategorieswithMeta;
  listPromotionTypes?: Maybe<Array<Maybe<PromotionType>>>;
  listPromotions: PromotionWithMeta;
  listProperties?: Maybe<PropertiesWithMeta>;
  listReservationTerms?: Maybe<ReservationTermsWithMeta>;
  listReservations?: Maybe<ReservationsWithMeta>;
  listReservationsByDriver?: Maybe<ReservationsWithMeta>;
  listRoutes?: Maybe<RoutesWithMeta>;
  listSalesforceHostContacts?: Maybe<SalesforceHostContactsWithMeta>;
  listSalesforceHosts?: Maybe<SalesforceHostsWithMeta>;
  listSalesforceProperties?: Maybe<SalesforcePropertiesWithMeta>;
  listSessions?: Maybe<SessionsWithMeta>;
  listSessionsByPromotionCategory: PromotionCategorySessionsWithMeta;
  /** Query to return a list of sessions with their consumption data and info about connectors and charger */
  listSessionsConsumptionForExtend: ListSessionsConsumptionForExtendWithMeta;
  listSessionsPerMarket: SessionMarketsWithMeta;
  listSessionsPerStation: SessionsWithMaintMeta;
  listSessionsPerStationTotals: SessionsTotalsWithMaintMeta;
  listShpHostContacts: ShpUserList;
  listShpHosts: ShpHostList;
  listShpNotificationsApprovedMilestoneDocuments?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsDueDateApproaching?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsDueDateExpired?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsDueDateMidway?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsNeedsReviewMilestoneDocuments?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsPendingMilestones?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpNotificationsSiteLiveMilestones?: Maybe<Array<Maybe<ShpProjectMilestone>>>;
  listShpProjectMilestonesActivity: ShpProjectMilestoneActivityList;
  listShpProjects: ShpProjectList;
  listShpProperties: ShpPropertyList;
  listShpPropertiesWithLeastProjectStatus: ShpPropertyWithLeastProjectStatusList;
  listShpPropertyProjects: ShpPropertyProjectList;
  listShpUsers: ShpUserList;
  listSiteImages?: Maybe<SiteImagesWithMeta>;
  listSiteOptions?: Maybe<Array<Maybe<Site>>>;
  listSites?: Maybe<SitesWithMeta>;
  listSitesConsumptionForExtend: ListSitesConsumptionForExtendWithMeta;
  listSitesForFleet?: Maybe<Array<Maybe<Site>>>;
  listSitesForMobile?: Maybe<SitesWithMeta>;
  listSitesSessionConsumption?: Maybe<SitesSessionConsumptionMeta>;
  listStatements?: Maybe<StatementsWithMeta>;
  listSwitchgears?: Maybe<Array<Maybe<Switchgear>>>;
  listTags?: Maybe<TagsWithMeta>;
  listTariffConnectorTypes?: Maybe<TariffConnectorTypesWithMeta>;
  listTariffs?: Maybe<TariffWithMeta>;
  listTickets?: Maybe<TicketsWithMeta>;
  listTouRegions?: Maybe<Array<Maybe<TouRegion>>>;
  listTransactions?: Maybe<TransactionsWithMeta>;
  listTransactionsForMobile?: Maybe<MobileTransactionsWithMeta>;
  /** List unassigned chargers for eXtend+ team, by hostId through charger group - chargers that was not added to any charger group */
  listUnassignedChargersForExtend?: Maybe<ChargersWithMeta>;
  listUnassociatedChargersForFleet?: Maybe<UnassociatedChargersForFleetWithMeta>;
  listUploads?: Maybe<UploadsWithMeta>;
  listUsers: UserWithMeta;
  listVehicleConnectors?: Maybe<VehicleConnectorsWithMeta>;
  listVehicleMakes?: Maybe<Array<Maybe<VehicleMake>>>;
  listVehicleModels?: Maybe<Array<Maybe<VehicleModel>>>;
  listVehicles?: Maybe<VehiclesWithMeta>;
  listWarehouseOptions?: Maybe<Array<Maybe<Warehouse>>>;
  listWarehouses?: Maybe<WarehousesWithMeta>;
  listkWhByDay: KWhByDayWithMeta;
  me: PortalsUser;
  root?: Maybe<Scalars['SanitizeString']>;
  sessionsDistribution: SessionsDistributionWithMeta;
  sessionsDistributionByHour: SessionsDistributionWithMeta;
  sessionsDistributionByWeekday: SessionsDistributionWithMeta;
  sessionsDistributionByWeekdayHour: SessionsDistributionByWeekdayHourWithMeta;
  siteForMobile?: Maybe<SiteForMobile>;
  sitesForMobile?: Maybe<SitesForMobileWithMeta>;
  validatePromoCode?: Maybe<PromoCode>;
  validateTag?: Maybe<Tag>;
};


export type QueryChargersForMobileArgs = {
  input?: InputMaybe<ChargersForMobileInput>;
};


export type QueryCheckPromoCodeRedemptionByDisplayValueArgs = {
  input: CheckPromoCodeRedemptionByDisplayValueInput;
};


export type QueryExportPromocodesArgs = {
  input: ExportPromocodesInput;
};


export type QueryGetAccountArgs = {
  input?: InputMaybe<GetAccountInput>;
};


export type QueryGetAccountVehicleArgs = {
  input?: InputMaybe<GetAccountVehicleInput>;
};


export type QueryGetActiveSessionArgs = {
  input: GetActiveSessionInput;
};


export type QueryGetAdHocContractArgs = {
  input: GetAdHocContractInput;
};


export type QueryGetAggregatedPowerMeterValuesForFleetArgs = {
  input: GetAggregatedPowerMeterValuesForFleetInput;
};


export type QueryGetCabinetArgs = {
  input: GetCabinetInput;
};


export type QueryGetCabinetModelArgs = {
  input: GetCabinetModelInput;
};


export type QueryGetCardArgs = {
  input?: InputMaybe<GetCardInput>;
};


export type QueryGetChargerArgs = {
  input?: InputMaybe<GetChargerInput>;
};


export type QueryGetChargerAggregatedPowerMeterValuesForFleetArgs = {
  input?: InputMaybe<GetChargerAggregatedPowerMeterValuesForFleetInput>;
};


export type QueryGetChargerGroupForExtendArgs = {
  input: GetChargerGroupForExtendInput;
};


export type QueryGetChargerModelArgs = {
  input?: InputMaybe<GetChargerModelInput>;
};


export type QueryGetChargerModelConnectorArgs = {
  input?: InputMaybe<GetConnectorInput>;
};


export type QueryGetChargerPricingForMobileArgs = {
  input?: InputMaybe<GetChargerPricingForMobileInput>;
};


export type QueryGetChargerUtilizationChartDataArgs = {
  input: ChargerUtilizationChartInput;
};


export type QueryGetChargerWithEnergyUtilizationArgs = {
  input?: InputMaybe<GetChargerInput>;
};


export type QueryGetChargingSystemArgs = {
  input: GetChargingSystemInput;
};


export type QueryGetConnectorArgs = {
  input?: InputMaybe<GetConnectorInput>;
};


export type QueryGetConsumptionChartDataArgs = {
  input: ConsumptionChartInput;
};


export type QueryGetContractArgs = {
  input: GetContractInput;
};


export type QueryGetCouponArgs = {
  input?: InputMaybe<GetCouponInput>;
};


export type QueryGetDriverArgs = {
  input?: InputMaybe<GetDriverInput>;
};


export type QueryGetEmailListArgs = {
  input?: InputMaybe<GetEmailListInput>;
};


export type QueryGetEmailListRecipientArgs = {
  input?: InputMaybe<GetEmailListRecipientInput>;
};


export type QueryGetEnrollmentTotalsArgs = {
  input?: InputMaybe<EnrollmentTotalsInput>;
};


export type QueryGetEvgoAccessQrCodeArgs = {
  input?: InputMaybe<GetEvgoAccessQrCodeInput>;
};


export type QueryGetExtendUserArgs = {
  input?: InputMaybe<GetExtendUserInput>;
};


export type QueryGetFirebaseUserForExtendArgs = {
  input: GetFirebaseUserForExtendInput;
};


export type QueryGetFleetArgs = {
  input: GetFleetInput;
};


export type QueryGetFleetVehicleArgs = {
  input: GetFleetVehicleInput;
};


export type QueryGetHostArgs = {
  input?: InputMaybe<GetHostInput>;
};


export type QueryGetInvoiceForMobileArgs = {
  input?: InputMaybe<GetInvoiceInput>;
};


export type QueryGetMinimumStartDateArgs = {
  input?: InputMaybe<MinimumStartDateInput>;
};


export type QueryGetNissanRdrArgs = {
  input: GetNissanRdrInput;
};


export type QueryGetPlanArgs = {
  input?: InputMaybe<GetPlanInput>;
};


export type QueryGetPlanForMobileArgs = {
  input?: InputMaybe<GetPlanForMobileInput>;
};


export type QueryGetPortArgs = {
  input?: InputMaybe<GetPortInput>;
};


export type QueryGetPresignedUrlDownloadArgs = {
  input: GetPresignedUrlDownloadInput;
};


export type QueryGetPresignedUrlUploadArgs = {
  input: GetPresignedUrlUploadInput;
};


export type QueryGetPromotionByIdArgs = {
  input: GetPromotionByIdInput;
};


export type QueryGetPromotionByRefArgs = {
  input: GetPromotionByRefInput;
};


export type QueryGetPromotionCampaignArgs = {
  detailId: Scalars['ID'];
};


export type QueryGetPromotionCampaignsArgs = {
  input: GetPromotionCampaignsInput;
};


export type QueryGetPropertyArgs = {
  input?: InputMaybe<GetPropertyInput>;
};


export type QueryGetRouteArgs = {
  input: GetRouteInput;
};


export type QueryGetSalesforceHostArgs = {
  input?: InputMaybe<GetSalesforceHostInput>;
};


export type QueryGetSalesforcePropertyArgs = {
  input?: InputMaybe<GetSalesforcePropertyInput>;
};


export type QueryGetSessionArgs = {
  input: GetSessionInput;
};


export type QueryGetSessionForFleetArgs = {
  input: GetSessionForFleetInput;
};


export type QueryGetSessionValidationForMobileArgs = {
  input?: InputMaybe<GetSessionValidationForMobileInput>;
};


export type QueryGetSessionsConsumptionForExtendArgs = {
  input: GetSessionsConsumptionForExtendInput;
};


export type QueryGetShpHostArgs = {
  input: ShpHostIdInput;
};


export type QueryGetShpNotificationControlArgs = {
  input: GetShpNotificationControlInput;
};


export type QueryGetShpProjectArgs = {
  input: ShpProjectIdInput;
};


export type QueryGetShpProjectMilestoneContactArgs = {
  input: ShpProjectMilestoneContactInput;
};


export type QueryGetShpPropertyArgs = {
  input: ShpPropertyIdInput;
};


export type QueryGetShpUserArgs = {
  input: ShpUserIdInput;
};


export type QueryGetShpUserHsmArgs = {
  input: ShpUserIdInput;
};


export type QueryGetSiteArgs = {
  input?: InputMaybe<GetSiteInput>;
};


export type QueryGetSiteForFleetArgs = {
  input: GetSiteForFleetInput;
};


export type QueryGetSiteForMobileArgs = {
  input?: InputMaybe<GetSiteInput>;
};


export type QueryGetSitesForExtendArgs = {
  input?: InputMaybe<GetSitesForExtendInput>;
};


export type QueryGetStatementArgs = {
  input: GetStatementInput;
};


export type QueryGetStatementCurrentArgs = {
  input?: InputMaybe<GetStatementCurrentInput>;
};


export type QueryGetSwitchgearArgs = {
  input: GetSwitchgearInput;
};


export type QueryGetTagArgs = {
  input?: InputMaybe<GetTagInput>;
};


export type QueryGetTariffArgs = {
  input?: InputMaybe<GetTariffInput>;
};


export type QueryGetTicketArgs = {
  input: GetTicketInput;
};


export type QueryGetTicketCommentsArgs = {
  input: GetTicketCommentsInput;
};


export type QueryGetTransactionArgs = {
  input: GetTransactionInput;
};


export type QueryGetTransactionForMobileArgs = {
  input: GetTransactionInput;
};


export type QueryGetTripArgs = {
  input: GetTripInput;
};


export type QueryGetUserArgs = {
  input?: InputMaybe<GetUserInput>;
};


export type QueryGetVehicleByVinArgs = {
  input: GetVehicleByVinInput;
};


export type QueryGetVehicleChargeCurveArgs = {
  input: GetVehicleChargeCurveInput;
};


export type QueryGetWarehouseArgs = {
  input?: InputMaybe<GetWarehouseInput>;
};


export type QueryListAccountVehiclesArgs = {
  input?: InputMaybe<ListAccountVehiclesInput>;
};


export type QueryListAccountsArgs = {
  input?: InputMaybe<ListAccountsInput>;
};


export type QueryListAdminCabinetsArgs = {
  input: ListAdminCabinetsInput;
};


export type QueryListAlertsArgs = {
  input: ListAlertsInput;
};


export type QueryListAvailableSlotsArgs = {
  input?: InputMaybe<ListReservationsInput>;
};


export type QueryListCabinetsArgs = {
  input: ListCabinetsInput;
};


export type QueryListCardOrdersArgs = {
  input?: InputMaybe<ListCardOrdersInput>;
};


export type QueryListCardOrdersForMobileArgs = {
  input?: InputMaybe<ListCardOrdersForMobileInput>;
};


export type QueryListCardsArgs = {
  input?: InputMaybe<ListCardsInput>;
};


export type QueryListCardsForMobileArgs = {
  input?: InputMaybe<ListCardsInput>;
};


export type QueryListChargerGroupsForExtendArgs = {
  input?: InputMaybe<ListChargerGroupsForExtendInput>;
};


export type QueryListChargerModelConnectorsArgs = {
  input?: InputMaybe<ListConnectorsInput>;
};


export type QueryListChargerModelPortsArgs = {
  input?: InputMaybe<ListPortsInput>;
};


export type QueryListChargerModelsArgs = {
  input?: InputMaybe<ListChargerModelsInput>;
};


export type QueryListChargerUtilizationArgs = {
  input?: InputMaybe<ListChargerUtilizationInput>;
};


export type QueryListChargersArgs = {
  input?: InputMaybe<ListChargersInput>;
};


export type QueryListChargersConsumptionForExtendArgs = {
  input: ListChargersConsumptionForExtendInput;
};


export type QueryListChargersForExtendArgs = {
  input?: InputMaybe<ListChargersForExtendInput>;
};


export type QueryListChargersForFleetArgs = {
  input?: InputMaybe<ListChargersForFleetInput>;
};


export type QueryListChargersForMobileArgs = {
  input?: InputMaybe<ListChargersForMobileInput>;
};


export type QueryListChargingSystemsArgs = {
  input: ListChargingSystemInput;
};


export type QueryListConnectorsArgs = {
  input?: InputMaybe<ListConnectorsInput>;
};


export type QueryListConnectors2Args = {
  input?: InputMaybe<ListConnectorsInput>;
};


export type QueryListContactsArgs = {
  input?: InputMaybe<ListContactsInput>;
};


export type QueryListContractsArgs = {
  input?: InputMaybe<ListContractsInput>;
};


export type QueryListCreditsArgs = {
  input?: InputMaybe<ListCreditsInput>;
};


export type QueryListDriversArgs = {
  input?: InputMaybe<ListDriversInput>;
};


export type QueryListElectricVehiclesArgs = {
  input?: InputMaybe<ListElectricVehiclesInput>;
};


export type QueryListEmailListRecipientsArgs = {
  input?: InputMaybe<ListEmailListRecipientsInput>;
};


export type QueryListEmailListsArgs = {
  input?: InputMaybe<ListEmailListsInput>;
};


export type QueryListEnrollmentsArgs = {
  input?: InputMaybe<EnrollmentsInput>;
};


export type QueryListEnrollmentsByPromoCodeArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromoCodeAnonymousArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromoCodeToExportArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromoCodeToExportAnonymousArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromoCodeTotalsArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromotionCategoryArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListEnrollmentsByPromotionCategoryAndSessionPeriodArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListExtendHostsArgs = {
  input?: InputMaybe<ListExtendHostsInput>;
};


export type QueryListExtendUsersArgs = {
  input?: InputMaybe<ListExtendUsersInput>;
};


export type QueryListFalconConstraintsArgs = {
  input?: InputMaybe<ListFalconConstraintsInput>;
};


export type QueryListFleetVehiclesArgs = {
  input?: InputMaybe<ListFleetVehiclesInput>;
};


export type QueryListGeographicalRegionsArgs = {
  input?: InputMaybe<ListGeographicalRegionsInput>;
};


export type QueryListHostsArgs = {
  input?: InputMaybe<ListHostsInput>;
};


export type QueryListHostsForExtendArgs = {
  input?: InputMaybe<ListHostsInput>;
};


export type QueryListInvoicesForMobileArgs = {
  input?: InputMaybe<ListInvoicesInput>;
};


export type QueryListNotificationGroupsArgs = {
  input?: InputMaybe<ListNotificationGroupsInput>;
};


export type QueryListPartnerDriversArgs = {
  input: ListPartnerDriversInput;
};


export type QueryListPaymentMethodsForMobileArgs = {
  input?: InputMaybe<ListPaymentMethodsForMobileInput>;
};


export type QueryListPlansArgs = {
  input?: InputMaybe<ListPlansInput>;
};


export type QueryListPlansForMobileArgs = {
  input?: InputMaybe<ListPlansInput>;
};


export type QueryListPortalsVehicleMakesArgs = {
  input?: InputMaybe<ListPortalsVehicleMakesInput>;
};


export type QueryListPortalsVehicleModelsArgs = {
  input?: InputMaybe<GetPortalsVehicleModelInput>;
};


export type QueryListPortsArgs = {
  input?: InputMaybe<ListPortsInput>;
};


export type QueryListPorts2Args = {
  input?: InputMaybe<ListPortsInput>;
};


export type QueryListPromoCodeCostsArgs = {
  input?: InputMaybe<ListEnrollmentsInput>;
};


export type QueryListPromoCodesArgs = {
  input?: InputMaybe<ListPromoCodesInput>;
};


export type QueryListPromotionCategoriesArgs = {
  input?: InputMaybe<ListPromotionCategoriesInput>;
};


export type QueryListPromotionsArgs = {
  input?: InputMaybe<ListPromotionsInput>;
};


export type QueryListPropertiesArgs = {
  input?: InputMaybe<ListPropertiesInput>;
};


export type QueryListReservationTermsArgs = {
  input?: InputMaybe<ListReservationTermsInput>;
};


export type QueryListReservationsArgs = {
  input?: InputMaybe<ListReservationsInput>;
};


export type QueryListReservationsByDriverArgs = {
  input: ListReservationsByDriverInput;
};


export type QueryListRoutesArgs = {
  input: ListRoutesInput;
};


export type QueryListSalesforceHostContactsArgs = {
  input?: InputMaybe<ListSalesforceHostContactsInput>;
};


export type QueryListSalesforceHostsArgs = {
  input?: InputMaybe<ListSalesforceHostsInput>;
};


export type QueryListSalesforcePropertiesArgs = {
  input?: InputMaybe<ListSalesforcePropertiesInput>;
};


export type QueryListSessionsArgs = {
  input?: InputMaybe<ListSessionsInput>;
};


export type QueryListSessionsByPromotionCategoryArgs = {
  input?: InputMaybe<ListPromotionCategorySessionsInput>;
};


export type QueryListSessionsConsumptionForExtendArgs = {
  input: ListSessionsConsumptionForExtendInput;
};


export type QueryListSessionsPerMarketArgs = {
  input?: InputMaybe<ListPortalsSessionsInput>;
};


export type QueryListSessionsPerStationArgs = {
  input?: InputMaybe<ListSessionsMaintInput>;
};


export type QueryListSessionsPerStationTotalsArgs = {
  input?: InputMaybe<ListSessionsMaintInput>;
};


export type QueryListShpHostContactsArgs = {
  input: ListShpHostContactsInput;
};


export type QueryListShpHostsArgs = {
  input: ListShpHostsInput;
};


export type QueryListShpProjectMilestonesActivityArgs = {
  input: ListShpProjectMilestonesActivityInput;
};


export type QueryListShpProjectsArgs = {
  input: ListShpProjectsInput;
};


export type QueryListShpPropertiesArgs = {
  input: ListShpPropertiesInput;
};


export type QueryListShpPropertiesWithLeastProjectStatusArgs = {
  input: ListShpPropertiesWithLeastProjectStatusInput;
};


export type QueryListShpPropertyProjectsArgs = {
  input: ListShpPropertyProjectInput;
};


export type QueryListShpUsersArgs = {
  input: ListShpUsersInput;
};


export type QueryListSiteImagesArgs = {
  input?: InputMaybe<ListSiteImagesInput>;
};


export type QueryListSitesArgs = {
  input?: InputMaybe<ListSitesInput>;
};


export type QueryListSitesConsumptionForExtendArgs = {
  input: ListSitesConsumptionForExtendInput;
};


export type QueryListSitesForMobileArgs = {
  input: ListSitesForMobileInput;
};


export type QueryListSitesSessionConsumptionArgs = {
  input: ListSitesSessionConsumptionInput;
};


export type QueryListStatementsArgs = {
  input?: InputMaybe<ListStatementsInput>;
};


export type QueryListSwitchgearsArgs = {
  input: ListSwitchgearsInput;
};


export type QueryListTagsArgs = {
  input?: InputMaybe<ListTagsInput>;
};


export type QueryListTariffConnectorTypesArgs = {
  input?: InputMaybe<ListTariffConnectorTypesInput>;
};


export type QueryListTariffsArgs = {
  input?: InputMaybe<ListTariffsInput>;
};


export type QueryListTicketsArgs = {
  input: ListTicketInput;
};


export type QueryListTransactionsArgs = {
  input?: InputMaybe<ListTransactionsInput>;
};


export type QueryListTransactionsForMobileArgs = {
  input?: InputMaybe<ListTransactionsForMobileInput>;
};


export type QueryListUnassignedChargersForExtendArgs = {
  input?: InputMaybe<ListChargersForExtendInput>;
};


export type QueryListUnassociatedChargersForFleetArgs = {
  input?: InputMaybe<ListUnassociatedChargersForFleetInput>;
};


export type QueryListUploadsArgs = {
  input?: InputMaybe<ListUploadsInput>;
};


export type QueryListUsersArgs = {
  input?: InputMaybe<ListUsersInput>;
};


export type QueryListVehicleConnectorsArgs = {
  input?: InputMaybe<ListVehicleConnectorsInput>;
};


export type QueryListVehicleModelsArgs = {
  input?: InputMaybe<GetVehicleModelInput>;
};


export type QueryListVehiclesArgs = {
  input?: InputMaybe<ListVehiclesInput>;
};


export type QueryListWarehousesArgs = {
  input?: InputMaybe<ListWarehousesInput>;
};


export type QueryListkWhByDayArgs = {
  input?: InputMaybe<ListkWhByDayInput>;
};


export type QuerySessionsDistributionArgs = {
  input?: InputMaybe<ListPortalsSessionsInput>;
};


export type QuerySessionsDistributionByHourArgs = {
  input?: InputMaybe<ListPortalsSessionsInput>;
};


export type QuerySessionsDistributionByWeekdayArgs = {
  input?: InputMaybe<ListPortalsSessionsInput>;
};


export type QuerySessionsDistributionByWeekdayHourArgs = {
  input?: InputMaybe<ListPortalsSessionsInput>;
};


export type QuerySiteForMobileArgs = {
  input: SiteForMobileInput;
};


export type QuerySitesForMobileArgs = {
  input: SitesForMobileInput;
};


export type QueryValidatePromoCodeArgs = {
  input?: InputMaybe<ValidatePromoCodeInput>;
};


export type QueryValidateTagArgs = {
  input?: InputMaybe<ValidateTagInput>;
};

export type RedeemDriverInput = {
  DISABLE_WESQL_LEGACY_AWS_LAMBDA_API?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  password: Scalars['String'];
  planCode: Scalars['String'];
  platformName: Scalars['String'];
  subscribe: Scalars['Boolean'];
  subscriptionCopy: Scalars['String'];
  terms: Scalars['Boolean'];
};

export type RefreshTagsInput = {
  chargers: Array<InputMaybe<Scalars['ID']>>;
};

export type RegisterAccountOwnerInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  billingAddress: CreateAddressInput;
  email: Scalars['SanitizeString'];
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firebaseId: Scalars['SanitizeString'];
  firstName: Scalars['SanitizeString'];
  lastName: Scalars['SanitizeString'];
  mailingAddress: CreateAddressInput;
  optInPromotions?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  phone: Scalars['SanitizeString'];
  subscriptionCopy?: InputMaybe<Scalars['String']>;
  tokenAndroid?: InputMaybe<Scalars['SanitizeString']>;
  tokenIos?: InputMaybe<Scalars['SanitizeString']>;
};

export type RemoveAssignmentInput = {
  fleetVehicleAltId: Scalars['UUID'];
};

/** Input for removing chargers from a charger group */
export type RemoveChargersFromChargerGroupForExtendInput = {
  altId: Scalars['ID'];
  /** List of charger altIds to remove to the charger group */
  chargerIds: Array<Scalars['ID']>;
  hostId: Scalars['ID'];
};

export type RemoveDriverInput = {
  altId: Scalars['ID'];
};

export type RemoveFleetVehicleInput = {
  altId: Scalars['ID'];
};

export enum Reoccurrence {
  /** One Time */
  OneTime = 'ONE_TIME',
  /** Reoccurring */
  Reoccurring = 'REOCCURRING'
}

export type ReplaceCardInput = {
  accountId: Scalars['UUID'];
  altId: Scalars['UUID'];
  driverId: Scalars['UUID'];
};

export type Reservation = {
  __typename?: 'Reservation';
  address?: Maybe<Address>;
  chargerName?: Maybe<Scalars['String']>;
  connectorId?: Maybe<Scalars['ID']>;
  driverId?: Maybe<Scalars['ID']>;
  endDate?: Maybe<Scalars['Date']>;
  reservationId?: Maybe<Scalars['ID']>;
  siteId?: Maybe<Scalars['ID']>;
  siteName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
};

export type ReservationTerm = {
  __typename?: 'ReservationTerm';
  cancellationFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  noShowFee?: Maybe<Scalars['Float']>;
  reservationFee?: Maybe<Scalars['Float']>;
  reservationType?: Maybe<Scalars['String']>;
};

export type ReservationTermsWithMeta = {
  __typename?: 'ReservationTermsWithMeta';
  edges?: Maybe<Array<Maybe<ReservationTerm>>>;
};

export type ReservationsWithMeta = {
  __typename?: 'ReservationsWithMeta';
  edges?: Maybe<Array<Maybe<Reservation>>>;
};

export type ReserveCardsInput = {
  cardIds: Array<Scalars['UUID']>;
};

export type ResetChargerForExtendInput = {
  chargerId: Scalars['ID'];
};

export type ResetDriverPasswordInput = {
  altId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['Email']>;
};

export type RestartEngineSiteInput = {
  siteId: Scalars['UUID'];
};

export type RestartEngineSiteMessage = {
  __typename?: 'RestartEngineSiteMessage';
  siteAltId: Scalars['ID'];
};

export type RestartEngineSiteResult = {
  __typename?: 'RestartEngineSiteResult';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ReusePhoneNumberInput = {
  /** Phone number to be removed from all databases */
  phone: Scalars['SanitizeString'];
};

export type Rewards = {
  __typename?: 'Rewards';
  total?: Maybe<Scalars['Float']>;
};

export enum RfidSystemSupported {
  /** ISO/IEC 14443 Type A/B */
  IsoIec_14443TypeAB = 'ISO_IEC_14443_TYPE_A_B',
  /** NFC Reader */
  NfcReader = 'NFC_READER'
}

export type Route = {
  __typename?: 'Route';
  account: Account;
  altId: Scalars['ID'];
  cityFactor?: Maybe<Scalars['Float']>;
  departureProperty?: Maybe<Property>;
  routeDistance: Scalars['Float'];
  routeName: Scalars['String'];
  scheduledDeparture?: Maybe<Scalars['Time']>;
};

export type RoutesWithMeta = {
  __typename?: 'RoutesWithMeta';
  edges?: Maybe<Array<Maybe<Route>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListRoutesSearchType>;
  sort?: Maybe<ListRoutesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type ShpFilter = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export type SalesforceHost = {
  __typename?: 'SalesforceHost';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  hid?: Maybe<Scalars['String']>;
  hostName?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  salesforceHostContacts?: Maybe<SalesforceHostContactsWithMeta>;
  salesforceProperties?: Maybe<SalesforcePropertiesWithMeta>;
};


export type SalesforceHostSalesforceHostContactsArgs = {
  input?: InputMaybe<ListSalesforceHostContactsInput>;
};


export type SalesforceHostSalesforcePropertiesArgs = {
  input?: InputMaybe<ListSalesforcePropertiesInput>;
};

export type SalesforceHostContact = {
  __typename?: 'SalesforceHostContact';
  contactName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hid?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  workTitle?: Maybe<Scalars['String']>;
};

export type SalesforceHostContactsWithMeta = {
  __typename?: 'SalesforceHostContactsWithMeta';
  edges?: Maybe<Array<Maybe<SalesforceHostContact>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type SalesforceHostsWithMeta = {
  __typename?: 'SalesforceHostsWithMeta';
  edges?: Maybe<Array<Maybe<SalesforceHost>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListSalesforceHostsType>;
  total?: Maybe<Scalars['Int']>;
};

export type SalesforcePropertiesWithMeta = {
  __typename?: 'SalesforcePropertiesWithMeta';
  edges?: Maybe<Array<Maybe<SalesforceProperty>>>;
  filter?: Maybe<ListSalesforcePropertiesFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListSalesforcePropertiesSearchType>;
  sort?: Maybe<ListSalesforcePropertiesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type SalesforceProperty = {
  __typename?: 'SalesforceProperty';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  evcId?: Maybe<Scalars['String']>;
  hid?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  salesforceHost?: Maybe<SalesforceHost>;
};


export type SalesforcePropertySalesforceHostArgs = {
  input?: InputMaybe<GetSalesforceHostInput>;
};

export enum SalesforcePropertyStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Inactive */
  Inactive = 'INACTIVE'
}

export type SendEmailMessageInput = {
  /** This value is optional, but should be set to true if you need to add the recipients to Emarsys contact database. */
  createEmarsysContact?: InputMaybe<Scalars['Boolean']>;
  fromAddress?: InputMaybe<Scalars['SanitizeString']>;
  fromName?: InputMaybe<Scalars['SanitizeString']>;
  /** Unique identifier that references the provider template id. It can be Emarsy's event trigger id or Mandrill's template name for example */
  messageId: Scalars['SanitizeString'];
  provider?: InputMaybe<EmailProvider>;
  recipients: Array<EmailRecipient>;
  replyToAddress?: InputMaybe<Scalars['SanitizeString']>;
  subject?: InputMaybe<Scalars['SanitizeString']>;
};

export type SendEmailToListInput = {
  completionTag?: InputMaybe<Scalars['SanitizeString']>;
  excludeTags?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  fromAddress?: InputMaybe<Scalars['Email']>;
  fromName?: InputMaybe<Scalars['SanitizeString']>;
  includeTags?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  lastEmailedInterval?: InputMaybe<Scalars['Int']>;
  lastEmailedUnit?: InputMaybe<Scalars['SanitizeString']>;
  listId: Scalars['UUID'];
  replyToAddress?: InputMaybe<Scalars['Email']>;
  subject?: InputMaybe<Scalars['SanitizeString']>;
  templateName: Scalars['SanitizeString'];
};

export type SendPasswordResetInput = {
  /** Identifies which environment the email is in reference to. This mitigates the issue with a single Emarsys environment */
  baseUrl?: InputMaybe<Scalars['SanitizeString']>;
  emailAddress: Scalars['SanitizeString'];
  recipientName?: InputMaybe<Scalars['SanitizeString']>;
  /** Identify in what service you're trying to reset your password. This could be used to send a custom email template if necessary. */
  service: AuthServiceType;
};

export type SendRewardsConfirmationEmailInput = {
  accountNumber?: InputMaybe<Scalars['Int']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
};

export type SendRewardsConfirmationEmailReturn = {
  __typename?: 'SendRewardsConfirmationEmailReturn';
  mandrillId?: Maybe<Scalars['String']>;
  recipientEmail?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SendSuccess = {
  __typename?: 'SendSuccess';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Session = {
  __typename?: 'Session';
  /** Indication of whether the session was accepted to start or not */
  accepted?: Maybe<Scalars['Boolean']>;
  /** Account used for the session */
  account?: Maybe<Account>;
  /** Unique identifier for the session */
  altId: Scalars['ID'];
  /** Battery level of the vehicle after a session has completed */
  batteryLevel?: Maybe<Scalars['Float']>;
  /** Card used to start the session */
  card?: Maybe<Card>;
  /** Number of the RFID card used to start a session */
  cardNumber?: Maybe<Scalars['String']>;
  /** Charger used during the session */
  charger?: Maybe<SessionCharger>;
  /** Connector used for the session */
  connector?: Maybe<Connector>;
  connectorFleet?: Maybe<Connector>;
  /** id field on the connector used during the session */
  connectorId?: Maybe<Scalars['ID']>;
  /** Indication of whether the session was corrupted or not */
  corrupted?: Maybe<Scalars['Boolean']>;
  /** Reasons for session corruption */
  corruptedReasons?: Maybe<Array<Maybe<CorruptedReason>>>;
  /** Monetary information for the session */
  cost?: Maybe<SessionCost>;
  /** Time the session took to complete */
  duration?: Maybe<Scalars['String']>;
  /** Time the session ended */
  endTime?: Maybe<Scalars['Date']>;
  /** Total kWh delivered during the session */
  energyDelivered?: Maybe<Scalars['Float']>;
  fleetVehicle?: Maybe<FleetVehicle>;
  /** Indication of whether there are extenuating fees for the session or not */
  idleFees?: Maybe<Scalars['Boolean']>;
  /** Database ID of the invoice created from the session */
  invoiceId?: Maybe<Scalars['ID']>;
  /** Number for the invoice as it appears on a statement */
  invoiceNumber?: Maybe<Scalars['ID']>;
  /** kWh the vehicle ended with */
  meterEnd?: Maybe<Scalars['Int']>;
  /** kWh the vehicle began with */
  meterStart?: Maybe<Scalars['Int']>;
  /** Plan used for the session */
  plan?: Maybe<Plan>;
  /** kWh readings throughout the session */
  readings?: Maybe<Array<Maybe<SessionReading>>>;
  /** Total time of the session */
  sessionDuration?: Maybe<Scalars['Int']>;
  /** Identification number of the session for session_meters */
  sessionId?: Maybe<Scalars['ID']>;
  /** Indication of whether another session is currently active on the same charger */
  simultaneousChargingActive: Scalars['Boolean'];
  /** Indication of whether the charger has simultaneous charging enabled */
  simultaneousChargingEnabled: Scalars['Boolean'];
  /** Source from which the session was started such as App or RFID */
  startSource?: Maybe<FalconConstraint>;
  /** Time the session began */
  startTime?: Maybe<Scalars['Date']>;
  /** Source from which the session was stopped such as App or RFID */
  stopSource?: Maybe<FalconConstraint>;
  /** Tariff on the charger used for the session */
  tariff?: Maybe<Tariff>;
  /** Time zone in which the session occurred */
  timeZone?: Maybe<Scalars['String']>;
  /** ID relative to the session in Driivz */
  vendorId?: Maybe<Scalars['ID']>;
};

export enum SessionAggregation {
  Day = 'day',
  Hour = 'hour',
  Month = 'month',
  Week = 'week'
}

export type SessionCharger = {
  __typename?: 'SessionCharger';
  chargerId?: Maybe<Scalars['ID']>;
  chargerName?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
};

export type SessionCost = {
  __typename?: 'SessionCost';
  billedTime?: Maybe<Scalars['Float']>;
  energyCost?: Maybe<Scalars['Float']>;
  estimated?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

export enum SessionDatePreset {
  /** Get last 7 days of data */
  Last_7d = 'last_7d',
  /** Get last 12 months of data */
  Last_12m = 'last_12m',
  /** Get last 30 days of data */
  Last_30d = 'last_30d',
  /** Get today's data */
  Today = 'today',
  /** Get yestarday's data */
  Yesterday = 'yesterday'
}

export type SessionMaintTotals = {
  __typename?: 'SessionMaintTotals';
  kWh?: Maybe<Scalars['Float']>;
  minutes?: Maybe<Scalars['Float']>;
  percUtilized?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Float']>;
  totalRecords?: Maybe<Scalars['Int']>;
  uniqueVehicles?: Maybe<Scalars['Float']>;
};

export type SessionMarket = {
  __typename?: 'SessionMarket';
  dma?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  marketName?: Maybe<Scalars['String']>;
  sessions?: Maybe<Scalars['Int']>;
};

export type SessionMarketsWithMeta = {
  __typename?: 'SessionMarketsWithMeta';
  edges?: Maybe<Array<Maybe<SessionMarket>>>;
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SessionMeter = {
  __typename?: 'SessionMeter';
  altId?: Maybe<Scalars['ID']>;
  connector?: Maybe<Connector>;
  eventDate?: Maybe<Scalars['Date']>;
  meterand?: Maybe<FalconConstraint>;
  session?: Maybe<Session>;
  value?: Maybe<Scalars['Float']>;
};

export type SessionReading = {
  __typename?: 'SessionReading';
  kWhValue?: Maybe<Scalars['Float']>;
  powerValue?: Maybe<Scalars['Float']>;
  socValue?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Date']>;
};

/** SessionTariffInput is an input type which describes the parameters available to the SessionTariff mutation. THIS SHOULD NOT BE CALLED MANUALLY! */
export type SessionTariffInput = {
  /** A stationChargeTransactionId for looking up the active charge session and sending the current pricing details to the charger for display. */
  stationChargeTransactionId: Scalars['Int'];
};

export type SessionTotals = {
  __typename?: 'SessionTotals';
  kWh?: Maybe<Scalars['Float']>;
  minutes?: Maybe<Scalars['Float']>;
  sessions?: Maybe<Scalars['Float']>;
  totalRecords?: Maybe<Scalars['Int']>;
  uniqueVehicles?: Maybe<Scalars['Float']>;
};

/** An object containing information about the validity of a session */
export type SessionValidation = {
  __typename?: 'SessionValidation';
  /** The ID of the current authorizationStatus of the session */
  authorizationStatusId?: Maybe<Scalars['ID']>;
  /** A message string describing the error for the found session */
  message?: Maybe<Scalars['String']>;
  /** A boolean value that is true when a recent session is found for the input connectorId */
  sessionFound?: Maybe<Scalars['Boolean']>;
};

export type SessionsConsumptionForExtendData = {
  __typename?: 'SessionsConsumptionForExtendData';
  powerCostValue: Scalars['Float'];
  powerValue: Scalars['Float'];
  timestamp?: Maybe<Scalars['Date']>;
  totalSessions: Scalars['Int'];
};

export type SessionsDistributionByWeekdayHourTotals = {
  __typename?: 'SessionsDistributionByWeekdayHourTotals';
  sessionsMax?: Maybe<Scalars['Float']>;
  sessionsMin?: Maybe<Scalars['Float']>;
};

export type SessionsDistributionByWeekdayHourWithMeta = {
  __typename?: 'SessionsDistributionByWeekdayHourWithMeta';
  edges?: Maybe<Array<Maybe<DistributionByWeekdayHour>>>;
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  totals?: Maybe<SessionsDistributionByWeekdayHourTotals>;
};

export type SessionsDistributionWithMeta = {
  __typename?: 'SessionsDistributionWithMeta';
  edges?: Maybe<Array<Maybe<Distribution>>>;
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type SessionsTotalsWithMaintMeta = {
  __typename?: 'SessionsTotalsWithMaintMeta';
  filters?: Maybe<ListSessionsMaintFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  totals?: Maybe<SessionMaintTotals>;
};

export type SessionsTotalsWithMeta = {
  __typename?: 'SessionsTotalsWithMeta';
  filters?: Maybe<ListSessionsFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  totals?: Maybe<SessionTotals>;
};

export type SessionsWithMaintMeta = {
  __typename?: 'SessionsWithMaintMeta';
  edges?: Maybe<Array<Maybe<PortalsSession>>>;
  filters?: Maybe<ListSessionsMaintFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SessionsWithMeta = {
  __typename?: 'SessionsWithMeta';
  edges?: Maybe<Array<Maybe<Session>>>;
  filter?: Maybe<ListSessionsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListSessionsSearchType>;
  total?: Maybe<Scalars['Int']>;
};

export enum SetChargeProfileResponseStatus {
  /** Error */
  Error = 'ERROR',
  /** Validated */
  Validated = 'VALIDATED'
}

export type SetChargingProfileInput = {
  connectorId: Scalars['ID'];
  limit: Scalars['Float'];
  reasonDetail: Scalars['String'];
  reasonType: SetChargingProfileReason;
  shouldPublishSuccessAlert?: InputMaybe<Scalars['Boolean']>;
};

export enum SetChargingProfileReason {
  ChargerDisabled = 'CHARGER_DISABLED',
  /** Set throttle to prevent overloading circuit or tripping breaker */
  ManageCircuit = 'MANAGE_CIRCUIT',
  /** Set throttle to prevent excessive demand charges */
  ManageDemand = 'MANAGE_DEMAND',
  /** Set throttle to avoid charging during peak hours when possible */
  ManageTou = 'MANAGE_TOU',
  /**
   * Set throttle to avoid to minimal power level needed to start session so that
   * power can be allocated maximally to active sessions
   */
  SetPreSessionThrottle = 'SET_PRE_SESSION_THROTTLE',
  /** Stop existing throttle on the charger */
  StopThrottle = 'STOP_THROTTLE'
}

export type SetChargingProfileStatusResponse = {
  __typename?: 'SetChargingProfileStatusResponse';
  SetChargeProfileResponseStatus?: Maybe<SetChargeProfileResponseStatus>;
};

export type SetPrimaryCardForMobileInput = {
  altId: Scalars['ID'];
};

/** SetTariffInput is an input type which describes the parameters available to the SetTariff mutation. THIS SHOULD NOT BE CALLED MANUALLY! */
export type SetTariffInput = {
  /** A billingStationSocketTariffId for looking up chargers associated with a specific station socket tariff and sending the updated payload to the charger. */
  billingStationSocketTariffId?: InputMaybe<Scalars['Int']>;
  /** A billingTariffId for looking up chargers associated with a specific billing tariff and sending the updated paylaod to the charger. */
  billingTariffId?: InputMaybe<Scalars['Int']>;
};

export type ShpHost = {
  __typename?: 'ShpHost';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  externalHostId?: Maybe<Scalars['ID']>;
  googleMapsLink?: Maybe<Scalars['String']>;
  hostSuccessManager?: Maybe<ShpUser>;
  id: Scalars['ID'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<ShpProperty>>>;
  siteHost?: Maybe<ShpUser>;
  state: Scalars['String'];
  updatedAt: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ShpHostContactMilestoneInput = {
  projectMilestoneId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type ShpHostIdInput = {
  id: Scalars['ID'];
};

export type ShpHostList = {
  __typename?: 'ShpHostList';
  count: Scalars['Int'];
  list: Array<ShpHost>;
};

export type ShpMilestoneType = {
  __typename?: 'ShpMilestoneType';
  description: Scalars['String'];
  helperText?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  notifications?: Maybe<MilestoneNotification>;
  siteHostCapabilities?: Maybe<Array<SiteHostCapabilityType>>;
  successManagerCapabilities?: Maybe<Array<SuccessManagerCapabilityType>>;
};

export type ShpNotificationControl = {
  __typename?: 'ShpNotificationControl';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  projectMilestoneDueDateApproaching?: Maybe<Scalars['String']>;
  projectMilestoneDueDateExpired?: Maybe<Scalars['String']>;
  projectMilestoneDueDateMidway?: Maybe<Scalars['String']>;
  projectMilestoneId: Scalars['ID'];
  projectMilestoneStatus?: Maybe<ShpProjectMilestoneStatus>;
  updatedAt: Scalars['String'];
};

export enum ShpNotificationType {
  Welcome = 'WELCOME'
}

export type ShpProject = {
  __typename?: 'ShpProject';
  chargerCount: Scalars['Int'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  externalProjectId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Returns true if this project is the only one for a specific property. Returns false otherwise. */
  isInitialProject?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  /** Returns first milestone that was not approved yet */
  nextMilestone?: Maybe<ShpProjectMilestone>;
  projectMilestones: Array<ShpProjectMilestone>;
  property?: Maybe<ShpProperty>;
  propertyId: Scalars['ID'];
  status: ShpProjectStatus;
  updatedAt: Scalars['String'];
};

export type ShpProjectIdInput = {
  id: Scalars['ID'];
};

export type ShpProjectList = {
  __typename?: 'ShpProjectList';
  count: Scalars['Int'];
  list: Array<ShpProject>;
};

export type ShpProjectMilestone = {
  __typename?: 'ShpProjectMilestone';
  assignedContacts?: Maybe<Array<Maybe<ShpUser>>>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<ShpProjectMilestoneDocument>>>;
  dueDate?: Maybe<Scalars['String']>;
  dueDateUpdatedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  milestoneTemplate: ShpMilestoneType;
  milestoneTypeId: Scalars['String'];
  project?: Maybe<ShpProject>;
  projectId: Scalars['ID'];
  siteHostApprovalDate?: Maybe<Scalars['String']>;
  siteHostScheduledDate?: Maybe<Scalars['String']>;
  status: ShpProjectMilestoneStatus;
  successManagerApprovalDate?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ShpProjectMilestoneActivityForListing = {
  __typename?: 'ShpProjectMilestoneActivityForListing';
  externalProjectId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  milestoneDueDate?: Maybe<Scalars['String']>;
  milestoneStatus?: Maybe<ShpProjectMilestoneStatus>;
  milestoneTemplateName?: Maybe<Scalars['String']>;
  milestoneTypeId?: Maybe<Scalars['String']>;
  milestoneUpdatedAt?: Maybe<Scalars['String']>;
  projectManager?: Maybe<Scalars['String']>;
  projectName: Scalars['String'];
  projectStatus: ShpProjectStatus;
  projectUpdatedAt: Scalars['String'];
  siteDeveloper?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ShpProjectMilestoneActivityList = {
  __typename?: 'ShpProjectMilestoneActivityList';
  count: Scalars['Int'];
  list: Array<ShpProjectMilestoneActivityForListing>;
};

export type ShpProjectMilestoneContact = {
  __typename?: 'ShpProjectMilestoneContact';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  projectMilestoneId: Scalars['ID'];
  state?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

export type ShpProjectMilestoneContactInput = {
  projectMilestoneId: Scalars['ID'];
};

export type ShpProjectMilestoneDocument = {
  __typename?: 'ShpProjectMilestoneDocument';
  createdAt: Scalars['String'];
  createdByUser?: Maybe<ShpUser>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedByUser?: Maybe<ShpUser>;
  fileName: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  projectMilestoneId: Scalars['ID'];
  updatedAt: Scalars['String'];
  updatedByUser?: Maybe<ShpUser>;
};

export enum ShpProjectMilestoneStatus {
  Approved = 'APPROVED',
  Disabled = 'DISABLED',
  NeedsReview = 'NEEDS_REVIEW',
  NotReady = 'NOT_READY',
  OnFile = 'ON_FILE',
  Pending = 'PENDING'
}

export enum ShpProjectStatus {
  Construction = 'CONSTRUCTION',
  Development = 'DEVELOPMENT',
  Operational = 'OPERATIONAL',
  Postponed = 'POSTPONED'
}

export type ShpProperty = {
  __typename?: 'ShpProperty';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  chargerCount: Scalars['Int'];
  city: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  externalPropertyId?: Maybe<Scalars['ID']>;
  googleMapsLink?: Maybe<Scalars['String']>;
  host?: Maybe<ShpHost>;
  hostId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  projectManager?: Maybe<Scalars['String']>;
  siteDeveloper?: Maybe<Scalars['String']>;
  siteId: Scalars['String'];
  state: Scalars['String'];
  storeId: Scalars['String'];
  updatedAt: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ShpPropertyIdInput = {
  id: Scalars['ID'];
};

export type ShpPropertyList = {
  __typename?: 'ShpPropertyList';
  count: Scalars['Int'];
  list: Array<ShpProperty>;
};

export type ShpPropertyProject = {
  __typename?: 'ShpPropertyProject';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  externalProjectId?: Maybe<Scalars['String']>;
  externalPropertyId?: Maybe<Scalars['String']>;
  hostName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  projectStatus?: Maybe<ShpProjectStatus>;
  propertyChargerCount?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ShpPropertyProjectList = {
  __typename?: 'ShpPropertyProjectList';
  count: Scalars['Int'];
  list: Array<ShpPropertyProject>;
};

export type ShpPropertyWithLeastProjectStatus = {
  __typename?: 'ShpPropertyWithLeastProjectStatus';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  chargerCount: Scalars['Int'];
  city: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  externalPropertyId?: Maybe<Scalars['ID']>;
  googleMapsLink?: Maybe<Scalars['String']>;
  hostId: Scalars['ID'];
  hostName: Scalars['String'];
  id: Scalars['ID'];
  leastProjectStatus?: Maybe<ShpProjectStatus>;
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  projectManager?: Maybe<Scalars['String']>;
  siteDeveloper?: Maybe<Scalars['String']>;
  siteId: Scalars['String'];
  state: Scalars['String'];
  storeId: Scalars['String'];
  updatedAt: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ShpPropertyWithLeastProjectStatusList = {
  __typename?: 'ShpPropertyWithLeastProjectStatusList';
  count: Scalars['Int'];
  list: Array<ShpPropertyWithLeastProjectStatus>;
};

export type ShpUser = {
  __typename?: 'ShpUser';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  role: UserShpRole;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ShpUserIdInput = {
  id?: InputMaybe<Scalars['ID']>;
  providerId?: InputMaybe<Scalars['String']>;
};

export type ShpUserList = {
  __typename?: 'ShpUserList';
  count: Scalars['Int'];
  list: Array<ShpUser>;
};

export type Site = {
  __typename?: 'Site';
  /** @deprecated Use siteAccess */
  access?: Maybe<SiteAccess>;
  accessNotes?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  availableChargers?: Maybe<Scalars['Int']>;
  chargeDurationBufferSoc?: Maybe<Scalars['Float']>;
  chargerUtilizationPercentage?: Maybe<Scalars['Float']>;
  chargers?: Maybe<ChargersWithMeta>;
  chargersInUse?: Maybe<Scalars['Int']>;
  chargersOffline?: Maybe<Scalars['Int']>;
  chargingSystems?: Maybe<Array<Maybe<ChargingSystem>>>;
  costTariff?: Maybe<CostTariff>;
  country?: Maybe<Scalars['String']>;
  demandLimit?: Maybe<Scalars['Float']>;
  demandSensitivity?: Maybe<Scalars['Float']>;
  directions?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  evcId?: Maybe<Scalars['String']>;
  evcSyncedAt?: Maybe<Scalars['Date']>;
  fleets: Array<Fleet>;
  hoursOfOperation?: Maybe<HoursType>;
  isDemandLimited?: Maybe<Scalars['Boolean']>;
  isEvgoAccess?: Maybe<Scalars['Boolean']>;
  isEvgoAccessAvailable?: Maybe<Scalars['Boolean']>;
  isOverSubscribed?: Maybe<Scalars['Boolean']>;
  isVacant?: Maybe<Scalars['Boolean']>;
  isValidated?: Maybe<Scalars['Boolean']>;
  kWhDelivered?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  legacyId?: Maybe<Scalars['ID']>;
  locality?: Maybe<Scalars['String']>;
  locationMarket?: Maybe<SiteMarket>;
  locationNotes?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['String']>;
  meterNumber?: Maybe<Scalars['String']>;
  networkOperator?: Maybe<NetworkOperatorType>;
  postalCode?: Maybe<Scalars['String']>;
  property?: Maybe<SiteProperty>;
  ratedVoltage?: Maybe<Scalars['String']>;
  serviceCapacityKw?: Maybe<Scalars['Float']>;
  sid?: Maybe<Scalars['String']>;
  siteAccess?: Maybe<FalconConstraint>;
  siteImages?: Maybe<SiteImagesWithMeta>;
  siteName?: Maybe<Scalars['String']>;
  /** @deprecated Use siteStatusConstraint */
  siteStatus?: Maybe<Scalars['String']>;
  siteStatusConstraint?: Maybe<FalconConstraint>;
  siteStatusId?: Maybe<Scalars['Int']>;
  siteType?: Maybe<FalconConstraint>;
  switchgear?: Maybe<Switchgear>;
  timeZone?: Maybe<Scalars['String']>;
  /** @deprecated Use siteType */
  type?: Maybe<SiteType>;
  utilityCompany?: Maybe<SiteUtilityCompany>;
  utilizationHistory: Array<Maybe<MonthlyUtilization>>;
  utilizationProjection?: Maybe<MonthlyUtilization>;
  vendorId?: Maybe<Scalars['Int']>;
};


export type SiteChargersArgs = {
  input?: InputMaybe<ListChargersInput>;
};


export type SiteKWhDeliveredArgs = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};


export type SiteSiteImagesArgs = {
  input?: InputMaybe<ListSiteImagesInput>;
};

export enum SiteAccess {
  /** Dedicated */
  Dedicated = 'DEDICATED',
  /** Private */
  Private = 'PRIVATE',
  /** Public */
  Public = 'PUBLIC',
  /** Taxi Only */
  TaxiOnly = 'TAXI_ONLY',
  /** Use Site */
  UseSite = 'USE_SITE'
}

export type SiteFilterInput = {
  centerLat?: InputMaybe<Scalars['Float']>;
  centerLng?: InputMaybe<Scalars['Float']>;
  distance?: InputMaybe<Scalars['Float']>;
  neLat?: InputMaybe<Scalars['Float']>;
  neLng?: InputMaybe<Scalars['Float']>;
  openSites?: InputMaybe<Scalars['Boolean']>;
  sid?: InputMaybe<TableStringFilterInput>;
  siteName?: InputMaybe<TableStringFilterInput>;
  siteStatusId?: InputMaybe<TableIntFilterInput>;
  swLat?: InputMaybe<Scalars['Float']>;
  swLng?: InputMaybe<Scalars['Float']>;
};

export type SiteFilterType = {
  __typename?: 'SiteFilterType';
  centerLat?: Maybe<Scalars['Float']>;
  centerLng?: Maybe<Scalars['Float']>;
  chargers_evses_connectors_connectorTypeId?: Maybe<TableIntFilterType>;
  chargers_evses_connectors_outputWatts?: Maybe<TableIntFilterType>;
  distance?: Maybe<Scalars['Float']>;
  neLat?: Maybe<Scalars['Float']>;
  neLng?: Maybe<Scalars['Float']>;
  openSites?: Maybe<Scalars['Boolean']>;
  sid?: Maybe<TableStringFilterType>;
  siteName?: Maybe<TableStringFilterType>;
  siteStatusId?: Maybe<TableStringFilterType>;
  swLat?: Maybe<Scalars['Float']>;
  swLng?: Maybe<Scalars['Float']>;
};

export type SiteForMobile = {
  __typename?: 'SiteForMobile';
  access?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  availableChargers?: Maybe<Scalars['Boolean']>;
  chargerStatus?: Maybe<Scalars['String']>;
  chargers?: Maybe<Array<Maybe<ChargerForMobile>>>;
  country?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  isEvgoAccess?: Maybe<Scalars['Boolean']>;
  isEvgoAccessAvailable?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  locality?: Maybe<Scalars['String']>;
  locationNotes?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  maxConnectorPower?: Maybe<Scalars['Float']>;
  networkName?: Maybe<Scalars['String']>;
  openFrom?: Maybe<Scalars['String']>;
  openTo?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
};

export type SiteForMobileInput = {
  /** Required: A string used as a unique identifier for the site */
  altId: Scalars['ID'];
  /** Required: A float for latitude of the driver or POI. */
  latitude: Scalars['Float'];
  /** Required: A float for longitude of the driver or POI. */
  longitude: Scalars['Float'];
};

export type SiteForMobileSummary = {
  __typename?: 'SiteForMobileSummary';
  available?: Maybe<Scalars['Int']>;
  busy?: Maybe<Scalars['Int']>;
  unavailable?: Maybe<Scalars['Int']>;
  unknown?: Maybe<Scalars['Int']>;
};

export enum SiteHostCapabilityType {
  Approval = 'APPROVAL',
  Call = 'CALL',
  Contact = 'CONTACT',
  ContactWithAddress = 'CONTACT_WITH_ADDRESS',
  Download = 'DOWNLOAD',
  Feedback = 'FEEDBACK',
  Request = 'REQUEST',
  Schedule = 'SCHEDULE',
  Upload = 'UPLOAD'
}

export type SiteImage = {
  __typename?: 'SiteImage';
  altId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  media?: Maybe<Media>;
  site?: Maybe<Site>;
};

export type SiteImagesWithMeta = {
  __typename?: 'SiteImagesWithMeta';
  edges?: Maybe<Array<Maybe<SiteImage>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum SiteMarket {
  /** Location Market 1 */
  LocationMarket_1 = 'LOCATION_MARKET_1',
  /** Location Market 2 */
  LocationMarket_2 = 'LOCATION_MARKET_2',
  /** Location Market 3 */
  LocationMarket_3 = 'LOCATION_MARKET_3',
  /** Location Market 4 */
  LocationMarket_4 = 'LOCATION_MARKET_4',
  /** Location Market 5 */
  LocationMarket_5 = 'LOCATION_MARKET_5'
}

export type SiteProperty = {
  __typename?: 'SiteProperty';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  host?: Maybe<Host>;
  locality?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  status?: Maybe<PropertyStatus>;
  vendorId?: Maybe<Scalars['String']>;
};

export enum SiteType {
  /** Commercial */
  Commercial = 'COMMERCIAL',
  /** DSO */
  Dso = 'DSO',
  /** Gas Station */
  GasStation = 'GAS_STATION',
  /** Government */
  Government = 'GOVERNMENT',
  /** Highway */
  Highway = 'HIGHWAY',
  /** Home */
  Home = 'HOME',
  /** Hotel */
  Hotel = 'HOTEL',
  /** Mall */
  Mall = 'MALL',
  /** Parking Lot */
  ParkingLot = 'PARKING_LOT',
  /** Public Parking */
  PublicParking = 'PUBLIC_PARKING',
  /** Work */
  Work = 'WORK'
}

export enum SiteUtilityCompany {
  /** Host Power */
  HostPower = 'HOST_POWER',
  /** Utility Company 1 */
  UtilityCompany_1 = 'UTILITY_COMPANY_1',
  /** Utility Company 2 */
  UtilityCompany_2 = 'UTILITY_COMPANY_2',
  /** Utility Company 3 */
  UtilityCompany_3 = 'UTILITY_COMPANY_3',
  /** Utility Company 4 */
  UtilityCompany_4 = 'UTILITY_COMPANY_4'
}

export type SitesForMobile = {
  __typename?: 'SitesForMobile';
  access?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  locality?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  maxPower?: Maybe<Array<Maybe<SitesForMobilePowerStatus>>>;
  networkName?: Maybe<Scalars['String']>;
  openFrom?: Maybe<Scalars['String']>;
  openTo?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  reservable?: Maybe<Scalars['Boolean']>;
  siteName?: Maybe<Scalars['String']>;
  siteStatus?: Maybe<Scalars['String']>;
  siteSummary?: Maybe<SiteForMobileSummary>;
  timeZone?: Maybe<Scalars['String']>;
};

export type SitesForMobileInput = {
  /** An integer used to find sites within a radius. Units in miles. */
  distance: Scalars['Int'];
  /** If this flag is set to true and connectorTypeIds has CHADEMO site supports Tesla charging */
  hasTeslaAdapter?: InputMaybe<Scalars['Boolean']>;
  /** An float for latitude of the driver or POI. */
  latitude: Scalars['Float'];
  /** An float for longitude of the driver or POI. */
  longitude: Scalars['Float'];
  /** An array of integers used to filter network operators. */
  networkOperatorIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** An integer for the min desired output in kW filter */
  outputKwMax?: InputMaybe<Scalars['Int']>;
  /** An integer for the min desired output in kW filter */
  outputKwMin?: InputMaybe<Scalars['Int']>;
  /** A boolean flag which applies a true/false filter to the RESERVABLE property of the results returned. */
  reservable?: InputMaybe<Scalars['Boolean']>;
  /** A string used to search against the name, displayName, adddress1, city, zipCode, and usaStateName. */
  search?: InputMaybe<Scalars['String']>;
  /** An array of integers used to filter vehicle connectors. */
  vehicleConnectorIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SitesForMobilePowerStatus = {
  __typename?: 'SitesForMobilePowerStatus';
  power?: Maybe<Scalars['Float']>;
  /** Indication of whether the charger has simultaneous charging enabled */
  simultaneousChargingEnabled: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
};

export type SitesForMobileWithMeta = {
  __typename?: 'SitesForMobileWithMeta';
  edges?: Maybe<Array<Maybe<SitesForMobile>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SitesSessionConsumption = {
  __typename?: 'SitesSessionConsumption';
  cardExternalNumber?: Maybe<Scalars['String']>;
  connectorTypeName?: Maybe<Scalars['String']>;
  consumption?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  duration?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  vehicleIdentifier?: Maybe<Scalars['String']>;
};

export type SitesSessionConsumptionMeta = {
  __typename?: 'SitesSessionConsumptionMeta';
  edges?: Maybe<Array<Maybe<SitesSessionConsumption>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListSitesSessionConsumptionSearchType>;
  sort?: Maybe<ListSitesSessionConsumptionSortType>;
  timeZone?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type SitesWithMeta = {
  __typename?: 'SitesWithMeta';
  edges?: Maybe<Array<Maybe<Site>>>;
  filter?: Maybe<ListSiteFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListSiteSearchType>;
  sort?: Maybe<ListSitesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type Sort = {
  field: Scalars['String'];
  order: SortOrder;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartAutochargeEnrollmentInput = {
  altId: Scalars['UUID'];
};

export type StartChargeFleetInput = {
  cardId: Scalars['Int'];
  cardNumber: Scalars['String'];
  connectorId: Scalars['ID'];
};

export type StartChargeForMobileInput = {
  connectorId: Scalars['ID'];
};

export type StartChargeInput = {
  connectorId: Scalars['ID'];
  driverId: Scalars['ID'];
};

export type Statement = {
  __typename?: 'Statement';
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  invoiceId?: Maybe<Scalars['ID']>;
  invoiceNumber?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type StatementsWithMeta = {
  __typename?: 'StatementsWithMeta';
  edges?: Maybe<Array<Maybe<Statement>>>;
  total?: Maybe<Scalars['Int']>;
};

export type StopChargeForMobileInput = {
  connectorId: Scalars['ID'];
};

export type StopChargeInput = {
  connectorId: Scalars['ID'];
};

export type Success = {
  __typename?: 'Success';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum SuccessManagerCapabilityType {
  Contact = 'CONTACT',
  ContactWithAddress = 'CONTACT_WITH_ADDRESS',
  Disable = 'DISABLE',
  Documents = 'DOCUMENTS'
}

export type SuspendCardsInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  cardIds: Array<Scalars['UUID']>;
  driverId?: InputMaybe<Scalars['UUID']>;
};

export type Switchgear = {
  __typename?: 'Switchgear';
  altId: Scalars['ID'];
  circuits: Array<Circuit>;
  enclosureType?: Maybe<Scalars['String']>;
  flattenedCircuits: Array<Circuit>;
  isIntegrated: Scalars['Boolean'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  modelYear?: Maybe<Scalars['String']>;
  vendorSku?: Maybe<Scalars['String']>;
};

export type SwitchgearInput = {
  circuits: Array<CircuitInput>;
  enclosureType?: InputMaybe<Scalars['String']>;
  isIntegrated: Scalars['Boolean'];
  manufacturer: Scalars['RequiredString'];
  model: Scalars['RequiredString'];
  modelYear?: InputMaybe<Scalars['String']>;
  vendorSku?: InputMaybe<Scalars['String']>;
};

export type SyncAccountInput = {
  altId: Scalars['ID'];
  evcId: Scalars['String'];
  evcSyncedAt?: InputMaybe<Scalars['Date']>;
  publish: Publish;
  vendorSyncedAt: Scalars['Date'];
};

export type SyncAssignCardInput = {
  altId: Scalars['ID'];
};

export type SyncChargerStatusInput = {
  chargerVendorId: Scalars['ID'];
  connectorStatus: Scalars['String'];
  connectorVendorId: Scalars['ID'];
  vendorSyncedAt: Scalars['Timestamp'];
};

export type SyncConnectorInput = {
  evcId: Scalars['ID'];
  status: ConnectorStatus;
};

export type SyncContractInput = {
  accountVendorId: Scalars['ID'];
  balanceType?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  planVendorId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['Date']>;
  vendorId: Scalars['ID'];
  vendorStatus?: InputMaybe<Scalars['String']>;
};

export type SyncCreateAccountOwnerInput = {
  altId: Scalars['ID'];
};

export type SyncCreateAdHocContractInput = {
  accountId: Scalars['ID'];
  amount: Scalars['Int'];
};

export type SyncCreateCardOrderInput = {
  altId: Scalars['ID'];
  contractId?: InputMaybe<Scalars['String']>;
};

export type SyncCreateChargerInput = {
  altId: Scalars['ID'];
};

export type SyncCreateChargerModelInput = {
  altId: Scalars['ID'];
};

export type SyncCreateContractInput = {
  altId: Scalars['ID'];
};

export type SyncCreateHostInput = {
  altId: Scalars['ID'];
};

export type SyncCreatePropertyInput = {
  altId: Scalars['ID'];
};

export type SyncCreateSiteInput = {
  altId: Scalars['ID'];
};

export type SyncDriverInput = {
  altId: Scalars['ID'];
};

export type SyncPasswordResetInput = {
  id: Scalars['String'];
};

export type SyncPlanInput = {
  vendorId: Scalars['ID'];
};

export type SyncSiteInput = {
  altId: Scalars['ID'];
  evcId: Scalars['SanitizeString'];
  evcSyncedAt: Scalars['Date'];
  publish: Publish;
};

export type SyncUpdateAccountInput = {
  altId: Scalars['ID'];
};

export type SyncUpdateAccountOwnerInput = {
  altId: Scalars['ID'];
};

export type SyncUpdateChargerInput = {
  altId: Scalars['ID'];
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type TableBooleanFilterType = {
  __typename?: 'TableBooleanFilterType';
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
};

export type TableDateRangeFilterInput = {
  from?: InputMaybe<Scalars['Date']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type TableDateRangeFilterType = {
  __typename?: 'TableDateRangeFilterType';
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export type TableFilterInput = {
  or?: InputMaybe<Array<InputMaybe<TableIntFilterInput>>>;
};

export type TableFilterType = {
  __typename?: 'TableFilterType';
  or?: Maybe<Array<Maybe<TableIntFilterType>>>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  like?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notLike?: InputMaybe<Scalars['Float']>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  like?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notLike?: InputMaybe<Scalars['Int']>;
};

export type TableIntFilterType = {
  __typename?: 'TableIntFilterType';
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contains?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  like?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  notLike?: Maybe<Scalars['Int']>;
};

export type TableNumberFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum TableSortInput {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum TableSortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['SanitizeString']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  contains?: InputMaybe<Scalars['SanitizeString']>;
  endsWith?: InputMaybe<Scalars['SanitizeString']>;
  eq?: InputMaybe<Scalars['SanitizeString']>;
  ge?: InputMaybe<Scalars['SanitizeString']>;
  gt?: InputMaybe<Scalars['SanitizeString']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  le?: InputMaybe<Scalars['SanitizeString']>;
  lt?: InputMaybe<Scalars['SanitizeString']>;
  ne?: InputMaybe<Scalars['SanitizeString']>;
  notContains?: InputMaybe<Scalars['SanitizeString']>;
};

export type TableStringFilterType = {
  __typename?: 'TableStringFilterType';
  beginsWith?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
};

export type TableTimestampRangeFilterInput = {
  from?: InputMaybe<Scalars['Timestamp']>;
  gte?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

export type TableTimestampRangeFilterType = {
  __typename?: 'TableTimestampRangeFilterType';
  from?: Maybe<Scalars['Timestamp']>;
  to?: Maybe<Scalars['Timestamp']>;
};

export type Tag = {
  __typename?: 'Tag';
  altId?: Maybe<Scalars['ID']>;
  chargers?: Maybe<ChargersWithMeta>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Maybe<Filter>>>;
  planTariffs?: Maybe<TariffWithMeta>;
  tagName?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
};


export type TagChargersArgs = {
  input?: InputMaybe<ListChargersInput>;
};

export type TagsWithMeta = {
  __typename?: 'TagsWithMeta';
  edges?: Maybe<Array<Maybe<Tag>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListTagsSearchType>;
  sort?: Maybe<ListTagsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type Tariff = {
  __typename?: 'Tariff';
  altId: Scalars['ID'];
  connectorTypes?: Maybe<VehicleConnectorsWithMeta>;
  createdAt?: Maybe<Scalars['Date']>;
  energyFee?: Maybe<Scalars['Float']>;
  /** @deprecated Use maxSessionDurationInMinutes instead */
  maxSessionDuration?: Maybe<Scalars['Int']>;
  maxSessionDurationInMinutes?: Maybe<Scalars['Float']>;
  perMinuteFee?: Maybe<Scalars['Float']>;
  planTags?: Maybe<TagsWithMeta>;
  plans?: Maybe<PlanWithMeta>;
  sessionFee?: Maybe<Scalars['Float']>;
  tags?: Maybe<TagsWithMeta>;
  tariffDescription?: Maybe<Scalars['SanitizeString']>;
  tariffItems?: Maybe<Array<Maybe<TariffItem>>>;
  tariffName: Scalars['SanitizeString'];
  tariffRank?: Maybe<Scalars['Int']>;
};

export type TariffConnectorTypes = {
  __typename?: 'TariffConnectorTypes';
  connector?: Maybe<VehicleConnectorsWithMeta>;
  deletedAt?: Maybe<Scalars['Date']>;
  tariff?: Maybe<Tariff>;
};

export type TariffConnectorTypesWithMeta = {
  __typename?: 'TariffConnectorTypesWithMeta';
  edges?: Maybe<Array<Maybe<VehicleConnector>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TariffCustomPricesForExtend = {
  __typename?: 'TariffCustomPricesForExtend';
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
};

export type TariffCustomPricingForExtend = {
  __typename?: 'TariffCustomPricingForExtend';
  altId: Scalars['ID'];
  pricing: TariffCustomPricesForExtend;
  tariffSchedule: Array<TariffScheduleForExtend>;
};

export type TariffForExtend = {
  __typename?: 'TariffForExtend';
  altId: Scalars['ID'];
  customPricing?: Maybe<Array<TariffCustomPricingForExtend>>;
  defaultPricing?: Maybe<TariffPricingForExtend>;
  tariffDescription?: Maybe<Scalars['SanitizeString']>;
  tariffName: Scalars['SanitizeString'];
  tariffRank?: Maybe<Scalars['Int']>;
};

export type TariffItem = {
  __typename?: 'TariffItem';
  altId: Scalars['ID'];
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
  tariffItemName: Scalars['String'];
  tariffSchedule?: Maybe<TariffSchedule>;
  tariffSchedules: Array<TariffScheduleOp>;
  vendorId?: Maybe<Scalars['ID']>;
};

export type TariffItemInput = {
  altId?: InputMaybe<Scalars['ID']>;
  perKwh?: InputMaybe<Scalars['Float']>;
  perMinute?: InputMaybe<Scalars['Float']>;
  perSession?: InputMaybe<Scalars['Float']>;
  tariffItemName?: InputMaybe<Scalars['String']>;
  tariffSchedules: Array<TariffScheduleInput>;
};

export type TariffPricingForExtend = {
  __typename?: 'TariffPricingForExtend';
  altId: Scalars['ID'];
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
};

export enum TariffRateType {
  Kwh = 'KWH',
  Minute = 'MINUTE',
  Session = 'SESSION'
}

export type TariffSchedule = {
  __typename?: 'TariffSchedule';
  scheduleName?: Maybe<Scalars['String']>;
};

export type TariffScheduleForExtend = {
  __typename?: 'TariffScheduleForExtend';
  daysOfWeek: Array<Day>;
  endTime: Scalars['String'];
  startTime: Scalars['String'];
};

export type TariffScheduleInput = {
  dayOfWeek: DayOfWeek;
  endTime: Scalars['String'];
  scheduleName?: InputMaybe<Scalars['String']>;
  startTime: Scalars['String'];
};

export type TariffScheduleOp = {
  __typename?: 'TariffScheduleOP';
  altId: Scalars['ID'];
  dayOfWeek: DayOfWeek;
  endTime: Scalars['String'];
  startTime: Scalars['String'];
  tariffItem?: Maybe<TariffItem>;
};

export type TariffWithMeta = {
  __typename?: 'TariffWithMeta';
  edges?: Maybe<Array<Maybe<Tariff>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListTariffsSearchType>;
  sort?: Maybe<ListTariffsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum TerminationBehavior {
  /** Expires */
  Expires = 'EXPIRES',
  /** Reoccurs */
  Reoccurs = 'REOCCURS',
  /** Rollover */
  Rollover = 'ROLLOVER'
}

export enum TeslaConnectorType {
  /** Adapter */
  Adapter = 'ADAPTER',
  /** Connector */
  Connector = 'CONNECTOR',
  /** None */
  None = 'NONE'
}

export type Ticket = {
  __typename?: 'Ticket';
  body?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Date']>;
  issueType?: Maybe<TicketIssueType>;
  newComment?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<PriorityType>;
  requester: TicketRequester;
  status?: Maybe<TicketStatus>;
  subject: Scalars['String'];
  ticketComments?: Maybe<Array<Maybe<TicketComment>>>;
  ticketNumber: Scalars['String'];
  updatedDate?: Maybe<Scalars['Date']>;
};

export type TicketComment = {
  __typename?: 'TicketComment';
  body: Scalars['String'];
  createdDate: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TicketCustomField = {
  __typename?: 'TicketCustomField';
  id: Scalars['String'];
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};

export type TicketField = {
  __typename?: 'TicketField';
  altId: Scalars['ID'];
  displayName: Scalars['String'];
  type: TicketFieldType;
  vendorId: Scalars['String'];
};

export enum TicketFieldType {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Dropdown = 'DROPDOWN',
  Multiline = 'MULTILINE',
  Multiselect = 'MULTISELECT',
  Text = 'TEXT'
}

export enum TicketIssueType {
  Charging = 'CHARGING',
  Communication = 'COMMUNICATION',
  Hardware = 'HARDWARE',
  Other = 'OTHER',
  Software = 'SOFTWARE'
}

export type TicketRequester = {
  __typename?: 'TicketRequester';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum TicketStatus {
  Closed = 'CLOSED',
  Hold = 'HOLD',
  New = 'NEW',
  Open = 'OPEN',
  Pending = 'PENDING',
  Solved = 'SOLVED'
}

export type TicketsWithMeta = {
  __typename?: 'TicketsWithMeta';
  edges?: Maybe<Array<Maybe<Ticket>>>;
  filter?: Maybe<ListTicketsFilterType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<ListTicketsSearchType>;
  sort?: Maybe<ListTicketsSortType>;
  total?: Maybe<Scalars['Int']>;
};

export type TimeSlot = {
  __typename?: 'TimeSlot';
  startTime?: Maybe<Scalars['Date']>;
};

export type TimeSlotInput = {
  from?: InputMaybe<Scalars['SanitizeString']>;
  to?: InputMaybe<Scalars['SanitizeString']>;
};

export type TimeSlotType = {
  __typename?: 'TimeSlotType';
  from?: Maybe<Scalars['SanitizeString']>;
  to?: Maybe<Scalars['SanitizeString']>;
};

export type TouPrices = {
  __typename?: 'TouPrices';
  /** The name of the pricing schedule */
  name?: Maybe<Scalars['String']>;
  /** A number that represents the order of schedule */
  order?: Maybe<Scalars['Int']>;
  /** A string that represents the price in cents */
  price?: Maybe<Scalars['String']>;
  /** A string that represents the pricing per unit */
  priceUnit?: Maybe<Scalars['String']>;
  /** A an array of strings that represents the scheduled time of the price */
  schedule?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TouPricing = {
  __typename?: 'TouPricing';
  /** An int indicating the sort order for which the TouPricingByAggregate object should appear in */
  order?: Maybe<Scalars['Int']>;
  /** A float representing the price per price unit */
  price?: Maybe<Scalars['Float']>;
  /** A string indicating the price tier for time of use */
  priceTier?: Maybe<Scalars['String']>;
  /** An array of strings with time ranges */
  priceTierSchedule?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string with units used for charging (will most likely be /kWh) */
  priceUnit?: Maybe<Scalars['String']>;
  /** A string indicating the number of reservations */
  reservations?: Maybe<Scalars['String']>;
  /** A float representing the credit amount for the subscription */
  subscriptionCredit?: Maybe<Scalars['Float']>;
  /** A float representing the fee for the subscription */
  subscriptionFee?: Maybe<Scalars['Float']>;
  /** A float representing the fee per transaction */
  transactionFee?: Maybe<Scalars['Float']>;
};

export type TouPricingByRange = {
  __typename?: 'TouPricingByRange';
  /** A float representing the max price per price unit */
  maxPrice?: Maybe<Scalars['Float']>;
  /** A float representing the min price per price unit */
  minPrice?: Maybe<Scalars['Float']>;
  /** An int indicating the sort order for which the TouPricingByAggregate object should appear in */
  order?: Maybe<Scalars['Int']>;
  /** A string indicating the price tier for time of use */
  priceTier?: Maybe<Scalars['String']>;
  /** An array of strings with time ranges */
  priceTierSchedule?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string with units used for charging (will most likely be /kWh) */
  priceUnit?: Maybe<Scalars['String']>;
  /** A string indicating the number of reservations */
  reservations?: Maybe<Scalars['String']>;
  /** A float representing the credit amount for the subscription */
  subscriptionCredit?: Maybe<Scalars['Float']>;
  /** A float representing the fee for the subscription */
  subscriptionFee?: Maybe<Scalars['Float']>;
  /** A float representing the fee per transaction */
  transactionFee?: Maybe<Scalars['Float']>;
};

export type TouPricingInput = {
  planId?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['String']>;
};

export type TouRegion = {
  __typename?: 'TouRegion';
  /** An int representing the region id */
  id?: Maybe<Scalars['Int']>;
  /** A string representing the region name */
  name?: Maybe<Scalars['String']>;
  /** A string representing the region pricing tier */
  tier?: Maybe<Scalars['String']>;
};

export type TouRegionWithPricing = {
  __typename?: 'TouRegionWithPricing';
  /** A boolean used to flag the LA region */
  defaultValue?: Maybe<Scalars['Boolean']>;
  /** A float for the latitude coordinate representing the center of the region */
  latitude?: Maybe<Scalars['Float']>;
  /** A float for the longitude coordinate representing the center of the region */
  longitude?: Maybe<Scalars['Float']>;
  /** A boolean used to flag the region as the nearest to the POI ? */
  nearest?: Maybe<Scalars['Boolean']>;
  /** An int representing the id of the region */
  regionId?: Maybe<Scalars['Int']>;
  /** A string representing the name of the region */
  regionName?: Maybe<Scalars['String']>;
  /** A string representing the tier level for the region */
  tier?: Maybe<Scalars['String']>;
  /** An array of TouPricingByRegion objects nested under the region */
  touPricing?: Maybe<Array<Maybe<TouPricing>>>;
};

export type TouRegionWithPricingInput = {
  /** Required: The ID of the Plan */
  planId?: InputMaybe<Scalars['Int']>;
  /** Optional: The ID of the Region */
  regionId?: InputMaybe<Scalars['Int']>;
};

export type TouRegionWithRangePricing = {
  __typename?: 'TouRegionWithRangePricing';
  /** A boolean used to flag the LA region */
  defaultValue?: Maybe<Scalars['Boolean']>;
  /** A float for the latitude coordinate representing the center of the region */
  latitude?: Maybe<Scalars['Float']>;
  /** A float for the longitude coordinate representing the center of the region */
  longitude?: Maybe<Scalars['Float']>;
  /** A boolean used to flag the region as the nearest to the POI ? */
  nearest?: Maybe<Scalars['Boolean']>;
  /** An int representing the id of the region */
  regionId?: Maybe<Scalars['Int']>;
  /** A string representing the name of the region */
  regionName?: Maybe<Scalars['String']>;
  /** An array of TouPricingByAggregate objects nested under the region */
  touPricingByRange?: Maybe<Array<Maybe<TouPricingByRange>>>;
};

export type TouRegionWithRangePricingInput = {
  /** Required: The ID of the Plan */
  planId?: InputMaybe<Scalars['Int']>;
  /** Optional: The ID of the Region */
  regionId?: InputMaybe<Scalars['Int']>;
  /** Optional: The name of the Region */
  regionName?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['String']>;
  billingPlanProduct?: Maybe<Scalars['String']>;
  billingProductCategoryType?: Maybe<Scalars['String']>;
  billingTransactionStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  debit?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<TransactionItem>>>;
  sessionId?: Maybe<Scalars['ID']>;
  siteName?: Maybe<Scalars['String']>;
};

export type TransactionItem = {
  __typename?: 'TransactionItem';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  productQuantity?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['String']>;
};

export type TransactionItemsWithMeta = {
  __typename?: 'TransactionItemsWithMeta';
  edges?: Maybe<Array<Maybe<TransactionItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TransactionsWithMeta = {
  __typename?: 'TransactionsWithMeta';
  edges?: Maybe<Array<Maybe<Transaction>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Trip = {
  __typename?: 'Trip';
  altId: Scalars['ID'];
  departureDatetimeUtc?: Maybe<Scalars['Date']>;
  routeAltId?: Maybe<Scalars['UUID']>;
  source: TripSource;
  status: TripStatus;
  targetSoc: Scalars['Float'];
  vehicleAltId?: Maybe<Scalars['UUID']>;
};

export enum TripSource {
  Api = 'API',
  Fe = 'FE',
  Route = 'ROUTE'
}

export enum TripStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Scheduled = 'SCHEDULED'
}

export type UnassignCardsInput = {
  cardIds: Array<Scalars['UUID']>;
};

export type UnassignFleetVehicleRouteInput = {
  fleetVehicleId: Scalars['UUID'];
};

export type UnassignTripFromFleetVehicleInput = {
  fleetVehicleAltId: Scalars['UUID'];
};

export type UnassociatedChargerForFleet = {
  __typename?: 'UnassociatedChargerForFleet';
  altId: Scalars['ID'];
  chargerModel?: Maybe<ChargerModel>;
  chargerName?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['SanitizeString']>;
};

export type UnassociatedChargersForFleetWithMeta = {
  __typename?: 'UnassociatedChargersForFleetWithMeta';
  edges?: Maybe<Array<Maybe<UnassociatedChargerForFleet>>>;
};

export enum UnitType {
  /** All in One */
  AllInOne = 'ALL_IN_ONE',
  /** Cabinet */
  Cabinet = 'CABINET',
  /** Dispenser */
  Dispenser = 'DISPENSER'
}

export type UpdateAccountInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  altId: Scalars['ID'];
  billingAddress?: InputMaybe<UpdateAddressInput>;
  enrolledOn?: InputMaybe<Scalars['Date']>;
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  isFcms?: InputMaybe<Scalars['Boolean']>;
  mailingAddress?: InputMaybe<UpdateAddressInput>;
  vendorId?: InputMaybe<Scalars['Int']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type UpdateAccountOwnerInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountStatus?: InputMaybe<AccountStatus>;
  balanceType?: InputMaybe<Scalars['ID']>;
  billingAddress?: InputMaybe<UpdateAddressInput>;
  driverId?: InputMaybe<Scalars['ID']>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  legacyPhone?: InputMaybe<Scalars['SanitizeString']>;
  mailingAddress?: InputMaybe<UpdateAddressInput>;
  notificationPreferences?: InputMaybe<Array<InputMaybe<UpdateNotificationPreferencesInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  vendorAccountType?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type UpdateAccountVehicleInput = {
  accountId: Scalars['UUID'];
  altId: Scalars['UUID'];
  autochargeFlag?: InputMaybe<Scalars['Boolean']>;
  driverId?: InputMaybe<Scalars['UUID']>;
  macAddress?: InputMaybe<Scalars['SanitizeString']>;
  media?: InputMaybe<GetMediaInput>;
  nickName?: InputMaybe<Scalars['SanitizeString']>;
  vehicleId: Scalars['UUID'];
  vin?: InputMaybe<Scalars['Vin']>;
};

export type UpdateAdHocContractInput = {
  accountId: Scalars['ID'];
  amount: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  address1: Scalars['SanitizeString'];
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  /** administrativeArea must be the 2-character state-code for US addresses (CA, OR, AZ), or the full name of the province for Canadian addresses (Quebec, Ontario, British Columbia) */
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  altId?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateAlertInput = {
  altId: Scalars['ID'];
  state: UpdateAlertStateInput;
};

export type UpdateAlertStateInput = {
  isRead?: InputMaybe<Scalars['Boolean']>;
  isTicketSubmitted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateCabinetInput = {
  altId: Scalars['UUID'];
  cabinetModelAltId?: InputMaybe<Scalars['UUID']>;
  circuitAltId?: InputMaybe<Scalars['UUID']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  wiredVolts?: InputMaybe<Scalars['Float']>;
  wiredVoltsPhases?: InputMaybe<Scalars['Float']>;
  wiringConfig?: InputMaybe<WiringConfig>;
};

export type UpdateCabinetModelInput = {
  altId: Scalars['ID'];
  breakerRating?: InputMaybe<Scalars['Float']>;
  chargerModelAltId?: InputMaybe<Scalars['String']>;
  efficiency?: InputMaybe<Scalars['String']>;
  inputAcVoltage?: InputMaybe<InputAcVoltage>;
  isIntegrated?: InputMaybe<Scalars['Boolean']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelName?: InputMaybe<Scalars['String']>;
  modelSku?: InputMaybe<Scalars['String']>;
  powerFactor?: InputMaybe<Scalars['Float']>;
};

export type UpdateCardInput = {
  altId: Scalars['UUID'];
  brand?: InputMaybe<Scalars['String']>;
  cardStatus?: InputMaybe<Scalars['String']>;
  driverId?: InputMaybe<Scalars['UUID']>;
  nickName?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type UpdateCardOrdersInput = {
  cardOrderIds: Array<Scalars['ID']>;
};

export type UpdateCardStatusInput = {
  cardAltId: Scalars['String'];
  cardStatus: CardStatus;
  comments?: InputMaybe<Scalars['String']>;
};

/** Input for updating a charger group */
export type UpdateChargerGroupForExtendInput = {
  altId: Scalars['ID'];
  chargerGroupName?: InputMaybe<Scalars['SanitizeString']>;
  description?: InputMaybe<Scalars['SanitizeString']>;
  /** Host altId associated with the charger group */
  hostId: Scalars['ID'];
};

export type UpdateChargerInput = {
  additionalEquipment?: InputMaybe<Scalars['SanitizeString']>;
  additionalSerial?: InputMaybe<Scalars['SanitizeString']>;
  altId?: InputMaybe<Scalars['ID']>;
  authenticationMethodsConstraint?: InputMaybe<Scalars['Int']>;
  authenticationModeId?: InputMaybe<Scalars['Int']>;
  brand?: InputMaybe<Scalars['SanitizeString']>;
  ccReaderType?: InputMaybe<Scalars['SanitizeString']>;
  certified?: InputMaybe<Scalars['Boolean']>;
  chargePointIdentity?: InputMaybe<Scalars['SanitizeString']>;
  chargerGroups?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  chargerHost?: InputMaybe<Scalars['SanitizeString']>;
  chargerIsManaged?: InputMaybe<Scalars['Boolean']>;
  chargerModelId?: InputMaybe<Scalars['ID']>;
  chargerName?: InputMaybe<Scalars['SanitizeString']>;
  chargerStatusId?: InputMaybe<Scalars['Int']>;
  cid?: InputMaybe<Scalars['SanitizeString']>;
  coBranding?: InputMaybe<Scalars['SanitizeString']>;
  communicationMethod?: InputMaybe<Scalars['SanitizeString']>;
  connectionDate?: InputMaybe<Scalars['SanitizeString']>;
  connectionUri?: InputMaybe<Scalars['SanitizeString']>;
  connectorTypes?: InputMaybe<Array<InputMaybe<Scalars['SanitizeString']>>>;
  description?: InputMaybe<Scalars['SanitizeString']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  equipmentId?: InputMaybe<Scalars['SanitizeString']>;
  evcId?: InputMaybe<Scalars['ID']>;
  evseId?: InputMaybe<Scalars['SanitizeString']>;
  evses?: InputMaybe<Array<InputMaybe<EvseInput>>>;
  excludeFromOcpi?: InputMaybe<Scalars['Boolean']>;
  excluded?: InputMaybe<Scalars['Boolean']>;
  fieldStationStatus?: InputMaybe<FieldStationStatus>;
  firmWareVersion?: InputMaybe<Scalars['SanitizeString']>;
  firstActive?: InputMaybe<Scalars['SanitizeString']>;
  fundingSource?: InputMaybe<Scalars['SanitizeString']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  identityKey?: InputMaybe<Scalars['SanitizeString']>;
  ignoreStatusNotifications?: InputMaybe<Scalars['Boolean']>;
  infrastructureProviderCompanyId?: InputMaybe<Scalars['Int']>;
  installDate?: InputMaybe<Scalars['SanitizeString']>;
  ipAddress?: InputMaybe<Scalars['SanitizeString']>;
  lastReportedFirmwareVersion?: InputMaybe<Scalars['SanitizeString']>;
  localLoadBalancingEnabled?: InputMaybe<Scalars['Boolean']>;
  localNetworkMaster?: InputMaybe<Scalars['Boolean']>;
  locationId?: InputMaybe<Scalars['ID']>;
  locationType?: InputMaybe<Scalars['SanitizeString']>;
  macAddress?: InputMaybe<Scalars['SanitizeString']>;
  maintenanceComments?: InputMaybe<Scalars['String']>;
  maintenanceVendorId?: InputMaybe<Scalars['Int']>;
  maxPower?: InputMaybe<Scalars['Int']>;
  meterSigningSupported?: InputMaybe<Scalars['Boolean']>;
  modelNotes?: InputMaybe<Scalars['SanitizeString']>;
  modelNumber?: InputMaybe<Scalars['SanitizeString']>;
  modemSerialNumber?: InputMaybe<Scalars['String']>;
  mountType?: InputMaybe<Scalars['SanitizeString']>;
  networkConnectionTypeId?: InputMaybe<Scalars['Int']>;
  nextMaintenanceDate?: InputMaybe<Scalars['Date']>;
  nonNetworked?: InputMaybe<Scalars['Boolean']>;
  ports?: InputMaybe<Array<InputMaybe<PortInput>>>;
  productIdentityKeyId?: InputMaybe<Scalars['Int']>;
  serialNumber?: InputMaybe<Scalars['SanitizeString']>;
  serverSideLocalLoadBalancingEnabled?: InputMaybe<Scalars['Boolean']>;
  showInThirdPartyFilters?: InputMaybe<Scalars['Boolean']>;
  simCardIccid?: InputMaybe<Scalars['SanitizeString']>;
  simCardImsi?: InputMaybe<Scalars['SanitizeString']>;
  simultaneousChargingEnabled?: InputMaybe<Scalars['Boolean']>;
  smartChargingEnabled?: InputMaybe<Scalars['Boolean']>;
  teslaAdapter?: InputMaybe<Scalars['Boolean']>;
  underEaProgram?: InputMaybe<Scalars['Boolean']>;
  updateVendorId?: InputMaybe<Scalars['Int']>;
  usageStartDate?: InputMaybe<Scalars['SanitizeString']>;
  validateMeterSignature?: InputMaybe<Scalars['Boolean']>;
  vendorId?: InputMaybe<Scalars['Int']>;
  warehouseLocation?: InputMaybe<Scalars['SanitizeString']>;
  warrantyExpirationDate?: InputMaybe<Scalars['Date']>;
  warrantyLengthId?: InputMaybe<Scalars['Int']>;
  warrantyStartDate?: InputMaybe<Scalars['Date']>;
  warrantyStatusId?: InputMaybe<Scalars['Int']>;
  wirelessConnectionCarrierId?: InputMaybe<Scalars['Int']>;
};

export type UpdateChargerModelInput = {
  additionalDetails?: InputMaybe<Scalars['SanitizeString']>;
  altId: Scalars['ID'];
  autoChargeSupported?: InputMaybe<Scalars['Boolean']>;
  breakerRating?: InputMaybe<Scalars['Float']>;
  chargerModelEvses?: InputMaybe<Array<InputMaybe<ChargerModelEvseInput>>>;
  communicationProtocol?: InputMaybe<Scalars['String']>;
  currentThd?: InputMaybe<Scalars['SanitizeString']>;
  dimensions?: InputMaybe<Scalars['SanitizeString']>;
  display?: InputMaybe<Scalars['SanitizeString']>;
  efficiency?: InputMaybe<Scalars['SanitizeString']>;
  evses?: InputMaybe<Array<InputMaybe<ChargerModelEvseInput>>>;
  firmwareVersion?: InputMaybe<Scalars['SanitizeString']>;
  ingressProtection?: InputMaybe<Scalars['SanitizeString']>;
  inputAcVoltage?: InputMaybe<InputAcVoltage>;
  interfaceVersion?: InputMaybe<InterfaceVersion>;
  isoIec?: InputMaybe<Scalars['Boolean']>;
  manufacturer?: InputMaybe<Manufacturer>;
  modelName?: InputMaybe<Scalars['SanitizeString']>;
  modelNotes?: InputMaybe<Scalars['String']>;
  modelSku?: InputMaybe<Scalars['SanitizeString']>;
  mountType?: InputMaybe<Scalars['String']>;
  networkCommunication?: InputMaybe<NetworkCommunication>;
  nfcReader?: InputMaybe<Scalars['Boolean']>;
  ports?: InputMaybe<Array<InputMaybe<PortInput>>>;
  powerFactor?: InputMaybe<Scalars['Float']>;
  powerOutput?: InputMaybe<Scalars['PowerUnit']>;
  simultaneousChargeSupported?: InputMaybe<Scalars['Boolean']>;
  smartEnergyProfileSupport?: InputMaybe<Scalars['Boolean']>;
  unitType?: InputMaybe<UnitType>;
  weight?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateChargingSystemInput = {
  altId: Scalars['String'];
  cabinet?: InputMaybe<UpdateCabinetInput>;
  chargerAltId?: InputMaybe<Scalars['String']>;
  chargingSystemName?: InputMaybe<Scalars['String']>;
  powerSharingEnabled?: InputMaybe<Scalars['Boolean']>;
  siteAltId?: InputMaybe<Scalars['String']>;
};

export type UpdateCircuitInput = {
  altId: Scalars['UUID'];
  childCabinetIds?: InputMaybe<Array<Scalars['UUID']>>;
  circuitName: Scalars['String'];
  circuitType: CircuitType;
  hasBreaker: Scalars['Boolean'];
  lineKwChargerLimit?: InputMaybe<Scalars['Float']>;
  maxAmpsSetting?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['UUID']>;
  ratingAmps?: InputMaybe<Scalars['Float']>;
  ratingVolts: Scalars['Float'];
  ratingVoltsPhases?: InputMaybe<Scalars['Int']>;
  switchgearId: Scalars['UUID'];
};

export type UpdateConnectorForFleetInput = {
  altId: Scalars['UUID'];
  canOverride?: InputMaybe<Scalars['Boolean']>;
  isOverridden?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateConnectorInput = {
  altId: Scalars['ID'];
  chargingProfileStatus?: InputMaybe<ChargingProfileStatus>;
  connectorPlacement?: InputMaybe<ConnectorPlacement>;
  isThrottling?: InputMaybe<Scalars['Boolean']>;
  requestedPowerLimit?: InputMaybe<Scalars['Float']>;
  teslaConnectorType?: InputMaybe<TeslaConnectorType>;
  vendorId?: InputMaybe<Scalars['Int']>;
};

export type UpdateConnectorPowerLimitInput = {
  altId: Scalars['ID'];
  powerLimit: Scalars['Float'];
  reasonString?: InputMaybe<Scalars['String']>;
};

export type UpdateContractInput = {
  altId: Scalars['ID'];
  closureDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  startDate?: InputMaybe<Scalars['Date']>;
  statusId?: InputMaybe<Scalars['Int']>;
};

export type UpdateCostTariffInput = {
  altId: Scalars['UUID'];
  demandRateValue?: InputMaybe<Scalars['Float']>;
  siteId?: InputMaybe<Scalars['UUID']>;
  utilityName?: InputMaybe<Scalars['String']>;
  validFromDate?: InputMaybe<Scalars['Date']>;
  validToDate?: InputMaybe<Scalars['Date']>;
};

export type UpdateCustomPricingForExtendInput = {
  altId?: InputMaybe<Scalars['ID']>;
  pricing: UpdatePricingForExtendInput;
  tariffSchedule: Array<CreateTariffScheduleForExtendInput>;
};

export type UpdateDriverInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  altId?: InputMaybe<Scalars['ID']>;
  driverStatusId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  enrolledOn?: InputMaybe<Scalars['Date']>;
  firebaseId?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  invited?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  legacyPhone?: InputMaybe<Scalars['SanitizeString']>;
  notificationPreferences?: InputMaybe<Array<InputMaybe<UpdateNotificationPreferencesInput>>>;
  phone?: InputMaybe<Scalars['Phone']>;
  tokenAndroid?: InputMaybe<Scalars['String']>;
  tokenIos?: InputMaybe<Scalars['String']>;
  vendorDriverStatus?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEmailListInput = {
  altId: Scalars['UUID'];
  name?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateEmailListRecipientInput = {
  altId?: InputMaybe<Scalars['UUID']>;
  emailAddress: Scalars['EncryptedEmail'];
  emailListId?: InputMaybe<Scalars['ID']>;
  internalId?: InputMaybe<Scalars['SanitizeString']>;
  isEligible: Scalars['Boolean'];
  lastEmailed?: InputMaybe<Scalars['Timestamp']>;
  mergeVars?: InputMaybe<Scalars['EncryptedJson']>;
  tags?: InputMaybe<Scalars['String']>;
};

export type UpdateEnergyRateInput = {
  altId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['Date']>;
  endDayOfWeek?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['Time']>;
  /** Value of endTimeInSiteTime is based on site's time instead of UTC time */
  endTimeInSiteTime?: InputMaybe<Scalars['Time']>;
  energyRateRank?: InputMaybe<Scalars['Int']>;
  energyRateValue?: InputMaybe<Scalars['Float']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  fromDayOfWeek?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Time']>;
  /** Value of startTimeInSiteTime is based on site's time instead of UTC time */
  startTimeInSiteTime?: InputMaybe<Scalars['Time']>;
};

export type UpdateExtendUserHostsInput = {
  /** Unique UUID of the user */
  altId: Scalars['ID'];
  /** ID stored in firebase for the user */
  firebaseId?: InputMaybe<Scalars['String']>;
  /** IDs of the hosts which are being added/updated on the user */
  hostIds: Array<Scalars['ID']>;
  /** Unique username string */
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateFilterInput = {
  criteria?: InputMaybe<Scalars['SanitizeString']>;
  exclude?: InputMaybe<Scalars['Boolean']>;
  operator?: InputMaybe<Scalars['SanitizeString']>;
  values?: InputMaybe<Array<InputMaybe<UpdateFilterValueInput>>>;
};

export type UpdateFilterValueInput = {
  label?: InputMaybe<Scalars['SanitizeString']>;
  valid?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['SanitizeString'];
};

export type UpdateFleetInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  altId: Scalars['ID'];
  fleetName: Scalars['RequiredString'];
  siteId?: InputMaybe<Scalars['ID']>;
};

export type UpdateFleetUserInput = {
  accountId: Scalars['ID'];
  firebaseId: Scalars['String'];
};

export type UpdateFleetVehicleInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  activityStatus?: InputMaybe<ActivityStatus>;
  altId: Scalars['ID'];
  cardId?: InputMaybe<Scalars['UUID']>;
  chargeCurveId?: InputMaybe<Scalars['Int']>;
  connectorType?: InputMaybe<VehicleConnectorType>;
  defaultTargetSoc?: InputMaybe<Scalars['Float']>;
  departureStatus?: InputMaybe<DepartureStatus>;
  dimensions?: InputMaybe<Scalars['String']>;
  economyCity?: InputMaybe<Scalars['Float']>;
  economyHwy?: InputMaybe<Scalars['Float']>;
  estimatedChargingCompletionTime?: InputMaybe<Scalars['Date']>;
  expectedDeparture?: InputMaybe<Scalars['Date']>;
  fleetId?: InputMaybe<Scalars['UUID']>;
  isOperational?: InputMaybe<Scalars['Boolean']>;
  isSocTargetMet?: InputMaybe<Scalars['Boolean']>;
  lastKnownSoc?: InputMaybe<Scalars['Float']>;
  lastKnownSocUpdateSource?: InputMaybe<LastKnownSocUpdateSource>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  modelYear?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Scalars['Float']>;
  ratingAmps?: InputMaybe<Scalars['Float']>;
  ratingKw?: InputMaybe<Scalars['Float']>;
  ratingKwh?: InputMaybe<Scalars['Float']>;
  ratingVolts?: InputMaybe<Scalars['Float']>;
  socTarget?: InputMaybe<Scalars['Float']>;
  trim?: InputMaybe<Scalars['String']>;
  vehicleClass?: InputMaybe<VehicleClass>;
  vehicleIdentifier?: InputMaybe<Scalars['String']>;
  vendorSku?: InputMaybe<Scalars['String']>;
  vin?: InputMaybe<Scalars['String']>;
};

export type UpdateFleetVehicleMessage = {
  __typename?: 'UpdateFleetVehicleMessage';
  fleetVehicleActivityStatus: Scalars['String'];
  fleetVehicleAltId: Scalars['ID'];
  fleetVehicleLastKnownSoc: Scalars['Float'];
  fleetVehicleSocSource: Scalars['String'];
};

export type UpdateFleetVehicleRouteMessage = {
  __typename?: 'UpdateFleetVehicleRouteMessage';
  fleetVehicleAltId: Scalars['ID'];
  routeAccountId: Scalars['ID'];
  routeAltId: Scalars['String'];
  routeCityFactor: Scalars['Float'];
  routeDeparturePropertyId: Scalars['String'];
  routeNewAltId: Scalars['String'];
  routeRouteDistance: Scalars['Float'];
  routeRouteName: Scalars['String'];
  routeScheduledDepartureTime: Scalars['String'];
};

export type UpdateHostInput = {
  address1?: InputMaybe<Scalars['SanitizeString']>;
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  altId?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  hid?: InputMaybe<Scalars['SanitizeString']>;
  hostName?: InputMaybe<Scalars['SanitizeString']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
  status?: InputMaybe<HostStatus>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateNotificationPreferencesInput = {
  driverId?: InputMaybe<Scalars['ID']>;
  emailOn?: InputMaybe<Scalars['Boolean']>;
  notificationItemId?: InputMaybe<Scalars['ID']>;
  pushOn?: InputMaybe<Scalars['Boolean']>;
  smsOn?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePartnerAccessTokenInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  authorizedScopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiresAt?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  partnerPlatformId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type UpdatePartnerInput = {
  accountNumber?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  partnerAccessTokenId?: InputMaybe<Scalars['ID']>;
  partnerPlatformId?: InputMaybe<Scalars['ID']>;
  planCode?: InputMaybe<Scalars['String']>;
};

export type UpdatePartnerResult = {
  __typename?: 'UpdatePartnerResult';
  accountNumber?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  partnerAccessTokenId: Scalars['ID'];
  partnerPlatformId: Scalars['ID'];
  planCode: Scalars['String'];
};

export type UpdatePasswordInput = {
  password: Scalars['String'];
};

export type UpdatePlanInput = {
  altId: Scalars['ID'];
  badge?: InputMaybe<Scalars['SanitizeString']>;
  cardBrandId?: InputMaybe<Scalars['Int']>;
  costFactor?: InputMaybe<Scalars['Float']>;
  ctaLabel?: InputMaybe<Scalars['SanitizeString']>;
  defaultAccountPlan?: InputMaybe<Scalars['Boolean']>;
  detailHeading?: InputMaybe<Scalars['SanitizeString']>;
  detailSections?: InputMaybe<Array<InputMaybe<DetailSectionInput>>>;
  detailSessionTimes?: InputMaybe<Array<InputMaybe<DetailSessionTimeInput>>>;
  displayPlanCard?: InputMaybe<Scalars['Boolean']>;
  displayToCustomer?: InputMaybe<Scalars['Boolean']>;
  driverRank?: InputMaybe<Scalars['Int']>;
  elements?: InputMaybe<Array<InputMaybe<ElementInput>>>;
  enrollmentClose?: InputMaybe<Scalars['Date']>;
  enrollmentOpen?: InputMaybe<Scalars['Date']>;
  financeCode?: InputMaybe<Scalars['SanitizeString']>;
  intervalLength?: InputMaybe<Scalars['Int']>;
  intervalUnitId?: InputMaybe<Scalars['Int']>;
  legalese?: InputMaybe<Scalars['String']>;
  planCode?: InputMaybe<Scalars['SanitizeString']>;
  planDescription?: InputMaybe<Scalars['SanitizeString']>;
  planDiscount?: InputMaybe<Scalars['Float']>;
  planDisplayName?: InputMaybe<Scalars['SanitizeString']>;
  planDuration?: InputMaybe<Scalars['Int']>;
  planName?: InputMaybe<Scalars['SanitizeString']>;
  planStatusId?: InputMaybe<Scalars['Int']>;
  planSubheading?: InputMaybe<Scalars['SanitizeString']>;
  products?: InputMaybe<Array<InputMaybe<ProductInput>>>;
  rolloverPlanId?: InputMaybe<Scalars['ID']>;
  templateId?: InputMaybe<Scalars['Int']>;
  terminationBehaviorId?: InputMaybe<Scalars['Int']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vinRequiredFlag?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePortalsUserInput = {
  filter?: InputMaybe<UserFilterForUpdate>;
  user?: InputMaybe<UserInputForCreate>;
};

export type UpdatePricingForExtendInput = {
  perKwh: Scalars['Float'];
  perMinute: Scalars['Float'];
  perSession: Scalars['Float'];
};

export type UpdatePromotionCampaignInput = {
  campaignName: Scalars['String'];
  campaignRef: Scalars['String'];
  codeDetailId: Scalars['ID'];
  codeRedemptionLimit: Scalars['Int'];
  codeType: Scalars['ID'];
  creditAmount?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['Date']>;
  planCode?: InputMaybe<Scalars['String']>;
  startsAt?: InputMaybe<Scalars['Date']>;
};

export type UpdatePromotionInput = {
  filterStartDate?: InputMaybe<Scalars['Date']>;
  partnerType?: InputMaybe<Scalars['Int']>;
  promotionId: Scalars['ID'];
  promotionName: Scalars['String'];
};

export type UpdatePromotionLogoInput = {
  file: Scalars['Upload'];
  promotionId: Scalars['ID'];
};

export type UpdatePropertyInput = {
  altId?: InputMaybe<Scalars['ID']>;
  host?: InputMaybe<UpdateHostInput>;
  pid: Scalars['SanitizeString'];
  status?: InputMaybe<Scalars['SanitizeString']>;
  vendorId?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateRouteInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  altId: Scalars['ID'];
  cityFactor?: InputMaybe<Scalars['Float']>;
  departurePropertyId?: InputMaybe<Scalars['ID']>;
  routeDistance?: InputMaybe<Scalars['Float']>;
  routeName?: InputMaybe<Scalars['SanitizeString']>;
  scheduledDeparture?: InputMaybe<Scalars['Time']>;
  siteId?: InputMaybe<Scalars['UUID']>;
};

export type UpdateRouteMessage = {
  __typename?: 'UpdateRouteMessage';
  routeAltId: Scalars['ID'];
};

export type UpdateSessionInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accountVendorId?: InputMaybe<Scalars['ID']>;
  cardVendorId?: InputMaybe<Scalars['ID']>;
  connectorVendorId?: InputMaybe<Scalars['ID']>;
  corrupted?: InputMaybe<Scalars['Boolean']>;
  endTime?: InputMaybe<Scalars['Date']>;
  isSessionEnd?: InputMaybe<Scalars['Boolean']>;
  meterEnd?: InputMaybe<Scalars['Int']>;
  meterStart?: InputMaybe<Scalars['Int']>;
  planVendorId?: InputMaybe<Scalars['ID']>;
  startSource?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Date']>;
  stopSource?: InputMaybe<Scalars['String']>;
  vendorId: Scalars['ID'];
};

export type UpdateShpHostContactInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateShpHostInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  externalHostId: Scalars['ID'];
  googleMapsLink?: InputMaybe<Scalars['String']>;
  hostSuccessManagerId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  siteHostEmail?: InputMaybe<Scalars['String']>;
  siteHostId?: InputMaybe<Scalars['ID']>;
  siteHostName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateShpProjectInput = {
  chargerCount?: InputMaybe<Scalars['Int']>;
  externalProjectId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<ShpProjectStatus>;
};

export type UpdateShpProjectMilestoneContactInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  projectMilestoneId?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateShpProjectMilestoneInput = {
  dueDate?: InputMaybe<Scalars['String']>;
  dueDateUpdatedAt?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  siteHostApprovalDate?: InputMaybe<Scalars['String']>;
  siteHostScheduledDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ShpProjectMilestoneStatus>;
  successManagerApprovalDate?: InputMaybe<Scalars['String']>;
};

export type UpdateShpPropertyInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  externalPropertyId: Scalars['ID'];
  googleMapsLink?: InputMaybe<Scalars['String']>;
  hostId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  projectManager?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  siteDeveloper?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateShpUserInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSiteForExtendInput = {
  /** Notes regarding access to each stall on the site */
  accessNotes?: InputMaybe<Scalars['SanitizeString']>;
  /** Unique UUID for the site */
  altId: Scalars['ID'];
  /** Description of the site */
  description?: InputMaybe<Scalars['SanitizeString']>;
  /** Directions to the site */
  directions?: InputMaybe<Scalars['SanitizeString']>;
  /** Name of the site that should be displayed when rendered elsewhere */
  displayName?: InputMaybe<Scalars['SanitizeString']>;
  /** Notes regarding the site location */
  locationNotes?: InputMaybe<Scalars['SanitizeString']>;
  /** Name of the site */
  siteName?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateSiteForFleetInput = {
  accountId?: InputMaybe<Scalars['UUID']>;
  chargeDurationBufferSoc?: InputMaybe<Scalars['Float']>;
  demandLimit?: InputMaybe<Scalars['Float']>;
  demandSensitivity?: InputMaybe<Scalars['Float']>;
  isValidated?: InputMaybe<Scalars['Boolean']>;
  serviceCapacityKw?: InputMaybe<Scalars['Float']>;
  siteId: Scalars['UUID'];
};

export type UpdateSiteImageInput = {
  altId?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<GetMediaInput>;
  mediaOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateSiteInput = {
  access: SiteAccess;
  accessNotes?: InputMaybe<Scalars['SanitizeString']>;
  address1: Scalars['SanitizeString'];
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  administrativeArea: Scalars['SanitizeString'];
  altId: Scalars['ID'];
  country?: InputMaybe<Scalars['SanitizeString']>;
  description: Scalars['SanitizeString'];
  directions?: InputMaybe<Scalars['SanitizeString']>;
  displayName: Scalars['SanitizeString'];
  evcId?: InputMaybe<Scalars['SanitizeString']>;
  hid: Scalars['SanitizeString'];
  hoursOfOperation?: InputMaybe<HoursInput>;
  latitude: Scalars['Float'];
  locality: Scalars['SanitizeString'];
  locationMarket?: InputMaybe<SiteMarket>;
  locationNotes?: InputMaybe<Scalars['SanitizeString']>;
  longitude: Scalars['Float'];
  maxCurrent?: InputMaybe<Scalars['SanitizeString']>;
  meterNumber?: InputMaybe<Scalars['SanitizeString']>;
  postalCode: Scalars['SanitizeString'];
  property: UpdatePropertyInput;
  ratedVoltage?: InputMaybe<Scalars['SanitizeString']>;
  sid: Scalars['SanitizeString'];
  siteImages?: InputMaybe<Array<InputMaybe<UpdateSiteImageInput>>>;
  siteName: Scalars['SanitizeString'];
  siteStatusId?: InputMaybe<Scalars['Int']>;
  type: SiteType;
  utilityCompany?: InputMaybe<SiteUtilityCompany>;
};

export type UpdateSwitchgearInput = {
  altId: Scalars['UUID'];
  enclosureType?: InputMaybe<Scalars['String']>;
  isIntegrated?: InputMaybe<Scalars['Boolean']>;
  manufacturer?: InputMaybe<Scalars['RequiredString']>;
  model?: InputMaybe<Scalars['RequiredString']>;
  modelYear?: InputMaybe<Scalars['String']>;
  vendorSku?: InputMaybe<Scalars['String']>;
};

export type UpdateTagInput = {
  altId: Scalars['ID'];
  description?: InputMaybe<Scalars['SanitizeString']>;
  filters?: InputMaybe<Array<InputMaybe<UpdateFilterInput>>>;
  tagName?: InputMaybe<Scalars['SanitizeString']>;
};

export type UpdateTariffForExtendInput = {
  chargerGroupAltId: Scalars['ID'];
  customPricing?: InputMaybe<Array<UpdateCustomPricingForExtendInput>>;
  defaultPricing?: InputMaybe<DefaultPricingForExtendInput>;
};

export type UpdateTariffInput = {
  altId: Scalars['ID'];
  connectorTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tariffDescription?: InputMaybe<Scalars['SanitizeString']>;
  tariffItems?: InputMaybe<Array<InputMaybe<TariffItemInput>>>;
  tariffName?: InputMaybe<Scalars['SanitizeString']>;
  tariffRank?: InputMaybe<Scalars['Int']>;
};

export type UpdateTicketFieldInput = {
  altId: Scalars['UUID'];
  displayName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TicketFieldType>;
  vendorId?: InputMaybe<Scalars['String']>;
};

export type UpdateTripInput = {
  altId: Scalars['UUID'];
  departureDatetimeUtc?: InputMaybe<Scalars['Date']>;
  routeAltId?: InputMaybe<Scalars['UUID']>;
  source?: InputMaybe<TripSource>;
  status?: InputMaybe<TripStatus>;
  targetSoc?: InputMaybe<Scalars['Float']>;
  vehicleAltId?: InputMaybe<Scalars['UUID']>;
};

export type UpdateUserInput = {
  altId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  evcId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  userRole?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserResult = {
  __typename?: 'UpdateUserResult';
  filter?: Maybe<UserFilterForUpdateType>;
  result?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserResultforUpdate>;
};

export type UploadsWithMeta = {
  __typename?: 'UploadsWithMeta';
  edges?: Maybe<Array<Maybe<Media>>>;
  total?: Maybe<Scalars['Int']>;
};

export type UpsertCardInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  altId?: InputMaybe<Scalars['UUID']>;
  brand?: InputMaybe<Scalars['String']>;
  cardStatus?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Date']>;
  driverId?: InputMaybe<Scalars['ID']>;
  externalNumber?: InputMaybe<Scalars['String']>;
  internalNumber?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  vendorCardBrand?: InputMaybe<Scalars['String']>;
  vendorCardStatus?: InputMaybe<Scalars['String']>;
  vendorCardType?: InputMaybe<Scalars['String']>;
  vendorDriverId?: InputMaybe<Scalars['ID']>;
  vendorId?: InputMaybe<Scalars['ID']>;
  vendorSyncedAt?: InputMaybe<Scalars['Date']>;
};

export type UpsertCardOrderInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  altId?: InputMaybe<Scalars['UUID']>;
  cardOrderStatusTimestamp?: InputMaybe<Scalars['Date']>;
  cardStatus?: InputMaybe<Scalars['String']>;
  /** Sent from lambda to help determine if the event included a card status change */
  cardStatusChanged?: InputMaybe<Scalars['Boolean']>;
  driverId?: InputMaybe<Scalars['ID']>;
  vendorCardId?: InputMaybe<Scalars['ID']>;
  vendorCardStatus?: InputMaybe<Scalars['String']>;
  vendorDriverId?: InputMaybe<Scalars['ID']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type UpsertPaymentMethodInput = {
  accountVendorId: Scalars['ID'];
  braintreeCustomerId: Scalars['String'];
  cardNumber: Scalars['String'];
  expired?: InputMaybe<Scalars['Boolean']>;
  expiryMonth: Scalars['Int'];
  expiryYear: Scalars['Int'];
  nameOnCard: Scalars['String'];
  primary?: InputMaybe<Scalars['Boolean']>;
  token: Scalars['String'];
  vendorId: Scalars['ID'];
  vendorPaymentMethodType: Scalars['String'];
};

export type UpsertSessionMeterInput = {
  connectorVendorId: Scalars['ID'];
  eventDate: Scalars['Date'];
  sessionVendorId: Scalars['ID'];
  value: Scalars['Float'];
  vendorMeterand: Scalars['String'];
};

export type UpsertShpNotificationControlInput = {
  projectMilestoneDueDateApproaching?: InputMaybe<Scalars['String']>;
  projectMilestoneDueDateExpired?: InputMaybe<Scalars['String']>;
  projectMilestoneDueDateMidway?: InputMaybe<Scalars['String']>;
  projectMilestoneId?: InputMaybe<Scalars['ID']>;
  projectMilestoneStatus?: InputMaybe<ShpProjectMilestoneStatus>;
};

export type User = {
  __typename?: 'User';
  accountId?: Maybe<Scalars['ID']>;
  altId: Scalars['ID'];
  firebaseId?: Maybe<Scalars['String']>;
  fleets: Array<Maybe<Fleet>>;
  sites: Array<Maybe<Site>>;
  userRole?: Maybe<Array<Maybe<UserRole>>>;
  username?: Maybe<Scalars['String']>;
};

export type UserFilterForUpdate = {
  uid?: InputMaybe<Scalars['String']>;
};

export type UserFilterForUpdateType = {
  __typename?: 'UserFilterForUpdateType';
  uid?: Maybe<Scalars['String']>;
};

export type UserInputForCreate = {
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  promotions?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type UserInputForUpdate = {
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserResultforCreate = {
  __typename?: 'UserResultforCreate';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserResultforUpdate = {
  __typename?: 'UserResultforUpdate';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Driver = 'DRIVER',
  Operator = 'OPERATOR'
}

export enum UserShpRole {
  Admin = 'ADMIN',
  HostContact = 'HOST_CONTACT',
  Hsm = 'HSM',
  Sh = 'SH'
}

export type UserWithMeta = {
  __typename?: 'UserWithMeta';
  edges?: Maybe<Array<Maybe<PortalsUser>>>;
  filters?: Maybe<ListUsersInputFiltersType>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export enum UtilityRateType {
  Kw = 'KW',
  Kwh = 'KWH',
  Monthly = 'MONTHLY'
}

export type UtilityTariff = {
  __typename?: 'UtilityTariff';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  tariffDescription?: Maybe<Scalars['String']>;
  tariffItems?: Maybe<Array<Maybe<UtilityTariffItem>>>;
  tariffName?: Maybe<Scalars['String']>;
  tariffRank?: Maybe<Scalars['Int']>;
};

export type UtilityTariffItem = {
  __typename?: 'UtilityTariffItem';
  day: Day;
  id: Scalars['ID'];
  rateAmount: Scalars['Float'];
  rateType: UtilityRateType;
  tariffEndDayOfMonth?: Maybe<Scalars['Int']>;
  tariffEndMonth?: Maybe<Scalars['Int']>;
  tariffEndTime: Scalars['Time'];
  tariffItemName: Scalars['String'];
  tariffStartDayOfMonth?: Maybe<Scalars['Int']>;
  tariffStartMonth?: Maybe<Scalars['Int']>;
  tariffStartTime: Scalars['Time'];
};

export type ValidateAddressInput = {
  address1: Scalars['SanitizeString'];
  address2?: InputMaybe<Scalars['SanitizeString']>;
  address3?: InputMaybe<Scalars['SanitizeString']>;
  address4?: InputMaybe<Scalars['SanitizeString']>;
  /** administrativeArea must be the 2-character state-code for US addresses (CA, OR, AZ), or the full name of the province for Canadian addresses (Quebec, Ontario, British Columbia) */
  administrativeArea?: InputMaybe<Scalars['SanitizeString']>;
  country?: InputMaybe<Scalars['SanitizeString']>;
  latitude?: InputMaybe<Scalars['SanitizeString']>;
  locality?: InputMaybe<Scalars['SanitizeString']>;
  longitude?: InputMaybe<Scalars['SanitizeString']>;
  postalCode?: InputMaybe<Scalars['SanitizeString']>;
};

export type ValidatePromoCodeInput = {
  DISABLE_WESQL_LEGACY_AWS_LAMBDA_API?: InputMaybe<Scalars['Boolean']>;
  promotionCode: Scalars['String'];
  promotionRef: Scalars['String'];
};

export type ValidateSiteForFleetInput = {
  siteId: Scalars['UUID'];
};

export type ValidateTagInput = {
  altId: Scalars['ID'];
  description?: InputMaybe<Scalars['SanitizeString']>;
  filters?: InputMaybe<Array<InputMaybe<UpdateFilterInput>>>;
  tagName?: InputMaybe<Scalars['SanitizeString']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  altId?: Maybe<Scalars['ID']>;
  autochargeStatus: FalconConstraint;
  id?: Maybe<Scalars['ID']>;
  makeModelYear?: Maybe<Scalars['String']>;
  vehicleConnectors?: Maybe<Array<Maybe<VehicleConnector>>>;
};

export type VehicleChargeCurve = {
  __typename?: 'VehicleChargeCurve';
  altId: Scalars['ID'];
  curveMethod: Scalars['String'];
  curveVersion: Scalars['String'];
  id: Scalars['ID'];
  socInflection?: Maybe<Scalars['Float']>;
};

export enum VehicleChargingStatus {
  Charging = 'CHARGING',
  Connected = 'CONNECTED',
  Disconnected = 'DISCONNECTED',
  Trickle = 'TRICKLE'
}

export enum VehicleClass {
  Class8 = 'CLASS8',
  Class_1 = 'CLASS_1',
  Class_2 = 'CLASS_2',
  Class_3 = 'CLASS_3',
  Class_4 = 'CLASS_4',
  Class_5 = 'CLASS_5',
  Class_6 = 'CLASS_6',
  Class_7 = 'CLASS_7',
  Class_8Unhitched = 'CLASS_8_UNHITCHED'
}

export type VehicleConnector = {
  __typename?: 'VehicleConnector';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type VehicleConnectorInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum VehicleConnectorType {
  Ccs = 'CCS',
  Chademo = 'CHADEMO',
  NativeTesla = 'NATIVE_TESLA',
  SaeJ1772 = 'SAE_J1772'
}

export type VehicleConnectorsWithMeta = {
  __typename?: 'VehicleConnectorsWithMeta';
  edges?: Maybe<Array<Maybe<VehicleConnector>>>;
  total?: Maybe<Scalars['Int']>;
};

export type VehicleInput = {
  modelName?: InputMaybe<Scalars['String']>;
  vehicleMake?: InputMaybe<VehicleMakeInput>;
  vehicleYears?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type VehicleMake = {
  __typename?: 'VehicleMake';
  altId?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
};

export type VehicleMakeInput = {
  makeName?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['ID']>;
};

export type VehicleModel = {
  __typename?: 'VehicleModel';
  altId?: Maybe<Scalars['ID']>;
  modelName?: Maybe<Scalars['String']>;
  vehicleMake?: Maybe<VehicleMake>;
};

export type VehiclesWithMeta = {
  __typename?: 'VehiclesWithMeta';
  edges?: Maybe<Array<Maybe<Vehicle>>>;
  pageSize?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type VerifyDriverEmailInput = {
  altId: Scalars['String'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  altId?: Maybe<Scalars['ID']>;
  chargers?: Maybe<ChargersWithMeta>;
  country?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  warehouseName?: Maybe<Scalars['String']>;
};


export type WarehouseChargersArgs = {
  input?: InputMaybe<ListChargersInput>;
};

export type WarehousesWithMeta = {
  __typename?: 'WarehousesWithMeta';
  edges?: Maybe<Array<Maybe<Warehouse>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sort?: Maybe<ListWarehousesSortType>;
  total?: Maybe<Scalars['Int']>;
};

export enum WarrantyLength {
  /** 5 yrs */
  FiveYear = 'FIVE_YEAR',
  /** None */
  None = 'NONE',
  /** 1 Yr */
  OneYear = 'ONE_YEAR',
  /** 3 yrs */
  ThreeYear = 'THREE_YEAR'
}

export enum WarrantyStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Extended */
  Extended = 'EXTENDED',
  /** Inactive */
  Inactive = 'INACTIVE'
}

/** NEW */
export enum WiringConfig {
  Ab = 'AB',
  Abc = 'ABC',
  Abcn = 'ABCN',
  An = 'AN',
  Bc = 'BC',
  Bn = 'BN',
  Ca = 'CA',
  Cn = 'CN'
}

export type ZendeskComment = {
  __typename?: 'ZendeskComment';
  author_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type AssignTripToFleetVehicleInput = {
  fleetVehicleAltId: Scalars['UUID'];
  newTrip?: InputMaybe<CreateTripInput>;
  tripId?: InputMaybe<Scalars['UUID']>;
};

export type ConnectorAssociation = {
  __typename?: 'connectorAssociation';
  connectorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  vehicleConnectorId?: Maybe<Scalars['Int']>;
};

export type GetEnrollmentTotals = {
  __typename?: 'getEnrollmentTotals';
  total?: Maybe<Scalars['Int']>;
};

export type GetUserInput = {
  filters?: InputMaybe<GetUserInputFiltersInput>;
};

export type GetUserInputFiltersInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type GetUserInputFiltersType = {
  __typename?: 'getUserInputFiltersType';
  uid?: Maybe<Scalars['String']>;
};

export type GetUserWithMeta = {
  __typename?: 'getUserWithMeta';
  edges?: Maybe<PortalsUser>;
  filters?: Maybe<GetUserInputFiltersType>;
};

export type KWhByDayWithMeta = {
  __typename?: 'kWhByDayWithMeta';
  edges?: Maybe<Array<Maybe<KWhDay>>>;
  filters?: Maybe<ListkWhByDayFilterType>;
};

export type KWhDay = {
  __typename?: 'kWhDay';
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  kWh?: Maybe<Scalars['Float']>;
};

export type ListPromotionCategoriesFilterInput = {
  promotion?: InputMaybe<Scalars['String']>;
};

export type ListPromotionCategoriesFilterType = {
  __typename?: 'listPromotionCategoriesFilterType';
  promotion?: Maybe<Scalars['String']>;
};

export type ListPromotionCategoriesInput = {
  filters?: InputMaybe<ListPromotionCategoriesFilterInput>;
};

export type SessionStartInput = {
  actionResult: Scalars['String'];
  eventDate: Scalars['String'];
  eventType: Scalars['String'];
  id: Scalars['ID'];
  stationId: Scalars['ID'];
  stationSocketId: Scalars['ID'];
};

export type SessionStartResponse = {
  __typename?: 'sessionStartResponse';
  actionResult?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  eventType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  stationId: Scalars['ID'];
  stationSocketId: Scalars['ID'];
};

export type UpdateConnectorForFleetMessage = {
  __typename?: 'updateConnectorForFleetMessage';
  connectorAltId: Scalars['ID'];
};

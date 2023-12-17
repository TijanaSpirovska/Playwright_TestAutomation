import {
  AddChargersToChargerGroupForExtendInput,
  ChargerGroupForExtend,
  ChargerGroupsForExtendWithMeta,
  ChargersConsumptionForExtendData,
  ChargersWithMeta,
  CreateChargerGroupForExtendInput,
  CreateExtendHostInput,
  CreateTariffForExtendInput,
  DeleteChargerGroupForExtendInput,
  ExtendHost,
  ExtendUsersWithMeta,
  FirebaseUserForExtend,
  GetActiveSessionInput,
  GetChargerGroupForExtendInput,
  GetExtendUserInput,
  GetFirebaseUserForExtendInput,
  GetSessionInput,
  GetSessionsConsumptionForExtendInput,
  GetSessionsConsumptionForExtendResponse,
  GetSitesForExtendInput,
  ListChargerGroupsForExtendInput,
  ListChargersConsumptionForExtendInput,
  ListChargersForExtendInput,
  ListPlansInput,
  PlanWithMeta,
  RemoveChargersFromChargerGroupForExtendInput,
  Session,
  Site,
  TariffForExtend,
  UpdateChargerGroupForExtendInput,
  UpdateTariffForExtendInput,
} from '../apollo/types/graphql-types';

import { ChargerModel } from '../types/custom/ChargerModel';
import { CreateAccountOwner } from '../types/custom/createAccountOwner';
import { CreateCard } from '../types/custom/createCard';
import { CreatePlan } from '../types/custom/createPlan';
import { ExtendUser } from '../types/custom/extendUser';
import { GeographicalRegion } from '../types/custom/GeographicalRegions';
import { Host } from '../types/custom/Host';
import axios from 'axios';

const DEFAULT_GRAPHQL_HEADERS = {
  'apollographql-client-name': `evgo-op-ext-${process.env.TEST_ENV}` || 'evgo-op-ext-qa',
  'apollographql-client-version': '1',
};

export const listPlansQuery = (token: string, input?: string) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        operationName: 'listPlans',
        query: `query listPlans($input: ListPlansInput) {
        listPlans(input: $input) {
          total
          page
          pageSize
          sort {
            planName
            planDisplayName
            createdAt
            __typename
          }
          edges {
            altId
            createdAt
            planName
            planCode
            planStatus
            planDuration
            planDescription
            planDisplayName
            __typename
          }
          __typename
        }
      }`,
        variables: {
          input: { input },
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        listPlans: data.listPlans.edges,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        listPlans: error?.response?.data?.data?.edges,
      };
    });
};

export const createPlanMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreatePlan($input: CreatePlanInput!) {
        createPlan(input: $input) {
          altId
          planCode
          planDescription
          intervalLength
          intervalUnit
          planDuration
          planName
          elements {
            edges {
              altId
              connectorType {
                name
                id
              }
              day
              discount
              endTime
              maxDuration
              startTime
            }
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createPlan: data.createPlan as Partial<CreatePlan>,
        errors,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        createPlan: error?.response?.data?.data?.createPlan as Partial<CreatePlan>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const createCardMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateCard($input: CreateCardInput!) {
        createCard(input: $input) {
          altId
          brand
          externalNumber
          internalNumber
          nickName
          cardTypeId
          cardType
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createCard: data.createCard as Partial<CreateCard>,
        errors,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        createCard: error?.response?.data?.data?.createCard as Partial<CreateCard>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const createAccountOwnerMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateAccountOwner($input: CreateAccountOwnerInput) {
        createAccountOwner(input: $input) {
          accountId
          altId
          lastName
          firstName
          account {
            altId
            mailingAddress {
              address1
              altId
              country
              locality
              postalCode
              administrativeArea
            }
            billingAddress {
              address1
              administrativeArea
              altId
              country
              locality
              postalCode
            }
          }
          email
          firebaseId
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createAccountOwner: data.createAccountOwner as Partial<CreateAccountOwner>,
        errors,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        createAccountOwner: error?.response?.data?.data?.createAccountOwner as Partial<CreateAccountOwner>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const createHostMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateHost($input: CreateHostInput) {
        createHost(input: $input) {
          address1
          administrativeArea
          country
          hostName
          locality
          postalCode
          status
          hid
          altId
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createHost: data.createHost as Partial<Host>,
        errors,
      };
    })
    .catch((error) => {
      return {
        createHost: error?.response?.data?.data?.createHost as Partial<Host>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const createExtendUserMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateExtendUser($input: CreateExtendUserInput) {
        createExtendUser(input: $input) {
          altId
          firebaseId
          id
          username
          hosts {
            edges {
              altId
              hostName
              address1
              administrativeArea
              country
              hid
              locality
              postalCode
            }
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createExtendUser: data.createExtendUser as Partial<ExtendUser>,
        errors,
      };
    })
    .catch((error) => {
      return {
        createExtendUser: error?.response?.data?.data?.createExtendUser as Partial<ExtendUser>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getExtendUserQuery = (token: string, input: GetExtendUserInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetExtendUser($input: GetExtendUserInput) {
  getExtendUser(input: $input) {
    altId
    createdAt
    deletedAt
    firebaseId
    id
    updatedAt
    username
    hosts {
      edges {
        address1
        address2
        administrativeArea
        altId
        country
        hid
        hostName
        legacyId
        locality
        postalCode
        vendorId
        vendorSyncedAt
        properties {
          edges {
            address1
            address2
            altId
            country
            legacyId
            locality
            postalCode
            pid
            propertyName
            vendorId
            sites {
              edges {
                address1
                address2
                altId
                displayName
                siteName
              }
            }
          }
        }
      }
    }
  }
}`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        extendUser: data.getExtendUser as Partial<ExtendUser>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        extendUser: error?.response?.data?.data?.getExtendUser as Partial<ExtendUser>,
      };
    });
};

export const listGeographicalRegionsQuery = (token: string, input?) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListGeographicalRegions($input: ListGeographicalRegionsInput) {
        listGeographicalRegions(input: $input) {
          edges {
            abbreviation
            country
            name
            type
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        geoGraphicRegions: data.listGeographicalRegions as Partial<GeographicalRegion>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        geoGraphicRegions: error?.response?.data?.data?.listGeographicalRegions as Partial<GeographicalRegion>,
      };
    });
};

export const createChargerModelMutation = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateChargerModel($input: CreateChargerModelInput) {
        createChargerModel(input: $input) {
          altId
          modelName
          modelSku
          powerOutput
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createChargerModel: data.createChargerModel as Partial<ChargerModel>,
        errors,
      };
    })
    .catch((error) => {
      return {
        createChargerModel: error?.response?.data?.data?.createChargerModel as Partial<ChargerModel>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const listHostsForExtendQuery = (token: string, input?) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListHostsForExtend {
        listHostsForExtend {
          edges {
            altId
            hostName
            address1
            administrativeArea
            country
            hid
            locality
            postalCode
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        listHostsForExtend: data.listHostsForExtend,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        listHostsForExtend: error?.response?.data?.data?.listHostsForExtend,
      };
    });
};

export const createChargerGroupMutation = (token: string, input: CreateChargerGroupForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateChargerGroupForExtend($input: CreateChargerGroupForExtendInput!) {
        createChargerGroupForExtend(input: $input) {
          altId
          chargerGroupName
          chargerGroupType
          chargerGroupTypeId
          description
          host {
            altId
          }
          chargers {
            edges {
              tags {
                edges {
                  tagName
                }
              }
            }
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createChargerGroup: data.createChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        createChargerGroup: error?.response?.data?.data?.createChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getFirebaseUserForExtendQuery = (token: string, input: GetFirebaseUserForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetFirebaseUserForExtend($input: GetFirebaseUserForExtendInput!) {
        getFirebaseUserForExtend(input: $input) {
          firebaseId
          username
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        firebaseUser: data.getFirebaseUserForExtend as Partial<FirebaseUserForExtend>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        firebaseUser: error?.response?.data?.data?.getFirebaseUserForExtend as Partial<FirebaseUserForExtend>,
      };
    });
};

export const listChargerGroupsQuery = (token: string, input: ListChargerGroupsForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListChargerGroups($input: ListChargerGroupsForExtendInput) {
        listChargerGroupsForExtend(input: $input) {
          edges {
            altId
            chargerGroupName
            chargerGroupType
            chargerGroupTypeId
            description
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        listChargerGroups: data.listChargerGroupsForExtend as Partial<ChargerGroupsForExtendWithMeta>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        listChargerGroups: error?.response?.data?.data
          ?.listChargerGroupsForExtend as Partial<ChargerGroupsForExtendWithMeta>,
      };
    });
};

export const deleteChargerGroupMutation = (token: string, input: DeleteChargerGroupForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation DeleteChargerGroupForExtend($input: DeleteChargerGroupForExtendInput!) {
        deleteChargerGroupForExtend(input: $input) {
          altId
          chargerGroupName
          chargerGroupType
          chargerGroupTypeId
          host {
            altId
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.deleteChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroupList: error?.response?.data?.data?.deleteChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const listChargersForExtendQuery = (token: string, input: ListChargersForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListChargersForExtend($input: ListChargersForExtendInput) {
        listChargersForExtend(input: $input) {
          edges {
            altId
            chargerId
            chargerName
            chargerStatus
            serialNumber
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerList: data.listChargersForExtend as Partial<ChargersWithMeta>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerList: error?.response?.data?.data?.listChargersForExtend as Partial<ChargersWithMeta>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getSiteQuery = (token: string, siteId) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetSite($input: GetSiteInput) {
        getSite(input: $input) {
          altId
          displayName
          directions
          address1
          address2
          locality
          administrativeArea
          postalCode
        }
      }`,
        variables: {
          input: { altId: siteId },
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        site: data.getSite as Partial<Site>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        site: error?.response?.data?.data?.getSite as Partial<Site>,
      };
    });
};

export const listExtendUsersQuery = (token: string, input?) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListExtendUsers($input: ListExtendUsersInput) {
        listExtendUsers(input: $input) {
          edges {
            altId
            firebaseId
            username
            createdAt
            deletedAt
            id
            updatedAt
          }
        }
      }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        extendUsers: data.listExtendUsers as Partial<ExtendUsersWithMeta>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        extendUsers: error?.response?.data?.data?.listExtendUsers as Partial<ExtendUsersWithMeta>,
      };
    });
};

export const listChargersConsumptionForExtendQuery = (token: string, input?: ListChargersConsumptionForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ($input: ListChargersConsumptionForExtendInput!) {
    listChargersConsumptionForExtend(input: $input) {
      chargerId
      chargerName
      connectorMaxOutput
      connectorStatus
      connectorType
      evseId
      totalSessions
      totalSessionsPower
      totalSessionsTime
      lastSessionVendorId
    }
  }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerConsumption: data.listChargersConsumptionForExtend as Array<ChargersConsumptionForExtendData>,
        errors,
      };
    })
    .catch((error) => {
      const consumption = error?.response?.data?.data?.listChargersConsumptionForExtend;

      return {
        chargerConsumption: consumption as Array<ChargersConsumptionForExtendData>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getSessionsConsumptionForExtendQuery = (token: string, input: GetSessionsConsumptionForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetSessionsConsumptionForExtend($input: GetSessionsConsumptionForExtendInput!) {
  getSessionsConsumptionForExtend(input: $input) {
    timeSeries {
      powerCostValue
      powerValue
      timestamp
      totalSessions
    }
  }
}`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        sessionConsumption: data.getSessionsConsumptionForExtend as Partial<GetSessionsConsumptionForExtendResponse>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        sessionConsumption: error?.response?.data?.data
          ?.getSessionsConsumptionForExtend as Partial<GetSessionsConsumptionForExtendResponse>,
      };
    });
};

export const addChargersToChargerGroupMutation = (token: string, input: AddChargersToChargerGroupForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation AddChargersToChargerGroupForExtend($input: AddChargersToChargerGroupForExtendInput!) {
                addChargersToChargerGroupForExtend(input: $input) {
                  altId
                  chargerGroupName
                  chargerGroupType
                  chargerGroupTypeId
                  host {
                    altId
                  }
                  chargers {
                    edges {
                      altId
                    }
                  }
                }
              }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.addChargersToChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroup: error?.response?.data?.data?.addChargersToChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const listUnassignedChargersForExtendQuery = (token: string, input?: ListChargersForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListUnassignedChargersForExtend($input: ListChargersForExtendInput) {
          listUnassignedChargersForExtend(input: $input) {
            edges {
              altId
              chargerId
              chargerName
            }
          }
        }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        unassignedChargers: data.listUnassignedChargersForExtend as Partial<ChargersWithMeta>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        unassignedChargers: error?.response?.data?.data?.listUnassignedChargersForExtend as Partial<ChargersWithMeta>,
      };
    });
};

export const updateChargerGroupMutation = (token: string, input: UpdateChargerGroupForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation UpdateChargerGroup($input: UpdateChargerGroupForExtendInput!) {
              updateChargerGroupForExtend(input: $input) {
                altId
                chargerGroupName
                chargerGroupType
                chargerGroupTypeId
                description
                host {
                  altId
                }
              }
            }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.updateChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroup: error?.response?.data?.data?.updateChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const startChargeForMobile = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation StartChargeForMobile($input: StartChargeForMobileInput) {
                  startChargeForMobile(input: $input)
                }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        startCharge: data.startChargeForMobile,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        startCharge: error?.response?.data?.data?.startChargeForMobile,
      };
    });
};

export const stopChargeForMobile = (token: string, input) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation StopChargeForMobile($input: StopChargeForMobileInput!) {
                  stopChargeForMobile(input: $input)
                }`,
        variables: {
          input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        stopCharge: data.stopChargeForMobile,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        stopCharge: error?.response?.data?.data?.stopChargeForMobile,
      };
    });
};

export const getChargerGroupQuery = (token: string, input: GetChargerGroupForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetChargerGroupForExtend($input: GetChargerGroupForExtendInput!) {
                getChargerGroupForExtend(input: $input) {
                  altId
                  chargerGroupName
                  chargerGroupType
                  chargerGroupTypeId
                  chargers {
                        edges {
                          altId
                        }
                      }
                  host {
                    hid
                  }
                }
              }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.getChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroup: error?.response?.data?.data?.getChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const createExtendHostMutation = (token: string, input: CreateExtendHostInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateExtendHost($input: CreateExtendHostInput!) {
                createExtendHost(input: $input) {
                  altId
                  createdAt
                  deletedAt
                  updatedAt
                  host {
                    altId
                    hostName
                  }
                }
              }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        extendHost: data.createExtendHost as Partial<ExtendHost>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        extendHost: error?.response?.data?.data?.createExtendHost as Partial<ExtendHost>,
      };
    });
};

export const addChargersToChargerGroupForExtendMutation = (
  token: string,
  input: AddChargersToChargerGroupForExtendInput,
) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation AddChargersToChargerGroupForExtend($input: AddChargersToChargerGroupForExtendInput!) {
                  addChargersToChargerGroupForExtend(input: $input) {
                    altId
                    chargerGroupName
                    chargerGroupType
                    chargerGroupTypeId
                    host {
                      altId
                    }
                  }
                }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.addChargersToChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroup: error?.response?.data?.data?.addChargersToChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const removeChargersFromChargerGroupForExtendMutation = (
  token: string,
  input: RemoveChargersFromChargerGroupForExtendInput,
) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation 
        RemoveChargersFromChargerGroupForExtend($input: RemoveChargersFromChargerGroupForExtendInput!) {
                      removeChargersFromChargerGroupForExtend(input: $input) {
                        altId
                        chargerGroupName
                        chargerGroupType
                        chargerGroupTypeId
                        host {
                          altId
                        }
                        chargers {
                          edges {
                            altId
                          }
                        }
                      }
                    }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        chargerGroup: data.removeChargersFromChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        chargerGroup: error?.response?.data?.data
          ?.removeChargersFromChargerGroupForExtend as Partial<ChargerGroupForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getSitesForExtendQuery = (token: string, input: GetSitesForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetSitesForExtend($input: GetSitesForExtendInput) {
            getSitesForExtend(input: $input) {
              address1
              address2
              altId
              siteName
            }
          }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        sites: data.getSitesForExtend,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        sites: error?.response?.data?.data?.getSitesForExtend,
      };
    });
};

export const createTariffForExtendMutation = (token: string, input: CreateTariffForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation CreateTariffForExtend($input: CreateTariffForExtendInput!) {
            createTariffForExtend(input: $input) {
              altId
              customPricing {
                altId
                pricing {
                  perKwh
                  perMinute
                  perSession
                }
                tariffSchedule {
                  daysOfWeek
                  endTime
                  startTime
                }
              }
              defaultPricing {
                altId
                perKwh
                perMinute
                perSession
              }
            }
          }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        createTariffForExtend: data.createTariffForExtend as Partial<TariffForExtend>,
        errors,
      };
    })
    .catch((error) => {
      return {
        createTariffForExtend: error?.response?.data?.data?.createTariffForExtend as Partial<TariffForExtend>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const updateTariffForExtendMutation = (token: string, input: UpdateTariffForExtendInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `mutation UpdateTariffForExtend($input: UpdateTariffForExtendInput!) {
                updateTariffForExtend(input: $input) {
                  altId
                  customPricing {
                    altId
                    pricing {
                      perSession
                      perKwh
                      perMinute
                    }
                    tariffSchedule {
                      daysOfWeek
                      endTime
                      startTime
                    }
                  }
                  defaultPricing {
                    altId
                    perKwh
                    perMinute
                    perSession
                  }
                  tariffDescription
                  tariffName
                  tariffRank
                }
              }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        updateTariffForExtend: data.updateTariffForExtend as Partial<TariffForExtend>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        updateTariffForExtend: error?.response?.data?.data?.updateTariffForExtend as Partial<TariffForExtend>,
      };
    });
};

export const getActiveSessionQuery = (token: string, input: GetActiveSessionInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetActiveSession($input: GetActiveSessionInput!) {
            getActiveSession(input: $input) {
              connectorId
              sessionId
              sessionDuration
              startTime
            }
          }`,
        variables: {
          input: input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        activeSession: data.getActiveSession as Partial<Session>,
        errors,
      };
    })
    .catch((error) => {
      return {
        activeSession: error?.response?.data?.data?.getActiveSession as Partial<Session>,
        errors: error?.response?.data?.errors,
      };
    });
};

export const getSessionQuery = (token: string, input: GetSessionInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query GetSession($input: GetSessionInput!) {
            getSession(input: $input) {
                batteryLevel
                sessionId
                sessionDuration
                energyDelivered
                cost {
                    totalCost
                    energyCost
                    tax
                }
                tariff {
                  tariffName
                  perMinuteFee
                }
                charger {
                  chargerName
                  chargerId
                  maxPower
                }
            }
        }`,
        variables: {
          input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        getSession: data.getSession as Partial<Session>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        getSession: error?.response?.data?.data?.getSession as Partial<Session>,
      };
    });
};

export const listPlansForMobileQuery = (token: string, input: ListPlansInput) => {
  const url = process.env.GRAPHQL_URL;

  return axios
    .post(
      url!,
      {
        query: `query ListPlansForMobile($input: ListPlansInput) {
            listPlansForMobile(input: $input) {
              edges {
                altId
                planName
              }
            }
          }`,
        variables: {
          input,
        },
      },
      {
        headers: {
          'apollographql-client-name': DEFAULT_GRAPHQL_HEADERS['apollographql-client-name'],
          'apollographql-client-version': DEFAULT_GRAPHQL_HEADERS['apollographql-client-version'],
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      const { data, errors } = response.data;

      return {
        errors,
        listPlansForMobile: data.listPlansForMobile as Partial<PlanWithMeta>,
      };
    })
    .catch((error) => {
      return {
        errors: error?.response?.data?.errors,
        listPlansForMobile: error?.response?.data?.data?.listPlansForMobile as Partial<PlanWithMeta>,
      };
    });
};

import { CreateTariffForExtendInput, Day } from '../../apollo/types/graphql-types';

import { FakeData } from '../../utils/fakeData';

const { I } = inject();
const fakeData = new FakeData();

export const createCardHelper = async (token: string) => {
  const createCardInputData = {
    brand: fakeData.cardBrand,
    cardTypeId: 291,
    externalNumber: fakeData.cardExternalNumber,
    internalNumber: fakeData.cardInternalNumber,
    nickName: fakeData.cardNickName,
  };
  const { createCard, errors } = await I.createCardMutation(token, createCardInputData);

  return {
    createCard,
    createCardInputData,
    errors,
  };
};

export const createAccountOwnerHelper = async (token: string) => {
  const address = {
    address1: fakeData.address1,
    administrativeArea: fakeData.administrativeArea,
    country: fakeData.country,
    locality: fakeData.locality,
    postalCode: fakeData.postalCode,
  };
  const createAccountOwnerInputData = {
    accountId: fakeData.uuid,
    billingAddress: address,
    email: fakeData.emailAddress,
    firstName: fakeData.firstName,
    lastName: fakeData.lastName,
    mailingAddress: address,
    password: fakeData.password,
  };

  const { createAccountOwner, errors } = await I.createAccountOwnerMutation(token, createAccountOwnerInputData);

  return {
    createAccountOwner,
    createAccountOwnerInputData,
    errors,
  };
};

export const createHostHelper = async (token: string) => {
  const createHostInputData = {
    address1: fakeData.address1,
    administrativeArea: fakeData.administrativeArea,
    country: fakeData.country,
    hid: fakeData.hid,
    hostName: fakeData.hostName,
    locality: fakeData.locality,
    postalCode: fakeData.postalCode,
  };
  const { createHost, errors } = await I.createHostMutation(token, createHostInputData);

  return {
    createHost,
    createHostInputData,
    errors,
  };
};

export const createPlanHelper = async (token: string) => {
  const createPlanInputData = {
    cardBrandId: 299,
    elements: [
      {
        connectorTypeId: fakeData.connectorTypeId,
        day: fakeData.weekday,
        discount: fakeData.discount,
        endTime: '23:00:59',
        startTime: '00:00:00',
      },
    ],
    intervalLength: fakeData.intervalLength,
    intervalUnitId: fakeData.intervalUnitId,
    planCode: fakeData.planCode,
    planDescription: fakeData.planDescription,
    planDuration: fakeData.planDuration,
    planName: fakeData.planName,
    planStatusId: 173,
    terminationBehaviorId: 297,
  };

  const { createPlan, errors } = await I.createPlanMutation(token, createPlanInputData);

  return {
    createPlan,
    createPlanInputData,
    errors,
  };
};

export const createExtendUserHelper = async (token: string, hostIds: [string]) => {
  const createExtendUserInputData = {
    firebaseId: fakeData.hostName,
    hostIds: hostIds,
    username: fakeData.emailAddress,
  };

  const { createExtendUser, errors } = await I.createExtendUserMutation(token, createExtendUserInputData);

  return {
    createExtendUser,
    createExtendUserInputData,
    errors,
  };
};

export const createChargerModelHelper = async (token: string) => {
  const createChargerModelInputData = {
    modelName: fakeData.chargerModelName,
    modelSku: fakeData.chargerModelSku,
    powerOutput: fakeData.powerOutput,
  };

  const { errors, createChargerModel } = await I.createChargerModelMutation(token, createChargerModelInputData);

  return {
    createChargerModel,
    createChargerModelInputData,
    errors,
  };
};

export const createChargerGroupHelper = async (
  token: string,
  chargerGroupTypeId: number,
  hostId: string,
  description?: string,
) => {
  const data = new FakeData();
  const createChargerGroupInputData = {
    chargerGroupName: data.chargerGroupName,
    chargerGroupTypeId: chargerGroupTypeId,
    description: description || '',
    hostId: hostId,
  };

  const { errors, createChargerGroup } = await I.createChargerGroupMutation(token, createChargerGroupInputData);

  return {
    createChargerGroup,
    createChargerGroupInputData,
    errors,
  };
};

export const createTariffForExtendHelper = async (token: string, chargerGroupAltId: string) => {
  const fakeData = new FakeData();
  const createTariffForExtendInput: CreateTariffForExtendInput = {
    chargerGroupAltId: chargerGroupAltId,
    customPricing: [
      {
        pricing: {
          perKwh: fakeData.tariffForExtendPricingRandomFloat,
          perMinute: fakeData.tariffForExtendPricingRandomFloat,
          perSession: fakeData.tariffForExtendPricingRandomFloat,
        },
        tariffSchedule: [
          {
            daysOfWeek: [Day.Friday],
            endTime: '23:59:59',
            startTime: '00:00:01',
          },
        ],
      },
    ],
    defaultPricing: {
      perKwh: fakeData.tariffForExtendPricingRandomFloat,
      perMinute: fakeData.tariffForExtendPricingRandomFloat,
      perSession: fakeData.tariffForExtendPricingRandomFloat,
    },
  };

  const { errors, createTariffForExtend } = await I.createTariffForExtendMutation(token, createTariffForExtendInput);

  return {
    createTariffForExtend,
    createTariffForExtendInput,
    errors,
  };
};

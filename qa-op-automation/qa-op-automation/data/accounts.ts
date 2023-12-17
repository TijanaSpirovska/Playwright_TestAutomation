enum AccountType {
  EMPTY_PARTNER_ADMIN_USER = 'EMPTY_PARTNER_ADMIN_USER',
  INTERNAL = 'INTERNAL',
  GENERAL_USE = 'GENERAL_USE',
  PARTNER_ADMIN_USER = 'PARTNER_ADMIN_USER',
  MOBILE_USER = 'MOBILE_USER',
}

interface AccountCredentials {
  email: string;
  password: string;
}

type Accounts = {
  [accountType in AccountType]?: AccountCredentials | undefined;
};
type AllAccounts = Record<string, Accounts>;

const ALL_ACCOUNTS: AllAccounts = {
  PROD: {
    GENERAL_USE: {
      email: 'ext-super.admin1@evgo.com',
      password: 'doctorwho!',
    },
    INTERNAL: {
      email: 'internal@evgo.com',
      password: 'doctorwho',
    },
  },
  QA: {
    EMPTY_PARTNER_ADMIN_USER: {
      email: 'ext-partner.admin9@evgo.com',
      password: 'doctorwho',
    },
    GENERAL_USE: {
      email: 'ext-super.admin1@evgo.com',
      password: 'doctorwho',
    },
    INTERNAL: {
      email: 'internal@evgo.com',
      password: 'doctorwho',
    },
    MOBILE_USER: {
      email: 'alexei.go.evgo+qa@gmail.com',
      password: 'Test123!',
    },
    PARTNER_ADMIN_USER: {
      email: 'ext-partner.admin3@evgo.com',
      password: 'doctorwho',
    },
  },
  STG: {
    EMPTY_PARTNER_ADMIN_USER: {
      email: 'ext-partner.admin9@evgo.com',
      password: 'doctorwho',
    },
    GENERAL_USE: {
      email: 'ext-super.admin1@evgo.com',
      password: 'doctorwho',
    },
    INTERNAL: {
      email: 'internal@evgo.com',
      password: 'doctorwho',
    },
    MOBILE_USER: {
      email: 'zhika.test44@gmail.com',
      password: 'Test123!',
    },
    PARTNER_ADMIN_USER: {
      email: 'ext-partner.admin3@evgo.com',
      password: 'doctorwho',
    },
  },
} as const;

const MobileAccounts = {

  QA: {
    CHARGING_USER: {
      emails: ['gamma_extendplus@evgo.com', 'iota_extendplus@evgo.com', 'iota1_extendplus@evgo.com', 'zeta_extendplus@evgo.com', 'eta_extendplus@evgo.com', 'epsilon_extendplus@evgo.com'],
      password: 'Test1234!',
    },
  },
  STG: {
    CHARGING_USER: {
      emails: ['gamma_extendplus@evgo.com', 'iota_extendplus@evgo.com', 'iota1_extendplus@evgo.com', 'zeta_extendplus@evgo.com', 'eta_extendplus@evgo.com', 'epsilon_extendplus@evgo.com'],
      password: 'Test1234!',
    },
  },
}

export const CHARGING_ACCOUNTS = MobileAccounts[(process.env.TEST_ENV || 'QA').toUpperCase()];

export const ACCOUNTS: Accounts = ALL_ACCOUNTS[(process.env.TEST_ENV || 'QA').toUpperCase()];

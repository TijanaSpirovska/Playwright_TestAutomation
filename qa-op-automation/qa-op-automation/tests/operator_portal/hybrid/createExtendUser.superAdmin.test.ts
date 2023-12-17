import { ACCOUNTS } from '../../../data/accounts';

Feature('createExtendUser');

let superAdminBearer: string;

BeforeSuite(async ({ I }) => {
  superAdminBearer = await I.getAuthBearerToken({
    email: ACCOUNTS.GENERAL_USE!.email,
    password: ACCOUNTS.GENERAL_USE!.password,
  });
});

xScenario('@C450378 superAdmin can createExtendUser with required fields', async ({ I }) => {
  // Need a host id
  const { errors, listHostsForExtend } = await I.listHostsForExtendQuery(superAdminBearer);

  await I.assertNoErrors(errors);
  const firstHost = listHostsForExtend.edges[0];
  const hostId = firstHost.altId;

  // Create extend user
  const newExtendUser = await I.createExtendUserHelper(superAdminBearer, [hostId]);

  await I.assertOk(newExtendUser.createExtendUser);
  await I.assertNoErrors(newExtendUser.errors);
  await I.assertEqual(newExtendUser.createExtendUserInputData.username, newExtendUser.createExtendUser.username);
  const responseHostEdge = newExtendUser.createExtendUser.hosts!.edges[0];

  await I.assertEqual(newExtendUser.createExtendUserInputData.hostIds[0], responseHostEdge.altId);
  await I.assertEqual(newExtendUser.createExtendUserInputData.username, newExtendUser.createExtendUser.username);

  await I.assertEqual(firstHost.address1, responseHostEdge.address1);
  await I.assertEqual(firstHost.hostName, responseHostEdge.hostName);

  const getExtendUserQueryInputData = {
    altId: newExtendUser.createExtendUser.altId,
  };

  // getExtendUser
  const getExtendUserResponse = await I.getExtendUserQuery(superAdminBearer, getExtendUserQueryInputData);

  await I.assertNoErrors(getExtendUserResponse.errors);
  await I.assertOk(getExtendUserResponse.extendUser);
  await I.assertEqual(newExtendUser.createExtendUser.username, getExtendUserResponse.extendUser.username);
  await I.assertEqual(newExtendUser.createExtendUser.altId, getExtendUserResponse.extendUser.altId);

  const listExtendUsersResponse = await I.listExtendUsersQuery(superAdminBearer);

  await I.assertNoErrors(listExtendUsersResponse.errors);
  await I.assertOk(listExtendUsersResponse.extendUsers);

  const expectedUserName = newExtendUser.createExtendUser.username;
  let responseUserName;

  for (let i = 0; i <= listExtendUsersResponse.extendUsers.edges!.length; i++) {
    responseUserName = listExtendUsersResponse.extendUsers!.edges![i]!.username;
    if (newExtendUser.createExtendUserInputData.username === responseUserName) {
      break;
    } else {
      continue;
    }
  }

  await I.assertEqual(expectedUserName, responseUserName);
})
  .tag('@extendUser')
  .tag('@createExtendUser')
  .tag('@superAdmin')
  .tag('@backend')
  .tag('@listExtendUsers');

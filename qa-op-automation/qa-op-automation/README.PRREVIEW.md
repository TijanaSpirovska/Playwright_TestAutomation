# PR Review guide


## Branch 
Branch name should be Jira ID followed by the ticket title.   
Example:  
  >`ART-204-ListChargersForFleet`

If there is no Jira ticket one must be created before moving forward

## PRs
Title of the PR should describe what you are covering in the PR, Jira ID followed by the Jira title/operation.  
Example:
  >`ART-204 ListChargersForFleet`


In the content/description of the PR, help the reviewer to understand what the code is doing. In case of negative scenarios explain what the scenario is.


## Helpers 
The naming convention for the helpers should match the original name unless there is a conflict with the name  
Example:
  >`Falcon(GraphQL) listSites` and `Driivz(REST) listSites` - one should explain what project we are testing `listSitesFalcon` or `listSitesDriivz`

## Test cases
The structure of test cases should follow `CRUD` (Create, Read, Update, Delete).  
Examples:   
  >tests > entity name > create  
  tests > entity name > read  
  tests > entity name > update  
  tests > entity name > delete  
 

`File name` of the test case should be: `entity type`, `sub-entity type` and `CRUD operation`  
Example: chargers-utilization-charts-read.test.ts  

The naming convention should follow the [`Kebab case style`](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)  

`Feature` name should follow `project name`, `entity name`, `sub-entity name` and `operation`  
Example:
Feature ('OP ChargersUtilizationCharts: Read')   
Feature ('EXT SomeOperation: Update')  

`Scenario name` should start with the `test ID tag` followed by a `user story` with `defined type of user` and the `query/mutation name` if applicable
Examples:  
>Scenario('`<@TEST>` As a `<TYPE OF USER>` I am able to `<ACTION PERFORMED> via <QUERY/MUTATION NAME>`', ...)  
Scenario('`@C241849` As an `admin` I am able to `list chargers for fleet via ListChargersForFleet`', ...)  

## Tags
For each scenario the following tag should be applied: project name, sub-project name, entity name, sub-entity name, smoke test if applicable, user type

* PROJECT NAME = @op-ext
* SUB-PROJECT NAME = @extendPlus OR @operatorPortal
* ENTITY NAME = example @plan
* SUB-ENTITY NAME = example @createPlan
* SMOKE TEST = @smoke-test
* USER TYPE = @superAdmin, @partnerAdmin etc

```
.tag('@op-ext').tag('@plan').tag('@createPlan').tag('@superAdmin').tag('operatorPortal').tag('@smoke_test')
```


## Coding style 
Do not disable lint errors unless they cannot be fixed. If code fits in 120 characters the code should be on the same line  
Example: 
  ```TypeScript
     ...listCabinetsQuery(
        input,
        returnProperties,
      ),
  ```
  Should be expressed as: 
  ```TypeScript
    ...listCabinetsQuery(input, returnProperties), 
  ```

If the function signature is more than 120 characters you should break down the signature so that each argument is on its own line.  
Examples:
   ```TypeScript
functionName(
    param1,
    param2,
    param3,
  )
  ```
   ```TypeScript
Scenario(
    '@C378683 As a user I am not able to get charger utilization chart data with invalid siteId',
    async ({ I }) => {
  ```

## Things to look for in code review
1. The PR description (Jira ID, meaningful description)
2. Folder structure and file names 
3. Look for matching description feature, scenario and test name
4. Check the scenario name represents either the TestRail
5. Test code should match the test scenario from TestRail - check the PreCondition, request and response

Example:  
>Jira Ticket: ART-239 UpdateSite  
TestRail test case: C178483 UpdateSite  

Should be:  
 ```TypeScript
Feature('OP UpdateSite: Update')
Scenario('<@TEST or JIRA ID> As a `<TYPE OF USER>`  I am able to <ACTION PERFORMED> via <QUERY/MUTATION NAME>', ...)
  ```
6. Readability of the code, don't ignore lint errors, make sure the code is compact, make sure it is indented correctly, no commented out code, no useless edits, no unrelated changes
7. If you have questions, leave comments in the code
8. Complexity of the test case, if you look at the code and have no idea what it is about, than it is not good. Do code comments make it clear? 

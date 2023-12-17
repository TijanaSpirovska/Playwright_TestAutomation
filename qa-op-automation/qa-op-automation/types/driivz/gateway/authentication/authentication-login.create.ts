import {
  operations as DriivzApiOperations,
} from '../driivz-api.schema'

type OperatorLogin = DriivzApiOperations['operatorLogin']
  type ResponseCodes = keyof OperatorLogin['responses']
  type ResponseContent<T extends ResponseCodes> = OperatorLogin['responses'][T]['content']

export type OperatorLoginRequestContent = OperatorLogin['requestBody']['content']['application/json']
export type OperatorLoginResponsesJson = ResponseContent<ResponseCodes>['application/json']
export type OperatorLoginResponseJson<T extends ResponseCodes> = ResponseContent<T>['application/json']

import {
  operations as DriivzApiOperations,
} from '../driivz-api.schema'

type GetChargerStatus = DriivzApiOperations['getChargerStatus']
  type ResponseCodes = keyof GetChargerStatus['responses']
  type ResponseContent<T extends ResponseCodes> = GetChargerStatus['responses'][T]['content']

export type GetChargerStatusRequestPathParams = GetChargerStatus['parameters']['path']
export type GetChargerStatusResponsesJson = ResponseContent<ResponseCodes>['application/json']
export type GetChargerStatusResponseJson<T extends ResponseCodes> = ResponseContent<T>['application/json']

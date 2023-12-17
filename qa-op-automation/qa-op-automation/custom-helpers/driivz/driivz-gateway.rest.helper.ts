import { GetChargerStatusRequestPathParams, GetChargerStatusResponsesJson } from '../../types/driivz/gateway/chargers/chargers-get-status.read'
import { OperatorLoginRequestContent, OperatorLoginResponseJson, OperatorLoginResponsesJson } from '../../types/driivz/gateway/authentication/authentication-login.create'

import { AxiosResponse } from 'axios'
import { Random } from 'random-js'
import { RestBaseHelper } from '../base/rest-base.helper'
import { StatusCodes } from 'http-status-codes'

class DriivzGatewayRestHelper extends RestBaseHelper {
  private API_URL
  private _DMS_TICKET
  private random

  constructor (config) {
    super(config)

    this.API_URL = process.env.DRIIVZ_API_GATEWAY_URL
    this._DMS_TICKET = process.env.DRIIVZ_API_GATEWAY_DMS_TICKET
    this.random = new Random()
  }

  private async DMS_TICKET () {
    if (!this._DMS_TICKET) {
      this._DMS_TICKET = await this.getDriivzGatewayApiDmsToken()
    }

    return this._DMS_TICKET
  }

  async getDriivzGatewayApiDmsToken (content?: Partial<OperatorLoginRequestContent>) {
    const response = await this.driivzGatewayApiLogin(content)
    const dmsTicket = (response.responseData as OperatorLoginResponseJson<StatusCodes.OK>).data[0].ticket

    return dmsTicket
  }

  async driivzGatewayApiLogin (content?: Partial<OperatorLoginRequestContent>) {
    const requestContent: Partial<OperatorLoginRequestContent> = content ?? {
      password: process.env.DRIIVZ_API_GATEWAY_PASSWORD!,
      userName: process.env.DRIIVZ_API_GATEWAY_USER_NAME!,
    }

    const response = await this.REST.sendPostRequest(
      `${this.API_URL}/authentication/operator/login `,
      requestContent,
    ) as unknown as AxiosResponse<OperatorLoginResponsesJson>

    return {
      headers: response.headers,
      responseData: response.data,
      status: response.status,
    }
  }

  async getChargerStatus(pathParams: Partial<GetChargerStatusRequestPathParams>) {
    const response = await this.REST.sendGetRequest(
      `${this.API_URL}/chargers/${pathParams.id}/status`,
      { dmsTicket: await this.DMS_TICKET() },
    ) as unknown as AxiosResponse<GetChargerStatusResponsesJson>

    return {
      headers: response.headers,
      responseData: response.data,
      status: response.status,
    }
  }

}

export = DriivzGatewayRestHelper;

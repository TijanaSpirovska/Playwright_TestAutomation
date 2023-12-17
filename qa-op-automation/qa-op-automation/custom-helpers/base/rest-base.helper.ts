import Helper from '@codeceptjs/helper'
import { URLSearchParams } from 'url'

export class RestBaseHelper extends Helper {
  protected get REST () {
    const { REST }: {REST: CodeceptJS.REST} = this.helpers

    return REST
  }

  protected toParamString (params: Record<string, any>) {
    return new URLSearchParams(params).toString()
  }
}

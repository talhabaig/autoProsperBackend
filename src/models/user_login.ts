/**
 *        @file user_login.ts
 *     @summary UserLogin Class
 * @description Defines the structure for user login model
 */

import { Common } from './common'
import Helper from '../db_pool/helper'
import { NullableDate, NullableNumber, NullableString } from '../typings/types'

export class UserLogin extends Common {
  public id_user: NullableNumber = undefined

  public date: NullableDate = undefined

  public ip_address: NullableString = undefined

  public host_name: NullableString = undefined

  constructor(model?: any) {
    super()
    if (model) {
      Helper.shallowCopy(model, this)
    }
    return this
  }
}

export default UserLogin

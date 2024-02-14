/**
 * @file guest_user.ts
 * @repository 000-a-3100_api_boilerplate
 * @application 000-a-3100_api_boilerplate
 * @summary GuestUser Class
 * @description Defines the structure for GuestUser model
 */

import Helper from '../db_pool/helper'
import { NullableString } from '../typings/types'

export class GuestUser {
  public first_name: string
  public middle_name: NullableString = undefined
  public last_name: string
  public date_of_birth: Date
  public city: string
  public state: string
  public last_4_digits_ssn: string
  public phone: string
  public monthly_income: number

  constructor(model?: any) {
    if (model) {
      Helper.shallowCopy(model, this)
    }
  }
}

export default GuestUser

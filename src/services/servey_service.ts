/**
 *        @file servey_service.ts
 *     @summary ServeyService Class
 * @description Define Functions that perform CRUD operations on serveys
 *   @functions - createGuestUserServey()
 */

import Helper from '../db_pool/helper'
import { GuestUser, Servey } from '../models'
import PGPool from '../db_pool/pg_pool'
import { CommonService } from '../services'
import { logger } from '../providers/logger'
import messages from '../constants'

export class ServeyService extends CommonService {
  expReq?: any

  expRes?: any

  constructor(_user: any) {
    super(_user)
  }

  public static async createGuestUserServey(guestUser: GuestUser, servey: Servey, pool?: PGPool): Promise<any> {
    let pooldefinedLocally = false

    // pool is not supplied, create one AND start transaction
    if (pool === undefined) {
      pooldefinedLocally = true
      pool = Helper.pool()
      // begin transaction
      await Helper.beginTransactionWithoutUser(pool)
    }

    try {
      // insert guest user row
      const guest_user_query = `INSERT INTO guest_user (first_name, middle_name, last_name, date_of_birth, city, state, phone, last_4_digits_ssn, monthly_income)
				VALUES ('${guestUser.first_name}', '${guestUser.middle_name}', '${guestUser.last_name}', '${guestUser.date_of_birth}', '${guestUser.city}'
                , '${guestUser.state}', '${guestUser.phone}', '${guestUser.last_4_digits_ssn}', '${guestUser.monthly_income}') returning id`

      const guestUserResult = await pool.aqueryWithoutUser(guest_user_query, [])

      // insert servey
      const servey_query = `INSERT INTO servey (body)
				VALUES ('${JSON.stringify(servey)}') returning id`

      const serveyResult = await pool.aqueryWithoutUser(servey_query, [])

      // insert servey user
      const servery_user_query = `INSERT INTO servey_users (servey_id, guest_user_id) VALUES ($1, $2) returning id`
      const servey_user_params = [guestUserResult.rows[0].id, serveyResult.rows[0].id]

      const serveyUserResult = await pool.aqueryWithoutUser(servery_user_query, servey_user_params)

      // commit if there is a transaction
      if (pooldefinedLocally) await Helper.commitTransactionWithoutUser(pool)

      return {
        success: true,
        data: {
          message: messages.success.insert,
          id_guest_user: serveyResult.rows[0].id,
          id_servey: serveyResult.rows[0].id,
          id_servey_user: serveyUserResult.rows[0].id,
        },
      }
    } catch (error) {
      logger.error(`ServeyService.createGuestUserServey() Error: ${error}`)
      return { success: false, data: { message: error.detail || error } }
    }
  }
}

export default ServeyService

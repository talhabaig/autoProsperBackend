/**
 *        @file interface.ts
 *     @summary Interface Classes
 * @description Define various interfaces used accross Application
 *  @interfaces - TokenExpire
 *              - TokenBody
 *              - CUserAuthInfoRequest
 *              - MulterRequest
 *              - SQLStatementInsert
 *              - SQLStatementUpdate
 */

import { User as UserModel } from '../models'
import { Request } from 'express'

export interface TokenExpire {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface TokenBody {
  success: boolean
  tokenBody?: any
  error?: Error
}

export interface CUserAuthInfoRequest extends Request {
  cUser: UserModel
}

export interface MulterRequest extends CUserAuthInfoRequest {
  file: any
}

export interface SQLStatementInsert {
  columns: string
  param_ids: string
  param_values: Array<any>
}

export interface SQLStatementUpdate {
  columns: string
  param_values: Array<any>
}

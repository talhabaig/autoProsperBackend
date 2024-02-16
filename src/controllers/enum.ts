/**
 *        @file enum.ts
 *     @summary Enum Controller Class.
 * @description This file contains function(s) which returns Enum related data.
 *   @functions - getEnumInfo()
 *     @returns Express JSON Response
 */

import { Response } from 'express'

import { EnumService } from '../services'
import { CUserAuthInfoRequest } from '../db_pool/helper'
import { ResponseWrapper } from '../helpers/response_wrapper'

export class EnumController {
  public static async GetEnum(param: string, _req: CUserAuthInfoRequest, res: Response) {
    var result = await EnumService.getEnumInfo(param)
    const response: ResponseWrapper = new ResponseWrapper(res)
    return response.ok({ success: true, data: { enum: param, values: result } })
  }
}

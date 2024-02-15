/**
 *        @file customisecar.ts
 *     @summary CustomiseCar Controller Class.
 * @description This file contains function(s) which returns CustomiseCar related data.
 *   @functions - getModelByBrand()
 *     @returns Express JSON Response
 */

import { Response } from 'express'

import { OpenAIService} from '../services'
import { CUserAuthInfoRequest } from '../db_pool/helper'
import { ResponseWrapper } from '../helpers/response_wrapper'


export class CustomiseCarController {
    public static async GetModelByBrand(_req: CUserAuthInfoRequest, res: Response) {
      var param = _req.params.brand
      const response: ResponseWrapper = new ResponseWrapper(res)
      return response.ok({ success: true, data: await OpenAIService.getCarModelsBasedOnBrand(param) })
    }
  }

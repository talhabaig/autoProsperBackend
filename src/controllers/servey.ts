/**
 *        @file servey.ts
 *     @summary Servey Controller Class.
 * @description This file contains function(s) which call our respective service(s) to get the data
 *    @services - ServeyService
 *   @functions - createGuestUserServey()
 *     @returns Express JSON Response
 */
 
import { ServeyService } from '../services'
import { Response, Request, NextFunction } from 'express'
import { ResponseWrapper } from '../helpers/response_wrapper'

export class ServeyController {
  public static async createGuestUserServey(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    // @ts-ignore
    const { guestUser, servey } = req.body

    const result = await ServeyService.createGuestUserServey(guestUser, servey)
    const response: ResponseWrapper = new ResponseWrapper(res)
 
    return response.created(result)
  }
 
}

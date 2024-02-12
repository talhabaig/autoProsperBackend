/**
 *        @file servey.ts
 *     @summary Servey Class
 * @description Defines validation structure for servey API requests
 */

import Joi from 'joi'

class ServeyValidator {
  public GuestUserServey() {
    var jois = Joi.object({
      guestUser: Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        middle_name: Joi.string(),
        date_of_birth: Joi.date().iso().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        last_4_digits_ssn: Joi.string().required(),
        phone: Joi.string()
          .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/)
          .required(),
        monthly_income: Joi.number().integer().required()
        
    }),
    servey: Joi.array()
          .items(
            Joi.object({
              enumname: Joi.string().required(),
              enumvalues: Joi.array()
                .items(
                  Joi.object({
                    id: Joi.number().required(),
                    value: Joi.string().required(),
                  }),
                )
                .required(),
            }),
          )
          .required(),
      })

    return jois
  }
}

export default new ServeyValidator()

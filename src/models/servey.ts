/**
 * @file servey.ts
 * @repository 000-a-3100_api_boilerplate
 * @application 000-a-3100_api_boilerplate
 * @summary Servey Class
 * @description Defines the structure for servey model
 */

import Helper from '../db_pool/helper';

export class Servey {
  public body: Record<string, any>;

  constructor(model?: any) {
    if (model) {
      Helper.shallowCopy(model, this);
    }
  }
}

export default Servey
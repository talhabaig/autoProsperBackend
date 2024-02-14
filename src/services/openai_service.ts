import OpenAI from 'openai'

import { logger } from '../providers/logger'
import messages from '../constants'

const openai = new OpenAI()

export class OpenAIService {
  public static async getCarModelsBasedOnBrand(brand: string): Promise<any> {
    try {
      return {
        success: true,
        data: {
          message: messages.success.insert,
        },
      }
    } catch (error) {
      logger.error(`ServeyService.createGuestUserServey() Error: ${error}`)
      return { success: false, data: { message: error.detail || error } }
    }
  }
}

export default OpenAIService

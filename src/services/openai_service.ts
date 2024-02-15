import OpenAI from 'openai'

import { logger } from '../providers/logger'
import * as dotenv from 'dotenv'

dotenv.config()
const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  throw new Error('The OPENAI_API_KEY environment variable is missing or empty')
}

const openai = new OpenAI({
  apiKey,
})

export class OpenAIService {
  public static async getCarModelsBasedOnBrand(brand: string): Promise<any> {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant designed to output JSON.',
          },
          {
            role: 'user',
            content: `Provide me with information on 10 car models from ${brand}. Include details such as name, starting price. as carModels`,
          },
        ],
        model: 'gpt-4-turbo-preview',
        response_format: { type: 'json_object' },
        frequency_penalty: -0.1,
      })

      let models: any = JSON.parse(completion.choices[0].message.content as string)
      //const carModelsDetailsWithImages = [];

      // if (typeof models === 'object') {
      //   const response = await openai.images.generate({
      //     model: 'dall-e-2',
      //     prompt: `front and side view of ${models.carModels[0].name} with transparent background`,
      //     n: 1,
      //     size: '256x256',
      //     quality: 'standard',
      //     response_format: 'url'
      //   })

      //   console.log(response.data[0].url)
      // } else {
      //   console.log('abc')
      // }

      return {
          carModels: models.carModels
      }
    } catch (error) {
      logger.error(`ServeyService.createGuestUserServey() Error: ${error}`)
      return { success: false, data: { message: error.detail || error } }
    }
  }
}

export default OpenAIService

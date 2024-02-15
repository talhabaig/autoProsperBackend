/**
 *        @file customisecar.ts
 *  @repository 016-n-3020_impact_api
 * @application 016-n-3020_impact_api
 *     @summary CustomiseCar routes
 * @description Handles following routes:
 *              - GET '/models-by-brand'
 */
import express from 'express'
import { wrapper } from '../../helpers'
import { CustomiseCarController } from '../../controllers'

const router = express.Router()

/**
 * @openapi
 * /v0/customisecar/models-by-brand/{brand}:
 *  get:
 *    tags:
 *      - CustomiseCar
 *    summary: Get car models based on brand
 *    parameters:
 *      - schema:
 *          type: string
 *        required: true
 *        in: path
 *        name: brand
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                data:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 */
router.get(
  '/models-by-brand/:brand',
   wrapper(CustomiseCarController.GetModelByBrand)
  // @ts-ignore
  // (req, res) => {
  //   console.log('Request received for models by brand:', req.params.brand);

  //   // Call your wrapper function and other logic here
  //   wrapper(CustomiseCarController.GetModelByBrand);

  //   // Send response or perform other actions as needed
  //   res.send('Response sent!');
  // }
);
export default router

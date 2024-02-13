/**
 *        @file app.ts
 *  @repository 016-n-3020_impact_api
 * @application 016-n-3020_impact_api
 *     @summary Application routes
 * @description Handles following routes:
 *              - GET '/version'
 */
import express from 'express'

import { wrapper } from '../../helpers'
import { EnumController  } from '../../controllers'

const router = express.Router()

/**
 * @openapi
 * /v0/enums/essentials:
 *  get:
 *    tags:
 *    - Enums
 *    summary: Get Enum for CarEssentialCriteria
 *    responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 */
router.get('/essentials', (req, res) => wrapper(EnumController.GetEnum)("CarEssentialCriteria", req, res));

/**
 * @openapi
 * /v0/enums/prefferedcarbrand:
 *  get:
 *    tags:
 *    - Enums
 *    summary: Get Enum for PrefferedCarBrand
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
 *                  $ref: '#/components/schemas/enum'
 */
router.get('/prefferedcarbrand', (req, res) => wrapper(EnumController.GetEnum)("PrefferedCarBrand", req, res));

/**
 * @openapi
 * /v0/enums/prefferedseats:
 *  get:
 *    tags:
 *    - Enums
 *    summary: Get Enum for PrefferedSeats
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
 *                  $ref: '#/components/schemas/enum'
 */
router.get('/prefferedseats', (req, res) => wrapper(EnumController.GetEnum)("PrefferedSeats", req, res));

/**
 * @openapi
 * /v0/enums/prefferedvehicle:
 *  get:
 *    tags:
 *    - Enums
 *    summary: Get Enum for PrefferedVehicle
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
 *                  $ref: '#/components/schemas/enum'
 */
router.get('/prefferedvehicle', (req, res) => wrapper(EnumController.GetEnum)("PrefferedVehicle", req, res));

/**
 * @openapi
 * /v0/enums/prefferedridepower:
 *  get:
 *    tags:
 *    - Enums
 *    summary: Get Enum for PrefferedRidePower
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
 *                  $ref: '#/components/schemas/enum'
 */
router.get('/prefferedridepower', (req, res) => wrapper(EnumController.GetEnum)("PrefferedRidePower", req, res));

export default router
/**
 *        @file servey.ts
 *  @repository 016-n-3020_impact_api
 * @application 016-n-3020_impact_api
 *     @summary Servey routes
 * @description Handles following routes:
 *              - POST '/servey-guest-user'
 */
import express from 'express'
import { wrapper } from '../../helpers'
import Schema from '../../middlewares/schema'
import ServeyValidator from '../../validators/servey'
import { ServeyController } from '../../controllers'

const router = express.Router()

/**
 * @openapi
 * /v0/servey/guest-user-servey:
 *   post:
 *     tags:
 *       - Servey
 *     summary: Generate new Survey for Guest User
 *     requestBody:
 *       description: Guest User and Survey details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GuestUserServey'
 *     responses:
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
router.post(
  '/guest-user-servey',
  // @ts-ignore
  (req, res, next) => {
    Schema.handle(req, res, next, ServeyValidator.GuestUserServey())
  },
  wrapper(ServeyController.createGuestUserServey),
)

export default router

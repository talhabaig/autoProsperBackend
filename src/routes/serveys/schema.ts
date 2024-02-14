/**
 * @openapi
 * components:
 *   schemas:
 *     GuestUserServey:
 *       type: object
 *       properties:
 *         guestUser:
 *           type: object
 *           properties:
 *             first_name:
 *               type: string
 *             middle_name:
 *               type: string
 *             last_name:
 *               type: string
 *             date_of_birth:
 *               type: string
 *             city:
 *               type: string
 *             state:
 *               type: string
 *             last_4_digits_ssn:
 *               type: string
 *             phone:
 *               type: string
 *             monthly_income:
 *               type: integer
 *         servey:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               enumname:
 *                 type: string
 *               enumvalues:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     value:
 *                       type: string
 */

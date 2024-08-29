/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Operations related to Blog
 */

/**
 * @swagger
 * /reviews/get:
 *   get:
 *     summary: Get all reviews information
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDescription:
 *                  type: string
 *                  example: description of review
 *                 userRating:
 *                   type: number
 *                   example: 4
 *                 userName:
 *                  type: string
 *                  example: name of user
 *                 userEmail:
 *                  type: string
 *                  default: email of user
 *                 product:
 *                  type: Schema.Types.ObjectId
 */

/**
 * @swagger
 * /reviews/create:
 *   post:
 *     summary: Creating review
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDescription:
 *                  type: string
 *                  example: description of review
 *                 userRating:
 *                   type: number
 *                   example: 4
 *                 userName:
 *                  type: string
 *                  example: name of user
 *                 userEmail:
 *                  type: string
 *                  default: email of user
 *                 product:
 *                  type: Schema.Types.ObjectId
 */

/**
 * @swagger
 * /reviews/update:
 *   put:
 *     summary: Updating review
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDescription:
 *                  type: string
 *                  example: description of review
 *                 userRating:
 *                   type: number
 *                   example: 4
 *                 userName:
 *                  type: string
 *                  example: name of user
 *                 userEmail:
 *                  type: string
 *                  default: email of user
 *                 product:
 *                  type: Schema.Types.ObjectId
 */

/**
 * @swagger
 * /reviews/delete:
 *   delete:
 *     summary: Deleting review
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDescription:
 *                  type: string
 *                  example: description of review
 *                 userRating:
 *                   type: number
 *                   example: 4
 *                 userName:
 *                  type: string
 *                  example: name of user
 *                 userEmail:
 *                  type: string
 *                  default: email of user
 *                 product:
 *                  type: Schema.Types.ObjectId
 */

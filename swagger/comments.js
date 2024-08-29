/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Operations related to Comment
 */

/**
 * @swagger
 * /comment/get:
 *   get:
 *     summary: Get all comments information
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                title:
 *                  type: string
 *                  example: title of subject
 *                createdTime:
 *                  type: Date
 *                  default: Date.now
 *                description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                image:
 *                   type: string
 *                   example: code.jpg
 */

/**
 * @swagger
 * /comment/create:
 *  post:
 *    summary: Create comment
 *    tags: [Comment]
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: title of subject
 *                createdTime:
 *                  type: Date
 *                  default: Date.now
 *                description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                image:
 *                   type: string
 *                   example: code.jpg
 *
 */

/**
 * @swagger
 * /comment/update:
 *   put:
 *     summary: Update Comment
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: title of subject
 *                 createdTime:
 *                   type: string
 *                   format: date-time  # Assuming it's a date/time string
 *                 description:
 *                   type: string
 *                   example: lorem
 *                 image:
 *                   type: string
 *                   format: uri  # Assuming it's a URL or filename
 *                   example: code.jpg
 */

/**
 * @swagger
 * /comment/delete:
 *   delete:
 *     summary: Delete Comment
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: title of subject
 *                 createdTime:
 *                   type: string
 *                   format: date-time  # Assuming it's a date/time string
 *                 description:
 *                   type: string
 *                   example: lorem
 *                 image:
 *                   type: string
 *                   format: uri  # Assuming it's a URL or filename
 *                   example: code.jpg
 */

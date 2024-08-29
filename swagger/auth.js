/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Operations related to Authentication
 */

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: User sign-up
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of user
 *                 email:
 *                   type: string
 *                   example: email of user
 *                 password:
 *                  type: string
 *                  example: password of user
 */

/**
 * @swagger
 * /auth/signIn:
 *   post:
 *     summary: User sign-in
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of user
 *                 email:
 *                   type: string
 *                   example: email of user
 *                 password:
 *                  type: string
 *                  example: password of user
 */

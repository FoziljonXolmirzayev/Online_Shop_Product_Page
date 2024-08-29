/**
 * @swagger
 * tags:
 *   name: Project
 *   description: Operations related to Projects
 */

/**
 * @swagger
 * /project/get:
 *   get:
 *     summary: Get all projects information
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                userName:
 *                  type: string
 *                  example: name of user
 *                userEmail:
 *                  type: string
 *                  default: email of user
 *                userSubject:
 *                  type: string
 *                  example: subject of message
 *                userMessage:
 *                   type: string
 *                   example: message of user
 */

/**
 * @swagger
 * /project/create:
 *   post:
 *     summary: Creating project
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                userName:
 *                  type: string
 *                  example: name of user
 *                userEmail:
 *                  type: string
 *                  default: email of user
 *                userSubject:
 *                  type: string
 *                  example: subject of message
 *                userMessage:
 *                   type: string
 *                   example: message of user
 */

/**
 * @swagger
 * /project/delete:
 *   delete:
 *     summary: Deleting project
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: Deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                userName:
 *                  type: string
 *                  example: name of user
 *                userEmail:
 *                  type: string
 *                  default: email of user
 *                userSubject:
 *                  type: string
 *                  example: subject of message
 *                userMessage:
 *                   type: string
 *                   example: message of user
 */

/**
 * @swagger
 * /project/update:
 *   put:
 *     summary: Updating project
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                userName:
 *                  type: string
 *                  example: name of user
 *                userEmail:
 *                  type: string
 *                  default: email of user
 *                userSubject:
 *                  type: string
 *                  example: subject of message
 *                userMessage:
 *                   type: string
 *                   example: message of user
 */

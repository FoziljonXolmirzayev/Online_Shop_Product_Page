/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Operations related to Blog
 */

/**
 * @swagger
 * /blog/get:
 *   get:
 *     summary: Get all blogs information
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                  type: string
 *                  example: title of subject
 *                 image:
 *                   type: string
 *                   example: code.jpg
 *                 description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                 tags:
 *                  type: string
 *                  example: related tags
 */

/**
 * @swagger
 * /blog/create:
 *   post:
 *     summary: Creating blog
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                  type: string
 *                  example: title of subject
 *                 image:
 *                   type: string
 *                   example: code.jpg
 *                 description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                 tags:
 *                  type: string
 *                  example: related tags
 */

/**
 * @swagger
 * /blog/update:
 *   put:
 *     summary: Updating blog
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                  type: string
 *                  example: title of subject
 *                 image:
 *                   type: string
 *                   example: code.jpg
 *                 description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                 tags:
 *                  type: string
 *                  example: related tags
 */

/**
 * @swagger
 * /blog/delete:
 *   delete:
 *     summary: Deleting blog
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                  type: string
 *                  example: title of subject
 *                 image:
 *                   type: string
 *                   example: code.jpg
 *                 description:
 *                  type: string
 *                  example: lorem lorem lorem
 *                 tags:
 *                  type: string
 *                  example: related tags
 */

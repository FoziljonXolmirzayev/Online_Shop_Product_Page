/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to Products
 */

/**
 * @swagger
 * /products/getInfo:
 *   get:
 *     summary: Get full page information
 *     tags: [Products]
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
 *                  example: name of product
 *                 ratings:
 *                  type: number
 *                  example: estimation of product from 1 to 5
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 colors:
 *                  type: [string]
 *                  example: color of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 category:
 *                  type: string
 *                  example: category of product
 *                 socialLinks:
 *                  type: string
 *                  example: social links for sharing product
 *                 images:
 *                  type: string
 *                  example: images of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/:id:
 *   get:
 *     summary: Get information of a product
 *     tags: [Products]
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
 *                  example: name of product
 *                 ratings:
 *                  type: number
 *                  example: estimation of product from 1 to 5
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 colors:
 *                  type: [string]
 *                  example: color of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 category:
 *                  type: string
 *                  example: category of product
 *                 socialLinks:
 *                  type: string
 *                  example: social links for sharing product
 *                 images:
 *                  type: string
 *                  example: images of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Creating product
 *     tags: [Products]
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
 *                  example: name of product
 *                 ratings:
 *                  type: number
 *                  example: estimation of product from 1 to 5
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 colors:
 *                  type: [string]
 *                  example: color of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 category:
 *                  type: string
 *                  example: category of product
 *                 socialLinks:
 *                  type: string
 *                  example: social links for sharing product
 *                 images:
 *                  type: string
 *                  example: images of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/update/:id:
 *   put:
 *     summary: Get full page information
 *     tags: [Products]
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
 *                  example: name of product
 *                 ratings:
 *                  type: number
 *                  example: estimation of product from 1 to 5
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 colors:
 *                  type: [string]
 *                  example: color of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 category:
 *                  type: string
 *                  example: category of product
 *                 socialLinks:
 *                  type: string
 *                  example: social links for sharing product
 *                 images:
 *                  type: string
 *                  example: images of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/delete:
 *   delete:
 *     summary: Get full page information
 *     tags: [Products]
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
 *                  example: name of product
 *                 ratings:
 *                  type: number
 *                  example: estimation of product from 1 to 5
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 colors:
 *                  type: [string]
 *                  example: color of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 category:
 *                  type: string
 *                  example: category of product
 *                 socialLinks:
 *                  type: string
 *                  example: social links for sharing product
 *                 images:
 *                  type: string
 *                  example: images of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

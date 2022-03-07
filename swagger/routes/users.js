// routes/users.js

/**
 * @swagger
 * /get_users:
 *   get:
 *     operationId: get_users
 *     summary: Единое окно
 *     description: REST API приложения Единое окно
 *     security:
 *       - ApiKeyAuth: [auth]
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: p_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The numbers of items to return
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID.
 *                 username:
 *                   type: string
 *                   description: The user name.
 *       '500':
 *         description: error
 *
 */


 /**
 * @swagger
 * /set_users:
 *   post:
 *     operationId: set_users
 *     summary: Create a JSONPlaceholder user.
 *     security:
 *       - ApiKeyAuth: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               P_NAME:
 *                 type: array
 *                 example: p_name[]
 *                 items:
 *                   type: string                   
 *               p_id1:
 *                 type: string
 *                 description: ид
 *                 example: p_id[]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: error
 * 
*/

 /**
 * @swagger
 * /set_users1:
 *   post:
 *     operationId: set_users
 *     summary: Create a JSONPlaceholder user.
 *     security:
 *       - ApiKeyAuth: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               P_NAME1:
 *                 type: array
 *                 example: p_name[]
 *                 items:
 *                   type: string                   
 *               p_id2:
 *                 type: string
 *                 description: ид
 *                 example: p_id[]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: error
 * 
*/
import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller";
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     description: Retorna un usuario basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario obtenido correctamente
 *       '404':
 *         description: Usuario no encontrado
 *     tags:
 *       - Users
 */
router.get('/:id', getUser);

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna todos los usuarios.
 *     responses:
 *       '200':
 *         description: Lista de usuarios obtenida correctamente
 *     tags:
 *       - Users
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Usuario creado correctamente
 *       '400':
 *         description: Error en la solicitud
 *     tags:
 *       - Users
 */
router.post('/', createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Actualiza un usuario existente
 *     description: Actualiza un usuario basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Usuario actualizado correctamente
 *       '404':
 *         description: Usuario no encontrado
 *     tags:
 *       - Users
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     description: Elimina un usuario basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario eliminado correctamente
 *       '404':
 *         description: Usuario no encontrado
 *     tags:
 *       - Users
 */
router.delete('/:id', deleteUser);

export { router }
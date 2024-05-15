import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller";
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     description: Retorna un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto obtenido correctamente
 *       '404':
 *         description: Producto no encontrado
 *     tags:
 *       - Products
 */
router.get('/:id', getProduct);

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Retorna todos los productos.
 *     parameters:
 *       - in: query
 *         name: category
 *         description: Filtra por Categoria
 *         schema:
 *           type: string 
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 *     tags:
 *       - Products
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Crea un nuevo producto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: Producto creado correctamente
 *       '400':
 *         description: Error en la solicitud
 *     tags:
 *       - Products
 */
router.post('/', createProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Actualiza un producto existente
 *     description: Actualiza un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Producto actualizado correctamente
 *       '404':
 *         description: Producto no encontrado
 *     tags:
 *       - Products
 */
router.put('/:id', updateProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Elimina un producto
 *     description: Elimina un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto eliminado correctamente
 *       '404':
 *         description: Producto no encontrado
 *     tags:
 *       - Products
 */
router.delete('/:id', deleteProduct);

export { router }
import { Request, Response } from "express";


async function createProduct(req: Request, res: Response) {
    try {
        const response = 'createProduct';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error createProduct' })
    }
}

async function getProduct(req: Request, res: Response) {
    try {
        const response = 'getProduct';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error getProduct' })
    }
}

async function getProducts(req: Request, res: Response) {
    try {
        const response = 'getProducts';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error getProducts' })
    }
}

async function updateProduct(req: Request, res: Response) {
    try {
        const response = 'updateProduct';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error updateProduct' })
    }
}

async function deleteProduct(req: Request, res: Response) {
    try {
        const response = 'deleteProduct';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error deleteProduct' })
    }
}

export { createProduct, getProduct, getProducts, updateProduct, deleteProduct }
import { Request, Response } from "express";


async function createUser(req: Request, res: Response) {
    try {
        const response = 'createUser';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error createUser' })
    }
}

async function getUser(req: Request, res: Response) {
    try {
        const response = 'getUser';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error getUser' })
    }
}

async function getUsers(req: Request, res: Response) {
    try {
        const response = 'getUsers';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error getUsers' })
    }
}

async function updateUser(req: Request, res: Response) {
    try {
        const response = 'updateUser';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error updateUser' })
    }
}

async function deleteUser(req: Request, res: Response) {
    try {
        const response = 'deleteUser';
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, data: 'Error deleteUser' })
    }
}

export { createUser, getUser, getUsers, updateUser, deleteUser }
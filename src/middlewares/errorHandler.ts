import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    logger.error('Error', {
        context: 'Controller',
        error: err.message,
    });
    res.status(500).json({ message: err.message, success: false });
};

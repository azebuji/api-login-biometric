import { NextFunction, Request, Response } from 'express';

import * as attendantService from './services'

export async function processFrames(request: Request, response: Response, next: NextFunction) {
    try {
        return true
    } catch (error: any) {
        next(error);
    }
}


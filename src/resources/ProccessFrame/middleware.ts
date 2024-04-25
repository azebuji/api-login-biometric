/*import validSchema from "../../global/common/Joi/validSchema";
import { NextFunction, Request, Response } from "express";

import ApiResponse from "../../global/helpers/classes/apiResponse";
import { createAttendant } from "./schema";
import validJson from "../../global/helpers/functions/validJsonFromFormData";
import fs from 'fs';



export async function validSchemaCreateAttendant(request: Request, response: Response, next: NextFunction) {
    try {
        const validJsonBody = await validJson(request.body.attendant);
        request.body = await validSchema(createAttendant).validateAsync(validJsonBody);
        next();
    } catch (error) {
        if (request?.file?.path) {
            fs.unlinkSync(request.file.path);
        }
        next(new ApiResponse(400, String(error)))
    }
};*/
import { AxiosError } from "axios"
import Joi from "joi"
import multer from "multer"

import ApiResponse from "../global/helpers/classes/apiResponse"
import { codeDb } from "./codeHandler.ts"
import { constraintDB } from "./constraintHandler"
import { gatewayHandler } from "./gatewayHandlerCode"

export const errorHandler = async (data: any) => {
    data?.info && console.log("===========================================================")
    data?.info && console.log('Possível erro ou warning: ', data.info)
    data?.info && console.log("===========================================================")

    if (data instanceof AxiosError) {

        const status = Number(data.response?.status);
        const message = String(data?.response?.data?.error ? data.response.data?.info : data);
        return gatewayHandler(status, message);
    }

    if (data instanceof multer.MulterError) {
        if (data.code === 'LIMIT_FILE_SIZE') {
            return new ApiResponse(412, "Tamanho dos arquivos da imagem são muito grandes");
        } else {
            return new ApiResponse(412, "Ocorreu algum problema com a imagem")
        }
    }

    if (data instanceof Joi.ValidationError) {
        data = data.message.replace(/\[|\]/g, '')
    }

    if (data.constraint) {
        return constraintDB(data.constraint)
    }

    if (data.code) {
        return codeDb(data.code, data?.meta?.target)
    }

    if (String(data).includes('in JSON at position')) {
        return new ApiResponse(400, "Json mál formatado");
    }

    if (data.originalStack && process.env.NODE_ENV == 'development') {
        return data.originalStack
    } else {
        return data
    }
}
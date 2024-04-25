import { NextFunction, Request, Response } from "express";
import fs from 'fs';

import { errorHandler } from "./errorHandler";

class ErrorHandler {

    static async handleErros(error: any, request: Request, response: Response, next: NextFunction) {
        //console.info(error)

        let formatedErro = await errorHandler(error);

        if (request?.file?.path) {
            fs.unlink(request.file.path, (err) => {
                if (err) {
                    console.error(`Erro ao excluir imagem: ${err}`);
                } else {
                    console.log(`Imagem excluída com sucesso: ${request?.file?.path}`);
                }
            });
        }
        if (request?.files) {
            for (const key in request?.files) {
                if (Object.hasOwnProperty.call(request?.files, key)) {
                    const imageInfo = request?.files[key];
                    imageInfo.forEach((image) => {
                        const imagePath = image.path;
                        fs.unlink(imagePath, (err) => {
                            if (err) {
                                console.error(`Erro ao excluir imagem: ${err}`);
                            } else {
                                console.log(`Imagem excluída com sucesso: ${imagePath}`);
                            }
                        });
                    });
                }
            }
        }
        if (formatedErro.status === 401) {
            return response.status(formatedErro.status).send(formatedErro);
        }
        if (formatedErro.status) {
            return response.status(formatedErro.status || 500).send(formatedErro);
        }
        if (formatedErro) {
            return response.status(400).send({ status: 400, statusText: formatedErro });
        }

        next();
    }
}
export default ErrorHandler
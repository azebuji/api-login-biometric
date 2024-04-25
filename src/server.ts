import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import { createServer } from "http";
import https from 'https';
import path from 'path';

import ErrorHandler from './errors/errorHandlerRoute';
//import jobs from './global/helpers/functions/jobs/jobs';
import { initializeSocket } from './config/socketManager';
import socketHandlers from './global/websockets/socketHandlers';
import routes from './routes';

if (process.env.npm_lifecycle_event == 'dev') {
  dotenv.config();
}

const app = express();

const server = https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/live/humanizei.digital/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/humanizei.digital/chain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/humanizei.digital/privkey.pem')
}, app);
//app.use(verifyJsonMiddleware);
//const server = createServer(app);
initializeSocket(server);
socketHandlers();
app.use(express.json());
//jobs();
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
});
app.use(routes);

// Middleware de tratamento de erros
app.use(async (error: any, request: Request, response: Response, next: NextFunction) => {
  ErrorHandler.handleErros(error, request, response, next);
});


server.listen(process.env.API_PORT, () => {
  console.log(
    'Aplicação rodando na porta: ' +
    process.env.API_PORT +
    ' nome da aplicação: ' +
    process.env.API_NAME,
  );
});
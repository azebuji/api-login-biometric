import express, { NextFunction, Request, Response } from 'express';

import corsConfig from './config/corsConfig';
import ProccessFrame from './resources/ProccessFrame/routes';
import uploads from './uploads/routes/router';

const routes = express.Router();

//Rota para validarmos se a api está atualizada.
//routes.use(morgan('combined'));

routes.get('/api-status', (request, response) =>
  response.json({
    status: 'ok',
  }),
);

corsConfig(routes);

//rota que precisam do token ou não

routes.use('/proccessFrame', ProccessFrame);



//Tornando as pastas upload img e signatures pública para a api
routes.use('/uploads', uploads);

//Rotas não existentes
routes.use('*', (request: Request, response: Response, next: NextFunction) => {
  return response.status(404).send({ mensagem: 'Rota não encontrada', status: 404 });
});

export default routes;
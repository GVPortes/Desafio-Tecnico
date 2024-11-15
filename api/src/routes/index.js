import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';

const routes = new Router();

routes.get('/alunos', AlunosController.index);

routes.post('/alunos', AlunosController.create)
routes.get('/alunos/:id', AlunosController.read)
routes.put('/alunos/:id', AlunosController.update)
routes.delete('/alunos/:id', AlunosController.delete)

export default routes;

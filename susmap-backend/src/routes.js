const express = require('express');

const routes = express.Router();

const SintomaController = require('./app/controllers/SintomaController');
const QualificadorController = require('./app/controllers/QualificadorController');
const UsuarioController = require('./app/controllers/UsuarioController');
const SessionController = require('./app/controllers/SessionController');
const ServicoController = require('./app/controllers/ServicoController');

routes.get('/sintomas', SintomaController.index);
routes.get('/sintomas/:id', SintomaController.show);
routes.post('/sintomas', SintomaController.store);
routes.put('/sintomas/:id', SintomaController.update);
routes.delete('/sintomas/:id', SintomaController.destroy);

routes.get('/qualificadores', QualificadorController.index);
routes.post('/qualificadores', QualificadorController.store);
routes.put('/qualificadores/:id', QualificadorController.update);
routes.delete('/qualificadores/:id', QualificadorController.destroy);

routes.get('/servicos', ServicoController.index);
routes.get('/servicos/:id', ServicoController.show);
routes.post('/servicos', ServicoController.store);
routes.put('/servicos/:id', ServicoController.update);
routes.delete('/servicos/:id', ServicoController.destroy);

routes.post('/cadastro', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);

routes.post('/session', SessionController.store);

module.exports = routes;
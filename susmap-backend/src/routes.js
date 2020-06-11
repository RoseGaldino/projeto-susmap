const express = require('express');

const routes = express.Router();

const SintomaController = require('./app/controllers/SintomaController');
const QualificadorController = require('./app/controllers/QualificadorController');
const UsuarioController = require('./app/controllers/UsuarioController');
const SessionController = require('./app/controllers/SessionController');

routes.get("/sintomas", SintomaController.index);
routes.get('/sintomas/:id', SintomaController.show);
routes.post('/sintomas', SintomaController.store);
routes.put('/sintomas/:id', SintomaController.update);
routes.delete('/sintomas/:id', SintomaController.destroy);

routes.get('/qualificadores', QualificadorController.index);
routes.post('/qualificadores', QualificadorController.store);
routes.put('/qualificadores/:id', QualificadorController.update);
routes.delete('/qualificadores/:id', QualificadorController.destroy);

routes.post('/cadastro', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);

routes.post('/session', SessionController.store);

module.exports = routes;
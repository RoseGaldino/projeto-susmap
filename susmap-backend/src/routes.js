const express = require('express');

const routes = express.Router();

const SintomaController = require('./app/controllers/SintomaController');
const QualificadorController = require('./app/controllers/QualificadorController');
const UsuarioController = require('./app/controllers/UsuarioController');
const SessionController = require('./app/controllers/SessionController');
const UnidadesAtendimentoController = require('./app/controllers/UnidadesAtendimentoController');
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

routes.get('/unidades', UnidadesAtendimentoController.index);
routes.get('/unidades/:id', UnidadesAtendimentoController.show);
routes.post('/unidades', UnidadesAtendimentoController.store);
routes.put('/unidades/:id', UnidadesAtendimentoController.update);
routes.put('/unidades/:id/remove-servico/:id_servico', UnidadesAtendimentoController.remove_servico);
routes.delete('/unidades/:id', UnidadesAtendimentoController.destroy);

routes.get('/servicos', ServicoController.index);
routes.get('/servicos/:id', ServicoController.show);
routes.post('/servicos', ServicoController.store);
routes.put('/servicos/:id', ServicoController.update);
routes.delete('/servicos/:id', ServicoController.destroy);

routes.post('/cadastro', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);

routes.post('/session', SessionController.store);

module.exports = routes;
const express = require('express');

const routes = express.Router();

const ProductController = require('./app/controllers/ProductController');
const QualificadorController = require('./app/controllers/QualificadorController');
const UsuarioController = require('./app/controllers/UsuarioController');
const SessionController = require('./app/controllers/SessionController');

routes.get("/products", ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/qualificadores', QualificadorController.index);
routes.post('/qualificadores', QualificadorController.store);
routes.put('/qualificadores/:id', QualificadorController.update);

routes.post('/cadastro', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);

routes.post('/session', SessionController.store);


module.exports = routes;



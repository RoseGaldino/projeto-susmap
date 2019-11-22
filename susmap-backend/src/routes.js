const express = require('express');

const routes = express.Router();

const ProductController = require('./app/controllers/ProductController');
const QualificadorController = require('./app/controllers/QualificadorController');

routes.get("/products", ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/qualificadores', QualificadorController.index);
routes.post('/qualificadores', QualificadorController.store);
routes.put('/qualificadores/:id', QualificadorController.update);
module.exports = routes;



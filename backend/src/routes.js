const express = require('express');
const Controller = require('./Controller/Controller');

const routes = express.Router();


routes.post('/listar', Controller.store);
routes.get('/mostrar', Controller.show);
routes.get('/imagens', Controller.getimages);
routes.post('/criarimagens', Controller.createImages);
routes.delete('/deletarTudo', Controller.destroy);
routes.delete('/deleteall', Controller.deleteImagem);


module.exports = routes;

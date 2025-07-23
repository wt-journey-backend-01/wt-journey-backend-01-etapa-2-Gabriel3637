const express = require('express')
const routerCaso = express.Router();
const casosController = require('../controllers/casosController');

// define a rota para /agentes usando o método GET
routerCaso.get('/casos', casosController.getAllCasos);
routerCaso.get('/casos/:id', casosController.getCaso);
routerCaso.post('/casos', casosController.postCaso);
routerCaso.put('/casos/:id', casosController.putCaso);
routerCaso.patch('/casos/:id', casosController.patchCaso);
routerCaso.delete('/casos/:id', casosController.deleteCaso);

module.exports = routerCaso
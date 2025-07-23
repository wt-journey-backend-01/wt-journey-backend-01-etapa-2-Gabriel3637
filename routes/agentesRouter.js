const express = require('express')
const routerAgente = express.Router();
const agentesController = require('../controllers/agentesController');

// define a rota para /agentes usando o método GET
routerAgente.get('/agentes', agentesController.getAllAgentes);
routerAgente.get('/agentes/:id', agentesController.getAgente);
routerAgente.post('/agentes', agentesController.postAgente);
routerAgente.put('/agentes/:id', agentesController.putAgente);
routerAgente.patch('/agentes/:id', agentesController.patchAgente);
routerAgente.delete('/agentes/:id', agentesController.deleteAgente);

module.exports = routerAgente
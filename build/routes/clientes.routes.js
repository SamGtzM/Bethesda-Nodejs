"use strict";

var express = require('express');

var router = express.Router();

var clientController = require('../controllers/clientes.contoller');

router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:clientId', clientController.getClientsById);
router.put('/:clientId', clientController.updateClientsById);
router["delete"]('/:clientId', clientController.deleteClientsById);
module.exports = router;
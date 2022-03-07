const express = require('express');

const router = express.Router();
const entregasController = require('../controllers/entregas.controller');

router.post('/', entregasController.createEntrega);
router.get('/', entregasController.getEntregas);
router.get('/:entregasId', entregasController.getEntregasById);
router.put('/:entregasId', entregasController.updateEntregasById);
router.delete('/:entregasId', entregasController.deleteEntregasById);

module.exports = router;

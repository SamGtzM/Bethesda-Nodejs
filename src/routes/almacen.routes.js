const express = require('express');

const router = express.Router();
const almacenController = require('../controllers/almacen.controller');

router.post('/', almacenController.createAlmacen);
router.get('/', almacenController.getAlmacen);
router.get('/:almacenId', almacenController.getAlmacenById);
router.put('/:almacenId', almacenController.updateAlmacenById);
router.delete('/:almacenId', almacenController.deleteAlmacenById);

module.exports = router;

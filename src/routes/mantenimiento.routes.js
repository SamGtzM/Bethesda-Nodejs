const express = require('express');

const router = express.Router();
const mantenimientoController = require('../controllers/mantenimiento.controller');

router.post('/', mantenimientoController.createMantenimiento);
router.get('/', mantenimientoController.getMantenimientos);
router.get('/:mantenimientoId', mantenimientoController.getMantenimientosById);
router.put('/:mantenimientoId', mantenimientoController.updateMantenimientosById);
router.delete('/:mantenimientoId', mantenimientoController.deleteMantenimientosById);

module.exports = router;

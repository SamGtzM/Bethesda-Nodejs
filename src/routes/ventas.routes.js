const express = require('express');

const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

router.post('/', ventasController.createVenta);
router.get('/', ventasController.getVentas);
router.get('/:ventasId', ventasController.getVentaById);
router.put('/:ventasId', ventasController.updateVentaById);
router.delete('/:ventasId', ventasController.deleteVentaById);

module.exports = router;

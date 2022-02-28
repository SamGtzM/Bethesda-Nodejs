const express = require('express');

const router = express.Router();
const gasolinaController = require('../controllers/gasolina.controller');

router.post('/', gasolinaController.createGasolina);
router.get('/', gasolinaController.getGasolina);
router.get('/:gasolinaId', gasolinaController.getGasolinaById);
router.put('/:gasolinaId', gasolinaController.updateGasolinaById);
router.delete('/:gasolinaId', gasolinaController.deleteGasolinaById);

module.exports = router;

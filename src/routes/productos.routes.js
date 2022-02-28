const express = require('express');

const router = express.Router();
const productController = require('../controllers/productos.controller');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:productId', productController.getProductsById);
router.put('/:productId', productController.updateProductsById);
router.delete('/:productId', productController.deleteProductsById);

module.exports = router;

const express= require('express');
const router= express.Router();

const controller = require('../controllers/producto');

router.get('/el-producto', controller.getAllProductos)
router.post('/guardar', controller.createProducto)
router.put('/modificar-producto', controller.getAllProductos)
router.delete('/eliminar/:id', controller.deleteProducto)

module.exports =router;
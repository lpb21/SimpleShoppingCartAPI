const express = require('express')
const router = express.Router()

const { 
    getProducts,
    addProductToCartPost,
    getCartProducts,
    removeProductFromCart,
    clearCartProducts
} = require('../controllers')


// Ruta para obtener productos
router.get('/products', getProducts);
// Ruta para agregar producto al carrito
router.post('/cart', addProductToCartPost);
// Ruta para obtener productos del carrito
router.get('/cart', getCartProducts);
// Ruta para eliminar producto del carrito
router.delete('/cart/:id', removeProductFromCart);
// Ruta para eliminar todos los productos del carrito
router.delete('/cart', clearCartProducts);



module.exports = router
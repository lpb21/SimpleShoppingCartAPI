const { getAllProducts } = require('../../models/company/defines/productModel');
const { addToCart, getCart, removeFromCart, clearCart } = require('../../models/company/defines/cartModel');

const addProductToCartPost = (req, res) => {
    try {
      const { id } = req.body;
    //   if (!id) {
    //     return res.status(400).send({
    //       message: 'ID del producto es requerido'
    //     });
    //   }
      const products = getAllProducts();
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(product);
        res.status(200).send({ 
          message: 'Producto adicionado correctamente al carrito' 
        });
      } else {
        res.status(404).send({ 
          message: 'Producto NO encontrado' 
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error en la consulta' 
      });
    }
  };
  
  const getCartProducts = (req, res) => {
    try {
      const cartProducts = getCart();
      res.status(200).send(cartProducts);
    } catch (error) {
      res.status(500).send({ 
        message: error.message || 'Error en la consulta cod 23' 
      });
    }
  };

  const removeProductFromCart = (req, res) => {
    try {
      const { id } = req.params;
      const success = removeFromCart(parseInt(id));
      if (success) {
        res.status(200).send({ 
          message: 'Producto eliminado del carrito' 
        });
      } else {
        res.status(404).send({ 
          message: 'Producto NO encontrado en el carrito' 
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error en la consulta' 
      });
    }
  };
  
  const clearCartProducts = (req, res) => {
    try {
      clearCart();
      res.status(200).send({ 
        message: 'Todos los productos han sido eliminados del carrito' 
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error en la consulta' 
      });
    }
  };


  module.exports = {
    addProductToCartPost,
    getCartProducts,
    removeProductFromCart,
    clearCartProducts
  };
  
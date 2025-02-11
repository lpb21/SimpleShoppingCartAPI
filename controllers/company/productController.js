const { getAllProducts } = require('../../models/company/defines/productModel');


const getProducts = async (req, res) => {
    try {
       const products = getAllProducts();
        res.send(products)
      } catch(err) {
        res.status(400).send({
          mns: err.message || 'Error en la consulta'
        })
      } 
}

module.exports = {
  getProducts
};
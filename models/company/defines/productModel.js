
const products = [
    { "id": 1, "name": "Producto 1", "price": 100 },
    { "id": 2, "name": "Producto 2", "price": 200 },
    { "id": 3, "name": "Producto 3", "price": 150 },
    { "id": 4, "name": "Producto 4", "price": 120 },
    { "id": 5, "name": "Producto 5", "price": 180 },
    { "id": 6, "name": "Producto 6", "price": 250 },
    { "id": 7, "name": "Producto 7", "price": 90 },
    { "id": 8, "name": "Producto 8", "price": 300 },
    { "id": 9, "name": "Producto 9", "price": 160 },
    { "id": 10, "name": "Producto 10", "price": 220 }
];

  
  const getAllProducts = () => {
    return products;
  };
  
  module.exports = {
    getAllProducts
  };
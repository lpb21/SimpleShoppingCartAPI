
const cart = [];

const addToCart = (product) => {
  cart.push(product);
};

const getCart = () => {
  return cart;
};

const removeFromCart = (id) => {
    const index = cart.findIndex(product => product.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      return true;
    }
    return false;
  };

  const clearCart = () => {
    cart.length = 0;
  };


module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart
};
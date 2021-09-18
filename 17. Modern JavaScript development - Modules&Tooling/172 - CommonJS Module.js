///----------------------------------------------------------------
// for nodeJS:
// Export
export.addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
    );
  };

  // Import

const {addToCart} = require ('./shoppingCart.js')
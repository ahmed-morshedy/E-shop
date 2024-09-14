import { useContext, useState, useEffect } from "react";
import CartItem from "../../Components/Customer/CartItem";
import { CartContext } from "../../hooks/CartContext";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartData.length > 0) {
      setCartItems(cartData[0].products);
    }
  }, [cartData]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  document.title = "Cart";

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
        Your Cart
      </h1>
      <div className="max-w-4xl mx-auto p-6">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((product) => (
              <CartItem
                key={product.productId}
                data={product}
                onQuantityChange={handleQuantityChange}
              />
            ))}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Checkout</h2>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              {/* <div className="flex justify-between mb-2">
                <span className="font-semibold">Total Price:</span>
                <span>${total.toFixed(2)}</span>
              </div> */}
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-lg text-gray-600">
            No products in cart
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;

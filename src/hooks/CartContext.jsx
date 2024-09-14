/* eslint-disable react/prop-types */

import { useContext, useEffect, useState, createContext } from "react";
// import AuthContext from "./UserContext";
import { fetchCart } from "../Api/shopServer";
import { AuthContext } from "./UserContext";

export const CartContext = createContext();
export default function CartProvider({ children }) {
  const { authenticationData } = useContext(AuthContext);

  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      if (authenticationData) {
        setLoading(true);

        try {
          const res = await fetchCart();
          setCartData(res);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    getCart();
  }, [authenticationData]);

  const refreshCart = async () => {
    if (authenticationData) {
      setLoading(true);
      try {
        const response = await fetchCart();
        setCartData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const value = {
    cartData,
    loading,
    error,
    refreshCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

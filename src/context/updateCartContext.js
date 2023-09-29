import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const setCartContext = (context) => {
    setCart({ ...cart, ...context });
  };

  const updateCart = (index, clickedMeal) => {
    const thisMeal = cart.find((meal) => meal.id == index);

    if (thisMeal) {
      const updatedCart = [...cart]
      updatedCart[thisMeal.id] = clickedMeal
      setCart(updatedCart);
      return;
    }
    const updatedCart = [...cart]
    updatedCart.push(clickedMeal)
    console.log(updatedCart , thisMeal)
    setCart(updatedCart)
    // const updatedCart = [...cart].push(clickedMeal);
    // setCart(updatedCart);
  };

  const fullPrice = cart.reduce((initial, curr)=>initial + curr.price, 0)


  return (
    <CartContext.Provider value={{ cart, setCartContext, updateCart, fullPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartProvider() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be within a provider");
  }
  return context;
}

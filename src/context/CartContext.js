import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const increaseItemQuantity = (product) => {
    setCartItems((cartItems) => {
      const item = cartItems.find((item) => item.product.id === product.id);
      if (!item) {
        return [...cartItems, { product, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.product.id === product.id)
            return { product, quantity: item.quantity + 1 };
          else return item;
        });
      }
    });
  };

  const decreaseItemQuantity = (product) => {
    setCartItems((cartItems) => {
      const item = cartItems.find((item) => item.product.id === product.id);
      if (item.quantity === 1) {
        return cartItems.filter((item) => item.product.id !== product.id);
      } else {
        return cartItems.map((item) => {
          if (item.product.id === product.id)
            return { product, quantity: item.quantity - 1 };
          else return item;
        });
      }
    });
  };

  const cartItemsQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  };

  const removeItem = (id) => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.product.id !== id);
    });
  };

  const onChangeItemQuantity = (value, id) => {
    setCartItems((cartItems) => {
      if (value <= 0) removeItem(id);
      else {
        return cartItems.map((item) => {
          if (item.product.id === id)
            return { product: item.product, quantity: value };
          else return item;
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartItemsQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity,
        onChangeItemQuantity,
        removeItem,
        totalPrice
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

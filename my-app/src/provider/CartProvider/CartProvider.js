import { createContext, useState } from 'react';
import { Products } from '../../pages/products/Products';

export const CartContext = createContext({
  total: 0,
  items: {},
});
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    total: 0,
    items: {},
  });

  const addNewItem = (product) => {
    setCart((prev) => {
      let newItem;
      if (prev.items[product.id]) {
        const cartProduct = prev.items[product.id];
        newItem = {
          ...cartProduct,
          qty: cartProduct.qty + 1,
        };
      } else {
        newItem = {
          product: product.price,
          qty: 1,
        };
      }

      return {
        ...prev,
        total: prev.total + product.price,
        items: {
          ...prev.items,
          [product.id]: newItem,
        },
      };
    });
  };

  const removeItem = (product) => {
    setCart((prev) => {
      let newItem = { ...prev.items };
      let total = prev.total;
      if (prev.items[product.id]) {
        const cartProduct = prev.items[product.id];
        if (cartProduct.qty > 1) {
          const update = {
            ...cartProduct,
            qty: cartProduct.qty - 1,
          };
          newItem = {
            ...prev.items,
            [product.id]: update,
          };
        }
        total -= product.price;
      } else {
        total -= product.price;
        delete newItem[product.id];
      }

      return {
        ...prev,
        total,
        items: newItem,
      };
    });
    // setCart((prev) => {
    //   return {
    //     ...prev,
    //     total: prev.total - item.price,
    //     items,
    //   };
    // });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

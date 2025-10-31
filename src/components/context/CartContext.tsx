"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 💾 Load from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("spotlight_cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // 💽 Save to localStorage
  useEffect(() => {
    localStorage.setItem("spotlight_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

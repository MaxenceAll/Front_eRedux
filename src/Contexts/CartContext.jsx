import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create the CartContext Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Update the addToCart function to accept a quantity parameter
    const addToCart = (item, quantity) => {
        setCart(prevCart => [...prevCart, { item, quantity }]);
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // Create the context value
    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        clearCart
    };

    // Provide the context value to the children components
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

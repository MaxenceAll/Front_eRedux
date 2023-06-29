import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => [...prevCart, { item, quantity }]);
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.item.id !== itemId));
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.item.id === itemId) {
                    return {
                        ...item,
                        quantity: newQuantity,
                    };
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItemCount = () => {
        return cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
    };

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        getTotalItemCount,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

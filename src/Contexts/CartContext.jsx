import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingCartItem = cart.find(cartItem => cartItem.item.id === item.id);

        if (existingCartItem) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.item.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity,
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { item, quantity }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.item.id !== itemId));
    };


    const increaseQuantity = (itemId) => {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.item.id === itemId && item.quantity < 100) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            })
        );
    };

    const decreaseQuantity = (itemId) => {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.item.id === itemId && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            })
        );
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

        increaseQuantity,
        decreaseQuantity,

    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

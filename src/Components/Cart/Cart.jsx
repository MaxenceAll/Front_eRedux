import React from 'react';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';

function Cart({ cartItems }) {
    return (
        <STYLEDContainer>
            <STYLEDContainerBox>
                <h2>Cart</h2>
                {cartItems?.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems?.map((item) => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </STYLEDContainerBox>
        </STYLEDContainer>
    );
}

export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { currencyFormat } from '../../Tools/currencyFormat';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';
import { styled } from 'styled-components';

function Cart() {
    const { cart, removeFromCart, updateCartItemQuantity, getTotalItemCount } = useContext(CartContext);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        updateCartItemQuantity(itemId, newQuantity);
    };

    return (
        <STYLEDContainer>
            <STYLEDContainerBox>
                <DIV_Cart_Container>
                    <h1>Panier</h1>
                    {cart.length === 0 ? (
                        <p>Panier vide !</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((cartItem) => (
                                    <tr key={cartItem.item.id}>
                                        <td>{cartItem.item.name}</td>
                                        <td>{currencyFormat(cartItem.item.price)}</td>
                                        <td>
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            cartItem.item.id,
                                                            cartItem.quantity - 1
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                {cartItem.quantity}
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            cartItem.item.id,
                                                            cartItem.quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleRemoveFromCart(cartItem.item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </DIV_Cart_Container>
            </STYLEDContainerBox>

            <STYLEDContainerBox>
                here the payout resumé
            </STYLEDContainerBox>
            
        </STYLEDContainer>
    );
}

export default Cart;

const DIV_Cart_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  min-height: 250px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  padding: 2%;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  button {
    margin: 0 5px;
  }
`;

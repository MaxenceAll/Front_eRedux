import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { currencyFormat } from '../../Tools/currencyFormat';
import { STYLEDContainer } from '../../Styles/genericContainer';
import { styled } from 'styled-components';
import { STYLEDButton } from '../../Styles/genericButton';
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

function CartElements() {
    const { cart, removeFromCart, updateCartItemQuantity, getTotalItemCount, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRemoveFromCart = (itemId, itemName) => {
        toast.warning(`${itemName} supprimé du panier !`)
        removeFromCart(itemId);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        updateCartItemQuantity(itemId, newQuantity);
    };

    const handleQuantityIncrease = (itemId) => {
        increaseQuantity(itemId);
    };
    const handleQuantityDecrease = (itemId) => {
        decreaseQuantity(itemId);
    };

    const calculateSubtotal = () => {
        return cart.reduce((subtotal, cartItem) => {
            return subtotal + cartItem.item.price * cartItem.quantity;
        }, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const deliveryCost = import.meta.env.VITE_APP_LIVRAISON_PRICE;
        return subtotal + deliveryCost;
    };

    return (
        <STYLEDContainer>
            <DIV_ContainerBox>
                <DIV_Cart_Container>
                    <h1>Panier</h1>
                    {cart.length === 0 ? (
                        <p>Panier vide !</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>img</th>
                                    <th>Nom</th>
                                    <th>Prix</th>
                                    <th>Quantité(s)</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((cartItem) => (
                                    <tr key={cartItem.item.id}>
                                        <td><img src={cartItem.item.img_src} alt={cartItem.item.name} /></td>
                                        <td>{cartItem.item.name}</td>
                                        <td>{currencyFormat(cartItem.item.price)}</td>
                                        <td>
                                            <DIV_Quantity_Container>
                                                <STYLEDButton onClick={() => handleQuantityDecrease(cartItem.item.id)}>-</STYLEDButton>
                                                {cartItem.quantity}
                                                <STYLEDButton onClick={() => handleQuantityIncrease(cartItem.item.id)}>+</STYLEDButton>
                                            </DIV_Quantity_Container>
                                        </td>
                                        <td>{currencyFormat(cartItem.item.price * cartItem.quantity)}</td>
                                        <td>
                                            <STYLEDButton style={{ backgroundColor: "red" }}  onClick={() => handleRemoveFromCart(cartItem.item.id, cartItem.item.name)}>Supprimer<MdOutlineRemoveCircleOutline /></STYLEDButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </DIV_Cart_Container>

                <DIV_Payout_Container>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre d'articles:</td>
                                <td>{getTotalItemCount()}</td>
                            </tr>
                            <tr>
                                <td>Sous-total:</td>
                                <td>{currencyFormat(calculateSubtotal())}</td>
                            </tr>
                            <tr>
                                <td>Livraison:</td>
                                <td>{currencyFormat(import.meta.env.VITE_APP_LIVRAISON_PRICE)}</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>{currencyFormat(calculateTotal())}</td>
                            </tr>
                        </tbody>
                    </table>
                    <NavLink to="/payout">                        
                        <STYLEDButton style={{ backgroundColor: "green" }}>Commander</STYLEDButton>
                    </NavLink>
                </DIV_Payout_Container>
            </DIV_ContainerBox>
        </STYLEDContainer>
    );
}

export default CartElements;

const DIV_ContainerBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px;
    gap: 20px;
`;

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

    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);


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


const DIV_Payout_Container = styled.div`
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
    text-align: center;
    
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    
`

const DIV_Quantity_Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #000;
        background-color: #fff;
        padding: 5px;
        width: 100px;
        height: 50px;
        text-align: center;
    `;
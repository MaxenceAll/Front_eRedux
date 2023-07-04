import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping, FaBagShopping } from "react-icons/fa6";
import { HiUser, HiUserAdd } from "react-icons/hi";
import { CartContext } from '../../Contexts/CartContext';
import { styled } from 'styled-components';

function CartHeader() {

    const { getTotalItemCount } = useContext(CartContext);
    return (
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : null}>
            <DIV_HeaderLinkIcon>
                <FaBagShopping />
            </DIV_HeaderLinkIcon>
            <SPAN_CartItemCount>{getTotalItemCount()}</SPAN_CartItemCount>
        </NavLink>
    )
}

export default CartHeader

const DIV_HeaderLinkIcon = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const SPAN_CartItemCount = styled.span`
    position: relative;
    top: -8px;
    font-size: 1rem;
    font-weight: bold;
    background-color: green;
    color: white;
    border-radius: 50%;
    padding: 2px 5px;
`;
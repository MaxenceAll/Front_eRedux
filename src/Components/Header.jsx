import { styled } from "styled-components";
import { FaCartShopping, FaBagShopping } from "react-icons/fa6";
import { HiUser, HiUserAdd } from "react-icons/hi";
import SearchBar from "./Header/SearchBar";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

function Header() {

    const { getTotalItemCount } = useContext(CartContext);

    return (
        <DIV_Header_Container>
            <div>
                <SPAN_NomApp>
                    <NavLink to="/">
                        <FaCartShopping />
                        E-Redux
                    </NavLink>
                </SPAN_NomApp>
            </div>
            <DIV_NavBarContainer>
                <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : null}>
                    <DIV_HeaderLinkIcon>
                        <HiUser />
                    </DIV_HeaderLinkIcon>
                    Login
                </NavLink>
                <NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : null}>
                    <DIV_HeaderLinkIcon>
                        <HiUserAdd />
                    </DIV_HeaderLinkIcon>
                    Register
                </NavLink>
                <span>
                    <SearchBar />
                </span>
                <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : null}>
                    <DIV_HeaderLinkIcon>
                        <FaBagShopping />
                    </DIV_HeaderLinkIcon>
                    <SPAN_CartItemCount>{getTotalItemCount()}</SPAN_CartItemCount>
                </NavLink>                

            </DIV_NavBarContainer>
        </DIV_Header_Container>
    )
}

export default Header

const DIV_Header_Container = styled.div`
    padding-left: 15%;
    padding-right: 15%;
    background-color: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    .active-link {
    /* text-decoration: underline; */
    background-color: yellow;
    color: red;
    border-radius: 4px;
    border: 2px solid gray;
    }
`;

const SPAN_NomApp = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: red;
    font-style: bold;
`;

const DIV_NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    font-size: 1.2rem;
    color: black;
    gap: 10px;
`;

const DIV_HeaderLinkIcon = styled.div`
  text-align: center;
    font-size: 1.5rem;
`;

const SPAN_CartItemCount = styled.span`
  position: relative;
  top: -8px;
  font-size: 1rem;
  font-weight: bold;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
`;
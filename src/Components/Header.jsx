import { styled } from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LoginRegisterButtons from "./Header/LoginRegisterButtons";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import SearchBar from "./Header/SearchBar";
import CartHeader from "./Header/CartHeader";
import LogoutButton from "./Header/LogoutButton";

function Header() {
    const { isLoggedIn} = useContext(AuthContext);
    return (
        <DIV_Header_Container>
            <SPAN_NomApp>
                <NavLink to="/">
                    <FaCartShopping />
                    E-Redux
                </NavLink>
            </SPAN_NomApp>
            {!isLoggedIn ? <LoginRegisterButtons /> : <LogoutButton />}
            <SearchBar />
            <CartHeader />
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
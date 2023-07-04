import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiUser, HiUserAdd } from "react-icons/hi";

function LoginRegisterButtons() {
    return (
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
        </DIV_NavBarContainer>
    )
}

export default LoginRegisterButtons

const DIV_NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    font-size: 1.2rem;
    color: black;
    gap: 10px;
`;
const DIV_HeaderLinkIcon = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;


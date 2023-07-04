import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { HiOutlineLogout } from "react-icons/hi";
import { styled } from 'styled-components';

function LogoutButton() {
    const { userEmail, logout } = useContext(AuthContext);
    const handleLogout = () => {
        toast.info(`Vous êtes déconnecté`);
        logout();
    }
    return (
        <>
            <DIV_Logout_Container>
                <SPAN_LogoutButton onClick={handleLogout}><HiOutlineLogout /></SPAN_LogoutButton>
                Bienvenue {userEmail}
            </DIV_Logout_Container>
        </>
    )
}
export default LogoutButton

const DIV_Logout_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    font-size: 1.2rem;
    color: black;
    gap: 10px;
`;
const SPAN_LogoutButton = styled.span`
    text-align: center;
    font-size: 3.5rem;
    :hover {
        color: red;
        cursor: pointer;
    }
`;

import React, { useContext } from 'react'
import RegisterForm from '../Components/Register/RegisterForm'
import usePageTitle from '../Hooks/usePageTitle';
import { AuthContext } from '../Contexts/AuthContext';
import { STYLEDContainer, STYLEDContainerBox } from '../Styles/genericContainer';
import { STYLEDButton } from '../Styles/genericButton';
import { toast } from 'react-toastify';

function Register() {

    usePageTitle(`E-Redux | Formulaire d'inscription`);

    const { isLoggedIn, userEmail, logout } = useContext(AuthContext);

    const handleLogout = () => {
        toast.info(`Vous êtes déconnecté`);
        logout();
    }

    return (<>
        {!isLoggedIn
            ? <RegisterForm />
            : <>
                <STYLEDContainer>
                    <STYLEDContainerBox>
                        {isLoggedIn && <div>Vous êtes connecté en tant que {userEmail}</div>}
                        <STYLEDButton onClick={handleLogout}>Logout</STYLEDButton>
                    </STYLEDContainerBox>
                </STYLEDContainer>
            </>
        }
    </>)
}

export default Register
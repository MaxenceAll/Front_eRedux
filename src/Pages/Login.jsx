import React, { useContext } from 'react'
import LoginForm from '../Components/Login/LoginForm'
import usePageTitle from '../Hooks/usePageTitle';
import { AuthContext } from '../Contexts/AuthContext';
import { STYLEDContainer, STYLEDContainerBox } from '../Styles/genericContainer';
import { STYLEDButton } from '../Styles/genericButton';
import { toast } from 'react-toastify';

function Login() {

    usePageTitle(`E-Redux | Formulaire de connexion`);

    const { isLoggedIn, userEmail, logout } = useContext(AuthContext);

    const handleLogout = () => {
        toast.info(`Vous êtes déconnecté`);
        logout();
    }

    return (<>
        {!isLoggedIn
            ? <LoginForm />
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

export default Login
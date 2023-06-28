import React from 'react'
import LoginForm from '../Components/Login/LoginForm'
import usePageTitle from '../Hooks/usePageTitle';

function Login() {

    usePageTitle(`E-Redux | Formulaire de connexion`);

    return (<>
        <div>Page de login ici</div>
        <LoginForm />
    </>)
}

export default Login
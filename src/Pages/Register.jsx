import React from 'react'
import RegisterForm from '../Components/Register/RegisterForm'
import usePageTitle from '../Hooks/usePageTitle';

function Register() {

    usePageTitle(`E-Redux | Formulaire d'inscription`);

    return (<>
        <div>Page de register ici</div>
        <RegisterForm />
    </>)
}

export default Register
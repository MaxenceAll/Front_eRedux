import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { VscAccount } from "react-icons/vsc";
import { STYLEDErrorMessage } from '../../Styles/genericParagraphError';
import { STYLEDInput } from '../../Styles/genericInput';
import { STYLEDButton } from '../../Styles/genericButton';
import { STYLEDForm } from '../../Styles/genericForm';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';

import fetcher from '../../Helpers/fetcher';
import { toast } from 'react-toastify';


// LoginForm component
const LoginForm = () => {

    const [response, setResponse] = useState(null); // State to store the API response
    console.log(response);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Il faut saisir une adresse mail enfin !';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Cela ne ressemble pas à une adresse mail valide !';
            }

            if (!values.password) {
                errors.password = 'Il faut saisir un mot de passe enfin !';
            }

            return errors;
        },
        onSubmit: async(values) => {
            // ICI on récup les valeurs du formulaire
            console.log(values);
            try {
                const resp = await fetcher.post(`/api/v1/auth/login`, values);
                setResponse(resp); // Store the API response in the state
                console.log(resp); // Log the response
            } catch (error) {
                console.log(error);
                toast.error('Une erreur est survenue lors de la connexion');
            }
        },
    });

    return (
        <STYLEDContainer>
            <STYLEDContainerBox>
                <STYLEDForm onSubmit={formik.handleSubmit}>
                    <div style={{ fontSize: "100px" }}> <VscAccount /> </div>
                    <h1>S'identifier</h1>
                    <STYLEDInput
                        type="email"
                        name="email"
                        placeholder="Votre adresse mail ici"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        autoComplete="off"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <STYLEDErrorMessage>{formik.errors.email}</STYLEDErrorMessage>
                    )}
                    <STYLEDInput
                        type="password"
                        name="password"
                        placeholder="Votre mot de passe ici"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        autoComplete="off"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <STYLEDErrorMessage>{formik.errors.password}</STYLEDErrorMessage>
                    )}
                    <STYLEDButton   type="submit">Se connecter</STYLEDButton>
                </STYLEDForm>
            </STYLEDContainerBox>
        </STYLEDContainer>
    );
};

export default LoginForm;

// Styled components
const DIV_Form_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;
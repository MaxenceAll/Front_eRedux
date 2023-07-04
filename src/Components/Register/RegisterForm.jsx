import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';
import { STYLEDForm } from '../../Styles/genericForm';
import { STYLEDInput } from '../../Styles/genericInput';
import { STYLEDErrorMessage } from '../../Styles/genericParagraphError';
import { STYLEDButton } from '../../Styles/genericButton';
import { toast } from 'react-toastify';
import fetcher from '../../Helpers/fetcher';
import { AuthContext } from '../../Contexts/AuthContext';


const RegisterForm = () => {

    const { login } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
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
            } else if (values.password.length < 4) {
                errors.password =
                    'Le mot de passe doit être de 4 caractères minimum, oui je sais c\'est pas beaucoup !';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Il faut confirmer votre mot de passe !';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Les mots de passe ne correspondent pas !';
            }

            return errors;
        }, 
        onSubmit: async (values) => {
            // Pour virer le confirmPassword de l'objet
            const { confirmPassword, ...requestData } = values;
            try {
                const resp = await fetcher.post(`/api/v1/auth/register`, requestData);
                if (resp.result) {
                    toast.success('Votre compte a bien été crée');
                    login(resp.access_token, resp.email);
                } else{
                    toast.error(`Une erreur est survenue lors de la création de votre compte : ${resp.error} (${resp.message}))`);
                }
            } catch (error) {
                console.log(error);
                toast.error(`Une erreur est survenue lors de la création de votre compte : ${resp.error} (${resp.message}))`);
            }
        },
    });

    return (
        <STYLEDContainer> 
            <STYLEDContainerBox>
                <STYLEDForm onSubmit={formik.handleSubmit}>
                    <div style={{ fontSize: '100px' }}>
                        <HiOutlineUserAdd />
                    </div>
                    <h1>S'enregistrer</h1>
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
                    <STYLEDInput
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmez votre mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        autoComplete="off"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <STYLEDErrorMessage>{formik.errors.confirmPassword}</STYLEDErrorMessage>
                    )}
                    <STYLEDButton type="submit">S'enregistrer</STYLEDButton>
                </STYLEDForm>
            </STYLEDContainerBox>
        </STYLEDContainer>
    );
};

export default RegisterForm;

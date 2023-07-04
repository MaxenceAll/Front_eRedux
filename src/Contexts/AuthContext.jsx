import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);
            setUserEmail(localStorage.getItem('userEmail'));
        }
    }, []);

    const login = async (token, email) => {
        setIsLoggedIn(true);
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email);
        setUserEmail(email);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        setUserEmail('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
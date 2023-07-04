import { createContext, useEffect, useState } from "react";
import useCookie from "../Hooks/useCookie";
import fetcher from "../Helpers/fetcher";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [token, setToken] = useState("");

    const [authCookie, setAuthCookie] = useCookie("token");
    console.log(authCookie);

    useEffect(() => {
        const doFetch = async () => {
            const firstAuthTry = await fetcher.get('/api/v1/auth/auth');
            console.log(firstAuthTry);
            // if (!firstAuthTry.data) {
            //     console.log("Pas d'accessToken, tentative avec refreshToken.");
            //     const tryingWithRefreshToken = await fetcher.get("refresh");
            //     if (tryingWithRefreshToken.result) {
            //         console.log("Réception d'un accessToken via le refreshToken.");
            //         setAuthCookie(tryingWithRefreshToken.accessToken ?? null, {
            //             "max-age": `${60 * 60 * 24 * 10}`,
            //             "path": "/"
            //         });
            //         const secondAuthTry = await fetcher.get("auth");
            //         console.log("accessToken est ok, authentification OK !");
            //         setAuth(secondAuthTry);
            //     } else {
            //         console.log("Pas non plus de refreshToken, il faut s'identifier !");
            //     }
            // } else {
            //     console.log("accessToken présent, authentification OK !");
            //     setAuth(firstAuthTry);
            // }
        };
        doFetch();
    }, []);

    const login = async (token, email) => {
        setIsLoggedIn(true);
        setToken(token);
        setUserEmail(email);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setToken(null);
        setUserEmail("");
        document.cookie.split(";").forEach((cookie) => {
            const [name] = cookie.split("=");
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
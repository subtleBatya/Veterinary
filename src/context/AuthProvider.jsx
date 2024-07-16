import { createContext, useState } from "react";
// See the 21 lecture for useContext API
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
// CHILDREN - ARE THE COMPONENTS THAT WOULD BE NESTED INSIDE AUTH PROVIDER
    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthContext;
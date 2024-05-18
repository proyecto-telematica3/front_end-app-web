import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword} from "react";
import { auth } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('No hay autenticador')
    return context
}

export function AuthProvider({ children }) {
    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    )
}
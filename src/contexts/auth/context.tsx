import {createContext} from "react";

import { SignInParams, SignUpParams, User } from "../../services/auth";

interface AuthContextValue {
    logged: boolean
    credentials?: User
    signUp: (params: SignUpParams) => Promise<void>
    signIn: (params: SignInParams) => Promise<void>
    signOut: () => Promise<void>
}

const initialAuthContextValue: AuthContextValue = {
    logged: false,
    credentials: undefined,
    signUp: async () => { throw new Error('auth context value not implemented') },
    signIn: async () => { throw new Error('auth context value not implemented') },
    signOut: async () => { throw new Error('auth context value not implemented') },
}

const AuthContext = createContext<AuthContextValue>(
    initialAuthContextValue
);

export default AuthContext;
export { initialAuthContextValue }
export type {
    User,
    SignInParams,
    SignUpParams,
    AuthContextValue
}

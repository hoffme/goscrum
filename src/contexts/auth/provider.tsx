import {ReactNode, useState} from "react";

import AuthService from "../../services/auth";

import AuthContext, { SignInParams, SignUpParams, User } from "./context";

interface Props {
    children?: ReactNode
}

const AuthProvider = (props: Props) => {
    const [credentials, setCredentials] = useState<User | undefined>(undefined);

    const signUp = async (params: SignUpParams) => {
        await AuthService.SignUp(params);
        const result = await AuthService.SignIn({
            username: params.username,
            password: params.password
        });

        AuthService.setToken(result.token);
        setCredentials(result.user);
    }

    const signIn = async (params: SignInParams) => {
        const result = await AuthService.SignIn(params);
        AuthService.setToken(result.token);
        setCredentials(result.user);
    }

    const signOut = async () => {
        AuthService.setToken(undefined);
        setCredentials(undefined);
    }

    return <AuthContext.Provider value={{
        logged: !!credentials,
        credentials,
        signUp,
        signIn,
        signOut
    }}>
        { props.children }
    </AuthContext.Provider>
}

export default AuthProvider;
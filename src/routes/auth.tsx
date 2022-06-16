import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import useAuth from "../hooks/auth";

interface Props {
    page: ReactNode
    reverse?: boolean
    redirect?: string
}

const AuthRoute = (props: Props) => {
    const navigate = useNavigate();
    const { logged } = useAuth();

    const access = props.reverse ? !logged : logged;

    useEffect(() => {
        if (!access && props.redirect) navigate(props.redirect);
    }, [navigate, access, props.redirect])

    return <>{ access && props.page }</>;
}

export default AuthRoute;
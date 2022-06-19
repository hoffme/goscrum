import { LinkText } from "../../components/link";
import { AuthLayout } from "../../components/layouts";

import SignInForm from "./components/form";

const SignInPage = () => {
    return <AuthLayout title={'Ingresar'}>
        <SignInForm />
        <LinkText to={'/register'} text={'Registrar'} />
    </AuthLayout>;
}

export default SignInPage;
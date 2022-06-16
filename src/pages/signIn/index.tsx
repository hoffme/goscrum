import { LinkText } from "../../components/link";
import { AuthLayout } from "../../components/layouts";

import SignInForm from "./form";

const SignInPage = () => {
    return <AuthLayout title={'Ingresar'}>
        <SignInForm />
        <LinkText to={'/sign_up'} text={'Registrar'} />
    </AuthLayout>;
}

export default SignInPage;
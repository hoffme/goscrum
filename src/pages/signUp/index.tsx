import { LinkText } from "../../components/link";
import { AuthLayout } from "../../components/layouts";

import SignUpForm from "./form";

const SignUpPage = () => {
    return <AuthLayout title={'Registrar'}>
        <SignUpForm />
        <label style={{fontSize: '0.75em'}} >
            Ya tienes cuenta?
        </label>
        <LinkText to={'/sign_in'} text={'Ingresar'} />
    </AuthLayout>;
}

export default SignUpPage;
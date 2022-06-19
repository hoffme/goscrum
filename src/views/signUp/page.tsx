import { LinkText } from "../../components/link";
import { AuthLayout } from "../../components/layouts";

import SignUpForm from "./components/form";

const SignUpPage = () => {
    return <AuthLayout title={'Registrar'}>
        <SignUpForm />
        <label style={{fontSize: '0.75em'}} >
            Ya tienes cuenta?
        </label>
        <LinkText to={'/'} text={'Ingresar'} />
    </AuthLayout>;
}

export default SignUpPage;
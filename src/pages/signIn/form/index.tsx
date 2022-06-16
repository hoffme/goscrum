import useSignInForm from "../hooks/signInForm";

import { InputField } from "../../../components/fields";
import { PrimaryButton } from "../../../components/buttons";

const SignInForm = () => {
    const form = useSignInForm();

    return <form onSubmit={form.handlers.submit}>
        <InputField
            type={'text'}
            name={'username'}
            title={'Usuario'}
            value={form.values.username}
            onValue={form.handlers.setUsername}
            error={form.errors.username}
        />
        <InputField
            type={'password'}
            name={'password'}
            title={'Contrasena'}
            value={form.values.password}
            onValue={form.handlers.setPassword}
            error={form.errors.password}
        />
        {
            form.errors.general && <label>
                { form.errors.general }
            </label>
        }
        <PrimaryButton type={'submit'}>
            { form.isSubmitting ? 'Ingresando ...' : 'Ingresar' }
        </PrimaryButton>
    </form>
}

export default SignInForm;
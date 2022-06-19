import useSignInForm from "../../hooks/signInForm";

import { InputField } from "../../../../components/fields";
import { PrimaryButton } from "../../../../components/buttons";

import { FormStyle } from "./style";

const SignInForm = () => {
    const form = useSignInForm();

    return <FormStyle onSubmit={form.handlers.submit}>
        <InputField
            type={'text'}
            name={'username'}
            title={'Usuario'}
            placeHolder={'user'}
            value={form.values.username}
            onValue={form.handlers.setUsername}
            error={form.errors.username}
        />
        <InputField
            type={'password'}
            name={'password'}
            title={'Contrasena'}
            placeHolder={'pass'}
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
    </FormStyle>
}

export default SignInForm;
import {FormikErrors, useFormik} from "formik";

import {SignInParams} from "../../../services/auth";

import useAuth from "../../../hooks/auth";
import {useState} from "react";

const initialValues: SignInParams = {
    username: '',
    password: ''
};

const useSignInForm = () => {
    const [generalError, setGeneralError] = useState<string | undefined>(undefined);
    const { signIn } = useAuth();

    const validate = (value: SignInParams) => {
        const errors: FormikErrors<SignInParams> = {};

        if (!value.username || value.username.length === 0) {
            errors.username = 'El email es requerido';
        }
        if (!value.password || value.password.length === 0) {
            errors.password = 'El password es requerido';
        }

        return errors;
    }

    const onSubmit = async (values: SignInParams) => {
        setGeneralError(undefined);

        try { await signIn(values) }
        catch (e) { setGeneralError('Usuario o Contrase;a invalidos') }
    }

    const formik = useFormik<SignInParams>({
        initialValues,
        validate,
        onSubmit
    });

    const setUsername = (v: string) => formik.setFieldValue('username', v);
    const setPassword = (v: string) => formik.setFieldValue('password', v);

    return {
        isSubmitting: formik.isSubmitting,
        values: formik.values,
        handlers: {
            submit: formik.handleSubmit,
            setUsername,
            setPassword
        },
        errors: {
            ...formik.errors,
            general: generalError
        }
    }
}

export default useSignInForm;
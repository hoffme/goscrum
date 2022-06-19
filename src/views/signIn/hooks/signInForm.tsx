import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';

import {SignInParams} from "../../../services/auth";

import useAuth from "../../../hooks/auth";

const initialValues: SignInParams = {
    username: '',
    password: ''
};

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(1, 'nombre de usuario demasiado corto')
        .required('Este campo es requerido'),
    password: Yup.string()
        .min(4, 'contrase;a demasiado corta')
        .required('Este campo es requerido'),
});

const useSignInForm = () => {
    const [generalError, setGeneralError] = useState<string | undefined>(undefined);
    const { signIn } = useAuth();

    const onSubmit = async (values: SignInParams) => {
        setGeneralError(undefined);

        try { await signIn(values) }
        catch (e) { setGeneralError('Usuario o Contrase;a invalidos') }
    }

    const formik = useFormik<SignInParams>({
        initialValues,
        validationSchema,
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
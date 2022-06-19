import {useState} from "react";
import {useFormik} from "formik";
import { v4 as uuidV4 } from 'uuid';
import * as Yup from "yup";

import {SignUpParams} from "../../../services/auth";

import useAuth from "../../../hooks/auth";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(1, 'nombre de usuario demasiado corto')
        .required('Este campo es requerido'),
    password: Yup.string()
        .min(4, 'contrase;a demasiado corta')
        .required('Este campo es requerido'),
    email: Yup.string()
        .email('tipo invalido')
        .required('Este campo es requerido'),
    teamID: Yup.string()
        .min(1, 'id del equipo demasiado corto')
        .required('Este campo es requerido'),
    role: Yup.string()
        .required('Este campo es requerido'),
    continent: Yup.string()
        .required('Este campo es requerido'),
    region: Yup.string()
        .required('Este campo es requerido'),
});

const useSignUpForm = () => {
    const { signUp } = useAuth();

    const [generalError, setGeneralError] = useState<string | undefined>(undefined);
    const [haveTeam, setHaveTeam] = useState(false);

    const initialValues: SignUpParams = {
        username: '',
        password: '',
        email: '',
        teamID: uuidV4(),
        role: '',
        continent: '',
        region: ''
    };

    const onSubmit = async (values: SignUpParams) => {
        setGeneralError(undefined);

        try { await signUp(values) }
        catch (e) { setGeneralError('Usuario o Contrase;a invalidos') }
    }

    const formik = useFormik<SignUpParams>({
        initialValues,
        validationSchema,
        onSubmit
    });

    const setUsername = (v: string) => formik.setFieldValue('username', v);
    const setPassword = (v: string) => formik.setFieldValue('password', v);
    const setEmail = (v: string) => formik.setFieldValue('email', v);
    const setTeamId = (v: string) => formik.setFieldValue('teamID', v);
    const setRole = (v: string) => formik.setFieldValue('role', v);
    const setContinent = (v: string) => formik.setFieldValue('continent', v);
    const setRegion = (v: string) => formik.setFieldValue('region', v);
    const setHaveTeamID = (v: boolean) => {
        formik.setFieldValue('teamID', v ? '' : uuidV4());
        setHaveTeam(v);
    }

    return {
        isSubmitting: formik.isSubmitting,
        values: {
            ...formik.values,
            haveTeamID: haveTeam
        },
        handlers: {
            submit: formik.handleSubmit,
            setUsername,
            setPassword,
            setEmail,
            setHaveTeamID,
            setTeamId,
            setRole,
            setContinent,
            setRegion
        },
        errors: {
            ...formik.errors,
            general: generalError
        },
    }
}

export default useSignUpForm;
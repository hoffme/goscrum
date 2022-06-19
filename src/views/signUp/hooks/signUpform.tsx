import {useState} from "react";
import {FormikErrors, useFormik} from "formik";
import { v4 as uuidV4 } from 'uuid';

import {SignUpParams} from "../../../services/auth";

import useAuth from "../../../hooks/auth";

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

    const validate = (value: SignUpParams) => {
        const errors: FormikErrors<SignUpParams> = {};

        if (!value.username || value.username.length === 0) {
            errors.username = 'El email es requerido';
        }
        if (!value.password || value.password.length === 0) {
            errors.password = 'El password es requerido';
        }

        return errors;
    }

    const onSubmit = async (values: SignUpParams) => {
        setGeneralError(undefined);

        try { await signUp(values) }
        catch (e) { setGeneralError('Usuario o Contrase;a invalidos') }
    }

    const formik = useFormik<SignUpParams>({
        initialValues,
        validate,
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
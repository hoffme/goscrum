import {useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import * as Yup from "yup";

import {fetchTasks, selectFilterType} from "../../../redux/features/tasks";
import useAppDispatch from "../../../redux/hooks/dispatch";

import TaskService, {TaskFields} from "../../../services/task";

const initialValues: TaskFields = {
    title: '',
    importance: '',
    status: '',
    description: ''
};

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, 'nombre de usuario demasiado corto')
        .required('Este campo es requerido'),
    importance: Yup.string()
        .required('Este campo es requerido'),
    status: Yup.string()
        .required('Este campo es requerido'),
    description: Yup.string()
        .required('Este campo es requerido'),
});

const useCreateTaskForm = () => {
    const [generalError, setGeneralError] = useState<string | undefined>(undefined);
    const filterType = useSelector(selectFilterType);

    const dispatch = useAppDispatch();

    const onSubmit = async (values: TaskFields) => {
        setGeneralError(undefined);

        try {
            await TaskService.Create(values);
        }
        catch (e) {
            setGeneralError(e instanceof Error ? e.message : 'Error desconocido')
        }

        dispatch(fetchTasks(filterType === 'me'));
    }

    const formik = useFormik<TaskFields>({
        initialValues,
        validationSchema,
        onSubmit
    });

    const setTitle = (v: string) => formik.setFieldValue('title', v);
    const setImportance = (v: string) => formik.setFieldValue('importance', v);
    const setStatus = (v: string) => formik.setFieldValue('status', v);
    const setDescription = (v: string) => formik.setFieldValue('description', v);

    return {
        isSubmitting: formik.isSubmitting,
        values: { ...formik.values },
        handlers: {
            submit: formik.handleSubmit,
            setTitle,
            setImportance,
            setStatus,
            setDescription
        },
        errors: {
            ...formik.errors,
            general: generalError
        },
    }
}

export default useCreateTaskForm;
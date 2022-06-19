import {useState} from "react";
import {FormikErrors, useFormik} from "formik";
import {useSelector} from "react-redux";

import {fetchTasks, selectFilterType} from "../../../redux/features/tasks";
import useAppDispatch from "../../../redux/hooks/dispatch";

import TaskService, {TaskFields} from "../../../services/task";

const useCreateTaskForm = () => {
    const [generalError, setGeneralError] = useState<string | undefined>(undefined);
    const filterType = useSelector(selectFilterType);

    const dispatch = useAppDispatch();

    const initialValues: TaskFields = {
        title: '',
        importance: '',
        status: '',
        description: ''
    };

    const validate = (value: TaskFields) => {
        const errors: FormikErrors<TaskFields> = {};

        if (!value.title) errors.title = 'El titulo no puede estar vacio';

        return errors;
    }

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
        validate,
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
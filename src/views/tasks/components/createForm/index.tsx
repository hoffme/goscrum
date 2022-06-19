import {useSelector} from "react-redux";

import {selectOptions} from "../../../../redux/features/tasks";
import useCreateTaskForm from "../../hooks/createTraskForm";

import {InputField, SelectField, TextAreaField} from "../../../../components/fields";
import {PrimaryButton} from "../../../../components/buttons";

import { FormStyle } from "./style";

interface Props {
    className?: string
}

const CreateTaskForm = (props: Props) => {
    const options = useSelector(selectOptions);
    const form = useCreateTaskForm();

    return <FormStyle onSubmit={form.handlers.submit} className={props.className}>
        <h2>Crear Tarea</h2>
        <InputField
            type={'text'}
            title={'Titulo'}
            value={form.values.title}
            onValue={form.handlers.setTitle}
            error={form.errors.title}
            className={'title'}
        />
        <SelectField
            title={'Estado'}
            value={form.values.status}
            onValue={form.handlers.setStatus}
            error={form.errors.status}
            className={'state'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option disabled value={''}>No Seleccionado</option>
            }
            {
                options.data?.status.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
        <SelectField
            title={'Prioridad'}
            value={form.values.importance}
            onValue={form.handlers.setImportance}
            error={form.errors.importance}
            className={'priority'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option disabled value={''}>No Seleccionado</option>
            }
            {
                options.data?.importance.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
        <TextAreaField
            title={'Descripcion'}
            value={form.values.description}
            onValue={form.handlers.setDescription}
            error={form.errors.description}
            className={'description'}
        />
        <PrimaryButton type={'submit'} className={'submitButton'}>
            { form.isSubmitting ? 'Guardando ...' : 'Guardar' }
        </PrimaryButton>
    </FormStyle>
}

export default CreateTaskForm;
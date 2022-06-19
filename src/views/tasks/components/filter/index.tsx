import {useSelector} from "react-redux";

import useAppDispatch from "../../../../redux/hooks/dispatch";

import { TaskFilter } from "../../../../redux/features/tasks/types";
import {selectFilter, selectOptions, setFilter} from "../../../../redux/features/tasks";

import {InputField, SelectField} from "../../../../components/fields";

import { ContainerFilterStyle } from "./style";

interface Props {
    className?: string
}

const TasksFilter = (props: Props) => {
    const options = useSelector(selectOptions);
    const filter = useSelector(selectFilter);

    const dispatch = useAppDispatch();

    const updateFilterHandler = (key: keyof TaskFilter, value: any) => {
        const nextFilter: TaskFilter = { ...filter, [key]: value };
        dispatch(setFilter(nextFilter));
    }

    return <ContainerFilterStyle className={props.className}>
        <SelectField
            title={'Filtrar Tareas'}
            value={filter.type}
            onValue={v => updateFilterHandler('type', v)}
            className={'type'}
        >
            <option value={'all'}>Todas las Tareas</option>
            <option value={'me'}>Mis Tareas</option>
        </SelectField>
        <InputField
            title={'Buscar por texto'}
            value={filter.query}
            onValue={v => updateFilterHandler('query', v)}
        />
        <SelectField
            title={'Prioridad'}
            value={filter.priority}
            onValue={v => updateFilterHandler('priority', v)}
            className={'priority'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option value={''}>Todas</option>
            }
            {
                options.data?.importance.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
    </ContainerFilterStyle>
}

export default TasksFilter;
export type {
    TaskFilter
}
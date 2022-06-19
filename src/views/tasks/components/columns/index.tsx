import {useSelector} from "react-redux";

import {selectFilter, selectOptions, selectTasksList} from "../../../../redux/features/tasks";

import TaskCardColumn from "../column";

import {ContainerStyle} from "./style";

interface Props {
    className?: string
}

const StatusColumns = (props: Props) => {
    const options = useSelector(selectOptions);
    const filter = useSelector(selectFilter);
    const allTasks = useSelector(selectTasksList);

    const loading = options.loading || allTasks.loading;

    const tasks = allTasks.data.filter(task => {
        if (filter.query && !task.title.toLowerCase().includes(filter.query.toLowerCase())) return false;
        return !(filter.priority && task.importance !== filter.priority);
    });

    return <ContainerStyle className={props.className}>
        { loading && <label>Cargando ...</label> }
        {
            !loading && options.data?.status.map((status, key) => (
                <TaskCardColumn
                    title={status}
                    data={tasks.filter(task => task.status === status)}
                    key={key}
                />
            ))
        }
    </ContainerStyle>
}

export default StatusColumns;
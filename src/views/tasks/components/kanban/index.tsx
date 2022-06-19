import {useEffect} from "react";
import {useSelector} from "react-redux";

import useAppDispatch from "../../../../redux/hooks/dispatch";
import {fetchTasks, selectFilterType} from "../../../../redux/features/tasks";

import TasksFilter from "../filter";
import StatusColumns from "../columns";

import {KanbanStyle} from "./style";

interface Props {
    className?: string
}

const Kanban = (props: Props) => {
    const dispatch = useAppDispatch();
    const filterType = useSelector(selectFilterType);

    useEffect(() => {
        dispatch(fetchTasks(filterType === 'me'))
    }, [dispatch, filterType]);

    return <KanbanStyle className={props.className}>
        <h2>Tareas</h2>
        <TasksFilter className={'filter'} />
        <StatusColumns className={'columns'} />
    </KanbanStyle>
}

export default Kanban;
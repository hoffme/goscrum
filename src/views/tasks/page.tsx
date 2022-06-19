import {useEffect} from "react";

import useAppDispatch from "../../redux/hooks/dispatch";
import { fetchOptions } from "../../redux/features/tasks";

import DashBoardLayout from "../../components/layouts/dashboard";
import CreateTaskForm from "./components/createForm";

import Kanban from "./components/kanban";

import { ContainerStyle } from "./style";

const TasksPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => { dispatch(fetchOptions()) }, [dispatch])

    return <DashBoardLayout>
        <ContainerStyle>
            <CreateTaskForm className={'left'} />
            <Kanban className={'right'} />
        </ContainerStyle>
    </DashBoardLayout>
}

export default TasksPage;
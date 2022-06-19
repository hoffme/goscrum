import {useSelector} from "react-redux";

import {fetchTasks, selectFilterType, selectOptions} from "../../../redux/features/tasks";
import useAppDispatch from "../../../redux/hooks/dispatch";

import TaskService, {Task, TaskFields} from "../../../services/task";

const useTask = (task: Task) => {
    const options = useSelector(selectOptions);
    const filterType = useSelector(selectFilterType);

    const dispatch = useAppDispatch();

    const data: TaskFields = {
        title: task.title,
        status: task.status,
        importance: task.importance,
        description: task.description
    }

    const update = (update: TaskFields) => {
        TaskService.Update({ ...update, id: task._id })
            .then(() => dispatch(fetchTasks(filterType === 'me')))
            .catch(console.error);
    }

    const nextImportance = () => {
        const allImportance = options.data?.importance || [];
        const index = allImportance.indexOf(data.importance);
        const nextIndex = (index + 1) < allImportance.length ? index + 1 : 0;
        const importance = allImportance[nextIndex];

        update({ ...data, importance });
    }

    const nextStatus = () => {
        const allStatus = options.data?.status || [];
        const index = allStatus.indexOf(data.status);
        const nextIndex = (index + 1) < allStatus.length ? index + 1 : 0;
        const status = allStatus[nextIndex];

        update({ ...data, status });
    }

    const backStatus = () => {
        const allStatus = options.data?.status || [];
        const index = allStatus.indexOf(data.status);
        const nextIndex = (index - 1) < 0 ? (allStatus.length - 1) : (index - 1);
        const status = allStatus[nextIndex];

        update({ ...data, status });
    }

    const remove = () => {
        TaskService.Delete(task._id)
            .then(() => dispatch(fetchTasks(filterType === 'me')))
            .catch(console.error);
    }

    return {
        nextImportance,
        nextStatus,
        backStatus,
        remove
    };
}

export default useTask;
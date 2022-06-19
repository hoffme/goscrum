import {createAsyncThunk} from "@reduxjs/toolkit";

import TaskService from "../../../services/task";

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (onlyMyTasks?: boolean) => {
    return await (onlyMyTasks ? TaskService.GetMeTasks() : TaskService.GetAllTasks());
});

const fetchOptions = createAsyncThunk('tasks/fetchOptions', async () => {
    return await TaskService.Data();
});

export {
    fetchTasks,
    fetchOptions
}
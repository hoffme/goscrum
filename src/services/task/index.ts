import TaskService from "./service";
import {
    Task,
    TaskFields,
    TaskData,
    FetchCreateTaskRequestBody,
    FetchUpdateTaskRequestBody,
    FetchCreateTaskResponseBody,
    FetchTaskDataResponseBody,
    TaskUpdateParams,
} from './types';

export default TaskService;
export type {
    Task,
    TaskFields,
    TaskUpdateParams,
    TaskData,
    FetchCreateTaskRequestBody,
    FetchUpdateTaskRequestBody,
    FetchCreateTaskResponseBody,
    FetchTaskDataResponseBody,
}
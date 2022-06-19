import APIService from "../service";
import type {
    Task,
    TaskFields,
    TaskData,
    FetchCreateTaskRequestBody,
    FetchUpdateTaskRequestBody,
    FetchCreateTaskResponseBody,
    FetchTaskDataResponseBody, TaskUpdateParams,
} from './types';

class TaskService extends APIService {

    public static async Data(): Promise<TaskData> {
        const response = await this.FetchJSON<void, FetchTaskDataResponseBody>({
            uri: '/task/data',
            method: 'GET'
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return response.result;
    }

    public static async GetAllTasks(): Promise<Task[]> {
        const response = await this.FetchJSON<void, Task[]>({
            uri: '/task',
            method: 'GET'
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return response.result;
    }

    public static async GetMeTasks(): Promise<Task[]> {
        const response = await this.FetchJSON<void, Task[]>({
            uri: '/task/me',
            method: 'GET'
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return response.result;
    }

    public static async GetOneTasks(id: string): Promise<Task> {
        const response = await this.FetchJSON<void, Task>({
            uri: `/task/${id}`,
            method: 'GET'
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return response.result;
    }

    public static async Create(params: TaskFields): Promise<Task> {
        const response = await this.FetchJSON<FetchCreateTaskRequestBody, FetchCreateTaskResponseBody>({
            uri: '/task',
            method: 'POST',
            body: { task: params }
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return response.result.task;
    }

    public static async Update(params: TaskUpdateParams): Promise<void> {
        const response = await this.FetchJSON<FetchUpdateTaskRequestBody, void>({
            uri: `/task/${params.id}`,
            method: 'PATCH',
            body: {
                task: {
                    title: params.title,
                    importance: params.importance,
                    status: params.status,
                    description: params.description
                }
            }
        });

        if (response.message !== 'tarea modificada') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');
    }

    public static async Delete(id: string): Promise<void> {
        const response = await this.FetchJSON({
            uri: `/task/${id}`,
            method: 'DELETE'
        });

        if (response.message !== 'tarea eliminada') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');
    }

}

export default TaskService;
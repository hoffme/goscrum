import {Task, TaskData} from "../../../services/task";

interface TaskFilter {
    type: 'me' | 'all'
    query: string
    priority: string
}

interface TasksState {
    options: {
        loading: boolean
        data: TaskData
        error: unknown | undefined
    },
    filter: TaskFilter
    list: {
        loading: boolean
        data: Task[]
        error: unknown | undefined
    }
}

export type {
    TaskFilter,
    TasksState
}
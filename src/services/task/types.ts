interface Task {
    _id: string
    title: string
    importance: string
    status: string
    description: string
    createdAt: number
    modifiedAt: number
    deletedAt: string
    deleted: boolean
    teamId: string
    user: {
        email: string
        role: string
        userName: string
        teamId: string
        userId: string
        iat: number
        exp: number
    }
}

interface TaskFields {
    title: string
    importance: string
    status: string
    description: string
}

interface FetchCreateTaskRequestBody {
    task: TaskFields
}

interface FetchUpdateTaskRequestBody {
    task: TaskFields
}

interface FetchCreateTaskResponseBody {
    acknowledged: boolean
    insertedId: string
    task: Task
}

interface FetchTaskDataResponseBody {
    status: string[]
    importance: string[]
}

interface TaskData {
    status: string[]
    importance: string[]
}

export type {
    Task,
    TaskFields,
    TaskData,
    FetchCreateTaskRequestBody,
    FetchUpdateTaskRequestBody,
    FetchCreateTaskResponseBody,
    FetchTaskDataResponseBody,
}
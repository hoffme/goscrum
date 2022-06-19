import {TasksState} from "./types";

const initialState: TasksState = {
    options: {
        loading: false,
        data: {
            status: [],
            importance: []
        },
        error: undefined
    },
    filter: {
        type: 'all',
        query: '',
        priority: ''
    },
    list: {
        loading: false,
        data: [],
        error: undefined
    }
}

export default initialState;
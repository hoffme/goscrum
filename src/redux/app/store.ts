import {configureStore} from "@reduxjs/toolkit";

import { tasksReducer } from "../features/tasks";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type {
    RootState,
    AppDispatch
}
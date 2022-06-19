import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TaskFilter} from "./types";
import initialState from "./state";
import {fetchOptions, fetchTasks } from "./thunks";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<TaskFilter>) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.list.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.list.loading = false;
                state.list.data = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.list.loading = false;
                state.list.error = action.payload;
            })
            .addCase(fetchOptions.pending, (state) => {
                state.options.loading = true;
            })
            .addCase(fetchOptions.fulfilled, (state, action) => {
                state.options.loading = false;
                state.options.data = action.payload;
            })
            .addCase(fetchOptions.rejected, (state, action) => {
                state.options.loading = false;
                state.options.error = action.payload;
            })
    }
});

export default tasksSlice;
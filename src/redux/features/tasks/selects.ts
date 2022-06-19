import {RootState} from "../../app/store";

const selectTasksList = (state: RootState) => ({
    error: state.tasks.list.error,
    loading: state.tasks.list.loading,
    data: state.tasks.list.data
});

const selectOptions = (state: RootState) => ({
    error: state.tasks.options.error,
    loading: state.tasks.options.loading,
    data: state.tasks.options.data
});

const selectFilter = (state: RootState) => state.tasks.filter;

const selectFilterType = (state: RootState) => state.tasks.filter.type;

export {
    selectTasksList,
    selectOptions,
    selectFilter,
    selectFilterType
}
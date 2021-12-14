import { CHANGE_FILTERED_NAME, SET_TABLE_DATA } from "../../utils/constants/table";

export const changeFilteredName = (tableKey, filteredName) => ({
    type: CHANGE_FILTERED_NAME,
    tableKey,
    filteredName
});

export const setTableData = (tableKey, list) => ({
    type: SET_TABLE_DATA,
    tableKey,
    list
});
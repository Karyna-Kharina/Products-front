import { PRODUCTS_KEY, USERS_KEY } from "../../utils/constants/tableKeys";
import { CHANGE_FILTERED_NAME, SET_TABLE_DATA } from "../../utils/constants/table";

const initialTable = {
    list: [],
    filteredName: ""
};

const initialState = {
    [PRODUCTS_KEY]: { ...initialTable },
    [USERS_KEY]: { ...initialTable }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA: {
            const { tableKey, list } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    list
                }
            };
        }
        case CHANGE_FILTERED_NAME: {
            const { tableKey, filteredName } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    filteredName
                }
            };
        }
        default:
            return state;
    }
}
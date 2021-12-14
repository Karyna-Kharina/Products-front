import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setTableData } from "../../actions/table";
import { setMessageInfo } from "../../actions/info";
import { USERS_API } from "../../utils/links/back";
import { USERS_KEY } from "../../utils/constants/tableKeys";
import { GET_USERS_SAGA } from "../../utils/constants/usersSaga";

export function* getUserListSaga() {
    try {
        const result = yield call(
            axios.get,
            USERS_API
        );

        yield put(setTableData(USERS_KEY, result.data));
    } catch (e) {
        yield put(setMessageInfo({
            type: "warning",
            text: "User list is empty!"
        }));
    }
}

export function* watchGetUserListSaga() {
    yield takeEvery(GET_USERS_SAGA, getUserListSaga);
}
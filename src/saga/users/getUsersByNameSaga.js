import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setUsers } from "../../actions/users";
import { setMessageInfo } from "../../actions/info";
import { USERS_API_SEARCH } from "../../utils/links/back";
import { GET_USERS_BY_NAME_SAGA } from "../../utils/constants/usersSaga";

export function* getUsersByNameSaga() {
    try {
        const { filteredName } = yield select(state => state.users);
        const result = yield call(
            axios.get,
            USERS_API_SEARCH,
            {
                params: {
                    name: filteredName
                }
            }
        );

        yield put(setUsers(result.data));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchGetUsersByNameSaga() {
    yield takeEvery(GET_USERS_BY_NAME_SAGA, getUsersByNameSaga);
}
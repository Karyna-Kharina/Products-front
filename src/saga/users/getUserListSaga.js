import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setUserList } from "../../actions/users";
import { USERS_API } from "../../additionalData/links/back";
import { GET_USERS_SAGA } from "../../additionalData/constants/usersSaga";
import { setMessageInfo } from "../../actions/info";

export function* getUserListSaga() {
    try {
        const result = yield call(
            axios.get,
            USERS_API
        );

        yield put(setUserList(result.data));
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
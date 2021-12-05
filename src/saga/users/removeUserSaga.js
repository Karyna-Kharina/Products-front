import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { USERS_API } from "../../additionalData/links/back";
import { GET_USERS_SAGA, REMOVE_USER_SAGA } from "../../additionalData/constants/usersSaga";

export function* removeUserSaga(action) {
    try {
        const { id } = action;
        yield call(
            axios.delete,
            USERS_API + "/" + id
        );

        yield put({ type: GET_USERS_SAGA });
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchRemoveUserSaga() {
    yield takeEvery(REMOVE_USER_SAGA, removeUserSaga);
}
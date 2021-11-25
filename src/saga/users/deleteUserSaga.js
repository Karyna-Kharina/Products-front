import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { USERS_API } from "../../additionalData/links/back";
import { DELETE_USER_SAGA, GET_USERS_SAGA } from "../../additionalData/constants/usersSaga";

export function* deleteUserSaga(action) {
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

export function* watchDeleteUserSaga() {
    yield takeEvery(DELETE_USER_SAGA, deleteUserSaga);
}
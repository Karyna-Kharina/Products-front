import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { clearUserForm } from "../../actions/userForm";
import { USERS_API } from "../../additionalData/links/back";
import { SAVE_USER_SAGA } from "../../additionalData/constants/usersSaga";

export function* saveUserSaga() {
    try {
        const { user } = yield select(state => state.userForm);
        let result;

        if (user.id) {
            result = yield call(
                axios.put,
                USERS_API,
                user
            );
        } else {
            result = yield call(
                axios.post,
                USERS_API,
                user
            );
        }

        yield put(setMessageInfo({ type: "success", text: result.data.message }));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put(clearUserForm);
}

export function* watchSaveUserSaga() {
    yield takeEvery(SAVE_USER_SAGA, saveUserSaga);
}
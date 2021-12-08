import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { USERS_API } from "../../additionalData/links/back";
import { CLEAR_USER_FORM } from "../../additionalData/constants/users";
import { SAVE_USER_SAGA } from "../../additionalData/constants/usersSaga";
import { setMessageInfo } from "../../actions/info";

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

    yield put({ type: CLEAR_USER_FORM });
}

export function* watchSaveUserSaga() {
    yield takeEvery(SAVE_USER_SAGA, saveUserSaga);
}
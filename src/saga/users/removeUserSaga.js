import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { getUsersSaga } from "../../actions/usersSaga";
import { USERS_API } from "../../utils/links/back";
import { REMOVE_USER_SAGA } from "../../utils/constants/usersSaga";

export function* removeUserSaga(action) {
    try {
        yield call(
            axios.delete,
            USERS_API + "/" + action.id
        );

        yield put(getUsersSaga());
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchRemoveUserSaga() {
    yield takeEvery(REMOVE_USER_SAGA, removeUserSaga);
}
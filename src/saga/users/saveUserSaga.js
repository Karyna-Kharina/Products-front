import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {USERS_API} from "../../additionalData/links/back";
import {CLEAR_USER_FORM, SAVE_USER_SAGA} from "../../additionalData/constants/user";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* saveUserSaga() {

    try {
        const {user} = yield select(state => state.userForm);

        yield call(
            axios.post,
            USERS_API,
            user
        );

        yield put({type: CLEAR_USER_FORM});

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Incorrect value!"
            }
        ));
    }
}

export function* watchSaveUserSaga() {
    yield takeEvery(SAVE_USER_SAGA, saveUserSaga);
}
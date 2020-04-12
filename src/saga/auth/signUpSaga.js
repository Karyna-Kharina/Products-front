import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setCurrentUser} from "../../actions/users/profile";
import {setMessageInfo} from "../../actions/info/infoAction";
import {USERS_API} from "../../additionalData/links/back";
import {CLEAR_SIGN_UP, SIGN_UP_SAGA} from "../../additionalData/constants/auth";

export function* signUpSaga() {

    try {
        const {firstName, lastName, date, email, phoneNumber, photo, password} =
            yield select(state => state.signUp);

        const result = yield call(
            axios.post,
            USERS_API,
            {firstName, lastName, date, email, phoneNumber, photo, password}
        );

        yield put(setCurrentUser(result.data));

    } catch (e) {

        yield put(setMessageInfo(
            {
                type: "error",
                text: "This email already exists!"
            }
        ));
    }

    yield put({type: CLEAR_SIGN_UP});
}

export function* watchSignUpSaga() {
    yield takeEvery(SIGN_UP_SAGA, signUpSaga);
}
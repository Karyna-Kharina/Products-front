import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setCurrentUser} from "../../actions/users/profile";
import {USERS_API} from "../../additionalData/links/back";
import {CLEAR_SIGN_IN, LOG_IN_SAGA} from "../../additionalData/constants/auth";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* signInSaga() {

    try {
        const {email, password} = yield select(state => state.signIn);

        const result = yield call(
            axios.get,
            USERS_API + "/profile",
            {
                params: {
                    email,
                    password
                }
            }
        );
        yield put(setMessageInfo({type: "success", text: "Login OK"}));
        yield put(setCurrentUser(result.data));

    } catch {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Your login or password are not valid!"
            }
        ));
    }

    yield put({type: CLEAR_SIGN_IN});
}

export function* watchSignInSaga() {
    yield takeEvery(LOG_IN_SAGA, signInSaga);
}
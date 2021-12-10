import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setCurrentUser } from "../../actions/profile";
import { setMessageInfo } from "../../actions/info";
import { clearSignIn } from "../../actions/auth/signIn";
import { SIGN_IN_API } from "../../additionalData/links/back";
import { SIGN_IN_SAGA } from "../../additionalData/constants/authSaga";

export function* signInSaga() {
    try {
        const { email, password } = yield select(state => state.signIn);
        const result = yield call(
            axios.get,
            SIGN_IN_API,
            {
                params: {
                    email,
                    password
                }
            }
        );

        if (result.data) {
            yield put(setMessageInfo({ type: "success", text: "Login OK" }));
            yield put(setCurrentUser(result.data));
        } else {
            yield put(setMessageInfo({
                type: "error",
                text: "Your login or password are not valid!"
            }));
        }
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put(clearSignIn);
}

export function* watchSignInSaga() {
    yield takeEvery(SIGN_IN_SAGA, signInSaga);
}
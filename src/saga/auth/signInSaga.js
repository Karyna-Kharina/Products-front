import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setCurrentUser } from "../../actions/profile";
import { setMessageInfo } from "../../actions/info";
import { clearSignIn } from "../../actions/auth/signIn";
import { SIGN_IN_API } from "../../utils/links/back";
import { SIGN_IN_SAGA } from "../../utils/constants/authSaga";

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

        yield put(setMessageInfo({ type: "success", text: "Login OK" }));
        yield put(setCurrentUser(result.data));
    } catch (e) {
        yield put(setMessageInfo({
            type: "error",
            text: "You entered an incorrect username or password."
        }));
    }

    yield put(clearSignIn());
}

export function* watchSignInSaga() {
    yield takeEvery(SIGN_IN_SAGA, signInSaga);
}
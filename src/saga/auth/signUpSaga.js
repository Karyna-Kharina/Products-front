import axios from "axios";
import key from "weak-key";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setCurrentUser } from "../../actions/profile";
import { setMessageInfo } from "../../actions/info";
import { clearSignUp } from "../../actions/auth/signUp";
import { SIGN_UP_API } from "../../utils/links/back";
import { SIGN_UP_SAGA } from "../../utils/constants/authSaga";

export function* signUpSaga() {
    try {
        const user = yield select(state => state.signUp);
        const { firstName, lastName, birthday, email, phoneNumber, photo, password } = user;

        const result = yield call(
            axios.post,
            SIGN_UP_API,
            {
                id: key(user),
                firstName,
                lastName,
                birthday,
                email,
                phoneNumber,
                photo,
                password
            }
        );

        yield put(setCurrentUser(result.data));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put(clearSignUp());
}

export function* watchSignUpSaga() {
    yield takeEvery(SIGN_UP_SAGA, signUpSaga);
}
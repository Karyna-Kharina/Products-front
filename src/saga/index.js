import {all} from "redux-saga/effects";
import {watchSetNewsSaga} from "./setNewsSaga";
import {watchSignInSaga} from "./signInSaga";
import {watchSignUpSaga} from "./signUpSaga";

export default function* mainSaga() {

    yield all([
        watchSetNewsSaga(),
        watchSignInSaga(),
        watchSignUpSaga()
    ]);
}
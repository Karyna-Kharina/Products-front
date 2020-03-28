import {all} from "redux-saga/effects";
import {watchSetNewsSaga} from "./setNewsSaga";
import {watchAuthSaga} from "./authSaga";

export default function* mainSaga() {
    yield all([
        watchSetNewsSaga(),
        watchAuthSaga()
    ]);
}
import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {USERS_API} from "../../additionalData/links/back";
import {DELETE_USER_SAGA, GET_USERS_SAGA} from "../../additionalData/constants/user";

export function* deleteUserSaga(action) {

    const {id} = action.user;

    const result = yield call(
        axios.delete,
        USERS_API + "/" + id
    );

    console.log(result);
    yield put({type: GET_USERS_SAGA});
}

export function* watchDeleteUserSaga() {
    yield takeEvery(DELETE_USER_SAGA, deleteUserSaga);
}
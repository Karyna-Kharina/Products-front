import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setUserList} from "../../actions/users/userListAction";
import {USERS_API} from "../../additionalData/links/back";
import {GET_USERS_SAGA} from "../../additionalData/constants/user";

export function* getUserListSaga() {

    const result = yield call(
        axios.get,
        USERS_API
    );

    console.log(result);
    yield put(setUserList(result.data));
}

export function* watchGetUserListSaga() {
    yield takeEvery(GET_USERS_SAGA, getUserListSaga);
}
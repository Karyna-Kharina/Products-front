import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {GET_USERS_SAGA} from "../../constants";
import {USERS_API} from "../../links";
import {setUserList} from "../../actions/users/userListAction";

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
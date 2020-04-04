import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setUserList} from "../../actions/users/userListAction";
import {USERS_API} from "../../additionalData/links/back";
import {GET_USERS_SAGA} from "../../additionalData/constants/user";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* getUserListSaga() {

    try {
        const result = yield call(
            axios.get,
            USERS_API
        );

        yield put(setUserList(result.data));

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "warning",
                text: "User list is empty!"
            }
        ));
    }
}

export function* watchGetUserListSaga() {
    yield takeEvery(GET_USERS_SAGA, getUserListSaga);
}
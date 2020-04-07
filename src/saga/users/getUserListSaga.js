import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setTotalPages, setUserList} from "../../actions/users/userListAction";
import {USERS_API} from "../../additionalData/links/back";
import {GET_USERS_SAGA} from "../../additionalData/constants/user";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* getUserListSaga() {

    try {
        const {page, size, filteredName} = yield select(state => state.users);

        const result = yield call(
            axios.get,
            USERS_API,
            {
                params: {
                    page: page,
                    size: size,
                    filteredName: filteredName
                }
            }
        );

        console.log("RESULT: ");
        console.log(result);
        console.log("Total pages: " + result.data.totalPages);

        yield put(setUserList(result.data.content));
        yield put(setTotalPages(result.data.totalPages));

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
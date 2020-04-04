import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setUserList} from "../../actions/users/userListAction";
import {USERS_API_SEARCH} from "../../additionalData/links/back";
import {GET_USERS_BY_NAME_SAGA} from "../../additionalData/constants/user";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* getUsersByNameSaga() {

    try {
        const {filteredName} = yield select(state => state.users);

        const result = yield call(
            axios.get,
            USERS_API_SEARCH,
            {
                params: {
                    name: filteredName
                }
            }
        );

        yield put(setUserList(result.data));

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Incorrect value!"
            }
        ));
    }
}

export function* watchGetUsersByNameSaga() {
    yield takeEvery(GET_USERS_BY_NAME_SAGA, getUsersByNameSaga);
}
import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setUserList} from "../../actions/users/userListAction";
import {USERS_API} from "../../additionalData/links/back";
import {GET_USERS_BY_NAME_SAGA} from "../../additionalData/constants/user";

export function* getUsersByNameSaga() {

    try {
        const {filteredName} = yield select(state => state.users);

        const result = yield call(
            axios.get,
            USERS_API + "/search",
            {
                params: {
                    name: filteredName
                }
            }
        );

        console.log(result);
        yield put(setUserList(result.data))

    } catch (e) {
        console.error("Invalid query!");
    }
}

export function* watchGetUsersByNameSaga() {
    yield takeEvery(GET_USERS_BY_NAME_SAGA, getUsersByNameSaga);
}
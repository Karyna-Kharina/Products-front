import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {GET_USERS_BY_NAME_SAGA} from "../../constants";
import {USERS_API} from "../../links";
import {setUserList} from "../../actions/users/userListAction";

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
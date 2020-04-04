import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {USERS_API} from "../../additionalData/links/back";
import {DELETE_USER_SAGA, GET_USERS_SAGA} from "../../additionalData/constants/user";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* deleteUserSaga(action) {

    try {
        const {id} = action.user;

        yield call(
            axios.delete,
            USERS_API + "/" + id
        );

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Error occurred!"
            }
        ));
    }

    yield put({type: GET_USERS_SAGA});
}

export function* watchDeleteUserSaga() {
    yield takeEvery(DELETE_USER_SAGA, deleteUserSaga);
}
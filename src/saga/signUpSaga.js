import {put, select, takeEvery} from "redux-saga/effects";
import {CLEAR_SIGN_UP, SIGN_UP} from "../constants";
import userFixtures from "../userFixtures";
import {createUser} from "../actions/users/userFormAction";
import {setCurrentUser} from "../actions/users/profile";

export function* signUpSaga() {

    const {firstName, lastName, email, phoneNumber, password} =
        yield select(state => state.signUp);

    const userList = userFixtures;
    const user = userList.find((user) => user.email === email);

    if (!user) {

        const currentUser = {};
        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
        currentUser.email = email;
        currentUser.phoneNumber = phoneNumber;
        currentUser.password = password;

        yield put(createUser(currentUser));
        yield put(setCurrentUser(currentUser));
    }

    yield put({type: CLEAR_SIGN_UP});
}

export function* watchSignUpSaga() {
    yield takeEvery(SIGN_UP, signUpSaga);
}
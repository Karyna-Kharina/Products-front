import {put, select, takeEvery} from "redux-saga/effects";
import userFixtures from "../../additionalData/fixtures/userFixtures";
import {saveUser} from "../../actions/users/userFormAction";
import {setCurrentUser} from "../../actions/users/profile";
import {CLEAR_SIGN_UP, SIGN_UP_SAGA} from "../../additionalData/constants/auth";

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

        yield put(saveUser(currentUser));
        yield put(setCurrentUser(currentUser));
    }

    yield put({type: CLEAR_SIGN_UP});
}

export function* watchSignUpSaga() {
    yield takeEvery(SIGN_UP_SAGA, signUpSaga);
}
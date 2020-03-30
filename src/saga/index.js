import {all} from "redux-saga/effects";
import {watchSetNewsSaga} from "./news/setNewsSaga";
import {watchSignInSaga} from "./auth/signInSaga";
import {watchSignUpSaga} from "./auth/signUpSaga";
import {watchGetProductListSaga} from "./products/getProductListSaga";
import {watchSaveProductSaga} from "./products/saveProductSaga";
import {watchDeleteProductSaga} from "./products/deleteProductSaga";
import {watchGetUserListSaga} from "./users/getUserListSaga";
import {watchSaveUserSaga} from "./users/saveUserSaga";
import {watchDeleteUserSaga} from "./users/deleteUserSaga";
import {watchGetUsersByNameSaga} from "./users/getUsersByNameSaga";

export default function* mainSaga() {

    yield all([
        watchSetNewsSaga(),
        watchSignInSaga(),
        watchSignUpSaga(),
        watchGetProductListSaga(),
        // watchGetProductByIdSaga(),
        watchSaveProductSaga(),
        watchDeleteProductSaga(),
        watchGetUserListSaga(),
        watchSaveUserSaga(),
        watchDeleteUserSaga(),
        watchGetUsersByNameSaga(),

    ]);
}
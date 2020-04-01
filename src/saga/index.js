import {all} from "redux-saga/effects";
import {watchGetNewsSaga} from "./news/getNewsSaga";
import {watchSignInSaga} from "./auth/signInSaga";
import {watchSignUpSaga} from "./auth/signUpSaga";
import {watchGetProductListSaga} from "./products/getProductListSaga";
import {watchSaveProductSaga} from "./products/saveProductSaga";
import {watchDeleteProductSaga} from "./products/deleteProductSaga";
import {watchGetUserListSaga} from "./users/getUserListSaga";
import {watchSaveUserSaga} from "./users/saveUserSaga";
import {watchDeleteUserSaga} from "./users/deleteUserSaga";
import {watchGetUsersByNameSaga} from "./users/getUsersByNameSaga";
import {watchGetProductByNameSaga} from "./products/getProductByNameSaga";

export default function* mainSaga() {

    yield all([
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
        watchGetProductByNameSaga(),
        watchGetNewsSaga(),

    ]);
}
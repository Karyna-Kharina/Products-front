import { all } from "redux-saga/effects";
import { watchSignInSaga } from "./auth/signInSaga";
import { watchSignUpSaga } from "./auth/signUpSaga";
import { watchGetProductListSaga } from "./products/getProductListSaga";
import { watchSaveProductSaga } from "./products/saveProductSaga";
import { watchRemoveProductSaga } from "./products/removeProductSaga";
import { watchGetProductByNameSaga } from "./products/getProductByNameSaga";
import { watchRemoveUserSaga } from "./users/removeUserSaga";
import { watchGetUserListSaga } from "./users/getUserListSaga";
import { watchGetUsersByNameSaga } from "./users/getUsersByNameSaga";
import { watchSaveUserSaga } from "./users/saveUserSaga";

export default function* mainSaga() {
    yield all([
        watchSignInSaga(),
        watchSignUpSaga(),
        watchGetProductListSaga(),
        watchSaveProductSaga(),
        watchRemoveProductSaga(),
        watchGetProductByNameSaga(),
        watchRemoveUserSaga(),
        watchGetUserListSaga(),
        watchGetUsersByNameSaga(),
        watchSaveUserSaga()
    ]);
}
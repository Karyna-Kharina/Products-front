import { all } from "redux-saga/effects";
import { watchGetNewsSaga } from "./news/getNewsSaga";
import { watchSignInSaga } from "./auth/signInSaga";
import { watchSignUpSaga } from "./auth/signUpSaga";
import { watchGetProductListSaga } from "./products/getProductListSaga";
import { watchSaveProductSaga } from "./products/saveProductSaga";
import { watchDeleteProductSaga } from "./products/deleteProductSaga";
import { watchGetProductByNameSaga } from "./products/getProductByNameSaga";

export default function* mainSaga() {
    yield all([
        watchSignInSaga(),
        watchSignUpSaga(),
        watchGetProductListSaga(),
        watchSaveProductSaga(),
        watchDeleteProductSaga(),
        watchGetProductByNameSaga(),
        watchGetNewsSaga()
    ]);
}
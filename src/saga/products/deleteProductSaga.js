import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {DELETE_PRODUCT_SAGA, GET_PRODUCTS_SAGA} from "../../additionalData/constants/product";

export function* deleteProductSaga(action) {

    const {id} = action.product;

    const result = yield call(
        axios.delete,
        PRODUCTS_API + "/" + id
    );

    console.log(result);
    yield put({type: GET_PRODUCTS_SAGA});
}

export function* watchDeleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT_SAGA, deleteProductSaga);
}
import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {CLEAR_PRODUCT_FORM, SAVE_PRODUCT_SAGA} from "../../additionalData/constants/product";

export function* saveProductSaga() {

    const {product} = yield select(state => state.productForm);

    const result = yield call(
        axios.post,
        PRODUCTS_API,
        product
    );

    console.log(result);
    yield put({type: CLEAR_PRODUCT_FORM});
}

export function* watchSaveProductSaga() {
    yield takeEvery(SAVE_PRODUCT_SAGA, saveProductSaga);
}
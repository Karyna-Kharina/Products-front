import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setProductList} from "../../actions/products/productListAction";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {GET_PRODUCTS_SAGA} from "../../additionalData/constants/product";

export function* getProductListSaga() {

    const result = yield call(
        axios.get,
        PRODUCTS_API
    );

    console.log(result);

    yield put(setProductList(result.data));
}

export function* watchGetProductListSaga() {
    yield takeEvery(GET_PRODUCTS_SAGA, getProductListSaga);
}
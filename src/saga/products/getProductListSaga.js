import {call, takeEvery, put} from "redux-saga/effects";
import *  as axios from "axios";
import {GET_PRODUCTS_SAGA} from "../../constants";
import {PRODUCTS_API} from "../../links";
import {setProductList} from "../../actions/products/productListAction";

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
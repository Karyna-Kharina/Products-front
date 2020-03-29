import {call, takeEvery, put} from "redux-saga/effects";
import *  as axios from "axios";
import {DELETE_PRODUCT_SAGA, GET_PRODUCTS_SAGA} from "../../constants";
import {PRODUCTS_API} from "../../links";

export function* deleteProductSaga(action) {

    console.log("delete saga")
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
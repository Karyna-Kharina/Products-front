import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {DELETE_PRODUCT_SAGA, GET_PRODUCTS_SAGA} from "../../additionalData/constants/product";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* deleteProductSaga(action) {

    try {
        const {id} = action.product;

        yield call(
            axios.delete,
            PRODUCTS_API + "/" + id
        );

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Error occurred!"
            }
        ));
    }

    yield put({type: GET_PRODUCTS_SAGA});
}

export function* watchDeleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT_SAGA, deleteProductSaga);
}
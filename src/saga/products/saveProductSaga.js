import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {CLEAR_PRODUCT_FORM, SAVE_PRODUCT_SAGA} from "../../additionalData/constants/product";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* saveProductSaga() {

    try {
        const {product} = yield select(state => state.productForm);

        yield call(
            axios.post,
            PRODUCTS_API,
            product
        );

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Incorrect value!"
            }
        ));
    }

    yield put({type: CLEAR_PRODUCT_FORM});
}

export function* watchSaveProductSaga() {
    yield takeEvery(SAVE_PRODUCT_SAGA, saveProductSaga);
}
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { PRODUCTS_API } from "../../additionalData/links/back";
import { DELETE_PRODUCT_SAGA, GET_PRODUCTS_SAGA } from "../../additionalData/constants/productsSaga";

export function* deleteProductSaga(action) {
    try {
        const { id } = action;
        yield call(
            axios.delete,
            PRODUCTS_API + "/" + id
        );
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put({ type: GET_PRODUCTS_SAGA });
}

export function* watchDeleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT_SAGA, deleteProductSaga);
}
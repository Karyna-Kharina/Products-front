import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { PRODUCTS_API } from "../../additionalData/links/back";
import { CLEAR_PRODUCT_FORM } from "../../additionalData/constants/products";
import { SAVE_PRODUCT_SAGA } from "../../additionalData/constants/productsSaga";

export function* saveProductSaga() {
    try {
        const { product } = yield select(state => state.productForm);
        const { id, name, price, image } = product;

        const result = yield call(
            axios.post,
            PRODUCTS_API,
            { id, name, price, image }
        );

        yield put(setMessageInfo({ type: "success", text: result.data.message }));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put({ type: CLEAR_PRODUCT_FORM });
}

export function* watchSaveProductSaga() {
    yield takeEvery(SAVE_PRODUCT_SAGA, saveProductSaga);
}
import axios from "axios";
import key from "weak-key";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { clearProductForm } from "../../actions/productForm";
import { PRODUCTS_API } from "../../utils/links/back";
import { SAVE_PRODUCT_SAGA } from "../../utils/constants/productsSaga";

export function* saveProductSaga() {
    try {
        const { product } = yield select(state => state.productForm);
        let result;

        if (product.id) {
            result = yield call(
                axios.put,
                PRODUCTS_API,
                product
            );
        } else {
            product.id = key(product);

            result = yield call(
                axios.post,
                PRODUCTS_API,
                product
            );
        }

        yield put(setMessageInfo({ type: "success", text: result.data.message }));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put(clearProductForm());
}

export function* watchSaveProductSaga() {
    yield takeEvery(SAVE_PRODUCT_SAGA, saveProductSaga);
}
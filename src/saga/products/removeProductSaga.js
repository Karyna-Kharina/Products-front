import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { getProductsSaga } from "../../actions/productsSaga";
import { PRODUCTS_API } from "../../additionalData/links/back";
import { REMOVE_PRODUCT_SAGA } from "../../additionalData/constants/productsSaga";

export function* removeProductSaga(action) {
    try {
        yield call(
            axios.delete,
            PRODUCTS_API + "/" + action.id
        );
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }

    yield put(getProductsSaga);
}

export function* watchRemoveProductSaga() {
    yield takeEvery(REMOVE_PRODUCT_SAGA, removeProductSaga);
}
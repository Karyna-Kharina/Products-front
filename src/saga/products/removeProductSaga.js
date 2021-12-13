import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setMessageInfo } from "../../actions/info";
import { getProductsSaga } from "../../actions/productsSaga";
import { PRODUCTS_API } from "../../utils/links/back";
import { REMOVE_PRODUCT_SAGA } from "../../utils/constants/productsSaga";

export function* removeProductSaga(action) {
    try {
        yield call(
            axios.delete,
            PRODUCTS_API + "/" + action.id
        );

        yield put(getProductsSaga());
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchRemoveProductSaga() {
    yield takeEvery(REMOVE_PRODUCT_SAGA, removeProductSaga);
}
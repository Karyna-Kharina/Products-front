import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setProducts } from "../../actions/products";
import { setMessageInfo } from "../../actions/info";
import { GET_PRODUCTS_BY_NAME_SAGA } from "../../additionalData/constants/productsSaga";
import { PRODUCTS_API_SEARCH } from "../../additionalData/links/back";

export function* getProductByNameSaga() {
    try {
        const { filteredName } = yield select(state => state.products);
        const result = yield call(
            axios.get,
            PRODUCTS_API_SEARCH,
            {
                params: {
                    name: filteredName
                }
            }
        );

        yield put(setProducts(result.data));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchGetProductByNameSaga() {
    yield takeEvery(GET_PRODUCTS_BY_NAME_SAGA, getProductByNameSaga);
}
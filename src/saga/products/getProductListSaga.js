import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setTableData } from "../../actions/table";
import { setMessageInfo } from "../../actions/info";
import { PRODUCTS_API } from "../../utils/links/back";
import { PRODUCTS_KEY } from "../../utils/constants/tableKeys";
import { GET_PRODUCTS_SAGA } from "../../utils/constants/productsSaga";

export function* getProductListSaga() {
    try {
        const result = yield call(
            axios.get,
            PRODUCTS_API
        );

        yield put(setTableData(PRODUCTS_KEY, result.data));
    } catch (e) {
        yield put(setMessageInfo({
            type: "warning",
            text: "Product list is empty!"
        }));
    }
}

export function* watchGetProductListSaga() {
    yield takeEvery(GET_PRODUCTS_SAGA, getProductListSaga);
}
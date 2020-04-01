import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setProductList} from "../../actions/products/productListAction";
import {GET_PRODUCTS_BY_NAME_SAGA} from "../../additionalData/constants/product";
import {PRODUCTS_API_SEARCH} from "../../additionalData/links/back";

export function* getProductByNameSaga() {

    const {filteredName} = yield select(state => state.products);

    const result = yield call(
        axios.get,
        PRODUCTS_API_SEARCH,
        {
            params: {
                name: filteredName
            }
        }
    );

    console.log(result);
    yield put(setProductList(result.data));
}

export function* watchGetProductByNameSaga() {
    yield takeEvery(GET_PRODUCTS_BY_NAME_SAGA, getProductByNameSaga);
}
// import {call, select, takeEvery} from "redux-saga/effects";
// import *  as axios from "axios";
// import {GET_PRODUCT_BY_ID} from "../../constants";
// import {PRODUCTS_API} from "../../links";
//
// export function* getProductByIdSaga() {
//
//     const {id} = yield select(state => state.products.products);
//
//     const result = yield call(axios.get,
//         PRODUCTS_API + "/" + id
//     );
//
//     console.log(result);
// }
//
// export function* watchGetProductByIdSaga() {
//     yield takeEvery(GET_PRODUCT_BY_ID, getProductByIdSaga);
// }
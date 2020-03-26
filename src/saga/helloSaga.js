import {call, put, select, takeEvery} from "redux-saga/effects";
import * as axios from "axios";
import {SEARCH_NEWS_SAGA, SET_NEWS} from "../constants";

export function* hello() {

    const {country, pageSize} = yield select(state => state.news);

    const result = yield call(
        axios.get,
        'http://newsapi.org/v2/top-headlines',
        {
            params: {
                pageSize: pageSize,
                country: country.code.toLowerCase(),
                apiKey: 'fd868cb7d74b41d59cb8f6dc708c521c'
            }
        }
    );

    yield put({type: SET_NEWS, newsList: result.data.articles});
}

export function* watchHelloSaga() {
    yield takeEvery(SEARCH_NEWS_SAGA, hello);
}
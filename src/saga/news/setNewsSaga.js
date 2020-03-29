import {call, put, select, takeEvery} from "redux-saga/effects";
import * as axios from "axios";
import {SEARCH_NEWS_SAGA} from "../../constants";
import {setNews} from "../../actions/news/newsAction";

export function* setNewsSaga() {

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

    yield put(setNews(result.data.articles));
}

export function* watchSetNewsSaga() {
    yield takeEvery(SEARCH_NEWS_SAGA, setNewsSaga);
}
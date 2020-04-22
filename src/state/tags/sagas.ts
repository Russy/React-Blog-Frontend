import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* getTags(action) {
    try {
        const tags = yield call(Api.admin.getTags);
        yield put(actions.GET_TAGS_SUCCESS(tags));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* tagsSaga() {
    yield takeLatest('GET_TAGS_REQUEST', getTags);
}
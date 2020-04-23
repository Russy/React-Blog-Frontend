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

function* postTag(action) {
    try {
        const tags = yield call(Api.admin.postTag, action.payload);
        yield put(actions.POST_TAGS_SUCCESS(tags.data));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* deleteTag(action) {
    try {
        const tags = yield call(Api.admin.deleteTag, action.payload);
        yield put(actions.DELETE_TAG_SUCCESS(action.payload));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* tagsSaga() {
    yield takeLatest('GET_TAGS_REQUEST', getTags);
    yield takeLatest('POST_TAGS_REQUEST', postTag);
    yield takeLatest('DELETE_TAG_REQUEST', deleteTag);
}
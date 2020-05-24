import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';
import { fetchPages } from '../pages/sagas';

export function* fetchOptions(action) {
    try {
        if (!action.payload) {
            yield fetchPages();
        }
        const options = yield call(Api.getOptions);
        yield put(actions.GET_OPTIONS_SUCCESS(options));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* postOptions(action) {
    try {
        yield call(Api.admin.postOptions, action.payload);
        yield put(actions.POST_OPTIONS_SUCCESS());
    } catch (e) {
        yield put({type: "POST_OPTIONS_FAILED", message: e.message});
    }
}

export function* settingsSaga() {
    yield takeLatest('GET_OPTIONS_REQUEST', fetchOptions);
    yield takeLatest('POST_OPTIONS_REQUEST', postOptions);
}
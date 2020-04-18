import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* login(action) {
    try {
        const response = yield call(Api.login, action.payload);
        // console.log(response);
        //yield put(actions.GET_POST_SUCCESS(post));
    } catch(e) {
        yield put(actions.GET_LOGIN_FAILED(e.message));
    }

}

export function* loginSaga() {
    yield takeLatest('GET_LOGIN_REQUEST', login);
}
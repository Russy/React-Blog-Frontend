import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* fetchPosts(action) {
    try {
        const posts = yield call(Api.getPosts, action.payload);
        yield put(actions.GET_POSTS_SUCCESS(posts));

        /*const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});*/
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* postsSaga() {
    yield takeLatest('GET_POSTS_REQUEST', fetchPosts);
}
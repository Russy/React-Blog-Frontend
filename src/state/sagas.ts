import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Api } from '../libs/api';
import { GET_POSTS_SUCCESS } from './posts/actions';


function* fetchPosts(action) {
    try {
        const posts = yield call(Api.getPosts);

        // console.log(posts.data);

        yield put(GET_POSTS_SUCCESS(posts.data));

        /*const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});*/
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* rootSaga() {
    yield takeLatest("GET_POSTS_REQUEST", fetchPosts);
}

export default rootSaga;
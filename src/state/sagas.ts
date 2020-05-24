import { fork } from 'redux-saga/effects';
import { postsSaga } from './posts/sagas';
import { postSaga } from './post/sagas';
import { loginSaga } from './login/sagas';
import { tagsSaga } from './tags/sagas';
import { pagesSaga } from './pages/sagas';
import { pageSaga } from './page/sagas';
import { settingsSaga } from './settings/sagas';

function* rootSaga() {
    yield fork(postsSaga);
    yield fork(postSaga);
    yield fork(loginSaga);
    yield fork(loginSaga);
    yield fork(tagsSaga);
    yield fork(pagesSaga);
    yield fork(pageSaga);
    yield fork(settingsSaga);
}

export default rootSaga;
import {createStore} from 'redux'
import {rootReducer} from "./reducesrs";
import { composeWithDevTools } from 'redux-devtools-extension';

let Store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default Store;

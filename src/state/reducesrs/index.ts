import {combineReducers} from "redux";
import counterA from "./counterA";
import {counterB} from "./counterB";

export const rootReducer: any = combineReducers({
    counterA,
    counterB
});
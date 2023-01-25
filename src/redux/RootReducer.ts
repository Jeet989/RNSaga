import { combineReducers } from "redux";
import { CounterReducerData } from "./CounterRedux/CounterReducer";


export const combinedReducer = combineReducers({
    counter: CounterReducerData
})
import { combineReducers } from "redux";
import Reducer from "./amountReducer";

const allReducer=combineReducers({
    amount : Reducer,
})
export default allReducer;
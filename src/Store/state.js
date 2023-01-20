import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer/allReducer";

  const store=createStore(Reducer,{},applyMiddleware(thunk));
  export default store;
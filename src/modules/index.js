import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts from "./posts";
import { all } from "redux-saga/effects";
const Rootreducer = combineReducers({ counter, posts });
export function* rootSaga() {
  yield all([counterSaga()]);
}
export default Rootreducer;

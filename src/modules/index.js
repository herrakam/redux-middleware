import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts, { postSaga } from "./posts";
import { all } from "redux-saga/effects";
const Rootreducer = combineReducers({ counter, posts });
export function* rootSaga() {
  yield all([counterSaga(), postSaga()]);
}
export default Rootreducer;

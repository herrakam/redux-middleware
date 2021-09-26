import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";
const Rootreducer = combineReducers({ counter, posts });

export default Rootreducer;

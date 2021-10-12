import * as postsAPI from "../api/posts";
import { takeEvery } from "redux-saga/effects";
import {
  createPromiseSaga,
  createPromiseSagaById,
  hanldeAsyncActons,
  hanldeAsyncActonsById,
  reducerUtils,
} from "../lib/asyncUtils";

// 요청 하나당 액션 3개!
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const CLEAR_POST = "CLEAR_POST";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
  meta: id,
});

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);
export function* postSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

export const goToHome =
  () =>
  (dispatch, getState, { history }) => {
    history.push("./");
  };
export const clearPost = () => ({
  type: CLEAR_POST,
});

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = hanldeAsyncActons(GET_POSTS, "posts", true);
const getPostReducer = hanldeAsyncActonsById(GET_POST, "post", true);
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}

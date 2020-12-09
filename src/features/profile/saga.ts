import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Id } from '../../common/types';
import fetchRequest from '../../common/utils/fetchRequest';
import { adaptUser } from '../dashboard/utils/adapters';
import { setPosts, setUser } from './slice';
import { adaptPosts } from './utils/adapters';

export const actions = {
  FETCH_USER_SAGA: 'FETCH_USER_SAGA',
  FETCH_USER_POSTS_SAGA: 'FETCH_USER_POSTS_SAGA',
};

export function fetchUser({ id }: Id) {
  return { type: actions.FETCH_USER_SAGA, id };
}

export function fetchUserPosts({ id }: Id) {
  return { type: actions.FETCH_USER_POSTS_SAGA, id };
}

export function* fetchUserSaga({ id }: Id) {
  try {
    let user = yield call(() => fetchRequest('users', id));
    yield put(setUser(adaptUser(user)));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchUserPostsSaga({ id }: Id) {
  try {
    let posts = yield call(() => fetchRequest('posts', `?userId=${id}`));
    yield put(setPosts(adaptPosts(posts)));
  } catch (e) {
    console.log(e);
  }
}

export default function* profileFlowSaga() {
  // @ts-ignore
  yield all([takeLatest(actions.FETCH_USER_SAGA, fetchUserSaga)]);
  // @ts-ignore
  yield all([takeLatest(actions.FETCH_USER_POSTS_SAGA, fetchUserPostsSaga)]);
}

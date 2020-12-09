import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Id } from '../../common/types';
import { adaptUser } from '../dashboard/utils/adapters';
import { setUser } from './slice';

export const actions = {
  FETCH_USER_SAGA: 'FETCH_USER_SAGA',
};

export function fetchUser({ id }: Id) {
  return { type: actions.FETCH_USER_SAGA, id };
}

export function* fetchUserSaga({ id }: Id) {
  try {
    let user = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json()),
    );
    yield put(setUser(adaptUser(user)));
  } catch (e) {
    console.log(e);
  }
}

export default function* profileFlowSaga() {
  // @ts-ignore
  yield all([takeLatest(actions.FETCH_USER_SAGA, fetchUserSaga)]);
}

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setUsers } from './slice';
import { adaptUsers } from './utils/adapters';

export const actions = {
  FETCH_USERS_SAGA: 'FETCH_USERS_SAGA',
};

export function fetchUsers() {
  return { type: actions.FETCH_USERS_SAGA };
}

export function* fetchUsersSaga() {
  try {
    let users = yield call(() =>
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()),
    );
    yield put(setUsers(adaptUsers(users)));
  } catch (e) {
    console.log(e);
  }
}

export default function* dashboardFlowSaga() {
  yield all([takeLatest(actions.FETCH_USERS_SAGA, fetchUsersSaga)]);
}

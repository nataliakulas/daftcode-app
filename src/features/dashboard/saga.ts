import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchRequest from '../../common/utils/fetchRequest';
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
    let users = yield call(() => fetchRequest('users'));
    yield put(setUsers(adaptUsers(users)));
  } catch (e) {
    console.log(e);
  }
}

export default function* dashboardFlowSaga() {
  yield all([takeLatest(actions.FETCH_USERS_SAGA, fetchUsersSaga)]);
}

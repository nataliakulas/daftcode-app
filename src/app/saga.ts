import { fork } from 'redux-saga/effects';
import dashboardFlowSaga from '../features/dashboard/saga';
import profileFlowSaga from '../features/profile/saga';

export default function* rootSaga() {
  yield fork(dashboardFlowSaga);
  yield fork(profileFlowSaga);
}

import { fork } from 'redux-saga/effects';
import dashboardFlowSaga from '../features/dashboard/saga';

export default function* rootSaga() {
  yield fork(dashboardFlowSaga);
}

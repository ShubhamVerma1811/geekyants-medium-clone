import { delay, put, takeLatest } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(3000)
  console.log('HI')
}

export function* watchIncrementAsyc() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

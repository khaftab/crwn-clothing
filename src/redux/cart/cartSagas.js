import { all, call, put, takeLatest } from 'redux-saga/effects'
import { clearCart } from './cartActions'
import userTypes from '../user/userTypes'
const { SIGN_OUT_SUCCESS } = userTypes

export function* clearCartOnSignOut() {
    yield console.log('i am fired')
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}
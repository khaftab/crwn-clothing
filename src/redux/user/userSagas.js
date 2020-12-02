import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebase.utils";
import userTypes from '../user/userTypes'
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess, } from "./userActions";

const { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START, CHECK_USER_SESSION, SIGN_OUT_START, SIGN_UP_START } = userTypes

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userData = yield call(createUserProfileDocument, userAuth)
        console.log(userData)
        yield put(signInSuccess(userData))
    } catch (err) {
        yield put(signInFailure(err))
    }
}


export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)

    } catch (err) {
        yield put(signInFailure(err))
    }

}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
    yield console.log('haka')
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        // yield put(signInSuccess(user))
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isAuthenticated() {
    yield console.log('haka')
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())

    } catch (err) {
        yield put(signOutFailure(err))
    }
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut)
}

//*****************SIGN UP***********************/

export function* signUp({ payload }) {
    const { email, password, displayName } = payload

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield console.log(user)
        yield user.updateProfile({ displayName })
        const userData = yield createUserProfileDocument({ email: user.email, displayName, uid: user.uid })
        yield put(signUpSuccess(userData))
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signUpFailure(err))
    }
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}


//*****************SIGN UP***********************/

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart)])
}


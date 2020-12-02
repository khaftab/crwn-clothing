import { all, call, put, takeLatest } from 'redux-saga/effects'
import shopTypes from './shopTypes'
import { firestore, addCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionSuccess, fetchCollectionFailure } from './shopActions'

const { FETCH_COLLECTIONS_START } = shopTypes

export function* fetchCollectionAsync() {

    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(addCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionMap))
    } catch (err) {
        yield put(fetchCollectionFailure(err.message))
    }

}


export function* fetchCollectionStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync) // we use takelatest for latest api calls 
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)])
}
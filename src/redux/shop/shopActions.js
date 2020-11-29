import { addCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { firestore } from '../../firebase/firebase.utils'
import shopActionTypes from './shopTypes'
const { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } = shopActionTypes

export const fetchCollectionStart = () => ({
    type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = collectionMap => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errMessage => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})

export const fetchCollectionAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart())
        collectionRef.get().then(snapshot => { // we can use onSnapshot funtion by firebase but we can't get the error object through that
            const collectionMap = addCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(err => dispatch(fetchCollectionFailure(err.message)))
    }
}
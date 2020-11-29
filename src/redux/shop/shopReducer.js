import SHOP_DATA from '../shop/shop.data'
import shopActionTypes from './shopTypes'
const { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } = shopActionTypes

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errMessage: ''
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }


        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer
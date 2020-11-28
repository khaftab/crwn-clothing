import SHOP_DATA from '../shop/shop.data'
import shopActionTypes from './shopTypes'
const { UPDATE_COLLECTIONS } = shopActionTypes

const INITIAL_STATE = {
    collections: null
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer
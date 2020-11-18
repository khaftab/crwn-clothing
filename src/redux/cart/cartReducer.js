import userTypes from './cartTypes'
import { addItemToCart, removeItem } from './cartUtils'

const { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } = userTypes
const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }

        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        default:
            return state
    }
}

export default cartReducer
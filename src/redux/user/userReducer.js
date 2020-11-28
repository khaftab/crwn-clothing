import userTypes from './userTypes'
const { SET_CURRENT_USER, SIGN_OUT_USER } = userTypes

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case SIGN_OUT_USER:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }


}

export default userReducer
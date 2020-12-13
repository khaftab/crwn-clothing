import userTypes from './userTypes'
const { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE } = userTypes

const INITIAL_STATE = {
    currentUser: null,
    error: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: ''
            }

        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: ''
            }

        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }


}

export default userReducer
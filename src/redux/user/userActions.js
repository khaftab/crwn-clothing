import userTypes from './userTypes'
const { SET_CURRENT_USER } = userTypes

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})
import shopActionTypes from './shopTypes'
const { UPDATE_COLLECTIONS } = shopActionTypes

export const updateShopCollections = collectionsMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})
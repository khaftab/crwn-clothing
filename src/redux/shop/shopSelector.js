import { createSelector } from 'reselect'


const shopSelector = state => state.shop

export const selectShop = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    collections => Object.keys(collections).map(key => collections[key])
)


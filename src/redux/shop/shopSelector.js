import { createSelector } from 'reselect'


const shopSelector = state => state.shop

export const selectShop = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollectionFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections // !! this will provide a boolean value wheather collection is null or filled with data
)
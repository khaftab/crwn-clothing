import React from 'react'
import CollectionItem from '../../Components/collection-item/CollectionItem'
import './collection.styles.scss'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { createSelector, createStructuredSelector } from 'reselect'

function Collection({ collections }) {
    const params = useParams()
    // const routeCollection = collections.find(collection => params.Id == collection.routeName) 
    // this is for when our data is in array. In array it takes time to find data so it is better to use objects
    const routeCollection = collections[params.Id]
    const { title, items } = routeCollection

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const shopSelector = state => state.shop
const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(Collection)

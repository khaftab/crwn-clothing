import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../Components/collection-overview/CollectionOverview'
import Collection from '../collection/Collection'

function Shop({ match }) {

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path='/shop/:Id' component={Collection} />
        </div>
    )
}

export default Shop

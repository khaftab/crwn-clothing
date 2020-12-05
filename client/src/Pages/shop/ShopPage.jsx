import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionAsync, fetchCollectionStart } from '../../redux/shop/shopActions'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'
import CollectionOverviewContainer from '../../Components/collection-overview/CollectionOverviewContainer'
import CollectionContainer from '../collection/CollectionContainer'

function Shop({ match, isCollectionLoaded, fetchCollectionAsync, fetchCollectionStart }) {

    // const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
    // const CollectionPageWithSpinner = WithSpinner(Collection)
    useEffect(() => {
        // fetchCollectionAsync()
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return (
        <div className='shop-page'>
            {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> */}
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            {/* <Route path='/shop/:Id' render={props => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> */}
            <Route path='/shop/:Id' component={CollectionContainer} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop)

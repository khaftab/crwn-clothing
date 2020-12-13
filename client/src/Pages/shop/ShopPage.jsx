import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import Spinner from '../../Components/spinner/Spinner'
import { fetchCollectionAsync, fetchCollectionStart } from '../../redux/shop/shopActions'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'



function Shop({ match, isCollectionLoaded, fetchCollectionAsync, fetchCollectionStart }) {
    const CollectionOverviewContainer = lazy(() => import('../../Components/collection-overview/CollectionOverviewContainer'))
    const CollectionContainer = lazy(() => import('../collection/CollectionContainer'))

    // const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
    // const CollectionPageWithSpinner = WithSpinner(Collection)
    useEffect(() => {
        // fetchCollectionAsync()
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return (
        <div className='shop-page'>
            {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> */}
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path='/shop/:Id' component={CollectionContainer} />
            </Suspense>

            {/* <Route path='/shop/:Id' render={props => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> */}

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

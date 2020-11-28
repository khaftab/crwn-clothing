import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../Components/collection-overview/CollectionOverview'
import WithSpinner from '../../Components/with-spinner/WithSpinner'
import { firestore, addCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateShopCollections } from '../../redux/shop/shopActions'
import Collection from '../collection/Collection'

function Shop({ match, updateCollections }) {
    const [loading, setLoading] = useState(true)
    const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
    const CollectionPageWithSpinner = WithSpinner(Collection)
    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(snapshot => {
            const collectionMap = addCollectionsSnapshotToMap(snapshot)
            console.log(collectionMap)
            updateCollections(collectionMap)
            // console.log(collectionMap.mens)
            setLoading(false)
            // snapshot.docs.map(doc => console.log(doc.data()))
        })
    }, [])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path='/shop/:Id' render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateShopCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(Shop)

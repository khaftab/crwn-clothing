import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector'
import './collection-overview.styles.scss'

function CollectionOverview({ collections }) {

    return (
        <div className='collection-overview'>
            {collections.map(({ id, ...restProperty }) => (
                <CollectionPreview key={id} {...restProperty} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)

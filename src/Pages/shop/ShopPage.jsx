import React, { useState } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../Components/collection-preview/CollectionPreview'

function Shop() {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...restProperty }) => (
                <CollectionPreview key={id} {...restProperty} />
            ))}

        </div>
    )
}

export default Shop

import React from 'react'
import './collection-item.styles.scss'

function CollectionItem({ id, name, price, imageUrl }) {
    console.log(imageUrl)
    return (
        <div className='collection-item'>
            <figure className='image' style={{ backgroundImage: `url(${imageUrl})` }}>

            </figure>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

        </div>
    )
}

export default CollectionItem
// this is an collection item
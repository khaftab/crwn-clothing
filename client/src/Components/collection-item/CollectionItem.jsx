import React from 'react'
import './collection-item.styles.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import { CollectionItemContainer, CollectionFooter, BackgroundImage, AddButton, PriceContainer, NameContainer } from './Collection.syles'

function CollectionItem({ item, addItem }) {
    const { name, price, imageUrl } = item

    return (
        <CollectionItemContainer >
            <BackgroundImage className='image' imageUrl={imageUrl}>

            </BackgroundImage>
            <CollectionFooter >
                <NameContainer className="name">{name}</NameContainer>
                <PriceContainer className="price">{price}</PriceContainer>
            </CollectionFooter>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
// this is an collection item
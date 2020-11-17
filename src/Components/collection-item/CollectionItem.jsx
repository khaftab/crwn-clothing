import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'

function CollectionItem({ item, addItem }) {
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <figure className='image' style={{ backgroundImage: `url(${imageUrl})` }}>

            </figure>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
// this is an collection item
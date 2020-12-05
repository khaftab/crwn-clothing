import React from 'react'
import './CartItem.styles.scss'

function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">&#8377; {quantity} x {price}</span>
            </div>
        </div>
    )
}

export default CartItem

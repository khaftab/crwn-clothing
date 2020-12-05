import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartActions'

function CartDropdown({ cartItems, dispatch }) {
    const history = useHistory()
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                GO TO CHECKOUT
                </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)

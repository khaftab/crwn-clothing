import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import './header.styles.scss'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/userSelector'
import { selectCartHidden } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './HeaderContainer.styles'
import { signOutUser } from '../../redux/user/userActions'

function Header({ currentUser, hidden, signOutUser }) {


    const handleSignOut = () => {
        auth.signOut()
        signOutUser()
    }
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionContainer >
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser && <OptionLink as='div' onClick={handleSignOut}>SIGN OUT</OptionLink>

                }
                {!currentUser && <OptionLink to='/signin'>SIGN IN</OptionLink>}
                <CartIcon />
            </OptionContainer>
            {hidden && <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


const mapDispatchToProps = dispatch => ({
    signOutUser: () => dispatch(signOutUser())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header)

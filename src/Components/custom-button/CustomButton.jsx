import React from 'react'
import './custom-button.styles.scss'

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProperty }) {
    return (
        <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperty}>
            {children}
        </button>
    )
}

export default CustomButton

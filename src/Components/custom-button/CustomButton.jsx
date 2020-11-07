import React from 'react'
import './custom-button.styles.scss'

function CustomButton({ children, isGoogleSignIn, ...otherProperty }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperty}>
            {children}
        </button>
    )
}

export default CustomButton

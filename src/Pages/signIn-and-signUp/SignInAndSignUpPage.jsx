import React from 'react'
import './signIn-and-signUp.styles.scss'
import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'

function SignInAndSignUpPage() {

    return (
        <div className='sign-in-and-sign-out'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage

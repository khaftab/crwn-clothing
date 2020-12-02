import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { emailSignInStart, googleSignInStart } from '../../redux/user/userActions'

import './sign-in.styles.scss'
import { connect } from 'react-redux'

function SignIn({ emailSignInStart, googleSignInStart }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput type="email" value={email} onChange={e => setEmail(e.target.value)} label='Email' name='email' />

                <FormInput type="password" value={password} onChange={e => setPassword(e.target.value)} label='password' name='password' />
                <div className="buttons">
                    <CustomButton type='submit' onClick={() => emailSignInStart(email, password)}>LOGIN</CustomButton >
                    <CustomButton onClick={googleSignInStart} isGoogleSignIn type='button'>Sign in With Google</CustomButton>
                </div>

            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})


export default connect(null, mapDispatchToProps)(SignIn)

// handleChange={handleSubmit}

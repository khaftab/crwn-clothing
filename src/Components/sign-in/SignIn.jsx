import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        } catch (err) {
            console.log(err.message)
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" value={email} onChange={e => setEmail(e.target.value)} label='Email' name='email' />

                <FormInput type="password" value={password} onChange={e => setPassword(e.target.value)} label='password' name='password' />
                <div className="buttons">
                    <CustomButton type='submit' >LOGIN</CustomButton >
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                </div>

            </form>

        </div>
    )
}

export default SignIn

// handleChange={handleSubmit}

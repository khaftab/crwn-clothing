import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" value={email} onChange={e => setEmail(e.target.value)} label='Email' handleChange={handleSubmit} name='email' />

                <FormInput type="password" value={password} onChange={e => setPassword(e.target.value)} label='password' handleChange={handleSubmit} name='password' />
                <div className="buttons">
                    <CustomButton type='submit' >Submit Form</CustomButton >
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                </div>

            </form>

        </div>
    )
}

export default SignIn

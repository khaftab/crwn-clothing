import React, { useState } from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpStart } from '../../redux/user/userActions'
import { connect } from 'react-redux'

function SignUp({ signUpStart }) {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()


        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        signUpStart(displayName, email, password)

        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password)
        //     user.updateProfile({ displayName: displayName })
        //     createUserProfileDocument({ email: user.email, displayName: displayName, uid: user.uid })
        //     setDisplayName('')
        //     setEmail('')
        //     setPassword('')
        //     setConfirmPassword('')
        // } catch (err) {
        //     console.log('something went wrong while sign up', err)
        // }
    }


    return (
        <div className='sign-up'>
            <h2 className="title">I do not have any account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">

                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})


export default connect(null, mapDispatchToProps)(SignUp)







import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HpyfCH89ZDXHz0N69OTiweTGbnziEFpuzjP3hSydmngabkWkIIkeHFQpIdWIC8sz9vAynPksy5ladpA21lIclLS00SQK479I9'

    const onToken = token => {
        console.log(token)

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => alert('Payment is succesfull')).catch(err => {
            console.log(`Payment error ${err}`)
            alert('There is an issue with your payment. Please make sure you enter the correct the details of the card')
        })
    }
    return (

        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing Ltd.'
            image='https://sendeyo.com/up/d/f3eb2117da'
            panelLabel='Pay Now'
            billingAddress
            shippingAddress
            amount={priceForStripe}
            token={onToken}
            description={`Your total price is \u20B9${price}`} // unicode does not apply on dec code it works on hex code 
            stripeKey={publishableKey}
            currency='INR'
        />

    )
}

export default StripeButton

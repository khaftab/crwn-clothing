import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HpyfCH89ZDXHz0N69OTiweTGbnziEFpuzjP3hSydmngabkWkIIkeHFQpIdWIC8sz9vAynPksy5ladpA21lIclLS00SQK479I9'

    const onToken = token => {
        console.log(token)
        alert('Payment is succesfull')
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
            description={`Your total price is $${price}`}
            stripeKey={publishableKey}
        />

    )
}

export default StripeButton

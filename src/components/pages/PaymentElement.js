import React, { useEffect, useState } from 'react'
import { API } from '../../config'

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('')

    useEffect(() => {
        return fetch(`${API}/stripeAPIKey`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setStripeApiKey(data.stripeApiKey))
            .catch(err => console.log(err))
    })


    return (
        <>
            {
                stripeApiKey &&
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                </Elements>
            }
        </>
    )
}

export default PaymentElement
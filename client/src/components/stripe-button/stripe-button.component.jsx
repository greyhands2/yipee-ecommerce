import React from 'react';

import StripeCheckout  from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HsMBwKP4vjkwyIVRizPX0KGXuqsft766Q4mCK5Ouxy7qrUEKT8PuC0f1QXqYcMv4Tpaw8j2a3WWIaxSPzgz80f2007imPygQM';

    const onToken = token =>{
        //on a real life payment scenario you pass this token to your backend to create the charge
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response=> {
            console.log(response)
            alert('Payment Successful')
        }).catch(error=>{
            console.log('Payment error: ', error)

            alert(
                'There was an issue with your payment, Please make sure you use the provided credit card'
            );
        })




        alert('Payment Completed')
    }

    return (
        <StripeCheckout 
    label='Pay 😘'
    name="Osas's Yipee"
    billingAddress
    shippingAddress
    image='https://image.shutterstock.com/image-photo/moscow-russia-april-8-2019-600w-1383211862.jpg'
    description={`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay 😘' 
    token={onToken}
    stripeKey={publishableKey}


        />
    )
};



export default StripeCheckoutButton;
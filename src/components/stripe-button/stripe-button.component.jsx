import React from "react";
import StripeCheckout from "react-stripe-checkout";


const onToken = token => {
  console.log(token);
}

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JIs2TBnkYaiN09EM7uCb52ZFF99LmcYpAkNjtpUBYQwHrdHP6Fh5pdiJN1C4dRJw54mY8Rt8MQlIf9o8rkQQHwP00sWAReG8N";
  return <StripeCheckout
    label='Pay Now'
    name='NortonShop'
    billingAddress
    shippingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay now'
    token={onToken}
    stripeKey={publishableKey}
  />;
};

export default StripeCheckoutButton;

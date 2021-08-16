import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey =
    "pk_test_51JIs2TBnkYaiN09EM7uCb52ZFF99LmcYpAkNjtpUBYQwHrdHP6Fh5pdiJN1C4dRJw54mY8Rt8MQlIf9o8rkQQHwP00sWAReG8N";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    }).then(response => {
      alert('Payment success!');
    }).catch(error => {
      console.log('Some payment error: ', error);
      alert('There was an error');
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="NortonShop"
      billingAddress
      shippingAddress
      allowRememberMe="Remember me"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from 'react';

const GuestOrderConfirmation = (props) => {
  const localCart = JSON.parse(window.localStorage.getItem('cart'));
  const {
    email,
    firstName,
    lastName,
    streetAddress,
    state,
    city,
    zipCode
  } = props;
  const { total, cartItems } = localCart;

  window.localStorage.clear();
  return (
    <React.Fragment>
      <h1>Order confirmed!</h1>
      <p>Email: {email}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>
        Address: {streetAddress} {city}, {state} {zipCode}
      </p>
      {cartItems.map((cartItem) => {
        return (
          <p key={cartItem.id}>
            Item: {cartItem.name} Quantity: {cartItem.quantity} Unit Price: $
            {cartItem.price / 100}
          </p>
        );
      })}
      <p>Total: ${total / 100}</p>
    </React.Fragment>
  );
};

export default GuestOrderConfirmation;
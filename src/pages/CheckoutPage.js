import React from "react";
import "../css/Checkout.css";
const CheckoutPage = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="checkout-page">
          <h1 className="checkout-title">Checkout</h1>
          <form className="checkout-form">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label for="address">Address</label>
              <textarea id="address" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label for="city">City</label>
              <input type="text" id="city" className="form-control" />
            </div>
            <div className="form-group">
              <label for="state">State</label>
              <input type="text" id="state" className="form-control" />
            </div>
            <div className="form-group">
              <label for="zip">Zip Code</label>
              <input type="text" id="zip" className="form-control" />
            </div>
            <button type="submit" className="checkout-button">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

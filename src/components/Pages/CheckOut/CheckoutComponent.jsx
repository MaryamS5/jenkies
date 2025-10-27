import React from 'react';
import './CheckoutComponent.css'; 

const CheckoutComponent = () => {
  return (
    <div className="container my-5">
      <div className="row">
    
        <div className="col-lg-8">
          <h3 className="mb-4">Checkout</h3>
          <div className="bg-white p-4 shadow-sm rounded">
            <form>
              <h5 className="mb-3">Billing Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="" />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="mb-3">
                <label className="form-label">Full Address</label>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <h5 className="mt-4 mb-3">Payment Method</h5>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="creditCard" checked />
                <label className="form-check-label" htmlFor="creditCard">Credit Card</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="paypal" />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="radio" name="payment" id="cod" />
                <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
              </div>

              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="bg-light p-4 shadow-sm rounded">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Pizza Margherita <span>$10.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Spaghetti Carbonara <span>$12.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cheesecake <span>$6.50</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                Total <span>$28.50</span>
              </li>
            </ul>
            <p className="text-muted small">Delivery fees and taxes will be calculated at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;

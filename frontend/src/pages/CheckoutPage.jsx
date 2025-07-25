import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cart = state?.cart || [];

  const handlePlaceOrder = () => {
    // You can replace this with API logic
    localStorage.removeItem('cart');
    navigate('/order-confirmation');
  };

  const getTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 bg-white py-12 px-4 sm:px-8 lg:px-20">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cart Items Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.quantity * item.price}</span>
              </div>
            ))}
            <div className="border-t pt-4 mt-4 font-bold text-lg flex justify-between">
              <span>Total</span>
              <span>₹{getTotal()}</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Details</h2>
            <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full px-4 py-3 rounded border focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Roll Number"
                className="w-full px-4 py-3 rounded border focus:outline-none"
              />
              <input
                type="time"
                required
                placeholder="Pickup Time"
                className="w-full px-4 py-3 rounded border focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;

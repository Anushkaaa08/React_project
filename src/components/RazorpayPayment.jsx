import React from 'react';
const RazorpayPayment = ({ totalAmount }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_3htmg9ipykUgYh', // Replace with your Razorpay Key ID
      amount: totalAmount * 100, // amount in paise
      currency: 'INR',
      name: 'Magnolia Bakery',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can update the order status in db.json here if needed
      },
    //   prefill: {
    //     name: 'Your Name',
    //     email: 'your.email@example.com',
    //     contact: '9999999999',
    //   },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
 
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
 
  return (
    <div>
      <button style={{
          backgroundColor: '#3399cc',
          color: 'white',
          padding: '10px 20px',
          width: '200px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '50px',
          marginBottom: '30px',
          fontSize: '16px',
        }} onClick={handlePayment}>Pay Now</button>
    </div>
  );
};
 
export default RazorpayPayment;
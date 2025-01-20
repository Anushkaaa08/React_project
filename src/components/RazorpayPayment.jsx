import React from 'react';
 
const RazorpayPayment = ({ totalAmount, userId }) => {
 
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_3htmg9ipykUgYh', 
      amount: totalAmount * 100, 
      currency: 'INR',
      name: 'Magnolia Bakers',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
 
        
        fetch('http://localhost:3000/users')
          .then(response => response.json())
          .then(data => {
            const user = data.find(user => user.id === userId); 
 
            if (user) {
              
              const orderDetails = {
                orderId: response.razorpay_payment_id,
                amount: totalAmount,
                date: new Date().toISOString(),
                
              };
              user.orders = user.orders || [];
              user.orders.push(orderDetails);
 
              
              return fetch(`http://localhost:3000/users/${user.id}`, { 
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
              });
            } else {
              throw new Error('User not found');
            }
          })
          .then(() => {
            console.log('Order details updated successfully');
          })
          .catch(error => {
            console.error('Error updating order details:', error);
          });
      },
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
// // PaymentPage.jsx
// //import React from 'react';

// const PaymentPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 max-w-lg w-full rounded-lg shadow-md">
//         {/* Header */}
//         <header className="text-center mb-6">
//           <img src="logo.png" alt="Farm Assist Logo" className="mx-auto mb-4" />
//           <h1 className="text-2xl font-bold">Payment for Farm Assist Services</h1>
//           <p className="text-gray-600">Thank you for choosing Farm Assist. Please complete your payment to proceed with our services.</p>
//         </header>

//         {/* Payment Form */}
//         <form action="/submit-payment" method="POST" className="space-y-4">
//           {/* Personal Information */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//           </div>

//           {/* Billing Address */}
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Billing Address</label>
//             <input type="text" id="address" name="address" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//           </div>

//           {/* Payment Details */}
//           <div>
//             <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
//             <input type="text" id="amount" name="amount" value="$100.00" readOnly className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 sm:text-sm" />
//           </div>
//           <div>
//             <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit/Debit Card Number</label>
//             <input type="text" id="cardNumber" name="cardNumber" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//           </div>
//           <div className="flex space-x-2">
//             <div className="flex-1">
//               <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiration Date</label>
//               <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//               <input type="text" id="cvv" name="cvv" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Complete Payment</button>
//         </form>

//         {/* Footer */}
//         <footer className="mt-6 text-center text-sm text-gray-600">
//           <p>Contact us: <a href="mailto:support@farmassist.com" className="text-blue-500 hover:underline">support@farmassist.com</a></p>
//           <p><a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</a></p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;//


// PaymentPage.jsx
import React from 'react';

const PaymentPage = () => {
  // Example product details
  const product = {
    name: "Farm Equipment Package",
    description: "A comprehensive package including essential farm tools and equipment.",
    price: "$250.00",
    quantity: 1
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 max-w-3xl w-full rounded-lg shadow-md">
        {/* Header */}
        <header className="text-center mb-6">
          <img src="logo.png" alt="Farm Assist Logo" className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Payment for Farm Assist Services</h1>
          <p className="text-gray-600">Thank you for choosing Farm Assist. Please review your product details and complete your payment.</p>
        </header>

        {/* Product Details */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700 mt-1">{product.description}</p>
            <p className="text-gray-700 mt-2"><span className="font-medium">Price:</span> {product.price}</p>
            <p className="text-gray-700 mt-1"><span className="font-medium">Quantity:</span> {product.quantity}</p>
            <p className="text-gray-700 mt-2"><span className="font-medium">Total:</span> {product.price}</p>
          </div>
        </section>

        {/* Payment Form */}
        <form action="/submit-payment" method="POST" className="space-y-4">
          {/* Personal Information */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          {/* Billing Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input type="text" id="address" name="address" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          {/* Payment Details */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="text" id="amount" name="amount" value={product.price} readOnly className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit/Debit Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="flex space-x-2">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" id="cvv" name="cvv" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Complete Payment</button>
        </form>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-gray-600">
          <p>Contact us: <a href="mailto:support@farmassist.com" className="text-blue-500 hover:underline">support@farmassist.com</a></p>
          <p><a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</a></p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;

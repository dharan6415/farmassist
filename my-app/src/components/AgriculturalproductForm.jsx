// import React, { useState } from 'react';

// const AgriculturalProductForm = () => {
//   const [formData, setFormData] = useState({
//     productName: '',
//     variant: '',
//     quantity: '',
//     price: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, e.g., send data to an API or save it
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Add Agricultural Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="productName" className="mb-2 font-medium text-gray-700">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={formData.productName}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="variant" className="mb-2 font-medium text-gray-700">Variant</label>
//           <input
//             type="text"
//             id="variant"
//             name="variant"
//             value={formData.variant}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="quantity" className="mb-2 font-medium text-gray-700">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="price" className="mb-2 font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="description" className="mb-2 font-medium text-gray-700">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//             rows="4"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AgriculturalProductForm;



import React, { useState } from 'react';

const AgriculturalProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    variant: '',
    quantity: '',
    price: '',
    description: '',
    farmerName: '',
    farmerContact: '',
    farmLocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API or save it
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 max-w-3xl w-full rounded-lg shadow-md">

      <h2 className="text-2xl font-bold mb-4">Add Agricultural Product and Farmer Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Product Details</h3>

          <div className="flex flex-col">
            <label htmlFor="productName" className="mb-2 font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="variant" className="mb-2 font-medium text-gray-700">Variant</label>
            <input
              type="text"
              id="variant"
              name="variant"
              value={formData.variant}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="mb-2 font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2 font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>
        </div>

        {/* Farmer Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Farmer Details</h3>

          <div className="flex flex-col">
            <label htmlFor="farmerName" className="mb-2 font-medium text-gray-700">Farmer's Name</label>
            <input
              type="text"
              id="farmerName"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="farmerContact" className="mb-2 font-medium text-gray-700">Farmer's Contact</label>
            <input
              type="text"
              id="farmerContact"
              name="farmerContact"
              value={formData.farmerContact}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="farmLocation" className="mb-2 font-medium text-gray-700">Farm Location</label>
            <input
              type="text"
              id="farmLocation"
              name="farmLocation"
              value={formData.farmLocation}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default AgriculturalProductForm;


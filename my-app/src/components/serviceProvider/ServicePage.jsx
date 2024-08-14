import React, { useState } from 'react';
import { FaMapMarkerAlt, FaServicestack, FaUser, FaImage } from 'react-icons/fa';
// import Footer from '../Footer';

const ServiceProviderPage = () => {
  const [serviceProvider, setServiceProvider] = useState({
    name: '',
    location: '',
    serviceType: '',
    description: '',
    image: '',
  });

  const handleServiceProviderChange = (e) => {
    setServiceProvider({
      ...serviceProvider,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle service provider submission logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mt-20 font-serif text-indigo-800">Service Provider Page</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-6">
        <div className="flex flex-col">
          <label className="block text-gray-700">Name</label>
          <div className="flex items-center border rounded p-2">
            <FaUser className="mr-2 text-gray-500" />
            <input
              type="text"
              name="name"
              value={serviceProvider.name}
              onChange={handleServiceProviderChange}
              className="w-full p-2 border-none focus:ring-0"
              placeholder="Enter your name"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="block text-gray-700">Location</label>
          <div className="flex items-center border rounded p-2">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <input
              type="text"
              name="location"
              value={serviceProvider.location}
              onChange={handleServiceProviderChange}
              className="w-full p-2 border-none focus:ring-0"
              placeholder="Enter your location"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="block text-gray-700">Type of Service</label>
          <div className="flex items-center border rounded p-2">
            <FaServicestack className="mr-2 text-gray-500" />
            <input
              type="text"
              name="serviceType"
              value={serviceProvider.serviceType}
              onChange={handleServiceProviderChange}
              className="w-full p-2 border-none focus:ring-0"
              placeholder="Enter the type of service"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={serviceProvider.description}
            onChange={handleServiceProviderChange}
            className="w-full p-2 border rounded focus:ring-0"
            placeholder="Describe your services"
          ></textarea>
        </div>
        
        <div className="flex flex-col">
          <label className="block text-gray-700">Image URL</label>
          <div className="flex items-center border rounded p-2">
            <FaImage className="mr-2 text-gray-500" />
            <input
              type="text"
              name="image"
              value={serviceProvider.image}
              onChange={handleServiceProviderChange}
              className="w-full p-2 border-none focus:ring-0"
              placeholder="Enter image URL"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          Add Details
        </button>
        </form>
      
        </div>
  );
};

export default ServiceProviderPage;

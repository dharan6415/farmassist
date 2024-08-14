
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const HireModal = ({ service, onClose }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const featureOptions = [
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' },
    { value: 'feature3', label: 'Feature 3' },
  ];

  if (!service) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Selected Date:', startDate);
    console.log('Selected Feature:', selectedFeature);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Location:', location);
    console.log('Message:', message);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full animate-fade-in mt-10">
        <h2 className="text-2xl font-bold mb-2">Hire <span className='text-indigo-800 '>{service.name}</span></h2>
        <p className="text-gray-600 mb-2">Please fill out the form below to hire this service.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.doe@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="date" className="block text-gray-700 mb-2">Select Date & Time</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your location"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
         { /*<div className="mb-4">
            <label htmlFor="feature" className="block text-gray-700 mb-2">Select Feature</label>
            <Select
              id="feature"
              options={featureOptions}
              value={selectedFeature}
              onChange={setSelectedFeature}
              className="w-full border border-gray-300 rounded-md"
            />
          </div>*/}
         {/* <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>*/}
          <button
            type="submit"
            className="bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Book Product
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HireModal;

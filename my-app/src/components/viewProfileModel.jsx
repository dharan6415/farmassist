import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ViewProfileModal = ({ service, onClose }) => {
  if (!service) return null;

  const { name, image, rating, location, phone, email } = service;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full animate-fade-in mt-10">
        <h2 className="text-2xl font-bold mb-4 ">Profile of <span className='text-indigo-800'>{name}</span></h2>
        <img className="w-full h-40 object-cover rounded mb-4" src={image} alt={name} />
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
          <span>{location}</span>
        </div>
        <div className="mb-4">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
          <span>{phone || '+1 234 567 890'}</span> {/* Replace with dynamic data if available */}
        </div>
        <div className="mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
          <span>{email || 'example@example.com'}</span> {/* Replace with dynamic data if available */}
        </div>
        <button onClick={onClose} className="mt-4 bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewProfileModal;

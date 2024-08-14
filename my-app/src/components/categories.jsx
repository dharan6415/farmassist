
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import img1 from '../asserts/img1.jpg';
import ViewProfileModal from './viewProfileModel';
import HireModal from './HireModel';
import cook1 from '../asserts/cook1.jpeg';
import houseclean from '../asserts/houseclean.jpg';
import carrot from '../asserts/carrot.jpeg';
import paddy from '../asserts/paddy.jpeg'
import wheat from '../asserts/wheat.jpeg'
import banana from '../asserts/banana.jpeg'
import apple from '../asserts/apple.jpeg'
import grapes from '../asserts/grapes.jpeg'
import dals from '../asserts/dals.jpeg'
import potatos from '../asserts/potatos.jpeg'
import tomato111 from '../asserts/tomato111.jpeg'
import onion1 from '../asserts/onion1.jpeg'



const categories = [
  'Dairy Farming',
'Commercial Farming',
'Plantation Farming',
'Commercial grain farming',
'Commercial mixed farming',
'Primitive subsistence farming',
'Intensive subsistence'
];

const initialServices = [
 
  { name: 'Tomatos', image: tomato111,rating: 4.9, location: 'New York'},
  { name: 'Onions', image: onion1,rating: 4.8, location: 'san' },
  { name: 'Carrot', image: carrot,rating: 4.7,location: 'Ooty'},
  { name: 'Paddy', image: paddy,rating: 4.9,location: 'Thanjavur'},
  { name: 'Wheat', image: wheat,rating: 4.6,location: 'Maharastra'},
  { name: 'Banana', image: banana,rating: 4.5,location: 'kerala'}, 
  { name: 'Apple', image: apple,rating: 4.9,location: 'jammu and kashmir'},
  { name: 'Grapes', image: grapes,rating: 4.8,location: 'Nazic'},
  { name: 'Dals', image: dals,rating: 4.7,location: 'Rajasthan'}, 
  { name: 'Potatoes', image: potatos,rating: 4.8,location: 'uttarpradesh'},
];

const experiences = [
  { quote: "The best service ever!", author: "John Doe", image: img1 },
  { quote: "Absolutely fantastic!", author: "Jane Smith", image: cook1 },
  { quote: "Highly recommend to everyone!", author: "Michael Johnson", image: houseclean },
];

const CategoriesAndServices = () => {
  const [services, setServices] = useState(initialServices);
  const [sortOption, setSortOption] = useState('role');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isViewProfileOpen, setIsViewProfileOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortServices(e.target.value);
  };

  const sortServices = (criteria) => {
    const sortedServices = [...initialServices].sort((a, b) => {
      if (criteria === 'rating') {
        return b.rating - a.rating;
      }
      if (criteria === 'location') {
        return a.location.localeCompare(b.location);
      }
      return a.name.localeCompare(b.name);
    });
    setServices(sortedServices);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openViewProfileModal = (service) => {
    setSelectedService(service);
    setIsViewProfileOpen(true);
  };

  const openHireModal = (service) => {
    setSelectedService(service);
    setIsHireOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsViewProfileOpen(false);
    setIsHireOpen(false);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-1/4 pr-4 sticky top-16 h-[calc(100vh-6rem)] bg-white z-10">
        <h2 className="text-xl font-bold mb-2 text-indigo-800 font-serif">Popular Categories</h2>
        <ul className="list-none p-0">
          {categories.map((category) => (
            <li key={category} className="mb-2 text-slate-600 cursor-pointer hover:text-indigo-800">
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-3/4 overflow-y-auto">
        <div className="flex-col lg:flex-row items-center mb-4 flex-wrap">
          <div className="relative w-full lg:w-auto flex items-center mb-2 lg:mb-0">
            <FontAwesomeIcon icon={faFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none w-full lg:w-auto"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="role">Role</option>
              <option value="rating">Rating</option>
              <option value="location">Location</option>
            </select>
            <div className="ml-2 lg:ml-5 relative w-full lg:w-auto flex items-center flex-grow lg:flex-grow-0">
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full lg:w-auto"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3 font-serif text-indigo-800">Product Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
          {filteredServices.map((service) => (
            <div
              key={service.name}
              className="bg-slate-100 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img className="w-full h-40 object-cover rounded-t-lg" src={service.image} alt={service.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{service.name}</div>
                <div className="text-gray-600 text-lg">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 size-6" /> {service.rating} /
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-1 size-6" /> {service.location}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => openViewProfileModal(service)}
                    className="bg-indigo-600 text-white px-2 rounded hover:bg-indigo-300"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => openHireModal(service)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-300 "
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>




        <h2 className="text-3xl font-bold mb-3 font-serif text-indigo-800">Landlease Services</h2>

        <ul className="space-y-2">
              <li><a href="https://farmlandinfo.org/lease-your-land/" target='_blank' className="relative hover:text-indigo-800 hover-link no-underline text-black">Lease your land</a></li>
              <li><a href="https://sfarmsindia.com/" target='_blank' className="relative hover:text-indigo-800 hover-link no-underline text-black">SFarmsIndia</a></li>
              <li><a href="https://www.99acres.com/agricultural-land-for-rent-in-coimbatore-ffid" target='_blank' className="relative hover:text-indigo-800 hover-link no-underline text-black">99acres</a></li>
              <li><a href="https://www.indiamart.com/proddetail/farming-land-for-rent-or-lease-2849813327591.html" target='_blank' className="relative hover:text-indigo-800 hover-link no-underline text-black">indiamart</a></li>
            </ul>

        
        </div>

      {isViewProfileOpen && (
        <ViewProfileModal service={selectedService} onClose={closeModal} />
      )}
      {isHireOpen && <HireModal service={selectedService} onClose={closeModal} />}
    </div>
  );
};

export default CategoriesAndServices;

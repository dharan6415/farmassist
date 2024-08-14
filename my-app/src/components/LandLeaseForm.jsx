import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete } from '@react-google-maps/api';

// Configuration for Google Maps
const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: 40.712776, // Default center
  lng: -74.005974,
};

const LandLeaseForm = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries,
  });

  const [formData, setFormData] = useState({
    farmName: '',
    leaseDuration: '',
    farmLocation: '',
    lat: center.lat,
    lng: center.lng,
  });

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onAutocompleteLoad = useCallback((autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  }, []);

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setFormData({
          ...formData,
          farmLocation: place.formatted_addres
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        map.panTo(place.geometry.location);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data Submitted:', formData);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Land Lease Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="farmName" className="mb-2 font-medium text-gray-700">Farm Name</label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="leaseDuration" className="mb-2 font-medium text-gray-700">Lease Duration</label>
          <input
            type="text"
            id="leaseDuration"
            name="leaseDuration"
            value={formData.leaseDuration}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="farmLocation" className="mb-2 font-medium text-gray-700">Farm Location</label>
          <Autocomplete
            onLoad={onAutocompleteLoad}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              id="farmLocation"
              name="farmLocation"
              value={formData.farmLocation}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Search for location"
              required
            />
          </Autocomplete>
        </div>

        <div className="w-full h-96">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: formData.lat, lng: formData.lng }}
            zoom={10}
            onLoad={onMapLoad}
          >
            <Marker position={{ lat: formData.lat, lng: formData.lng }} />
          </GoogleMap>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandLeaseForm;



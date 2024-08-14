
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-serif text-indigo-800 mt-12">Contact Us</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you. Please reach out with any questions or feedback.</p>
      </header>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 font-serif text-indigo-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors">
              Send Message
            </button>
            {messageSent && <p className="text-green-600">Message sent successfully!</p>}
          </form>
        </div>

      
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 font-serif text-indigo-800">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-3" />
            <span>1234 Street Name, Coimbatore, India</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-3" />
            <span>+91 9500712173</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3" />
            <span>farmassist@example.com</span>
          </div>

          {/* Embedded Map */}
          <div className="my-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.363450363172!2d-122.0838510846812!3d37.386051779825295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb8c6a925f1f%3A0x6b4d72e8c4d564dd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638978660580!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Media Links 
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>*/}
        </div>
      </div>
  
    </div>
    
  );
};

export default ContactPage;

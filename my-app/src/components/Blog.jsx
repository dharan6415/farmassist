import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaClock, FaHandsHelping, FaMoneyBillWave, FaVideo } from 'react-icons/fa';
import blog111 from '../asserts/blog111.jpeg'
import blog222 from '../asserts/blog222.jpeg'
import blog333 from '../asserts/blog333.jpg'
import service111 from '../asserts/service111.jpeg'
import service222 from '../asserts/service222.jpeg'
import Service333 from '../asserts/service333.jpeg'
import Footer from './Footer'

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center mt-12 font-serif text-indigo-800">Farm Assist Blog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <img 
              src={blog111}
              alt="Top 5 Tips for Efficient Household Management" 
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-2xl font-bold mb-2">Top Efficient FarmAssist Management</h2>
            <p className="text-sm text-gray-600 mb-2">July 28, 2024 by Dharanidharan D</p>
            <p>“Food and farming are such an integral part of our culture and who we are, and I wanted that to be my work. I also just really love growing food and having my hands in the earth,...”</p>
            <a 
              href="https://www.farmers.gov/blog/be-link-connections-people-and-land" target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
            >
              Learn More
            </a>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <img 
              src={blog222} 
              alt="The Benefits of Hiring Professional Cleaning Services" 
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-2xl font-bold mb-2">The Benefits of Hiring Professional Farm Services</h2>
            <p className="text-sm text-gray-600 mb-4">July 23, 2024 By Miguel Hernandez</p>
            <p>The Inflation Reduction Act provides an additional $19.5 billion for NRCS to deliver financial and technical assistance to producers for climate-smart conservation activities through existing USDA conservation programs.</p>
            <a 
              href="https://www.farmers.gov/blog/inflation-reduction-act-in-action-beginning-farmers-journey-with-conservation" target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
            >
              Learn More
            </a>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <img 
              src={blog333}
              alt="How to Choose the Right Babysitter" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 ">How to Choose the Right value for assist</h2>
            <p className="text-sm text-gray-600 mb-4">July 03, 2024 By Jay Ivey</p>
            <p>“It is important for everyone to be aware that FSA provides programs for everyone and that you do not have to be a large row crop farmer or a large cattle farmer to participate in FSA programs,...”</p>
            <a 
              href="https://www.farmers.gov/blog/be-link-value-conversation" target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
            >
              Learn More
            </a>
          </article>
        </div>

        <section className="mt-12 mb-10">
          <h2 className="text-3xl font-bold mb-4 text-center font-serif text-indigo-800">How Our Services Have Helped People</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={service111} alt="John Doe" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Lily</h3>
              <p className="text-gray-600 mb-4 text-center">"The farm service was exceptional. My opnion is to use this platform! Highly recommend."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={service222} alt="Jane Smith" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Jane Mia</h3>
              <p className="text-gray-600 mb-4 text-center">"Hiring a sellers and buyers through farm service was helps to farm agriculture . I can now recommend Farm Assist is the good services."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Service333} alt="Emily Johnson" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Emily Daniels</h3>
              <p className="text-gray-600 mb-4 text-center">"The platform was fantastic. organic and nutrients products was transferred every day with rightcosts. Truly a cost saver!"</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center font-serif text-indigo-800">Security & Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaShieldAlt className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">All service providers are thoroughly vetted and background checked.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaHandsHelping className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">We conduct regular training sessions for our service providers to maintain high standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaClock className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Our platform allows for real-time tracking of service providers while they are at your home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaCheckCircle className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Customer support is available 24/7 to address any concerns you may have.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaVideo className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Service providers wear shoulder cams to ensure transparency and security during service delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaMoneyBillWave className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Secure payment methods and data protection are integral to our services.</p>
            </div>
          </div>
          
        </section>
        </div>
        <Footer/>
    </div>
  );
};

export default BlogPage;

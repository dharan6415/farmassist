import React, { useState } from 'react';
import img from "../asserts/logo111.jpg"
import Footer from './Footer';
import AgriculturalProductForm from './AgriculturalproductForm';

import LoadingIndicator from './LoadingIndicator';

function Hero() {

  const [loading, setLoading] = useState(false);

  const handleButtonClick = (path) =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = path;
    }, 1000)
  };

  return (


    <div className="top-16 relative bg-white overflow-hidden mt-5">
      {loading && <LoadingIndicator/>}
      {/*Hero Page */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 flex flex-col justify-center">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Farm Assist</span>{' '}
                <span className="block text-indigo-600 xl:inline"></span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Your responsibilities include helping with weeding, pruning, plant and soil maintenance, seeding, and more.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                   onClick={() => handleButtonClick('/Hire')}
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 no-underline"
                  >
                    Hire
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => handleButtonClick("/Blog")}
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 no-underline"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className=" lg:w-1/2 lg:flex lg:items-center lg:justify-center">
          <img
            className="h-56 w-[100%] ml-2 items-center justify-center object-cover sm:h-72 md:h-96 lg:w-full lg:h-auto "
            src={img}
            alt="Household Services"
          />
        </div>
      </div>

       {/*About Pages */}
      <div className='bg-slate-100 max-w-screen mx-auto my-auto flex flex-col lg:flex-row min-h-screen'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className="hidden lg:w-1/2 lg:flex lg:items-center lg:justify-center mt-8 lg:mt-0 lg:pr-8">
      <img
        className="w-full h-full object-cover rounded-lg shadow-lg "
        src={img}
        alt="About Farm Assist"
      />
    </div>
      <div className="lg:w-1/2 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About <span className='text-indigo-600'>HouseHold Care</span>
        </h2>
        <p className="mt-4 text-lg text-gray-500">
        When you apply for Farm Assist, a social welfare inspector will call to see you and ask to see various documents. For example, accounts prepared for tax purposes, creamery returns, cattle registration cards, details of headage payments and area aid.
        </p>
        <p className="mt-4 text-lg text-gray-500">
        They will also want information on the sale of crops, cattle, milk and other produce. The inspector will then assess the costs actually and necessarily incurred in connection with the running of the farm.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          Join us today and experience the convenience of finding the right help for your farm with just a few clicks.
        </p>
      </div>
     
    </div>
    </div>
   
    <Footer/>
    </div>
  );
}

export default Hero;
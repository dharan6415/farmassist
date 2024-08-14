import React from 'react';
import Slider from 'react-slick';
import img1 from '../asserts/img1.jpg';
import cook1 from '../asserts/cook1.jpeg';
import houseclean from '../asserts/houseclean.jpg';
import tv from '../asserts/tv.jpeg';

const images = [img1, cook1, houseclean, tv];

const CarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-4 lg:flex lg:flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Services</h2>
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPage;

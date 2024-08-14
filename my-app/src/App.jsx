import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Navbar from './components/Navbar';
import NavbarService from './components/serviceProvider/NavbarService';
import Landingpage from './Pages/Landingpage';
import HirePage from './Pages/HirePage';
import SubcriptionPage from './Pages/SubcriptionPage';
import ContactUsPage from './Pages/ContactUsPage';
import Hero from './components/Hero';
import Blog from './components/Blog';
import ServiceLanding from './components/serviceProvider/ServiceLanding';
import Service from './components/serviceProvider/Service';
import PaymentPage from './components/PaymentPage';
import AgriculturalProductForm from './components/AgriculturalproductForm';
//import LandLeasePage from './components/LandLeaseForm';

const App = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email) => {
    if (email === 'service@gmail.com') {
      setUserType('serviceProvider');
      navigate('/ServiceLanding');
    } else {
      setUserType('user');
      navigate('/');
    }
  };

  return (
    <div>
      {userType === 'serviceProvider' ? <NavbarService /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Hire" element={<HirePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUsPage />} /> 
        <Route path="/Subcription" element={<SubcriptionPage />} /> 
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/AgriculturalProductForm" element={<AgriculturalProductForm />} />
         
        <Route path='/Service' element={<Service/>}/>
        {/* Define different routes for user and service provider */}
        {userType === 'user' && (
          <>
            <Route path="/" element={<Hero/>} />
            {/* Other user-specific routes */}
          </>
        )}
        {userType === 'serviceProvider' && (
          <>
         
          <Route path="/ServiceLanding" element={<ServiceLanding />}/>
          
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;

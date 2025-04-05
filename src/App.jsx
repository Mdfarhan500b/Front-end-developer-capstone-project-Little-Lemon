import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './responsive.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Booking from './components/Booking';
import ConfirmedBooking from './components/ConfirmedBooking';
import CustomerReview from './components/CustomerReview';

function App() {
  const navigate = useNavigate();

  // State for available times
  const [availableTimes, setAvailableTimes] = useState(["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]);

  // Update available times based on selected date
  const updateTimes = (date) => {
    console.log(`Date selected: ${date}`);
    setAvailableTimes(["1:00 PM", "2:00 PM", "3:00 PM"]); // Example logic
  };

  // Handle form submission and navigate to confirmation page
  const submitForm = (formData) => {
    console.log("Form submitted:", formData);
    navigate('/confirmed');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Nav />
      

      {/* Application Routes */}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={{ availableTimes }}
              dispatch={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        
      </Routes>
    </div>
  );
}

// Home Page Component
const Home = () => (
  <>
    <Main />
    <Menu />
    <CustomerReview/>
    <Footer/>
  </>
);

// Menu Page Component
const MenuPage = () => (
  <>
    <Menu />
    <Footer />
  </>
);

export default App;

import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import AboutPage from '../pages/about/aboutPage';
import TestStore from '../pages/testStore/index';
import Business from '../pages/business/business';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TestStore />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/business" element={<Business />} />
  </Routes>
);

export default AppRoutes;

import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import AboutPage from '../pages/about/aboutPage';
import TestStore from '../pages/testStore/index';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TestStore />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
);

export default AppRoutes;

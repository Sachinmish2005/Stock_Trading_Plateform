import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/Home/HomePage';

import "@fortawesome/fontawesome-free/css/all.min.css";
import PrincingPage from './landing_page/Pricing/PricingPage';
import Signup from './landing_page/Signup/Signup';
import AboutPage from './landing_page/About/AboutPage';
import SupportPage from './landing_page/Support/SupportPage';
import ProductPage from './landing_page/Products/ProductPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFount';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/Signup" element={<Signup />}></Route>
     <Route path="/About" element={<AboutPage/>}></Route>
      <Route path="/Products" element={<ProductPage />}></Route>
       <Route path="/Pricing" element={<PrincingPage />}></Route>
        <Route path="/Support" element={<SupportPage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
  </Routes>
   <Footer/>
  </BrowserRouter>
);



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import { Login } from '../Pages/Login_Signup/Login';
import { SignUp } from '../Pages/Login_Signup/Signup';
import Pricing from '../Pages/PricePage/Pricing';
import Reviews from '../Pages/ReviewPage/Review';
import Template from '../Pages/Templates/Template';
import BonTax from '../Pages/ProductPage/Tax_page';
import BonCash from '../Pages/ProductPage/Bonsai_Cash';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/bonTax' element={<BonTax/>} />
        <Route path='/bonCash' element={<BonCash/>} />
        <Route path='/template' element={<Template/>} />
    </Routes>
  )
};

export default AllRoutes;
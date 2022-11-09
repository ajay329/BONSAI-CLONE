import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/HomePage/Home'
import Login from '../Pages/Login_Signup/Login'
import Signup from '../Pages/Login_Signup/Signup'
import Pricing from '../Pages/PricePage/Price'
import Product from '../Pages/ProductPage/Product'
import Review from '../Pages/ReviewPage/Review'
import Template from '../Pages/Templates/Template'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Pricing' element={<Pricing/>}></Route>
        <Route path='/Reviews' element={<Review/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/template' element={<Template/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
    </Routes>
  )
}

export default AllRoutes

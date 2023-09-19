import React from 'react'
import {Routes, Route} from "react-router-dom"

import Login from '../pages/Login'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import HomePage from '../pages/Home/HomePage'
import ProductDetails from '../pages/ProductDetails'
import Address from '../pages/Address'
import Payment from '../pages/payment'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/products' element={<Products/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/product/:id' element={<ProductDetails/>}></Route>
              {/* <Route path='/shipping' element={<Address/>}></Route> */}
              <Route path='/payment' element={<Payment/>}></Route>
             
        </Routes>
    </div>
  )
}

export default AllRoutes
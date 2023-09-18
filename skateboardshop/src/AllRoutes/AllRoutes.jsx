import React from 'react'
import {Routes, Route} from "react-router-dom"

import Login from '../pages/Login'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import HomePage from '../pages/Home/HomePage'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/products' element={<Products/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
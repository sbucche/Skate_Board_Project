import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    
    if(!localStorage.getItem('token'))
    {
      navigate('/Login');
    }
    
  },[navigate])
  return (
    <div className='logout'>
      <p>Cart</p>
      <button onClick={()=>{

localStorage.removeItem('token');
  navigate('/Login');;
}} >Logout</button>
    </div>
  )
}

export default Cart
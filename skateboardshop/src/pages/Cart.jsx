import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../redux/CartReducer/action'


const Cart = () => {
  const {isLoading,isError,cartData}=useSelector((store)=>store.reducer)
  const dispatch=useDispatch()
  console.log("id",cartData)

  useEffect(()=>{
    dispatch(getCartAction())
    console.log("1")
  },[dispatch])


  return (
    <div>
      <h1>Cart</h1>
      {cartData?.map((el)=>(
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
          </div>
      ))}
    </div>
  )
}

export default Cart
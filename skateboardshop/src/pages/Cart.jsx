import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../redux/CartReducer/action'
import Row from '../components/Row'


const Cart = () => {
  const {isLoading,isError,cartData}=useSelector((store)=>store.reducer)
  const dispatch=useDispatch()
  // console.log("id",cartData)

  const cartProducts=cartData.filter(el=>el.quantity>=1);
  
  // console.log("filter",cartProducts)
  useEffect(()=>{
    dispatch(getCartAction())
    // console.log("1")
  },[dispatch])

  
  return (
    <div>
      <h1>Cart</h1>
      {/* {cartData?.map((el)=>(
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
            <button>Remove</button>
          </div>
      ))} */}
      
      {
        cartProducts?.map((el)=>(
          <Row data={el} key={el.id}/>
        ))
      }
    </div>
  )
}

export default Cart
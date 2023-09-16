import React, { useEffect, useState } from 'react'
import { deleteData, getCartAction, updateData } from '../redux/CartReducer/action'
import { useDispatch } from 'react-redux';

const Row = ({data}) => {
    const {id,title,image,price,quantity}=data;
    const [qty,setQty]=useState(quantity);

    const dispatch=useDispatch()

    const handleAdd=(inc)=>{
        console.log("q",inc)
        const payload={
            ...data,quantity:inc
        }
        dispatch(updateData(id,payload)).then(()=>dispatch(getCartAction()))
    }
    
    const handleSub=(inc)=>{
        console.log("q",inc)
        const payload={
            ...data,quantity:inc
        }
        dispatch(updateData(id,payload)).then(()=>dispatch(getCartAction()))
    }

    const handleDelete=()=>{
        // dispatch(deleteData(id)).then(()=>dispatch(getCartAction()));
        // console.log("delete")
        const payload={
            ...data,quantity:0
        }
        dispatch(updateData(id,payload)).then(()=>dispatch(getCartAction()))
    }

  return (
    <div>
        <h1>{id}</h1>
        <img src={image} alt="" style={{width:"10%",height:"10%"}}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <h3>{quantity}</h3>
        <div>
            <button onClick={()=>handleSub(quantity-1)}>-</button>
            <button onClick={()=>handleAdd(quantity+1)}>+</button>
        </div>
        <button onClick={()=>handleDelete()}>Remove</button>
    </div>
  )
}

export default Row
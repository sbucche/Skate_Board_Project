import React, { useEffect, useState } from 'react'
import { deleteData, getCartAction, updateData } from '../redux/CartReducer/action'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Table } from '@mui/material';

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
        {/* <h1>{id}</h1>
        <img src={image} alt="" style={{width:"10%",height:"10%"}}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <h3>{quantity}</h3>
        <div>
            <button onClick={()=>handleSub(quantity-1)}>-</button>
            <button onClick={()=>handleAdd(quantity+1)}>+</button>
        </div>
        <button onClick={()=>handleDelete()}>Remove</button> */}
        <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                  <hr />
                </tr>
                <tbody>
                  <>
                  <tr>
                          <td>
                            {/* <NavLink to={`/cart/${id}`}>
                                  <img src={image} alt="" style={{width:"5rem",height:"5rem"}}/>
                            </NavLink> */}
                            <img src={image} alt="" style={{width:"5rem",height:"5rem"}}/>
                          </td>
                          <hr />
                          <td>
                            <p>{title}</p>
                            <p>Price:₹ {price}</p>
                            <p>Quauntity: {quantity}</p>
                            <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                          </td>
                          <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}}>
                                <i className='fas fa-trash largetrash'></i>
                          </td>
                        </tr>
                  </>
                  <p className='text-center'>300</p>
                </tbody>
              </thead>
              
          </Table>
        <tr>
                          <td>
                            {/* <NavLink to={`/cart/${id}`}>
                                  <img src={image} alt="" style={{width:"5rem",height:"5rem"}}/>
                            </NavLink> */}
                          </td>
                          <hr />
                          <td>
                            <p>{title}</p>
                            <p>Price:₹ {price}</p>
                            <p>Quauntity: {quantity}</p>
                            <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                          </td>
                          <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}}>
                                <i className='fas fa-trash largetrash'></i>
                          </td>
                        </tr>


    </div>
  )
}

export default Row
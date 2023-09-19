import React, { useEffect, useState } from 'react'
import { deleteData, getCartAction, updateData } from '../redux/CartReducer/action'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Avatar, Box, Button, Divider, Paper, Table, Typography, colors  } from '@mui/material';

const Row = ({data}) => {
    const {id,title,image,price,quantity}=data;
    const [qty,setQty]=useState(null);

    const dispatch=useDispatch()
    // console.log("row",data)
    const handleAdd=(inc)=>{
        // console.log("q",inc)
        const payload={
            ...data,quantity:inc
        }
        dispatch(updateData(id,payload)).then(()=>dispatch(getCartAction()))
    }
    
    const handleSub=(inc)=>{
        // console.log("s",inc)
        const payload={
            ...data,quantity:inc
        }
        dispatch(updateData(id,payload)).then(()=>dispatch(getCartAction()))
    }

    const handleDelete=()=>{
        // dispatch(deleteData(id)).then(()=>dispatch(getCartAction()));
        console.log("delete")
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
        
        
        {/* {data?.map((el)=>(
                <Box >
                  <Box display="flex" sx={{pt:2,pb:2}} alignItems="start" justifyContent={"space-between"}>
                    <Avatar src={el.image} sx={{width:96,height:96,mr:2}}/>
                    <Box >
                      <Typography variant='p' sx={{cursor:'pointer'}}>{el.title}</Typography>
                    </Box>
                    <Typography variant='body1' justifyContent={"end"} color={"#969697"} sx={{cursor:'pointer'}}>₹{el.price}</Typography>
                  </Box>
                  
                  <div >
                  <Typography variant='body1'  sx={{ml:22 ,cursor:'pointer'}}>QUANTITY : 
                  <i class="fa-solid fa-plus" onClick={()=>handleAdd(el.quantity+1)}></i>
                      {" "+el.quantity+"  "}
                      <i class="fa-solid fa-minus"></i>
                    <Typography variant='p' color={'#db363d'} sx={{width:70,height:20 ,pl:5,cursor:'pointer'}}>Remove</Typography>
                      </Typography>
                  </div>
                  <hr/>
                </Box>
              ))} */}


                              {/* Row */}
                              <Box >
                  <Box display="flex" sx={{pt:2,pb:2}} alignItems="start" justifyContent={"space-between"}>
                    <Avatar src={image} sx={{width:96,height:96,mr:2}}/>
                    <Box >
                      <Typography variant='p' sx={{cursor:'pointer'}}>{title}</Typography>
                    </Box>
                    <Typography variant='body1' justifyContent={"end"} color={"#969697"} sx={{cursor:'pointer'}}>₹{price}</Typography>
                  </Box>
                  
                  <div >
                  <Typography variant='body1'  sx={{ml:22 ,cursor:'pointer'}}>QUANTITY : 
                  <i class="fa-solid fa-plus" onClick={()=>handleAdd(quantity+1)}></i>
                      {" "+quantity+"  "}
                      <i class="fa-solid fa-minus" onClick={()=>handleSub(quantity-1)}></i>
                    <Typography variant='p' color={'#db363d'} sx={{width:70,height:20 ,pl:5,cursor:'pointer'}} onClick={()=>handleDelete()}>Remove</Typography>
                      </Typography>
                  </div>
                  <hr/>
                </Box>
    </div>
  )
}

export default Row
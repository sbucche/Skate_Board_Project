import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../redux/CartReducer/action'
import Row from '../components/Row'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Button, Divider, Paper, Table, Typography, colors } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
// import Home from './HomePage'

const Cart = () => {
  const theme = useTheme();
  

  const { isLoading, isError, cartData } = useSelector((store) => store.reducer)
  const dispatch = useDispatch()
  console.log("id", cartData)
  // console.log("cart",getdata)
  // const {id,title,image,price,quantity}=getdata;
  let total=0;
 console.log(cartData)
 cartData.map((ele) => {
    total = total + ele.price * +ele.quantity
 })


  

  const cartProducts = cartData.filter(el => el.quantity >= 1);

  // console.log("filter",cartProducts)
  useEffect(() => {
    dispatch(getCartAction())
    // console.log("1")
  }, [dispatch])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer open={true}
      anchor='right'
      PaperProps={{
        sx: {
          width: 500,
          borderRadius: 0,
        },

      }}
    >
      {/* <h1>My Cart</h1> */}
      <div>
        <Box bgcolor={"#e6e6e6"} align="center">

          <Box display={'flex'} justifyContent={'space-between'} sx={{ p: 1, p: 1 }}>

            <Typography variant='h4' color={"#3b3a3c"} align={'center'}>Your Bag</Typography>
            <Link to={"/"}>

              <i class="fa-solid fa-xmark" color='none'></i>
            </Link>
          </Box>
          <Paper
            elevation={0}
            sx={
              {
                mt: 2,
                padding: 4
              }
            }
          >
           
            {cartProducts.map((el) => (
              <Row data={el} />
            ))}
            {/* <Row data={cartProducts}/> */}
          </Paper>
          {
             
          }
          <div>
              <h3>Total Price : {total}</h3>
          </div>
          <Link to='/payment'><Button sx={{ mt: 4 }} variant='contained' >Proceed to payment</Button></Link>
        </Box>
      </div>
    </Drawer>
    // <div>
  
  )
}

export default Cart
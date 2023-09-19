import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../redux/CartReducer/action'
import Row from '../components/Row'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Button, Divider, Paper, Table, Typography, colors } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
import Home from './HomePage'

const Cart = () => {
  const theme = useTheme();


  const { isLoading, isError, cartData } = useSelector((store) => store.reducer)
  const dispatch = useDispatch()
  console.log("id", cartData)
  // console.log("cart",getdata)
  // const {id,title,image,price,quantity}=getdata;


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
            {/* {cartProducts?.map((el)=>(
                <Box >
                  <Box display="flex" sx={{pt:2,pb:2}} alignItems="start" justifyContent={"space-between"}>
                    <Avatar src={el.image} sx={{width:96,height:96,mr:2}}/>
                    <Box >
                      <Typography variant='p' sx={{cursor:'pointer'}}>{el.title}</Typography>
                    </Box>
                    <Typography variant='body1' justifyContent={"end"} color={"#969697"} sx={{cursor:'pointer'}}>₹{el.price}</Typography>

                  </Box>
                  
                  <div >
                  <Typography variant='body1'  sx={{ml:22 ,cursor:'pointer'}}>QUANTITY : <i class="fa-solid fa-plus"></i>
                      {" "+el.quantity+"  "}
                      <i class="fa-solid fa-minus"></i>
                    <Typography variant='p' color={'#db363d'} sx={{width:70,height:20 ,pl:5,cursor:'pointer'}}>Remove</Typography>
                      </Typography>
                  </div>
                  <hr/>
                </Box>
              ))} */}
            {cartProducts.map((el) => (
              <Row data={el} />
            ))}
            {/* <Row data={cartProducts}/> */}
          </Paper>
          <Button sx={{ mt: 4 }} variant='contained'>Proceed to payment</Button>
        </Box>
      </div>
    </Drawer>
    // <div>
    //   <h1>Your Bag</h1>
    //   {/* {cartData?.map((el)=>(
    //       <div key={el.id}>
    //         <img src={el.image} alt="" />
    //         <h3>{el.title}</h3>
    //         <p>{el.price}</p>
    //         <div>
    //           <button>+</button>
    //           <button>-</button>
    //         </div>
    //         <button>Remove</button>
    //       </div>
    //   ))} */}

    //   {/* {
    //     cartProducts?.map((el)=>(
    //       <Row data={el} key={el.id}/>
    //     ))
    //   } */}




    //   <Table>
    //           <thead>
    //             <tr>
    //               <th>Photo</th>
    //               <th>Restaurant Name</th>
    //               <hr />
    //             </tr>
    //             <tbody>
    //               {
    //                 cartData.map((el)=>(
    //                   <>
    //                     <tr>
    //                       <td>
    //                         <NavLink to={`/cart/${el.id}`}>
    //                               <img src={el.image} alt="" style={{width:"5rem",height:"5rem"}}/>
    //                         </NavLink>
    //                       </td>
    //                       <hr />
    //                       <td>
    //                         <p>{el.title}</p>
    //                         <p>Price:₹ {el.price}</p>
    //                         <p>Quauntity: {el.quantity}</p>
    //                         <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
    //                           <i className='fas fa-trash smalltrash'></i>
    //                         </p>
    //                       </td>
    //                       <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}}>
    //                             <i className='fas fa-trash largetrash'></i>
    //                       </td>
    //                     </tr>
    //                   </>
    //                 ))
    //               }
    //               <p className='text-center'>300</p>
    //             </tbody>
    //           </thead>

    //       </Table>
    // </div>

  )
}

export default Cart
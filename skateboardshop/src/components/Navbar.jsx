import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Avatar, Tab, Tabs, useMediaQuery , useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';
import {useAuth0} from "@auth0/auth0-react" // import Products from '../pages/Products';
// const middleLinks = ["","login","products","cart" ]
//const middleLinks = ["SURFSCATES", "EXTRAS" , "CLOTHES AND ACCESSORIES", "SALE"]
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonIcon from '@mui/icons-material/Person';
const Navbar = ({middleLinks}) => {
  
  const [midvalue, setMidValue] = useState(null);
  const [endvalue, setEndValue] = useState(null);


  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.between("xs","md"))

  const { user,loginWithRedirect , isAuthenticated } = useAuth0();

  console.log(user)
  console.log(isAuthenticated)
  //console.log(theme)
  //console.log(isMatch)
  
  
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgb(53,53,53)"}}>
      <Toolbar>
        {isMatch ? (
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              placeItems: "center",
              height: 95,
            }}
          >
            <Grid item xs={4}>
              <DrawerComp middleLinks={middleLinks} />
            </Grid>

            <Grid item xs={4}>
              <Link to={"/"}>
                <Avatar
                  sx={{ width: 115, height: 25, opacity: 0.7 }}
                  variant="square"
                  alt="carver"
                  src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/carver-logo-header.png"
                />
              </Link>
            </Grid>
            <Grid item sx={4}>
              <Tabs value={0} textColor="white" indicatorColor="secondary">
                <Tab
                  label="Bag"
                  LinkComponent={Link}
                  to={`/cart`}
                  sx={{ opacity: 0.7 }}
                />
              </Tabs>
            </Grid>
          </Grid>
        ) : (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              placeItems: "center",
              height: 95,
            }}
            container
          >
            <Grid item xs={4}>
              <Link to={"/"}>
                <Avatar
                  sx={{ width: 280, height: 60, opacity: 0.7 }}
                  variant="square"
                  alt="carver"
                  src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/carver-logo-header.png"
                />
              </Link>
            </Grid>
            {/* to={`/${ele.path}`} */}
            <Grid item xs={5}>
              <Tabs
                value={midvalue}
                textColor="white"
                indicatorColor="secondary"
                onChange={(e, val) => setMidValue(val)}
              >
                {middleLinks.map((ele) => (
                  <Tab
                    key={ele.tab}
                    label={ele.tab}
                    LinkComponent={Link}
                    to={isAuthenticated ? `/${ele.path}` : "/"}
                    sx={{ opacity: 0.7, fontSize: "13px" }}
                    onClick={()=> setEndValue(null)}
                  />
                ))}
              </Tabs>
            </Grid>

            {/* <Grid item xs={1} /> */}

            <Grid item xs={3}>
              <Tabs
                value={endvalue}
                textColor="white"
                indicatorColor="secondary"
                onChange={(e, val) => setEndValue(val)}
              >  
                <Tab label={isAuthenticated? "LOGOUT" : "SIGNIN"} onClick={()=> loginWithRedirect()} sx={{ opacity: 0.7, fontSize: "13px" }}/>        
                <Tab label={<FavoriteBorderIcon/>} LinkComponent={Link} sx={{ opacity: 0.7, fontSize: "13px" }}/>
                <Tab label={<ShoppingCartIcon/>} LinkComponent={Link} to={isAuthenticated ? `/cart` : "/"} sx={{ opacity: 0.7, fontSize: "13px" }}/>          
                <Tab label={isAuthenticated? <PersonIcon/> : <PersonOffIcon/>} sx={{opacity:0.7}}/>
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  ); 
}

export default Navbar





// const endLinks = [
//   {
//     tab: "SEARCH",
//     path: "sdf",
//   },
//   {
//     tab: "WISHLIST",
//     path: "dfg",
//   },
//   {
//     tab: "BAG",
//     path: "cart",
//   },
// ];
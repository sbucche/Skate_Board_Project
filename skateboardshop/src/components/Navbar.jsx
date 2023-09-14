import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Avatar, Tab, Tabs, useMediaQuery , useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';

// import Products from '../pages/Products';
// const middleLinks = ["","login","products","cart" ]
//const middleLinks = ["SURFSCATES", "EXTRAS" , "CLOTHES AND ACCESSORIES", "SALE"]

const Navbar = ({middleLinks, endLinks}) => {
   
  const [midvalue, setMidValue] = useState(null);
  const [endvalue, setEndValue] = useState(null);


  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.between("xs","md"))

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
                    to={`/${ele.path}`}
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
                {endLinks.map((ele) => (
                  <Tab
                    key={ele.tab}
                    label={ele.tab}
                    LinkComponent={Link}
                    to={`/${ele.path}`}
                    sx={{ opacity: 0.7, fontSize: "13px" }}
                    onClick={()=> setMidValue(null)}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  ); 
}

export default Navbar
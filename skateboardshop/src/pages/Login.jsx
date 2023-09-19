// // import React from 'react'
import  React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';


const Address = () => {
  const intialState={firstName:"",lastName:"",address1:"",address2:"",city:"",state:"",zip:"",country:""}
 
  const [userInfo,setUserInfo]=useState(intialState) 
  const [isSubmit,setIsSubmit]=useState(false)

  const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the corresponding field in userInfo
        setUserInfo({ ...userInfo, [name]: value });
        console.log(userInfo);
        
      };
    
  

  const handlePay=()=>{
    if(userInfo.firstName===''||userInfo.lastName===''||userInfo.address1===''||userInfo.address2===''||userInfo.city===''||userInfo.state===''||userInfo.zip===''||userInfo.country===''){
      alert(`Fill all Fields`)
    }else{
      alert(`Payment Sucess`)
    }
  }
  

  return (
    // <div>Login</div>
    // <form action="">
    //     <label htmlFor="">Name</label>
    //     <input type="text" value={userInfo.firstName} onChange={handleChange}/>
    //   </form>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={userInfo.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={userInfo.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={userInfo.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={userInfo.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={userInfo.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={userInfo.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Box display={'flex'} align={'center'}>

        <Button sx={{mt:5 ,ml:5}} variant='contained' onClick={handlePay}>Pay Now</Button>
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Address


// Import necessary dependencies
// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Box, Button } from '@mui/material';

// // Define the Login component
// const Login = () => {
//   // Initialize the state for user information
//   const initialState = {
//     firstName: "",
//     lastName: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   };

//   // Set up state variables and their initial values
//   const [userInfo, setUserInfo] = useState(initialState);

//   // Handle changes in form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Update the corresponding field in userInfo
//     setUserInfo({ ...userInfo, [name]: value });
//     console.log(userInfo);
//   };

//   // Handle payment action
//   const handlePay = () => {
//     alert(`Payment Success`);
//   };

//   // Render the Login component
//   return (
//     // Start of JSX code
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Payment Page
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//             value={userInfo.firstName}
//             onChange={handleChange} // Call handleChange when input changes
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//             value={userInfo.lastName}
//             onChange={handleChange}
//           />
//         </Grid>
//         {/* More form fields */}
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid>
//         <Box display={'flex'} align={'center'}>
//           <Button sx={{ mt: 5, ml: 5 }} variant='contained' onClick={handlePay}>
//             Pay Now
//           </Button>
//         </Box>
//       </Grid>
//     </React.Fragment> // End of JSX code
//   );
// };

// // Export the Login component
// export default Login;
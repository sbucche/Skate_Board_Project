import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Typography,
  Grid,
  Card,
  Button,
  CardContent,
  Box,
  Alert,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductDetails = () => {
  const [prData, setPrData] = useState({});
  const { id } = useParams(); // Destructure id from useParams()

  const getProductData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/products?id=${id}`);
      let data = res.data;

      const [item] = data;
      setPrData(item);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
console.log(prData)
  useEffect(() => {
    getProductData();
  }, [id]);

  const handleAddToBag = async() => {

    // const existingItems = await axios.post(`https://skateboardapi.onrender.com/cart`,prData)
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (existingItems.includes(prData)) {
      alert("Product already added to cart");
    } else {
      existingItems.push(prData);
      localStorage.setItem("cartItems", JSON.stringify(existingItems));
      alert("Product added to cart!");
    }
    
  };
  return (
    <>
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: "none" }}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={prData.image}
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div>
                  
                </div>
                {/* Carousel controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                  sx={{ backgroundColor: "black" }} 
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                  sx={{ backgroundColor: "black" }} 
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "rgb(230,230,230)",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent>
                <br />
                <br />
                <Typography variant="h4" align="center">
                  {prData.title}
                </Typography>
                <br />
                <Typography variant="h7" align="left">
                  ${prData.price}.00
                </Typography>
                <br />
                <br />
                <Button
                  onClick={handleAddToBag}
                  variant="contained"
                  color="success"
                  sx={{
                    display: "block", margin: "0 auto", width: '100%', backgroundColor: 'black', color: 'white',
                    "&:hover": {
                      backgroundColor: "rgb(135,206,30)", // Background color on hover
                    },
                  }}
                >
                  ADD TO CART
                </Button>

                <br />
                <br />

                <Typography variant="h9">Description</Typography>
                <hr />
                <Typography variant="h7">{prData.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* </Box> */}
        </Grid>
      </div>
      {/* // How it works */}
      <br />
      <Box>
        <Card>
          
          
        </Card>
      </Box>
    </>
  );
};

export default ProductDetails;

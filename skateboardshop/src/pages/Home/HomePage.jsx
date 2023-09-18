import React, { useEffect, useState } from 'react'
import axios from "axios"
import DisplayProduct from './DisplayProduct'
import DisplayInfo from './DisplayInfo'

const HomePage = () => {
   
  const [newArrivalArr , setArrivalData] = useState([]) 
  const [lostCollection , setlostCollection] = useState([]) 

  const fetchData =  async()=>{
      
     try {
           const response1 = await axios.get(`http://localhost:8080/NewArrivals`);
           const response2 = await axios.get(`http://localhost:8080/LostCollection`);
           //console.log(response.data)
           setArrivalData(response1.data)
           setlostCollection(response2.data)

     } catch (error) {
         console.log(error)
     }

  }
  //console.log(newArrivalArr)


  useEffect(()=>{
     fetchData();
  },[])
  

  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          

          <div className="carousel-item active">
            <img
               src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/150/Web_Banner-1_1.jpg?c=1"
              className="d-block w-100"
              alt="Product"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/145/Web_Banner__2.jpg?c=1"
              className="d-block w-100"
              alt="Product"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/149/dclassic_2023-07-21_143800.113.JPG?c=1"
              className="d-block w-100"
              alt="Product"
            />
          </div>
        </div>

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
          className="carousel-control-next "
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
      <DisplayProduct newArrivalArr= {newArrivalArr} lostCollection={lostCollection}/>
      <DisplayInfo/>
    </>
  );
}

export default HomePage
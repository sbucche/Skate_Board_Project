import React from 'react'
import "./DisplayProduct.css"
const DisplayProduct = ({newArrivalArr, lostCollection}) => {
  return (
    
    <div style={{backgroundColor:"rgb(230,230,230)"}}>
         <br/>
         <p style={{fontFamily:"Montserrat,Helvetica,Arial,sans-serif", fontSize:"30px", fontWeight:"700", textAlign:"centre"}}>New Arrivals</p>
         <br/>
         <div className='arrivals' style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", width:"100%" }}>
             {
                newArrivalArr.map((item)=>(
                   <div key={item.id}>
                       <img src={item.image} alt={item.title} style={{width:"300px", height:"200px"}}/>
                       <p>{item.title}</p>
                       <p>{item.discription}</p>
                       <p>{item.price}</p>
                   </div>
                ))
             }
         </div>
         <br/>
         <p style={{fontFamily:"Montserrat,Helvetica,Arial,sans-serif", fontSize:"30px", fontWeight:"700", textAlign:"centre"}}>Lost Collections</p>
         <br/>
         <div className='arrivals' style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", width:"100%"}}>
             {
                lostCollection.map((item)=>(
                   <div key={item.id}>
                       <img src={item.image} alt={item.title} style={{width:"300px", height:"200px"}}/>
                       <p>{item.title}</p>
                       <p>{item.discription}</p>
                       <p>{item.price}</p>
                   </div>
                ))
             }
         </div>
    </div>
  )
}

export default DisplayProduct
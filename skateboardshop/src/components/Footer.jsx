import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div
      className='Main'
      style={{
        backgroundColor: "rgb(53,53,53)",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
      }}
    >
      <div className='email' style={{ padding: "20px" }}>
        <p style={{ textAlign: "left", color: "white", opacity:0.7 }}>SUBSCRIBE</p>
        <div
          className="innerContainer"
          style={{
            width: "40%",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter email here"
            style={{ height: "50px", textAlign: "center" }}
          />
          <br />
          <button
            style={{
              height: "50px",
              backgroundColor: "yellow",
              color: "black",
              border: "none",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        className='Info'
        style={{
          width: "80%",
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        <div
          className="colContainer"
          style={{
            textAlign: "left",
            color: "white",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            opacity:0.7
          }}
        >
          <ul>
            <p>COMPANY</p>
            <li>About us</li>
            <li>Team </li>
            <li>Board</li>
          </ul>
        </div>

        <div
          className="colContainer"
          style={{
            textAlign: "left",
            color: "white",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            opacity:0.7
          }}
        >
          <ul>
            <p>SUPPORT</p>
            <li>Shipping</li>
            <li>FAQ</li>
            <li>Size quide</li>
          </ul>
        </div>

        <div
          className="colContainer"
          style={{
            textAlign: "left",
            color: "white",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            opacity:0.7
          }}
        >
          <ul>
            <p>INFO</p>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div
          className="colContainer"
          style={{
            textAlign: "left",
            color: "white",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            opacity:0.7
          }}
        >
          <ul>
            <p>FOLLOW</p>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
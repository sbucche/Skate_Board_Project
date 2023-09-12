import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/login",
        title: "Login",
      },
      {
        path: "/products",
        title: "Products",
      },
      {
        path: "/cart",
        title: "Cart",
      },
    ];


  return (
    <div>
         {
             links?.map((item)=>(
                <Link to={item.path} key={item.title}>{item.title}</Link>
             ))
         }
    </div>
  )
}

export default Navbar
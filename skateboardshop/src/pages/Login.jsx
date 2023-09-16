import React from 'react'
import axios from "axios"
import {useState} from "react" ;
import {Link,useNavigate} from"react-router-dom"


const Login = () => {
  const navigate= useNavigate()
        const [email,setEmail]= useState('');
        const [password,setPassword]=useState('');
        
        const handleEmail=(e)=>{
         setEmail(e.target.value)
        }
        const handlePassword=(e)=>{
          setPassword(e.target.value)
        }
      
      const handleApi=()=>{
        console.log({email,password})
        axios.post('https://reqres.in/api/login',{
          email:email,
          password:password
        }).then(result=>{
          console.log(result.data)
          alert('succesful')
          localStorage.setItem('token',result.data.token);
          navigate('/Products');
        })
        .catch(error=>{
          console.log(error)
          alert('failed')
        })
      }
        return (
          <div className="login-page">
            
            <h1 style={{textAlign:"center"}}>Login</h1>
           <input value={email}  onChange={handleEmail}  type="text" placeholder='email' />
          <br />
           <input value={password}  onChange={handlePassword}  type="password" placeholder='password' />
          <br />
          <button onClick={handleApi}>Login</button>

            
            <br />
            <br />
             
             <div  >
             <Link style={{textDecoration: 'none'}} className="message" to="/">
               Go Back
            </Link>
             </div>



          </div>

            
     

        );
}

export default Login
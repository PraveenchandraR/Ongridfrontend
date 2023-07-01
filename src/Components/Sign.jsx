import React from 'react'
import Nav from '../Header/Nav';
import '../Style/sign.css';
import { useState } from 'react';
// import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


const Sign = () => {

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  async function login(){
    let item= {email,password}

    fetch("https://ongrid-backendnew.onrender.com/login",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res=>res.json())
      .then(data => { 
    
      if(data.status === "ok"){
        alert("login successfully")
        
        window.localStorage.setItem("token", data.data)
        window.localStorage.setItem("loggedIn", true)
        navigate('/')
        // window.location.href = "./"
      }
      else if(data.status==="error"){
        alert("failed to login invalid credentails");

      }
    })
  }
  
  
  return (
      <div className='signhome'>
          <Nav />
<br />
      <div className='signbody'>
        <div className='signbox'>
   
          <div className='signboxhead'>
          <h1> Sign-in on OnGrid</h1>    
         <h5>View, Add, Manage individuals in your community</h5> 
          
          </div>
     <div className='form'>
          <div className='formfeild' onSubmit={login}>
            <label htmlFor='email'>Email *</label><br />
            <input type='email'  required  className='in' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label htmlFor='password'>Password *</label><br />
            <input type='password' className='in' required  id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
              </div>  <div>  <button onClick={login} type='submit' className='sub'>Sign IN</button>
               
            <br />
            OR
            <br />
            <img className='google' src='https://ongrid.in/images/google-signin-button.png' alt='google' /><br />
              
            <b>Dont have Account :<Link to={'/signup'}>Signup</Link>   </b>
          </div>
         
         </div>
          </div>
        <div>
    
        
       </div>
      </div>
      <br/>
      <Footer />
    </div>
  )
}

export default Sign;
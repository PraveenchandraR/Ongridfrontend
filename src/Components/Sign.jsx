import React from 'react'
import Nav from '../Header/Nav';
import '../Style/sign.css';
import { useState } from 'react';
// import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Sign = () => {

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  async function login(){
    let item= {email,password}

    fetch("http://localhost:8080/login",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res=>res.json())
      .then(data => { 
      console.log(data)
      if(data.status==="ok"){
        alert("login successfully")
        window.localStorage.setItem("token", data.data)
        window.localStorage.setItem("loggedIn", true)
        navigate('/userdetails')
        // window.location.href = "./"
      }
      else if(data.status==="error"){
        alert("failed to login invalid credentails")
      }
    })
  }
  //    const handleSubmit = async(event)=>{
  //   event.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8080/login", { email,password})
  //     if (res && res.data.success) {
  //       // console.log(res.headers)
  //       // console.log(res.data.name)
  //       // console.log(res.data.message, res.data.user)
  //       var details = res.data.user;
  //       // console.log(details)
      
  //       alert(res.data.message);
  //       window.localStorage.setItem('token',details)
    
  //     navigate('/userdetails')
  //     }
  //     else {
  //       alert(res.data.message);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //      }
       
  // }
  return (
      <div>
          <Nav />

      <div className='signbody'>
        <div className='signbox'>
          <div className='signboxhead'>
          <h1> Sign-in on OnGrid</h1>    
         <h5>View, Add, Manage individuals in your community</h5> 
          
          </div>
          <hr />
          <br />
          <div className='form' onSubmit={login}>
            <label>Email *</label>
            <input type='email'  required name='email' className='in' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Password *</label>
            <input type='password' className='in' required name='passwword' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br ></br>
            <button onClick={login} type='submit' className='sub'>Sign IN</button>
            <br />
            OR
            <br />
            <img className='google' src='https://ongrid.in/images/google-signin-button.png' alt='google'/>
          </div>


          </div>
        <div>
    
          {/* {details.map((item) => {
            return (
            <div></div>
          )
        })} */}
       </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sign;
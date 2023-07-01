import React, { useState } from "react";
// // import axios from "axios";
import Nav from "../Header/Nav";
import '../Style/sign.css';
import { useNavigate } from "react-router-dom";



// import {  useNavigate } from "react-router-dom";


function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // const Routeto = useNavigate();

  async function signUp()
  {
    let item = { name, phone, email, password }

           await fetch("http://localhost:8080/signup",
      {
                  method: "POST",
                  body: JSON.stringify(item),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
                })
             .then(res => res.json())
             .then(data => {
                    
                    if (data.status === "ok")
                    {
                      alert("signedUP successfully");
                      window.location.href = './login';
         
                    }
                     
                    else
                    {
                      alert("User already exist")
                    }
                   
                  })
  }
 
  
  // useEffect(() => {
  //   signUp();

  // }, []);

  
    return (
      <div>
        <Nav />
        <div id="signupbody">
        <div className="signuppage">
          <h1>Sign Up to On_Grid</h1>
        </div><br />
        <div className="signupform">
        
               
                    <label htmlFor="myname">Name</label><br />
                    <input type="text" required placeholder="Please enter your name"  id="myname" value={name} onChange={(e)=>setName(e.target.value)} /><br />
                    
              <label htmlFor="phone">Phone</label><br />
                   <input type="text" required placeholder="enterr you contact number" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />    <br />
             
              <label htmlFor="email">Email</label><br />
                    <input type="text" required placeholder="enter you email id"   id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
              
              <label htmlFor="password" >Password</label><br />              
                    <input type="password" required placeholder="enter you password"  id="password"  value={password}  onChange={(e)=>setPassword(e.target.value)}/>    <br />
              <br />  <button className="sub" type="submit" onClick={signUp}  >Sign UP</button>
               
       
          </div>
      </div>
        
        </div>
    )
}
export default Signup;
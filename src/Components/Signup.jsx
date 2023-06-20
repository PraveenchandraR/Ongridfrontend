import React, { useState } from "react";
// // import axios from "axios";
import Nav from "../Header/Nav";
import '../Style/sign.css';
import {  useNavigate } from "react-router-dom";


function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function signUp() {
    let item = { name, phone, email, password }

    await fetch("http://localhost:8080/signup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") {
          alert("signedUP successfully")
          navigate('/login')
          // window.location.href = "./login"
        } else {
          alert("invalid credentails please try again")
        }
      })
  }

  //  const handleSubmit = async(event)=>{
  // event.preventDefault();
  // try {
  //   const res = await axios.post("http://localhost:8080/signup", {name, email, phone,password})
  //   if (res && res.data.success) {
  //     console.log(name);
  //     alert(res.data.message);
  //      navigate('/login')
  //   }
  //   else {
  //     alert(res.data.message);
  //   }
  // } catch (error) {
  //   alert(error.message);
  //    }
      

  
    return (
      <div>
        <Nav />
        <div className="signuppage">
          <h1>Sign Up to On_Grid</h1>

        <div className="signupform">
            <form onSubmit={signUp}>
               
                    <label htmlFor="myname">Name</label><br />
                    <input type="text" required placeholder="Please enter your name" name="name" id="myname" value={name} onChange={(e)=>setName(e.target.value)} /><br />
                     <label htmlFor="phone">Phone</label><br />
                
                   <input type="text" required placeholder="enterr you contact number" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />    <br />
                     <label htmlFor="email">Email</label><br />
                    <input type="text" required placeholder="enter you email id" name="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                     <label >Password</label><br />
                    <input type="text" required placeholder="enter you password" name="email" value={password}  onChange={(e)=>setPassword(e.target.value)}/>    <br />
                <button className="sub" type="submit" onSubmit={signUp}>Sign UP</button>
               
       
          </form>
          </div>
        </div>
        
        </div>
    )
}
export default Signup;
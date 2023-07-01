// import React from 'react'
// // import { Link } from 'react-router-dom';

// import {HashLink as Link} from  "react-router-hash-link";


// import '../Style/style.css';

// const Nav = () => {
//   return (
//     <div className='navbody'>
//       <div className='nav'>
//        <div> <img className='logo' src='https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png' alt='logo' /></div>
//       <Link className='link' smooth to={'/'}>Home</Link >
//         <Link className='link' smooth to={'/#whygrid'} >WhyGrid</Link>
       
//         <Link className='link' smooth to={'/#business'}>Business</Link>
//         <Link className='link' smooth to={'/faq'}>FaQ</Link>
         
        
//         <div className='nav2'>
//           <Link className='link' to={'/signup'}>Signup</Link>
//           <Link className='link' to={'/bookdemo'}>BookDemo</Link>
//           <Link className='link' smooth to={'/signin'}>Signin</Link></div>
     
    
// </div>
//     </div>
//   )
// }

// export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import Collapsible from "react-collapsible";
import '../Style/nav.css';
// import { useAuth } from "../HOOK/Auth";

const Header = () => {
  const [details, setDetails] = useState([]);
  const [profile, SetProfile] = useState(false);
    const fetchfunc = () => {
        fetch("http://localhost:8080/userdetails", {
    method: "POST",
    body:  JSON.stringify({ token: window.localStorage.getItem("token") }),
        
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
      
  })
    .then(res =>  res.json())
    .then((e) =>
      setDetails(e.data));
  
  }
  
    useEffect(
        () => {
            fetchfunc();
        },[]
  )
   const afterlogged = window.localStorage.getItem("loggedIn");
 
     
 const handleProfilePop=()=>{
     SetProfile(!profile);
    }

  const logout=()=>{
        window.localStorage.clear();
      window.location.href = "./"
      alert("successfully logged-out");
    }

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navhead">
        <div className="container" id="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#whygrid" >
                  Why OnGrid
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#ourOfferings">
                  Our Offerings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#business" >
                  Businesses
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQs
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {afterlogged ?  <li className="nav-item">
           
                <NavLink className="nav-link" to='/bookdemo'>
                  Book a Demo
                </NavLink>
              </li>:"" }
            
         
              <br />
              {afterlogged ? '':
              <li  > <NavLink className="nav-link" to='/login'>Sign-in</NavLink></li>
              }
                 {afterlogged ? <b className="proname nav-link  " id="proname">Hi {details.name} </b>: ''}
              {afterlogged ?  <li className="nav-link"> <div id="Collapsiblepro"> <Collapsible trigger={<button className="profileicon" onClick={handleProfilePop}>
                <i class="fa-regular fa-user"></i></button>}>
                {
                profile && (
                
          <button onClick={logout}>Logout</button>
      )
           }
        </Collapsible></div></li>: ''}
            
                     

              </ul>
           </div>
   </div>
          
      </nav>
    </>
  );
};

export default Header;

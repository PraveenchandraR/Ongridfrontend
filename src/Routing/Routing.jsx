import React from 'react'
import {  Routes, Route } from 'react-router-dom';

// import FaQ from '../Components/FaQ';
import Sign from '../Components/Sign';
import Home from '../Components/Home';
// import Uniqueid from '../Components/utility/uniqueid';
import Signup from '../Components/Signup';
import Bussiness from '../Components/Bussiness';
import About from '../Components/Footer/About';
import Contact from '../Components/Footer/Contact';
import Career from '../Components/Footer/Career';
import TermsAnd from '../Components/Footer/TermsAnd';
import Faq from '../Components/FAQs';
import BookDemo from '../Components/BookDemo';





const Routing = () => {
   
  const afterlogged = window.localStorage.getItem("loggedIn");
  
 
  return (
 
      <Routes>
        <Route path='/' element={<Home /> } />
     
        <Route path='/business' element={<Bussiness /> } />
      <Route path='/faq' element={<Faq />} />
      <Route path='/bookdemo' element={ <BookDemo />} />
      {/* <Route path='/bookdemo' element={afterlogged ?<BookDemo />:<Sign /> } /> */}
        <Route path='/login' element={afterlogged ?<BookDemo />:<Sign />} />
        <Route path='/signup' element={ <Signup />} />
       
         <Route path='/about' element={<About />} />
        
         <Route path='/contact' element={<Contact  />} />
        
         <Route path='/career' element={<Career  />} />
        <Route path='/tnc' element={<TermsAnd />} />
     
        
      {/* <Route path='/#business/${id}'/> */}
        
      </Routes>
 
  )
}

export default Routing;
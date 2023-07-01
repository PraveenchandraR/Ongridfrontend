import React, { useState } from 'react';

import '../Style/demo.css';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';


const BookDemo =()=>
{
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('')
  const [known, setKnown] = useState('');
  
   const navigate = useNavigate();

          async function BookingDemo()
          {
            let demoform = { name, phone, email, organisation,known }
        
           await fetch("https://ongrid-backendnew.onrender.com/bookdemo", {
                          method: "POST",
                          body: JSON.stringify(demoform),
                          headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                          }
                        })
                          .then(res => res.json())
                          .then(data => {
                            if (data.status === "ok")
                            {
                          
                              alert("Demo Booked successfully");
                              window.localStorage.setItem("demobooked", true);
                              navigate('/')
                             
                              // window.location.href = "./login"
                            }
                            else
                            {
                              alert("invalid credentails please try again")
                            }
                          })
          }  
  const demobooked=window.localStorage.getItem('demobooked')
  // const handleSubmit = async(event)=>{
  //   event.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8080/bookDemo", { name, email, phone, organisation, known },
  //       // {
  //       // //   headers: {
  //       // //     'Content-Type': 'application/json',
  //       // //     Authorization: `Bearer ${localStorage.getItem('token')}`, // Retrieve the token from localStorage
  //       // //   }
  //       // // }
  //       )
  //     if(res && res.data.success){
  //       alert(res.data.message);
      
  //       navigate('/')
  //     } 
      
  //   } catch (error) {
  //    alert(error.message);
  //   }
    
  // }

  return (
    <div className='DemoPage'>

         
     
      <div className='demobody'>
        <div className='logo2'><Link to={'/'}> <img className='demologo' src='https://ongrid.in/images/home/logo/logo_white.png' alt='logo' /></Link>
       
        </div >
        <div className='demosection2'>
             <div className='demoleft'>
          <div >
            <div className='text'>
              <h1 className="white" >Ensure HR compliance across organisation</h1>
         
            
              <ul>
                <li>Clients can send invites to candidates for self registration and creating their record, reducing HR/Ops work significantly.</li>
                <li>Integration of the client user/customer onboarding system or HRMS with OnGrid APIs.</li>
                <li >Pick and choose from 50+ verifications and background checks across staff categories.</li>
                <li >Reduced TAT and cost of background verifications, basic verification in less than 4 hours, including instant checks.</li>
                <li >Employee onboarding, covering digital collection of data, documents, and consent.</li>
                <li>Trusted by 2000+ clients.</li></ul>
            </div>
               
          </div>

        </div>
          <div className='demohead'>
          
          {demobooked ? <div className='demoright'>
            <h1>Thank you for getting in touch! We appreciate you contacting us.</h1>
            <br />
            <h1>One of our colleagues will get in touch with you soon!</h1>
            <br />
            <h1>Have a great day!</h1>
          </div> :
            <div className='demoright'>
              <div>
                <form className='formdatas' onSubmit={BookingDemo} >
                
               
                  
                  <label htmlFor='' data-required="true" >
                    Name</label><br ></br>
                  <input className='forminput' id="" type="text" required autoComplete='name'
                    placeholder="Please provide your name" onChange={(e) => setName(e.target.value)} />
                  <br />
                  <label htmlFor='' >Email id</label><br />
                  <input className='forminput' type='email' placeholder='Provide your email id' name='' id='email' autoComplete='email' value={email} required onChange={(e) => setEmail(e.target.value)} /><br />
           
                  <label htmlFor=''>Phone No</label><br />
                  <input className='forminput' type='tel' placeholder='Provide your Phone number'name='phone' id='' autoComplete='phone' value={phone} required onChange={(e) => setPhone(e.target.value)} /><br />
                
                  <label htmlFor=''>Organisation Name</label><br />
                  <input className='forminput' type='text' placeholder='Provide Organisation'name='organisation' id='' value={organisation} required onChange={(e) => setOrganisation(e.target.value)} /><br />
                  <label htmlFor=''  >How did you learn about OnGrid</label><br />
                  <select className='forminput' value={known} name='known' id='' onChange={(e) => setKnown(e.target.value)}>
                
                    <option disabled >Please select</option>
                    <option >Google</option>
                    <option >Linkedin</option>
                    <option >Ongrid article</option>
                    <option >Other</option>
                    <option  >Recieved email from OnGrid</option>
                    <option >Referred by an existing OnGrid client</option>
                    <option  >Referred by a friend</option>
                    <option  >I have used OnGrid before</option>
                  </select>
                    <br />
                    <br />
                  <div>
                    <button className='demobtn' type='submit' onClick={BookingDemo}>Submit</button>
                  </div>
               
                </form>
              </div>
            </div>}

        </div>
       
        </div>
        <br />
      </div>
      <div className='demodown'>
        <h4 >Incredible companies working with OnGrid</h4>
        <div className='demoimages'>
          <div className='img1'>
            <img className='demoimg' src='https://ongrid.in/images/home/logo/grofers.png' alt='' />
          </div>
          <div className='img2'>
            <img className='demoimg' src='https://ongrid.in/images/home/logo/ola.png' alt='' />
          </div>
          <div className='img3'> <img className='demoimg' src='https://ongrid.in/images/home/logo/unacademy.png' alt='' /></div>
          <div className='img4'> <img className='demoimg' src='https://ongrid.in/images/home/logo/reliance.png' alt='' /></div>
          <div className='img5'> <img className='demoimg' src='https://ongrid.in/images/home/logo/nobroker.png' alt='' /></div>
          <div className='img6'> <img className='demoimg' src='https://ongrid.in/images/home/logo/delhivery.png' alt='' /></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}
export default BookDemo;

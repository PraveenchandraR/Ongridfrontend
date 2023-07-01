

import {  useLocation, } from 'react-router-dom';
import Nav from '../Header/Nav';
import '../Style/style.css';
import  Bussiness  from './Bussiness';
import Section4 from './section4';
import { HashLink as Link } from 'react-router-hash-link';
import Footer from './Footer';
import { useState } from 'react';


const Home = () => {
 
  
  const Location = useLocation();
  const [display, setDisplay] = useState(false);
  const [businesdisplay, setBusinessDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(!display);
    setBusinessDisplay(!businesdisplay)
  }
  const afterlog =window.localStorage.getItem("loggedIn")

  return (
    <>
      <div className='thehome'>
    <Nav />
      <div className='Home'>
    
      <div className='homebody'>

        <div className='section1' >
          
        <div className='introtext'>
        <h1>DIGITAL TRUST PLATFORM</h1>  
         <p> Empowering employers and service providers through comprehensive identity and background
         verifications for ensuring trust and accountability, and for achieving HR/ISO compliance.</p>
            <br />
                <br />
                <div>
                    {afterlog ? "": <Link    className='start' to={'/signup'}>Get Started</Link>}
                </div>
        
            
          </div>      
      </div >
        <hr className='hr'></hr>
       
      <section className='section2' >
          <div className='sec2para'>
            Millions of people are a step away from entering the formal digital economy.
              They will need access to formal services such as jobs, education, healthcare, loans, insurance products,
              house/vehicle on rent, etc.
              This transformation is possible with employers and service providers
              being able to establish trust through identity and background verifications. OnGrid offers 50+ background checks,
              and also leverages a repository of verified information in a secure locker, with the consent of an individual, for achieving this.
    </div>
        </section>
        
        <section className='section3' id='whygrid' >
          <div id='sec3head'>
            <h1 className=' sectionheading'>Why OnGrid</h1> <br />
              <hr id='hr'></hr>
            <p className='sectionintro'>OnGrid is the fastest growing ISO-certified digital platform for background verifications and checks, serving over 2000+ clients, and having run over 100 million checks. OnGrid's advanced methodologies and proprietary algorithms across 50+ checks brings what you are really expecting from your BGV partner - high efficacy and accuracy, lesser TAT, lesser cost,
              and hassle-free experience for HR/TA or operations managers running the verification process.</p>
          </div>
          <br />
        <div className='boxes1'>
            <div className='sector3 box1' >
              <div className="secondaryColour mobile" id="leveragesAadhaarMobile">
                <b className="heading">Cutting edge approach</b><br />
                State-of-art portal and APIs<br />
                Pick and choose checks<br />
                Digital candidate file created for compliance and audit<br />
                Multi-modal information exchange options<br />Multi-modal consent options
              </div>
                  </div>
          <div className='sector3 box2' >Comprehensive and Customizable<br />
        - Verification Solutions <br />
      -  ID and address verification<br />
        -  Education and Employment verification<br />
        -  Reference Checks<br />
        -  Police and Court record verification<br />
        -  Global database checks, credits checks</div>
            <div className='sector3 box3' ></div>
          </div>
          
      
          <div className='boxes2'>
          <div className='sector4 box4' ></div>
          <div className='sector4 box5' ></div>
            <div className='sector4 box6' >
              <b>Asset-reuse</b><br />
              - Allows candidate to provide electronic <br /> consent to an employer or service provider to<br />
              access her/his information, documents, verification reports, and references
            </div>
            <div className='sector4 box7' >
              <b>Partner of choice, fastest to reach</b> <br />
- 10 million+ people verified <br />
- 100 million+ checks conducted <br />
- 2000+ happy clients <br />
- 50+ configurable <br />
          </div>
            <div className='sector4 box8' >
              <ul >
                <li><b>Access, Wherever, However</b></li>
              <li>Unlimited organization users</li>
              <li>ntuitive portal access for real time verification updates</li>
              <li>Configure reports - who gets them, which reports, how frequently</li>
                <li></li>APIs for integrating with</ul>
            </div>
            <div className='sector4 box9' ></div>
            </div>
        </section>
        <section id='section4'>
          <div id='ourOfferings'>
           <Section4 />
          </div>
         
            </section>
        <section className='section5' id='business' >
          <div className='sec5top'>
          <h1 className=' section5heading'>Businesses</h1>
              <hr id='sec5hr'></hr> <br></br>
          <p className='section5intro'>OnGrid provides comprehensive background verification services that can be
              customized to any requirement for any industry. Every business has a different purpose for verification and compliance, and hence we offer tailor-made solutions for your
                  unique background check needs.</p></div>
              <br />
          {businesdisplay && (
          <div className='contextdata' onClick={handleClick} >
         <Bussiness />
          </div>
         )}
          {
            display && (<div className='popupcard'>
               <div className='popups' >
        
              <div className='details' >
          <div> <button onClick={handleClick} className='unqbtn'>x</button>
             </div> 
                   <h1>
             {Location?.state?.details?.title}
                  </h1>
                  <div className='detailspara'>  <span>{Location?.state?.details?.Discription} </span></div>
                 
          <hr />
          
      </div>
          <div className='uniquepopup'>
        <h3>Who to verify :</h3>
        <p>{Location?.state?.details?.para}</p>
          <h3>Most opted verifications</h3>
          <ul>
            <li>ID Verification</li>
            <li>Address verification</li>
            <li>Criminal and court record verification</li>
            <li>Prior employment verification</li>
            <li>Highest Education verification (for the white-collar workforce)</li>
            <li>eLockr reference check (for the blue-collar and grey-collar workforce)</li>
            <li>Drug test (5/7/9 panel) (for workforce handling food and other edible inventory)</li>
            </ul>
            </div>
           
   
    </div>

            </div>)
           }

        </section>
     
        </div>
        <section className='down'>
         <br />
        {afterlog ? "":  <button className='start'>
        <Link to={'/signup'}> Get Started</Link>
      </button>}
       
      </section>
      </div>
      
        <Footer />
     </div>
      </>
    
  )
}

export default Home;
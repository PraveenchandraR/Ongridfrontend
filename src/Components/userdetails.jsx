import React, { useEffect, useState } from 'react';
import Header from '../Header/Nav';

// import { useNavigate } from 'react-router-dom';


const Userdetails = () => {
    const [details, setDetails] = useState([]);
   
    const fetchfunc = () => {
  
       
            fetch("http://localhost:8080/userdetails", {
                method: "POST",
                body: JSON.stringify({ token: window.localStorage.getItem("token") }),
        
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
      
            })
                .then(res => res.json())
                .then((e) =>
                    setDetails(e));
      
            //  console.log('this is data', data))
        }  
        console.log(details);
   
    useEffect(
        () => {
            fetchfunc();
        },[]
    )
    const logout=()=>{
        window.localStorage.clear();
        window.location.href = "./"
    }
  
  return (
      <div>
      <Header />
          <span>name: </span><br />
          {/* {details.name} */}
          {/* {details.map((item) => {
              return (
                  <div>
                      {item.name}
                  </div>
              )
          })} */}
          <button onClick={logout} >button</button>

    </div>
  )
}

export default Userdetails;
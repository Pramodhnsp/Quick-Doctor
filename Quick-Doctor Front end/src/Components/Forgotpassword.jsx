import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CssComponents/Forgotpassword.css'
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Forgotpassword =() =>{

  const NavigateToReset=useNavigate();

  const [email, setEmail] = useState();

  
  const Continue=(e)=>{
  e.preventDefault();

  if(email==undefined)
  {
    alert("please enter the Email ID")
  }

  else
  {
    fetch("http://localhost:9091/getByEmail",
    {method:'GET',
    headers : {email:email} } 
    ).then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      console.log("Account verified");
      alert("Please enter OTP")
    })
    .catch(err=>{
      alert("Email Does not Exists ");
    })

  }
    
  }

    return(
      <>
      <Navbar/>

      <div className="wrapper d-flex align-items-center justify-content-center "> 
        <div className="section">
            <h3 className="mb-3">Verify your Account</h3>

              <form className="form needs-validation">
                  <div className="text">
                      <p >Enter the Email address associated with your account</p>
                  </div>
                  <div className="form-Group was-validated">
                     <label htmlFor="email" className="form-label"></label>
                     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" required/>
                  </div>

                  <div className="button">
                    <button onClick={Continue} className="btn btn-primary mt-3"> Continue </button>
                  </div>

                  <div className="verify mt-5">
                    <h4>Enter OTP </h4>
                    <label htmlFor="numer" className="form-label"></label>
                    <input type="text" className="form-control "/>
                    <div className="verify-btn">
                    <button  onClick={()=>NavigateToReset('/Resetpassword')}  className="btn btn-success mt-3">verify</button>
                    </div>
                    
                  </div>
              </form>
        </div>
            
      </div> 
      
      </>   
    )
};

export default Forgotpassword;
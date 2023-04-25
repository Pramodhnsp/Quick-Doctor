import { useState } from "react";
import'../CssComponents/MerchantSignup.css'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const MerchantSignup = () => {
  
    let [ m_name, setm_name] = useState();
    let [ m_ph_no, setm_ph_no] = useState();
    let [ m_email_id, setm_email_id] = useState();
    let [ m_password, setm_password] = useState();

    let NavigateToLogin = useNavigate();


    const handleClick=(e)=>{
      e.preventDefault()
      let item={m_name,m_ph_no,m_email_id,m_password}
      console.log(item)

      if(item.m_name === undefined)
      {
          alert("Please fill the Required details")

      }
      else
      {
          let result =  fetch("http://localhost:7071/MarchantSignUp" , {
          method : "POST",
          headers : {"content-type":'application/json', "Accept":'application/json'},
          body: JSON.stringify(item)

         })
             .then(()=>{
              console.log(item);
              console.log("new Merchant added");
              alert("Signup succesfull")
              NavigateToLogin('/Login')
          })

      result= result.json()
      localStorage.setItem("user-info", JSON.stringify(result))
      }
  }
   


    return ( 
        <>
        <Navbar/>
        <div className="signup-wrap">
        <div className="signup-container">
            <div className="Signup-header">
                <p>SIGN-UP</p>
            </div>
           

          <div className=" Signup-form" >
            <label> Username<input type="text"  value={m_name} onChange={(e)=>{setm_name(e.target.value)}} required /> </label> 
            <label> Contact number<input type="tel"  value={m_ph_no} onChange={(e)=>{setm_ph_no(e.target.value)}}/> </label> 
            <label> Email<input type="text"  value={m_email_id} onChange={(e)=>{setm_email_id(e.target.value)}}/> </label> 
            <label> Password<input type="password"  value={m_password} onChange={(e)=>{setm_password(e.target.value)}}/> </label> 
           
          </div>
          <div>
            <button onClick={handleClick} className="sign-up-button">Submit</button>
          </div>
        </div>   
        </div>
       
        </>
     );
}
 
export default MerchantSignup;
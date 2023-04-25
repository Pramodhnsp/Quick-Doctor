import { useState } from "react";
import'../CssComponents/DoctorSignup.css'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const DoctorSignup = () => {
  
    let [ d_name, setd_name] = useState();
    let [ d_ph_no, setd_ph_no] = useState();
    let [ d_e_mail, setd_e_mail] = useState();
    let [ d_password, setd_password] = useState();
    let [ d_spec, setd_spec] = useState();
    let [ d_age, setd_age] = useState();
    let [ d_licence, setd_licence] = useState();

     let NavigateToLogin = useNavigate();
  


    const handleClick=(e)=>{
      e.preventDefault()
      let item={d_name,d_e_mail,d_password,d_age,d_ph_no,d_licence,d_spec}
      console.log(item)

      if(item.d_name === undefined)
      {
          alert("Please fill the Required details")

      }
      else
      {
          let result =  fetch("http://localhost:7071/DoctorSignUp" , {
          method : "POST",
          headers : {"content-type":'application/json', "Accept":'application/json'},
          body: JSON.stringify(item)

         })
             .then(()=>{
              console.log(item);
              console.log("new Doctor added");
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
            {/* <div className="form-type">
              <fieldset>
                <label htmlFor="user"> <input type="radio" id="user" name="type" onClick={(e)=>{setType("user")}} /> User  </label>
                <label htmlFor="Doctor">  <input type="radio" id="Doctor" name="type" onClick={(e)=>{setType("Doctor")}} /> Doctor </label>
                <label htmlFor="Merchant">  <input type="radio" id="Merchant" name="type" onClick={(e)=>{setType("Merchant")}} /> Merchant </label>
              </fieldset>
            </div> */}

          <div className=" Signup-form" >
            <label> Username<input type="text"  value={d_name} onChange={(e)=>{setd_name(e.target.value)}} required /> </label> 
            <label> Contact number<input type="tel"  value={d_ph_no} onChange={(e)=>{setd_ph_no(e.target.value)}}/> </label> 
            <label> Email<input type="text"  value={d_e_mail} onChange={(e)=>{setd_e_mail(e.target.value)}}/> </label> 
            <label> Password<input type="password"  value={d_password} onChange={(e)=>{setd_password(e.target.value)}}/> </label> 
            <label> Specialization<input type="text"  value={d_spec} onChange={(e)=>{setd_spec(e.target.value)}}/> </label> 
            <label> Age<input type="number"  value={d_age} onChange={(e)=>{setd_age(e.target.value)}}/> </label> 
            <label> License number<input type="text"  value={d_licence} onChange={(e)=>{setd_licence(e.target.value)}}/> </label> 
          </div>
          <div>
            <button onClick={handleClick} className="sign-up-button">Submit</button>
          </div>
        </div>   
        </div>
       
        </>
     );
}
 
export default DoctorSignup;
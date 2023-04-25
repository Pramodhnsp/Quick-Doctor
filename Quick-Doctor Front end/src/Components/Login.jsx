 import React, { useState , useHistory, useEffect } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import '../CssComponents/Login.css'
 import {Link, useNavigate } from "react-router-dom";
 import {connect} from 'react-redux'
import Navbar from "./Navbar";



const Login=({add_user}  )=>{

    const [email_id, setemail_id] = useState();
    const [password, setpassword] = useState();


   const [Usertype, setUsertype] = useState();

    const navigatetoSignup= useNavigate();
    const navigateToDashboard = useNavigate();


    fetch("http://localhost:7071/GetByUserEmail",
    {method:'GET',
    headers : {emailId:email_id} } 
    ).then((res)=>{
      return res.json()
    })
    .then((data)=>{

      setUsertype("user")      
    })
    

    fetch("http://localhost:7071/FindByMarchantEmailId",
    {method:'GET',
    headers : {emailId:email_id} } 
    ).then((res)=>{
      return res.json()
    })
    .then((data)=>{
      
      setUsertype("merchant")
      
    })
   
   
    fetch("http://localhost:7071/FindByDoctorEmailId",
    {method:'GET',
    headers : {emailId:email_id} } 
    ).then((res)=>{
      return res.json()
    })
    .then((data)=>{

      setUsertype("doctor")
      
    })
    


    const  Handlelogin=(e)=>{
        e.preventDefault();

             if(Usertype === "user")
             {
                        fetch("http://localhost:7071/login",
                    {
                    method:'GET',
                    headers : {email_id,password}

                    } ).then((res)=>{
                    return res.json()
                    
                    })
                    .then((data)=>{ 
                    let userdetails = { email: data.u_email_id,
                                        username:data.u_user_name,
                                        id: data. u_id,
                                        password: data.u_password
                                        }            
                    add_user(userdetails)
                    navigateToDashboard('/UserHome')
                    }) 
                    
                    .catch(err=>{
                        alert("Invalid Username or Password");

                    })             
            }

            else if(Usertype === "doctor")
            {
                fetch("http://localhost:7071/DoctorLogin",
                {
                method:'GET',
                headers : {email_id,password}

                } ).then((res)=>{
                return res.json()
                
                })
                .then((data)=>{ 
                    console.log(data);
                let userdetails = { email: data.d_e_mail,
                                    username:data.d_name,
                                    id: data. d_id,
                                    password: data.d_password
                                    }            
                add_user(userdetails)
                alert("Login succesfull")
                navigateToDashboard('/DoctorHome')
                }) 
                
                .catch(err=>{
                    alert("Invalid Username or Password");

                })  
            }

            else
            {
                fetch("http://localhost:7071/marchantLogin",
                {
                method:'GET',
                headers : {email_id,password}

                } ).then((res)=>{
                return res.json()
                
                })
                .then((data)=>{ 
                let userdetails = { email: data.m_email_id,
                                    username:data.m_name,
                                    id: data. m_id,
                                    password: data.m_password
                                    }            
                add_user(userdetails)
                navigateToDashboard('/MerchantHome')
                }) 
                
                .catch(err=>{
                    alert("Invalid Username or Password");

                })
            }

     
              
    }

    return(
        <>
        <Navbar/>

        <div className="wrapper d-flex align-items-center justify-content-center w-100">

        <div className="login ">
           <h2 className="mb-3">LOGIN</h2>

           <form className=" form needs-validation">
            
               <div className="form-Group was-validated ">
                   <label htmlFor="email" className="form-label"> Email Address</label>
                   <input type="email" value={email_id} onChange={(e)=>setemail_id(e.target.value)} className="form-control" required />
                   <div className="invalid-feedback">Please Enter your email</div>
                </div>

                <div className="form-group was-validated mb-2">
                   <label htmlFor="password" className="form-label" >Password</label>
                   <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" required/>
                   <div className="invalid-feedback">Please Enter your password</div>
                </div>
            
                <div className="form-group form-check mb-2">
                    <input type="checkbox" className="form-check-input"/>
                     <label htmlFor="check" className="form-check-label">Remember me</label>
                 </div>
                 

                <button onClick={ Handlelogin} className="btn btn-primary w-100 mt-2">LOG-IN</button>
               
            </form>

            <div className="Forgot-link mt-4 ">
                    <Link to='/Forgotpassword'> Forgot password</Link>
                </div> 

            <div className="Signup mt-2">
                    <p>Don't have an account.?</p>
                    <button onClick={()=>navigatetoSignup('/')} className="btn btn-success  mt-2" >Signup</button>
                </div>
        </div>
        </div>
        </>
    )
};

let mapStateToProps = (state)=>{
    return {...state};
}

let mapdispatchToProps = (dispatch)=>{
    return{
        add_user : (user)=>{ dispatch( {type : "add_user" , payload : user }  )}
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(Login);

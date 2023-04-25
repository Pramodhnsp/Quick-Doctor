import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CssComponents/Resetpassword.css'
import Navbar from "./Navbar";

const Resetpassword = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();
    const navigateToLogin=useNavigate();

    const Handleclick =(e)=>{
    e.preventDefault();
    let item={email, password, confirm}
    
   
    if(item.email == undefined)
    {
        alert("Please Enter the Email Id")
        
    }
    else if(password!==confirm)
    {
        alert("Password missmatch")
    }

    else{
        fetch("http://localhost:9091/resetpassword", {
            method : "GET",
            headers : {email, password, confirm},
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        alert("Password Reset successfull")
        navigateToLogin('/Login')
    }).catch(err=>{
        alert("Please enter valid password")
    })

    }
}

    
    

    return (
        <>
        <Navbar/>
        <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="reset">
            <h1 className="mb-4">Re-set password</h1>
            
            <form className="form needs-validation">
            <label htmlFor="email" className="form-label ">Email ID</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" required />


                <label htmlFor="password" className="form-label">New password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" required />

                <label htmlFor="password" className="form-label mt-2">Confrim password</label> 
                <input type="text" value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="form-control"/>
            </form>
            <div>
                <button className="btn btn-success mt-4" onClick={Handleclick}>Confirm</button>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Resetpassword;
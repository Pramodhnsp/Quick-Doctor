import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssComponents/Signup.css'
import Navbar from './Navbar';


const Signup=()=>{

    const NavigateToLogin =useNavigate();

    const [u_user_name, setu_user_name]=useState();
    const [u_email_id, setu_email_id]=useState();
    const [u_password, setu_password]=useState();
    const [u_age, setu_age]=useState();
    const [u_gender, setu_gender]=useState();
    const [u_ph_no, setu_ph_no]=useState();
    const [street, setstreet]=useState();
    const [area, setarea]=useState();
    const [door_no, setdoor_no]=useState();
    const [city, setcity]=useState();
    const [state, setstate]=useState();
    const [pincode, setpincode]=useState();
    

    const handleClick=(e)=>{
        e.preventDefault()
        let item={u_user_name,u_email_id,u_password,u_age,u_gender,u_ph_no}
        console.log(item)

        if(item.u_user_name == undefined)
        {
            alert("Please fill the Required details")

        }
        else
        {
            let result =  fetch("http://localhost:7071/SignUp" , {
            method : "POST",
            headers : {"content-type":'application/json', "Accept":'application/json'},
            body: JSON.stringify(item)

           })
               .then(()=>{
                console.log("new user added");
                alert("Signup succesfull")
                NavigateToLogin('/Login')
            })

        // result= result.json()
        // localStorage.setItem("user-info", JSON.stringify(result))
        }
    }

   


    return(
        <>
        <Navbar/>
        
     <div className="wrapper d-flex align-items-center justify-content-center w-100 h-100 mt-5 mb-5">


        <div className="container" >
            <h2 className='mb-1' >SIGN-UP</h2>

            <form className='form needs-validation'>
                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">username</label>
                    <input type="text" value={u_user_name} onChange={(e)=>setu_user_name(e.target.value)} className="form-control"required></input>
                    <div className='invalid-feedback'>Please enter username</div>
                </div>

                <div className="form-Group was-validated mb-1 " >
                    <label htmlFor="email" className='form-label'>Email adress</label>
                    <input type="email" value={u_email_id} onChange={(e)=>setu_email_id(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter your email</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" value={u_password} onChange={(e)=>setu_password(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter password</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="number" className="form-label">Phone number</label>
                    <input type="tel" value={u_ph_no} onChange={(e)=>setu_ph_no(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter phone number</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="number" className="form-label">Age</label>
                    <input type="number" value={u_age} onChange={(e)=>setu_age(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter your age</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">Gender</label>
                    <input type="text" value={u_gender} onChange={(e)=>setu_gender(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter your gender</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">Door number</label>
                    <input type="text" value={door_no} onChange={(e)=>setdoor_no(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter door number</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">Street</label>
                    <input type="text" value={street} onChange={(e)=>setstreet(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please street</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">Area</label>
                    <input type="text" value={area} onChange={(e)=>setarea(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter area</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">City</label>
                    <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter city</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">State</label>
                    <input type="text" value={state} onChange={(e)=>setstate(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter state</div>
                </div>

                <div className='form-group was-validated mb-1'>
                    <label htmlFor="text" className="form-label">Pincode</label>
                    <input type="text" value={pincode} onChange={(e)=>setpincode(e.target.value)} className="form-control" required></input>
                    <div className='invalid-feedback'>Please enter pincode</div>
                </div>

                <button  onClick={handleClick} className="btn btn-primary mt-1" >Submit</button>
            </form>
        </div>
    </div>
    </>
    )
}

export default Signup;
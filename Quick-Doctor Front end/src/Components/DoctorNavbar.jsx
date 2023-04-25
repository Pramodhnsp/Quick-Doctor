import React from 'react'
import '../CssComponents/DoctorNavbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';





const DoctorNavbar = () => {  

 let navigate = useNavigate();
  
  let user = useSelector((state)=>{return state.user})

  let dispatch = useDispatch()

  const Logout =()=>{
    
    dispatch(
    {type:"delete_user" , payload:null})

    navigate('/Login')
  }
  
    
    return (
      <div>


        <div className="navbar">
            <div className='logo'>
              <Link to='/DoctorHome' > <p>Quick Doctor</p> </Link> 
            </div>

            <div className='searchbar'>
                <input type="text" placeholder="Search here" />
                <Link id='sea'><FaSearch/> </Link>
            </div>

            <div className='buttons'>
                <Link to="/DoctorAppointments" > <button id='doc' >Appointments</button></Link>
                <Link to='/ProductsToDoctors' > <button id='mer'>New Products</button> </Link> 
            </div>

            <div className='profile'>
                <div>
                  <p> profile</p>
                </div>
                  
                <div className='profile-inner'>
                  <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""  width={50} height={50}/>
                  <p>{user.username}</p>
                  <hr />
                  <Link><p>Edit profile</p> </Link>
                  <hr /> 
                  <button onClick={Logout} id='logout'  >Logout</button>
                </div>
            </div>
        </div> 
      </div>

      );
}
 
export default DoctorNavbar;
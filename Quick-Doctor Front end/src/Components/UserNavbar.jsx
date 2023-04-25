import React from 'react'
import '../CssComponents/UserNavbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


const UserNavbar = () => {  

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
              <Link to='/UserHome' > <p>Quick Doctor</p> </Link> 
            </div>

            <div className='searchbar'>
                <input type="text" placeholder="Search here" />
                <Link id='sea'><FaSearch/> </Link>
            </div>

            <div className='buttons'>
               <Link to="/Doctor" > <button id='doc' >Doctors</button></Link>
                <Link to='/Merchant' > <button id='mer'>Merchants</button> </Link> 
                <Link to='/Appointments'> <button id='notif'>Appintments</button> </Link> 
                <Link to='/UserCart'> <button id='cart'>Cart</button></Link> 
            </div>

            <div className='profile'>
                <div>
                  <p> Profile</p>
                </div>
                  
                <div className='profile-inner'>
                  <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""  width={50} height={50}/>
                  <p>{user.username}</p>
                  <hr />
                  <Link><p>Edit profile</p> </Link>
                  <hr /> 
                  <button id='logout' onClick={Logout} >Logout</button>
                </div>
            </div>
        </div> 
      </div>

      );
}
 
export default UserNavbar;
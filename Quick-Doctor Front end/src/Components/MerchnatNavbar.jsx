
import React from 'react'
import '../CssComponents/MerchantNavbar.css'
import { Link,  useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';






const MerchnatNavbar = () => {  

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
              <Link to='/MerchantHome' > <p>Quick Doctor</p> </Link> 
            </div>

            <div className='searchbar'>
                <input type="text" placeholder="Search here" />
                <Link id='sea'><FaSearch/> </Link>
            </div>

            <div className='buttons'>

                <Link to='/AddProduct' > <button id='mer'>Add Products</button> </Link>
                <Link to='/MerchantOrders' > <button id='mer'>Orders</button> </Link>  

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
 
export default MerchnatNavbar;
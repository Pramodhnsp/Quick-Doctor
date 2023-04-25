import React from 'react'
import '../CssComponents/Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';





const Navbar = () => {  

    return (
      <div>
        <div className="navbar">
            <div className='logo'>
                <Link to='/MerchantHome' ><p>Quick Doctor</p></Link>
            </div>
        </div> 
        
      </div>

      );
}
 
export default Navbar;
import Navbar from "./Navbar";
import'../CssComponents/Home.css'
import { FaWpforms } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <>

        <Navbar/>

        <div className="Home-wrap">

            <div className="hometop-part">  
               <h1>3 Simple steps for safest treatment</h1>
            </div>
            <div className="gap"></div>

            <div className="hometop-header">
                <div>
                    <FaWpforms/>
                    <p>Fill the form or call us </p>
                </div>
                <div>
                    <FaStethoscope/>
                    <p>Will help you choose the right doctor</p>
                </div>
                <div>
                    <FaWpforms/>
                    <p> Consult the doctor online and avail the safest treatment</p>
                </div>
            </div>

            <div className="homegap"></div>

            <div className="Home-Login">
                <Link to='/Login'> <p>Login </p> </Link>
            </div>

            <p id="or">OR</p>

            <p className="Regis-as">REGISTER - AS</p>

            <div className="homemiddle-part">
                <div className="regias">
                    <Link to='/Signup'> <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" width={100} height={100} alt="Image not found" /> </Link>
                    <p>Reigister As User</p>  
                </div>
                <div className="regias">
                    <Link to='/DoctorSignup'> <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" width={100} height={100} alt="Image not found" /> </Link>
                    <p>Reigister As Doctor</p>  
                </div>
                <div className="regias">
                    <Link to='/MerchantSignup'> <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" width={100} height={100} alt="Image not found" /> </Link>
                    <p>Reigister As Merchant</p>  
                </div>

            </div> 

        </div>

        </>
     );
}
 
export default Home;


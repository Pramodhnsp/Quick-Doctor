import '../CssComponents/Footer.css'
import { FaCartArrowDown } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return ( 
    <>
        <div className="footer-wrap">
            <div className='footer-insidewrap'>
                <div className="footer-container">
                    <div>
                        <FaCartArrowDown/> 
                        <p>Order medicine online</p> 
                        <p>+91 99999 88888 </p>  
                    </div>
                   
                    <div>
                        <FaClinicMedical/>
                        <p> Consult Doctors</p>
                        <p>+91 99999 88888 </p>  
                    </div>

                    <div>
                        <FaCartArrowDown/>
                        <p> Buy Equipments</p>
                        <p>+91 99999 88888 </p>  
                    </div>
                </div>

                <div className='download'>
                    <p>Download application now</p>
                </div>


                <div className='handles'>
                     <FaYoutube/>
                     <FaInstagram/>
                     <FaLinkedinIn/>
                     <FaFacebookSquare/>
                     <FaTwitter/>
                </div>

            </div>
        </div>
    </>
     );
}
 
export default Footer;
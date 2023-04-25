import UserNavbar from "./UserNavbar";
import'../CssComponents/Userhome.css'
import { FaWpforms } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";


const UserHome = () => {
    return ( 
        <>

        <UserNavbar/>

        <div className="Homepage-wrap">

            <div className="top-part">  
               <h1>3 Simple steps for safest treatment</h1>
            </div>
            <div className="gap"></div>

            <div className="top-header">
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

            <div className="gap"></div>

            <div className="middle-part">
                <div className="d-details">
                    <p>Safest Treatment for Heart Diseases by Best Cardiologists in India</p>
                    <div className="d-details-2" >
                        <div className="dlist">
                            <li>Atherosclerosis</li>
                            <li>Heart stroke</li>
                            <li>Irregular heartbeats</li>
                            <li>Coronary artery disease</li>
                        </div>
                        <div>
                            <img id="images" src="https://www.apollo247.com/appointment/images/cat-1.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            
                <div className="d-details">
                    <p>Best Nephrologists Near You for Kidney Problem Treatment</p>
                    <div className="d-details-2">
                        <div className="dlist">
                            <li>Atherosclerosis</li>
                            <li>Heart stroke</li>
                            <li>Irregular heartbeats</li>
                            <li>Coronary artery disease</li>
                        </div>
                        <div>
                            <img id="images" src="	https://www.apollo247.com/appointment/images/cat-2.png" alt="" />
                        </div>  
                    </div>
                    
                </div> 

                <div className="d-details">
                    <p>Expert Urologists in India to Treat Your Urologic Diseases</p>
                    <div className="d-details-2">
                        <div className="dlist">
                            <li>Atherosclerosis</li>
                            <li>Heart stroke</li>
                            <li>Irregular heartbeats</li>
                            <li>Coronary artery disease</li>
                        </div>
                        <div>
                            <img id="images" src="https://www.apollo247.com/appointment/images/cat-3.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="d-details">
                    <p> Orthopaedic Doctors Near You in India</p>
                    <div className="d-details-2">
                        <div className="dlist">
                            <li>Atherosclerosis</li>
                            <li>Heart stroke</li>
                            <li>Irregular heartbeats</li>
                            <li>Coronary artery disease</li>
                        </div>
                        <div>
                            <img id="images" src="	https://www.apollo247.com/appointment/images/cat-4.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="d-details">
                    <p>Best Neurologists in India</p>
                    <div className="d-details-2">
                        <div className="dlist">
                            <li>Atherosclerosis</li>
                            <li>Heart stroke</li>
                            <li>Irregular heartbeats</li>
                            <li>Coronary artery disease</li>
                        </div>
                        <div>
                            <img id="images" src="https://www.apollo247.com/appointment/images/cat-5.png" alt="" />
                        </div>
                    </div>
                    
                    
                </div>
            </div> 

        </div>

        </>
     );
}
 
export default UserHome;

